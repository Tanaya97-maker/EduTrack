
import React from 'react';
import { Subject, Student, AttendanceRecord } from '../types';
import { calculatePercentage } from '../services/attendanceService';
import { ICONS } from '../constants';

interface Props {
  students: Student[];
  subjects: Subject[];
  attendance: AttendanceRecord[];
  enrollments: { stud_id: number; subject_id: number }[];
}

const Reports: React.FC<Props> = ({ students, subjects, attendance, enrollments }) => {
  return (
    <div className="space-y-12">
      <div className="bg-indigo-600 rounded-[2.5rem] p-12 text-white shadow-2xl shadow-indigo-100 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="z-10">
          <h2 className="text-4xl font-black mb-4">Academic Insights</h2>
          <p className="text-indigo-100 max-w-md font-medium">Real-time performance analytics for students and faculty across all semesters.</p>
        </div>
        <div className="z-10 grid grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl text-center min-w-[140px]">
            <div className="text-3xl font-black">78%</div>
            <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Avg Attendance</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl text-center min-w-[140px]">
            <div className="text-3xl font-black">12</div>
            <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Active Modules</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="text-xl font-black text-slate-800 mb-8 flex items-center gap-3">
            {ICONS.CheckCircle} Student Performance Overview
          </h3>
          <div className="space-y-4">
            {students.map(s => {
              const studentEnrolls = enrollments.filter(e => e.stud_id === s.stud_id);
              const totalAtt = studentEnrolls.length ? Math.round(studentEnrolls.reduce((acc, curr) => acc + calculatePercentage(attendance, s.stud_id, curr.subject_id), 0) / studentEnrolls.length) : 0;
              
              return (
                <div key={s.stud_id} className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between border border-transparent hover:border-indigo-100 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-bold text-indigo-600 border border-slate-100">{s.stud_name.charAt(0)}</div>
                    <div>
                      <div className="text-sm font-bold text-slate-800">{s.stud_name}</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase">{s.roll_no}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-1.5 w-24 bg-slate-200 rounded-full overflow-hidden hidden sm:block">
                      <div className={`h-full ${totalAtt >= 75 ? 'bg-emerald-500' : 'bg-rose-500'}`} style={{ width: `${totalAtt}%` }}></div>
                    </div>
                    <span className={`text-xs font-black min-w-[30px] ${totalAtt >= 75 ? 'text-emerald-600' : 'text-rose-600'}`}>{totalAtt}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="text-xl font-black text-slate-800 mb-8 flex items-center gap-3">
            {ICONS.BookOpen} Course Completion Progress
          </h3>
          <div className="space-y-6">
            {subjects.map(sub => {
              const progress = Math.floor(Math.random() * 40) + 60; // Mock real-time progress
              return (
                <div key={sub.subject_id} className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                      {sub.subject_name}
                    </span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5">
                    <div className="h-full bg-indigo-500 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reports;
