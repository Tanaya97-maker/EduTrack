
import React, { useState } from 'react';
import { Faculty, Subject, Student, AttendanceRecord, AttendanceStatus, TimetableEntry } from '../types';
import { ICONS, DAYS_OF_WEEK } from '../constants';
import { markAttendance } from '../services/attendanceService';

interface Props {
  faculty: Faculty;
  subjects: Subject[];
  students: Student[];
  enrollments: { stud_id: number; subject_id: number }[];
  attendance: AttendanceRecord[];
  timetable: TimetableEntry[];
  // Fix: changed onAttendanceUpdate signature to match fetchData which is passed in App.tsx
  onAttendanceUpdate: () => void;
}

const FacultyDashboard: React.FC<Props> = ({ 
  faculty, 
  subjects, 
  students, 
  enrollments, 
  attendance, 
  timetable,
  onAttendanceUpdate 
}) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [isMarking, setIsMarking] = useState(false);
  const [view, setView] = useState<'attendance' | 'schedule'>('attendance');

  const facultySubjects = subjects.filter(s => s.faculty_id === faculty.faculty_id);
  const facultySlots = timetable.filter(slot => facultySubjects.some(s => s.subject_id === slot.subject_id));

  const enrolledInSelected = selectedSubject 
    ? students.filter(student => enrollments.some(e => e.stud_id === student.stud_id && e.subject_id === selectedSubject.subject_id))
    : [];

  const handleToggleAttendance = async (studId: number, currentStatus: AttendanceStatus | undefined) => {
    if (!selectedSubject) return;
    
    setIsMarking(true);
    const newStatus = currentStatus === AttendanceStatus.PRESENT ? AttendanceStatus.ABSENT : AttendanceStatus.PRESENT;
    
    try {
      // Fix: markAttendance takes 5 arguments, removed 'attendance' which was passed as the first arg.
      const success = await markAttendance(
        studId,
        selectedSubject.subject_id,
        faculty.faculty_id,
        selectedDate,
        newStatus
      );
      // Fix: updatedRecords was a boolean, now calling onAttendanceUpdate() which is fetchData in App.tsx
      if (success) {
        onAttendanceUpdate();
      }
    } catch (error) {
      console.error("Failed to mark attendance", error);
    } finally {
      setIsMarking(false);
    }
  };

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Faculty Dashboard</h1>
          <p className="text-slate-500">Welcome back, {faculty.faculty_name}</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-200">
          <button 
            onClick={() => setView('attendance')} 
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${view === 'attendance' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Attendance
          </button>
          <button 
            onClick={() => setView('schedule')} 
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${view === 'schedule' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-600'}`}
          >
            My Schedule
          </button>
        </div>
      </header>

      {view === 'attendance' ? (
        <>
          {/* Subject Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultySubjects.map(subject => (
              <div 
                key={subject.subject_id}
                onClick={() => setSelectedSubject(subject)}
                className={`cursor-pointer p-6 rounded-xl border-2 transition-all ${
                  selectedSubject?.subject_id === subject.subject_id 
                    ? 'border-indigo-600 bg-indigo-50 shadow-md' 
                    : 'border-white bg-white hover:border-indigo-200 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center space-x-3 mb-4 text-indigo-600">
                  {ICONS.BookOpen}
                  <span className="font-bold text-lg uppercase tracking-wider">{subject.subject_code}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{subject.subject_name}</h3>
                <div className="flex items-center text-slate-500 text-sm">
                  <span className="bg-slate-100 px-2 py-1 rounded">Sem {subject.semester}</span>
                  <span className="mx-2">•</span>
                  <span>{subject.credits} Credits</span>
                </div>
              </div>
            ))}
          </div>

          {/* Attendance Marking UI */}
          {selectedSubject && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
              <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-800">Mark Attendance</h2>
                  <p className="text-sm text-slate-500">{selectedSubject.subject_name} ({selectedSubject.subject_code})</p>
                </div>
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-slate-600">Date:</label>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Roll No</th>
                      <th className="px-6 py-4 text-sm">Student Name</th>
                      <th className="px-6 py-4 text-center">Status</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {enrolledInSelected.map(student => {
                      const record = attendance.find(
                        r => r.stud_id === student.stud_id && 
                        r.subject_id === selectedSubject.subject_id && 
                        r.attendance_date === selectedDate
                      );
                      
                      return (
                        <tr key={student.stud_id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-slate-700">{student.roll_no}</td>
                          <td className="px-6 py-4 text-sm text-slate-600">{student.stud_name}</td>
                          <td className="px-6 py-4 text-center">
                            {record ? (
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                record.status === AttendanceStatus.PRESENT 
                                  ? 'bg-emerald-100 text-emerald-800' 
                                  : 'bg-rose-100 text-rose-800'
                              }`}>
                                {record.status.toUpperCase()}
                              </span>
                            ) : (
                              <span className="text-slate-400 text-xs italic">Not Marked</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              disabled={isMarking}
                              onClick={() => handleToggleAttendance(student.stud_id, record?.status)}
                              className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm ${
                                record?.status === AttendanceStatus.PRESENT
                                  ? 'bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100'
                                  : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-200'
                              }`}
                            >
                              {record?.status === AttendanceStatus.PRESENT ? 'Set Absent' : 'Set Present'}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            {ICONS.Clock} Personal Lecture Schedule
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DAYS_OF_WEEK.map((day, idx) => {
              const daySlots = facultySlots.filter(s => s.day_of_week === idx + 1);
              return (
                <div key={day} className="space-y-4">
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 border-b pb-2">{day}</div>
                  {daySlots.length > 0 ? (
                    daySlots.sort((a,b) => a.start_time.localeCompare(b.start_time)).map(slot => {
                      const subject = subjects.find(s => s.subject_id === slot.subject_id);
                      return (
                        <div key={slot.timetable_id} className="p-4 bg-slate-50 border border-slate-100 rounded-xl relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                          <div className="text-[10px] font-bold text-indigo-600 uppercase mb-1">{subject?.subject_code}</div>
                          <div className="text-sm font-bold text-slate-800">{subject?.subject_name}</div>
                          <div className="flex items-center justify-between mt-3 text-xs text-slate-500">
                            <span className="flex items-center gap-1">{ICONS.Clock} {slot.start_time} - {slot.end_time}</span>
                            <span className="font-bold">Room {slot.room_no}</span>
                          </div>
                        </div>
                      )
                    })
                  ) : (
                    <div className="py-4 text-xs italic text-slate-300">No lectures scheduled.</div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyDashboard;
