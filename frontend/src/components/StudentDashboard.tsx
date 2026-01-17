import React, { useState, useMemo } from 'react';
import { Student, Subject, AttendanceRecord, AttendanceStatus, TimetableEntry } from '../types';
import { calculatePercentage } from '../services/attendanceService';
import { ICONS, DAYS_OF_WEEK } from '../constants';
import { ChevronLeft, ChevronRight, ArrowLeft, AlertCircle, CheckCircle2 } from 'lucide-react';

interface Props {
  student: Student;
  subjects: Subject[];
  enrollments: { stud_id: number; subject_id: number }[];
  attendance: AttendanceRecord[];
  timetable: TimetableEntry[];
}

const StudentDashboard: React.FC<Props> = ({ student, subjects, enrollments, attendance, timetable }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('grid');
  const [selectedSubId, setSelectedSubId] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const studentEnrollments = enrollments.filter(e => Number(e.stud_id) === Number(student.stud_id));
  const enrolledSubjects = subjects.filter(s => studentEnrollments.some(e => Number(e.subject_id) === Number(s.subject_id)));

  const overallPercentage = useMemo(() => {
    if (enrolledSubjects.length === 0) return 0;
    const total = enrolledSubjects.reduce((acc, sub) => acc + calculatePercentage(attendance, student.stud_id, sub.subject_id), 0);
    return Math.round(total / enrolledSubjects.length);
  }, [enrolledSubjects, attendance, student.stud_id]);

  const selectedSubject = enrolledSubjects.find(s => s.subject_id === selectedSubId);
  const selectedSubjectAttendance = attendance.filter(
    r => Number(r.stud_id) === Number(student.stud_id) && Number(r.subject_id) === Number(selectedSubId)
  );

  const stats = useMemo(() => {
    if (!selectedSubId) return { total: 0, present: 0, absent: 0 };
    const filtered = attendance.filter(r => Number(r.stud_id) === Number(student.stud_id) && Number(r.subject_id) === Number(selectedSubId));
    return {
      total: filtered.length,
      present: filtered.filter(r => r.status === AttendanceStatus.PRESENT).length,
      absent: filtered.filter(r => r.status === AttendanceStatus.ABSENT).length,
    };
  }, [attendance, student.stud_id, selectedSubId]);

  const daysInMonth = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();
    const padding = firstDay === 0 ? 6 : firstDay - 1;

    const result = [];
    for (let i = 0; i < padding; i++) result.push(null);
    for (let i = 1; i <= days; i++) result.push(new Date(year, month, i));
    return result;
  }, [currentDate]);

  const getDayState = (date: Date) => {
    if (!selectedSubId) return 'none';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    if (date.getDay() === 0) return 'holiday';

    const record = selectedSubjectAttendance.find(r => r.attendance_date.substring(0, 10) === dateStr);
    if (!record) return 'none';
    return record.status;
  };

  const renderCircularProgress = (percent: number) => {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg className="w-40 h-40 transform -rotate-90">
          <circle cx="80" cy="80" r={radius} stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
          <circle
            cx="80" cy="80" r={radius} stroke="currentColor" strokeWidth="12" fill="transparent"
            strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
            className={`transition-all duration-1000 ${percent >= 75 ? 'text-indigo-600' : 'text-rose-500'}`}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-3xl font-black text-slate-900">{percent}%</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Attendance</span>
        </div>
      </div>
    );
  };

  if (viewMode === 'detail' && selectedSubject) {
    return (
      <div className="space-y-8 animate-in fade-in duration-500">
        <button
          onClick={() => setViewMode('grid')}
          className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </button>

        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black text-slate-900">{selectedSubject.subject_name}</h1>
            <p className="text-slate-500 font-medium">Detailed attendance breakdown for {selectedSubject.subject_code}</p>
          </div>
          <div className="flex bg-white p-4 rounded-2xl shadow-sm border border-slate-100 gap-8">
            <div className="text-center">
              <div className="text-2xl font-black text-slate-900">{stats.total}</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Classes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-emerald-600">{stats.present}</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Present</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-rose-500">{stats.absent}</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Absent</div>
            </div>
          </div>
        </header>

        <section className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8 bg-slate-900 text-white flex items-center justify-between">
            <h2 className="text-xl font-bold">
              {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="flex gap-2">
              <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))} className="p-2 hover:bg-white/10 rounded-xl transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))} className="p-2 hover:bg-white/10 rounded-xl transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-7 mb-6">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                <div key={day} className={`text-center text-xs font-black uppercase tracking-widest ${idx === 6 ? 'text-rose-400' : 'text-slate-400'}`}>
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-3">
              {daysInMonth.map((date, idx) => {
                if (!date) return <div key={`empty-${idx}`} />;
                const state = getDayState(date);
                return (
                  <div
                    key={date.toISOString()}
                    className={`
                      h-16 w-full rounded-2xl flex items-center justify-center text-lg font-bold transition-all
                      ${state === AttendanceStatus.PRESENT ? 'bg-emerald-100 text-emerald-700' : ''}
                      ${state === AttendanceStatus.ABSENT ? 'bg-rose-100 text-rose-700' : ''}
                      ${state === 'holiday' ? 'bg-slate-100 text-slate-400' : ''}
                      ${state === 'none' ? 'bg-white border-2 border-slate-50 text-slate-300' : ''}
                    `}
                  >
                    {date.getDate()}
                  </div>
                );
              })}
            </div>
            <div className="mt-8 flex gap-6 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Present</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Absent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Holiday</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Redesigned Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Welcome, <span className="text-indigo-600">{student.stud_name}</span>
          </h1>
          <div className="mt-2 flex items-center gap-4 text-slate-500 font-bold">
            <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-xs uppercase tracking-widest">{student.roll_no}</span>
            <span className="text-sm border-l-2 border-slate-200 pl-4">{student.semester?.toUpperCase() || 'SEM 1'}</span>
          </div>
        </div>
      </header>

      {/* Top Overall Card */}
      <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
        {renderCircularProgress(overallPercentage)}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl font-black text-slate-900 leading-tight">Overall Attendance: <span className={overallPercentage >= 75 ? 'text-indigo-600' : 'text-rose-500'}>{overallPercentage}%</span></h2>
          <p className="text-slate-500 font-medium max-w-md">Your cumulative attendance across all enrolled subjects this semester. {overallPercentage < 75 ? 'You are currently below the 75% threshold.' : 'Keep it up! You are in good standing.'}</p>
        </div>
      </div>

      {/* Subject Cards (2x2 Grid) */}
      <section className="space-y-6">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Course Enrollments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pr-1">
          {enrolledSubjects.map(subject => {
            const percentage = calculatePercentage(attendance, student.stud_id, subject.subject_id);
            const isWarning = percentage < 75;

            return (
              <div
                key={subject.subject_id}
                className="group bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100/50 hover:border-indigo-100 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{subject.subject_code}</span>
                    <h4 className="text-xl font-black text-slate-800 leading-tight">{subject.subject_name}</h4>
                  </div>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-black text-sm border-2 ${isWarning ? 'bg-rose-50 text-rose-600 border-rose-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'}`}>
                    {percentage}%
                    {isWarning ? <AlertCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-1000 ${isWarning ? 'bg-rose-500' : 'bg-indigo-600'}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <button
                    onClick={() => {
                      setSelectedSubId(subject.subject_id);
                      setViewMode('detail');
                    }}
                    className="w-full py-4 bg-slate-50 hover:bg-black text-slate-900 hover:text-white font-black rounded-2xl transition-all duration-300 uppercase tracking-widest text-xs border border-transparent hover:shadow-lg"
                  >
                    Click to View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
