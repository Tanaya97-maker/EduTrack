import React from 'react';
import { Student, Subject, AttendanceRecord, AttendanceStatus } from '../../types';
import { X, CheckCircle2, XCircle, Info, Calendar } from 'lucide-react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    student: Student;
    subjects: Subject[];
    enrollments: { stud_id: number; subject_id: number }[];
    attendance: AttendanceRecord[];
}

const StudentAttendance: React.FC<Props> = ({ isOpen, onClose, student, subjects, enrollments, attendance }) => {
    if (!isOpen) return null;

    const studentEnrollments = enrollments.filter(e => Number(e.stud_id) === Number(student.stud_id));
    const enrolledSubjects = subjects.filter(s => studentEnrollments.some(e => Number(e.subject_id) === Number(s.subject_id)));

    const subjectStats = enrolledSubjects.map(sub => {
        const relevantAttendance = attendance.filter(r =>
            Number(r.stud_id) === Number(student.stud_id) &&
            Number(r.subject_id) === Number(sub.subject_id)
        );

        const present = relevantAttendance.filter(r => r.status === AttendanceStatus.PRESENT).length;
        const absent = relevantAttendance.filter(r => r.status === AttendanceStatus.ABSENT).length;
        const total = relevantAttendance.length;
        const percentage = total > 0 ? Math.round((present / total) * 100) : 0;

        return {
            ...sub,
            present,
            absent,
            total,
            percentage
        };
    });

    const grandTotals = subjectStats.reduce((acc, curr) => ({
        present: acc.present + curr.present,
        absent: acc.absent + curr.absent,
        total: acc.total + curr.total
    }), { present: 0, absent: 0, total: 0 });

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose}></div>

            <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in duration-300">
                {/* Header */}
                <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
                    <div>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                            <Calendar className="w-6 h-6 text-indigo-600" />
                            Detailed <span className="text-indigo-600">Attendance Report</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-sm mt-1">Breakdown of your academic presence by subject.</p>
                    </div>
                    <button onClick={onClose} className="p-3 hover:bg-slate-100 rounded-2xl transition-all">
                        <X className="w-6 h-6 text-slate-400" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-100">
                            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Total Present</p>
                            <p className="text-3xl font-black text-emerald-700">{grandTotals.present} Days</p>
                        </div>
                        <div className="bg-rose-50 rounded-3xl p-6 border border-rose-100">
                            <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-1">Total Absent</p>
                            <p className="text-3xl font-black text-rose-700">{grandTotals.absent} Days</p>
                        </div>
                        <div className="bg-indigo-50 rounded-3xl p-6 border border-indigo-100">
                            <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1">Total Records</p>
                            <p className="text-3xl font-black text-indigo-700">{grandTotals.total} Days</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Subject Module</th>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Present</th>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Absent</th>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Total</th>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Percentage</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {subjectStats.map((stat, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-slate-800">{stat.subject_name}</div>
                                            <div className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{stat.subject_code}</div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black border border-emerald-100/50">
                                                <CheckCircle2 className="w-3 h-3" /> {stat.present}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-[10px] font-black border border-rose-100/50">
                                                <XCircle className="w-3 h-3" /> {stat.absent}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center font-bold text-slate-600">{stat.total}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-3">
                                                <div className="h-1.5 w-16 bg-slate-100 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full transition-all duration-1000 ${stat.percentage >= 75 ? 'bg-indigo-600' : 'bg-rose-500'}`}
                                                        style={{ width: `${stat.percentage}%` }}
                                                    />
                                                </div>
                                                <span className={`text-xs font-black tabular-nums ${stat.percentage >= 75 ? 'text-indigo-600' : 'text-rose-600'}`}>
                                                    {stat.percentage}%
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {subjectStats.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center">
                                            <Info className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                                            <p className="font-bold text-slate-300 uppercase tracking-widest">No enrollment records found.</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-8 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">EduTrack Academic Reporting System &copy; 2026</p>
                    <button
                        onClick={onClose}
                        className="px-8 py-3 bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-black transition-all shadow-lg shadow-slate-200"
                    >
                        Close Report
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentAttendance;
