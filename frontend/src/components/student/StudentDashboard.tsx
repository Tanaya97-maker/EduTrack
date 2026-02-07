
import React, { useState, useMemo } from 'react';
import { Student, Subject, AttendanceRecord, AttendanceStatus, TimetableEntry } from '../../types';
import { calculatePercentage } from '../../services/attendanceService';
import { ICONS, DAYS_OF_WEEK } from '../../constants';
import { ChevronLeft, ChevronRight, ArrowLeft, AlertCircle, CheckCircle2, Calendar, BookOpen, Clock, Plus, Info } from 'lucide-react';
import StudentAttendance from './StudentAttendance';

interface Props {
  student: Student;
  subjects: Subject[];
  enrollments: { stud_id: number; subject_id: number }[];
  attendance: AttendanceRecord[];
  timetable: TimetableEntry[];
  announcements?: any[];
}

const StudentDashboard: React.FC<Props> = ({ student, subjects, enrollments, attendance, timetable, announcements }) => {
  const [showAttendance, setShowAttendance] = useState(false);
  const studentEnrollments = enrollments.filter(e => Number(e.stud_id) === Number(student.stud_id));
  const enrolledSubjects = subjects.filter(s => studentEnrollments.some(e => Number(e.subject_id) === Number(s.subject_id)));

  const overallPercentage = useMemo(() => {
    if (enrolledSubjects.length === 0) return 0;
    const total = enrolledSubjects.reduce((acc, sub) => acc + calculatePercentage(attendance, student.stud_id, sub.subject_id), 0);
    return Math.round(total / enrolledSubjects.length);
  }, [enrolledSubjects, attendance, student.stud_id]);

  const filteredAnnouncements = useMemo(() => {
    if (!announcements) return [];
    return (announcements || []).filter(a => {
      if (a.target_type === 'faculty') return false;
      // If student target, check semester, subject, and department
      const isCorrectSem = !a.semester || a.semester === student.semester;
      const isCorrectSub = !a.subject_id || enrolledSubjects.some(s => Number(s.subject_id) === Number(a.subject_id));
      const isCorrectDept = !a.dept_id || a.dept_id === student.dept_id;
      return isCorrectSem && isCorrectSub && isCorrectDept;
    });
  }, [announcements, student.semester, enrolledSubjects]);

  const renderCircularProgress = (percent: number) => {
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg className="w-20 h-20 transform -rotate-90">
          <circle cx="40" cy="40" r={radius} stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-100" />
          <circle
            cx="40" cy="40" r={radius} stroke="currentColor" strokeWidth="6" fill="transparent"
            strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
            className={`transition-all duration-1000 ${percent >= 75 ? 'text-indigo-600' : 'text-rose-500'}`}
          />
        </svg>
        <span className="absolute text-sm font-black text-slate-800">{percent}%</span>
      </div>
    );
  };

  return (
    <div className="space-y-8 p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Welcome back, <span className="text-indigo-600">{student.stud_name}</span>
        </h1>
        <p className="text-slate-500 font-medium">Your academic overview for {student.semester?.toUpperCase() || 'SEM 1'}.</p>
      </header>

      {/* Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Attendance View */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-6 right-8">
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 ${overallPercentage >= 75 ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-600 border-rose-100'}`}>
              {overallPercentage >= 75 ? 'In Good Standing' : 'Below Threshold'}
            </span>
          </div>

          <div className="flex items-center gap-8 mb-6">
            <div className="flex-shrink-0">
              {renderCircularProgress(overallPercentage)}
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Overall Attendance</h3>
              <p className="text-2xl font-black text-slate-800">{overallPercentage}%</p>
            </div>
          </div>

          <button
            onClick={() => setShowAttendance(true)}
            className="w-full py-4 bg-slate-900 hover:bg-black text-white font-black rounded-2xl transition-all duration-300 uppercase tracking-widest text-xs shadow-lg shadow-slate-200"
          >
            View Attendance
          </button>
        </div>
      </div>

      <StudentAttendance
        isOpen={showAttendance}
        onClose={() => setShowAttendance(false)}
        student={student}
        subjects={subjects}
        enrollments={enrollments}
        attendance={attendance}
      />

      {/* Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Announcements */}
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-800 flex items-center gap-3">
              <Plus className="w-5 h-5 text-indigo-600 rotate-45" />
              Announcements
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Message</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredAnnouncements.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-400 italic line-clamp-1">{item.message}</p>
                    </td>
                    <td className="px-6 py-4 text-xs font-bold text-slate-400 text-right whitespace-nowrap">{item.date}</td>
                  </tr>
                ))}
                {filteredAnnouncements.length === 0 && (
                  <tr>
                    <td colSpan={2} className="px-6 py-10 text-center text-slate-300 font-bold">No new announcements.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-800 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              My Notes
            </h3>
            <button className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Note</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Section</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { text: 'Prepare for Math Quiz', section: 'Unit 2' },
                  { text: 'Complete Physics Assignment', section: 'Lab' },
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-slate-800">{item.text}</td>
                    <td className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">{item.section}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
                        {ICONS.Delete}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
