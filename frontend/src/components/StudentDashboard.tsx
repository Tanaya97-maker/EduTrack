
import React, { useState } from 'react';
import { Student, Subject, AttendanceRecord, AttendanceStatus, TimetableEntry } from '../types';
import { calculatePercentage } from '../services/attendanceService';
import { ICONS, DAYS_OF_WEEK } from '../constants';

interface Props {
  student: Student;
  subjects: Subject[];
  enrollments: { stud_id: number; subject_id: number }[];
  attendance: AttendanceRecord[];
  timetable: TimetableEntry[];
}

const StudentDashboard: React.FC<Props> = ({ student, subjects, enrollments, attendance, timetable }) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<number | null>(null);

  const studentEnrollments = enrollments.filter(e => Number(e.stud_id) === Number(student.stud_id));
  const enrolledSubjects = subjects.filter(s => studentEnrollments.some(e => Number(e.subject_id) === Number(s.subject_id)));

  const selectedSubjectAttendance = attendance.filter(
    r => Number(r.stud_id) === Number(student.stud_id) && Number(r.subject_id) === Number(selectedSubjectId)
  );

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Student Dashboard</h1>
          <p className="text-slate-500">Welcome, {student.stud_name} (Roll: {student.roll_no})</p>
        </div>
      </header>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledSubjects.map(subject => {
          const percentage = calculatePercentage(attendance, student.stud_id, subject.subject_id);
          const isSelected = selectedSubjectId === subject.subject_id;

          return (
            <div
              key={subject.subject_id}
              onClick={() => setSelectedSubjectId(subject.subject_id)}
              className={`p-6 rounded-2xl bg-white shadow-sm border-2 transition-all cursor-pointer ${isSelected ? 'border-indigo-600 scale-[1.02]' : 'border-transparent hover:border-slate-200'
                }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 leading-tight">{subject.subject_name}</h3>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{subject.subject_code}</span>
                </div>
                <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg ${percentage >= 75 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                  }`}>
                  {percentage}%
                </div>
              </div>

              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-1000 ${percentage >= 75 ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                  <span>Attendance</span>
                  <span>{percentage >= 75 ? 'Good Standing' : 'Below 75%'}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Selected Subject History */}
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            {ICONS.Calendar}
            Recent History
          </h3>

          {selectedSubjectId ? (
            <div className="space-y-4">
              {selectedSubjectAttendance.length > 0 ? (
                selectedSubjectAttendance.sort((a, b) => b.attendance_date.localeCompare(a.attendance_date)).slice(0, 5).map(record => (
                  <div key={record.attendance_id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <div>
                      <div className="text-sm font-semibold text-slate-700">{new Date(record.attendance_date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                      <div className="text-[10px] uppercase text-slate-400">Regular Class</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${record.status === AttendanceStatus.PRESENT ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                      }`}>
                      {record.status.toUpperCase()}
                    </span>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-slate-400 text-sm italic">
                  No attendance records found for this subject.
                </div>
              )}
            </div>
          ) : (
            <div className="py-12 text-center text-slate-400 text-sm italic">
              Select a subject above to view attendance history.
            </div>
          )}
        </div>

        {/* Timetable Grid */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center gap-2">
            {ICONS.Clock}
            <h3 className="font-bold text-slate-800">Weekly Schedule</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="p-4 border-r border-slate-100 w-24"></th>
                  {DAYS_OF_WEEK.map(day => (
                    <th key={day} className="p-4 text-xs font-bold text-slate-400 uppercase border-r border-slate-100">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'].map(time => (
                  <tr key={time} className="border-t border-slate-100">
                    <td className="p-4 text-xs font-bold text-slate-500 border-r border-slate-100">{time}</td>
                    {[1, 2, 3, 4, 5, 6].map(day => {
                      const entry = timetable.find(t => Number(t.day_of_week) === day && t.start_time === time);
                      const subject = subjects.find(s => Number(s.subject_id) === Number(entry?.subject_id));
                      const isEnrolled = enrolledSubjects.some(s => Number(s.subject_id) === Number(entry?.subject_id));

                      return (
                        <td key={day} className={`p-2 border-r border-slate-100 min-w-[120px] h-20 ${entry ? 'bg-indigo-50/30' : ''}`}>
                          {entry && (
                            <div className={`p-2 rounded-lg h-full border ${isEnrolled ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm' : 'bg-slate-100 text-slate-500 border-slate-200 opacity-50'}`}>
                              <div className="text-[10px] font-black uppercase opacity-80">{subject?.subject_code}</div>
                              <div className="text-xs font-bold leading-tight line-clamp-2">{subject?.subject_name}</div>
                              <div className="text-[9px] mt-1 opacity-70">Hall {entry.room_no}</div>
                            </div>
                          )}
                        </td>
                      );
                    })}
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
