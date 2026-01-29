
import React, { useState, useEffect } from 'react';
import { Faculty } from '../../types';
import { Clock, Plus, Save, X, Calendar as CalendarIcon, CheckCircle, AlertCircle } from 'lucide-react';

interface Props {
    faculty: Faculty;
    attendance: any[];
    leaves: any[];
    onCheckIn: () => void;
    onCheckOut: () => void;
    onApplyLeave: (reason: string) => void;
}

const MyAttendance: React.FC<Props> = ({
    faculty,
    attendance,
    leaves,
    onCheckIn,
    onCheckOut,
    onApplyLeave
}) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [showLeaveModal, setShowLeaveModal] = useState(false);
    const [leaveReason, setLeaveReason] = useState('');

    // Update clock every second
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const todayDate = new Date().toISOString().split('T')[0];
    const todayAttendance = attendance.find(a => a.faculty_id === faculty.faculty_id && a.attendance_date === todayDate);
    const myLeaves = leaves.filter(l => l.faculty_id === faculty.faculty_id);

    return (
        <div className="space-y-8 p-4">
            <header className="mb-8">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                    My <span className="text-indigo-600">Attendance & Leave</span>
                </h1>
                <p className="text-slate-500 font-medium">Manage your daily attendance and leave applications.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* My Attendance Section */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col justify-between">
                    <div className="space-y-6">
                        <h3 className="text-xl font-black text-slate-800 flex items-center gap-3">
                            <Clock className="w-6 h-6 text-indigo-600" />
                            My Attendance
                        </h3>

                        <div className="bg-slate-50 rounded-3xl p-6 text-center space-y-4">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                <p className="text-4xl font-black tabular-nums text-slate-900">{currentTime.toLocaleTimeString()}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-200/50">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Check-In</p>
                                    <p className="text-sm font-black text-emerald-600">{todayAttendance?.check_in_time || '--:--'}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Check-Out</p>
                                    <p className="text-sm font-black text-rose-600">{todayAttendance?.check_out_time || '--:--'}</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={onCheckIn}
                                disabled={!!todayAttendance?.check_in_time}
                                className={`py-4 font-black rounded-2xl transition-all shadow-lg uppercase tracking-widest text-xs ${!!todayAttendance?.check_in_time ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none' : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-100'}`}
                            >
                                {todayAttendance?.check_in_time ? 'Checked-In' : 'Check-In'}
                            </button>
                            <button
                                onClick={onCheckOut}
                                disabled={!todayAttendance?.check_in_time || !!todayAttendance?.check_out_time}
                                className={`py-4 font-black rounded-2xl transition-all shadow-lg uppercase tracking-widest text-xs ${(!todayAttendance?.check_in_time || !!todayAttendance?.check_out_time) ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none' : 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-100'}`}
                            >
                                {todayAttendance?.check_out_time ? 'Checked-Out' : 'Check-Out'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Apply for Leave Section */}
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col">
                    <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                        <h3 className="text-xl font-black text-slate-800 flex items-center gap-3">
                            <CalendarIcon className="w-6 h-6 text-indigo-600" />
                            Apply for Leave
                        </h3>
                        <button
                            onClick={() => setShowLeaveModal(true)}
                            className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="overflow-x-auto flex-1">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Date</th>
                                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Reason</th>
                                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {myLeaves.map((record, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-8 py-5 text-sm font-bold text-slate-800">{record.leave_date}</td>
                                        <td className="px-8 py-5 text-sm font-medium text-slate-500">{record.reason}</td>
                                        <td className="px-8 py-5 text-right">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${record.status === 'approved' ? 'bg-emerald-50 text-emerald-600' : record.status === 'rejected' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'}`}>
                                                {record.status === 'approved' ? <CheckCircle className="w-3 h-3" /> : record.status === 'rejected' ? <X className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                                                {record.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                {myLeaves.length === 0 && (
                                    <tr>
                                        <td colSpan={3} className="px-8 py-10 text-center text-slate-400 font-bold">No leave applications found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Leave Modal */}
            {showLeaveModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-8 animate-in zoom-in duration-200">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Apply for Leave</h3>
                            <button onClick={() => setShowLeaveModal(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                                <X className="w-5 h-5 text-slate-400" />
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Leave Reason</label>
                                <textarea
                                    className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all min-h-[120px] resize-none"
                                    placeholder="Describe your reason for leave..."
                                    value={leaveReason}
                                    onChange={(e) => setLeaveReason(e.target.value)}
                                />
                            </div>

                            <button
                                onClick={() => {
                                    if (leaveReason.trim()) {
                                        onApplyLeave(leaveReason);
                                        setShowLeaveModal(false);
                                        setLeaveReason('');
                                    }
                                }}
                                className="w-full py-4 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                <Save className="w-5 h-5" />
                                Submit Application
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyAttendance;
