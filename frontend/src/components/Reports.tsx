
import React from 'react';
import { Subject, Student, AttendanceRecord } from '../types';
import { calculatePercentage } from '../services/attendanceService';
import { ICONS } from '../constants';
import DataTable from './common/DataTable';

interface Props {
  students: Student[];
  subjects: Subject[];
  attendance: AttendanceRecord[];
  enrollments: { stud_id: number; subject_id: number }[];
  stats: { total_users: number; total_courses: number };
}

const Reports: React.FC<Props> = ({ students, subjects, attendance, enrollments, stats }) => {

  const studentReportData = students.map(s => {
    const studentEnrolls = enrollments.filter(e => Number(e.stud_id) === Number(s.stud_id));
    const totalAtt = studentEnrolls.length ? Math.round(studentEnrolls.reduce((acc, curr) => acc + calculatePercentage(attendance, s.stud_id, curr.subject_id), 0) / studentEnrolls.length) : 0;
    return {
      ...s,
      avg_attendance: totalAtt,
    };
  });

  const subjectReportData = subjects.map(sub => {
    const sessionsConducted = attendance.filter(a => Number(a.subject_id) === Number(sub.subject_id)).length;
    const targetSessions = (sub.credits || 3) * 5;
    const progress = Math.min(100, Math.round((sessionsConducted / targetSessions) * 100)) || 0;
    return {
      ...sub,
      sessions_conducted: sessionsConducted,
      course_progress: progress,
    };
  });

  const studentColumns = [
    {
      header: 'Student',
      key: 'stud_name',
      sortable: true,
      render: (s: any) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center font-bold text-indigo-600 border border-indigo-100/50 text-xs">{s.stud_name.charAt(0)}</div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-800">{s.stud_name}</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{s.roll_no}</span>
          </div>
        </div>
      )
    },
    {
      header: 'Semester',
      key: 'semester',
      sortable: true,
      render: (s: any) => (
        <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100/50">
          {s.semester || 'SEM 1'}
        </span>
      )
    },
    {
      header: 'Avg. Attendance',
      key: 'avg_attendance',
      sortable: true,
      align: 'right' as const,
      render: (s: any) => (
        <div className="flex items-center gap-3 justify-end">
          <div className="h-1 w-16 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
            <div className={`h-full ${s.avg_attendance >= 75 ? 'bg-emerald-500' : 'bg-rose-500'}`} style={{ width: `${s.avg_attendance}%` }}></div>
          </div>
          <span className={`text-xs font-black tabular-nums ${s.avg_attendance >= 75 ? 'text-emerald-600' : 'text-rose-600'}`}>{s.avg_attendance}%</span>
        </div>
      )
    }
  ];

  const subjectColumns = [
    {
      header: 'Course Module',
      key: 'subject_name',
      sortable: true,
      render: (sub: any) => (
        <div className="flex flex-col">
          <span className="font-bold text-slate-800">{sub.subject_name}</span>
          <span className="text-[10px] text-indigo-500 font-black uppercase tracking-widest">{sub.subject_code}</span>
        </div>
      )
    },
    {
      header: 'Sessions',
      key: 'sessions_conducted',
      sortable: true,
      align: 'center' as const,
      render: (sub: any) => (
        <span className="text-xs font-bold text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-100/50">{sub.sessions_conducted} sessions</span>
      )
    },
    {
      header: 'Content Progress',
      key: 'course_progress',
      sortable: true,
      align: 'right' as const,
      render: (sub: any) => (
        <div className="flex items-center gap-3 justify-end">
          <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 bg-indigo-500 rounded-full transition-all duration-1000" style={{ width: `${sub.course_progress}%` }}></div>
          </div>
          <span className="text-xs font-black text-indigo-600 tabular-nums w-8 text-right">{sub.course_progress}%</span>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="bg-indigo-600 rounded-[2.5rem] p-12 text-white shadow-2xl shadow-indigo-100 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="z-10 text-center md:text-left">
          <h2 className="text-4xl font-black mb-4 tracking-tight">Academic Insights</h2>
          <p className="text-indigo-100 max-w-md font-medium">Real-time performance analytics for students and faculty across all semesters.</p>
        </div>
        <div className="z-10 grid grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl text-center min-w-[140px] border border-white/10">
            <div className="text-3xl font-black">{stats.total_users}</div>
            <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Total Users</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl text-center min-w-[140px] border border-white/10">
            <div className="text-3xl font-black">{stats.total_courses}</div>
            <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Active Modules</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <DataTable
          title="Student Performance"
          data={studentReportData}
          columns={studentColumns as any}
          onExport={() => { }}
          searchPlaceholder="Search students..."
        />
        <DataTable
          title="Course Completion"
          data={subjectReportData}
          columns={subjectColumns as any}
          onExport={() => { }}
          searchPlaceholder="Search courses..."
        />
      </div>
    </div>
  );
};

export default Reports;
