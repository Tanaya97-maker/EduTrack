
import React, { useState, useEffect, useMemo } from 'react';
import { Faculty, Subject, Student, AttendanceRecord, AttendanceStatus, TimetableEntry } from '../types';
import { ICONS } from '../constants';
import { markAttendance } from '../services/attendanceService';
import { ChevronLeft, ChevronRight, Save, X, Edit2, Check, UserMinus, Clock, Download } from 'lucide-react';

interface Props {
  faculty: Faculty;
  subjects: Subject[];
  students: Student[];
  enrollments: { stud_id: number; subject_id: number }[];
  attendance: AttendanceRecord[];
  timetable: TimetableEntry[];
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
  const facultySubjects = useMemo(() => subjects.filter(s => Number(s.faculty_id) === Number(faculty.faculty_id)), [subjects, faculty.faculty_id]);

  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(facultySubjects[0] || null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showStudentList, setShowStudentList] = useState(false);
  const [markingDate, setMarkingDate] = useState<string | null>(null);
  const [tempAttendance, setTempAttendance] = useState<Record<number, AttendanceStatus>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'synced' | 'pending' | 'syncing'>('synced');
  const [quickMarkRollNos, setQuickMarkRollNos] = useState('');

  // Load offline data if any and handle sync
  useEffect(() => {
    const checkOffline = () => {
      const offlineData = localStorage.getItem('pending_attendance');
      if (offlineData) {
        setSyncStatus('pending');
      }
    };

    const handleOnline = async () => {
      const offlineData = localStorage.getItem('pending_attendance');
      if (offlineData) {
        setSyncStatus('syncing');
        const pending = JSON.parse(offlineData);
        // Attempt to sync each batch
        for (const batch of pending) {
          const studIds = Object.keys(batch.data).map(Number);
          for (const studId of studIds) {
            await markAttendance(
              studId,
              batch.subject_id,
              faculty.faculty_id,
              batch.date,
              batch.data[studId]
            );
          }
        }
        localStorage.removeItem('pending_attendance');
        setSyncStatus('synced');
        onAttendanceUpdate();
      }
    };

    window.addEventListener('online', handleOnline);
    checkOffline();

    return () => window.removeEventListener('online', handleOnline);
  }, [faculty.faculty_id, onAttendanceUpdate]);

  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const daysInMonth = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();

    // Adjust for Mon-Sun grid (Sunday is 0 in JS)
    const padding = firstDay === 0 ? 6 : firstDay - 1;

    const result = [];
    for (let i = 0; i < padding; i++) {
      result.push(null);
    }
    for (let i = 1; i <= days; i++) {
      result.push(new Date(year, month, i));
    }
    return result;
  }, [currentDate]);

  const getDayState = (date: Date) => {
    if (!selectedSubject) return 'pending';

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    // Holiday check (Sunday)
    if (date.getDay() === 0) return 'holiday';

    // Check if attendance exists
    const hasAttendance = attendance.some(
      r => Number(r.subject_id) === Number(selectedSubject.subject_id) &&
        r.attendance_date.substring(0, 10) === dateStr
    );

    return hasAttendance ? 'completed' : 'pending';
  };

  const handleDateClick = (date: Date) => {
    if (date.getDay() === 0) return; // Prevent marking on holidays
    if (!selectedSubject) return;

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    setMarkingDate(dateStr);

    // Initialize temp attendance
    const enrolledStudents = students.filter(student =>
      enrollments.some(e => e.stud_id === student.stud_id && e.subject_id === selectedSubject.subject_id)
    );

    const initialTemp: Record<number, AttendanceStatus> = {};
    const existingAttendance = attendance.filter(
      r => Number(r.subject_id) === Number(selectedSubject.subject_id) &&
        r.attendance_date.substring(0, 10) === dateStr
    );

    enrolledStudents.forEach(s => {
      const existing = existingAttendance.find(r => r.stud_id === s.stud_id);
      initialTemp[s.stud_id] = existing ? existing.status : AttendanceStatus.PRESENT;
    });

    setTempAttendance(initialTemp);
    setShowStudentList(true);
  };

  const toggleStudentAttendance = (studId: number) => {
    setTempAttendance(prev => ({
      ...prev,
      [studId]: prev[studId] === AttendanceStatus.PRESENT ? AttendanceStatus.ABSENT : AttendanceStatus.PRESENT
    }));
  };

  const saveAttendance = async () => {
    if (!selectedSubject || !markingDate) return;

    setIsSaving(true);
    const studIds = Object.keys(tempAttendance).map(Number);
    let successCount = 0;

    // Handle offline scenario (simplified for this demo)
    if (!navigator.onLine) {
      const pending = JSON.parse(localStorage.getItem('pending_attendance') || '[]');
      pending.push({
        subject_id: selectedSubject.subject_id,
        date: markingDate,
        data: tempAttendance
      });
      localStorage.setItem('pending_attendance', JSON.stringify(pending));
      setSyncStatus('pending');
      alert("Offline: Attendance cached locally.");
      setShowStudentList(false);
      setIsSaving(false);
      return;
    }

    try {
      for (const studId of studIds) {
        const success = await markAttendance(
          studId,
          selectedSubject.subject_id,
          faculty.faculty_id,
          markingDate,
          tempAttendance[studId]
        );
        if (success) successCount++;
      }

      if (successCount === studIds.length) {
        onAttendanceUpdate();
        setShowStudentList(false);
      } else {
        alert("Some records failed to sync. Try again.");
      }
    } catch (error) {
      console.error("Save failed:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleQuickMark = () => {
    if (!quickMarkRollNos.trim()) return;
    const rollNos = quickMarkRollNos.split(',').map(r => r.trim());
    const newAttendance = { ...tempAttendance };

    enrolledInSelected.forEach(student => {
      if (rollNos.includes(student.roll_no)) {
        newAttendance[student.stud_id] = AttendanceStatus.ABSENT;
      }
    });
    setTempAttendance(newAttendance);
    setQuickMarkRollNos('');
  };

  const exportToExcel = () => {
    if (!selectedSubject || !markingDate) return;

    const headers = ['Student Name', 'Roll Number', 'Status'];
    const rows = enrolledInSelected.map(student => [
      student.stud_name,
      student.roll_no,
      tempAttendance[student.stud_id] || AttendanceStatus.PRESENT
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Attendance_${selectedSubject.subject_code}_${markingDate}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const enrolledInSelected = useMemo(() => {
    if (!selectedSubject) return [];
    return students.filter(student =>
      enrollments.some(e => e.stud_id === student.stud_id && e.subject_id === selectedSubject.subject_id)
    );
  }, [selectedSubject, students, enrollments]);

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-8 space-y-8">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome back, Prof. <span className="text-indigo-600">{faculty.faculty_name}</span>
          </h1>
          <p className="text-slate-500 font-medium">Manage your class attendance and schedule.</p>
        </div>

        {/* Subject Toggle */}
        <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200">
          {facultySubjects.map(subject => (
            <button
              key={subject.subject_id}
              onClick={() => setSelectedSubject(subject)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${selectedSubject?.subject_id === subject.subject_id
                ? 'bg-black text-white shadow-lg shadow-black-200'
                : 'text-slate-500 hover:text-black '
                }`}
            >
              {subject.subject_code}
            </button>
          ))}
        </div>
      </header>

      {/* Calendar Section */}
      <section className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="p-2 bg-black border-b  flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold text-slate-100">
              {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h2>
            {syncStatus === 'pending' && (
              <span className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-100">
                <Clock className="w-3 h-3" /> Offline Data Pending
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={handlePrevMonth} className="p-2.5 hover:bg-white hover:shadow-md rounded-xl transition-all border border-transparent hover:border-slate-100">
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button onClick={handleNextMonth} className="p-2.5 hover:bg-white hover:shadow-md rounded-xl transition-all border border-transparent hover:border-slate-100">
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        <div className="p-4">
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
              const isToday = new Date().toDateString() === date.toDateString();

              return (
                <button
                  key={date.toISOString()}
                  onClick={() => handleDateClick(date)}
                  className={`
                    group relative h-14 w-full rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-300
                    ${state === 'completed' ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-100' : ''}
                    ${state === 'pending' ? 'bg-white border-slate-200 text-slate-700 hover:border-indigo-400 hover:shadow-md' : ''}
                    ${state === 'holiday' ? 'bg-slate-100 border-slate-100 text-slate-400 cursor-not-allowed' : ''}
                    ${isToday ? 'border-indigo-600 !border-2' : ''}
                    ${markingDate === date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0') ? 'ring-2 ring-indigo-400 ring-offset-2' : ''}
                  `}
                >
                  <span className={`text-lg font-bold ${isToday && state === 'pending' ? 'text-indigo-600' : ''}`}>
                    {date.getDate()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Mark Feature */}
      {markingDate && (
        <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 animate-in slide-in-from-bottom-2 duration-300">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Edit2 className="w-5 h-5 text-indigo-500" />
            Quick Mark Absentees for {markingDate}
          </h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter roll numbers separated by comma (e.g. R001, R005)"
              value={quickMarkRollNos}
              onChange={(e) => setQuickMarkRollNos(e.target.value)}
              className="flex-1 px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
            <button
              onClick={handleQuickMark}
              className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg shadow-slate-200"
            >
              Quick Mark
            </button>
          </div>
          <p className="mt-2 text-xs text-slate-400 font-medium italic">
            Tip: Enter roll numbers of students who are absent and click Quick Mark to update the table below.
          </p>
        </section>
      )}

      {/* Attendance Table Section */}
      {showStudentList && selectedSubject && (
        <section className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-500">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Mark Attendance</h3>
              <p className="text-sm font-medium text-slate-500">
                {selectedSubject.subject_name} • {markingDate}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={exportToExcel}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-bold border border-emerald-100 hover:bg-emerald-100 transition-all"
              >
                <Download className="w-4 h-4" />
                Export to Excel
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">Name</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">Roll No.</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {enrolledInSelected.length > 0 ? (
                  enrolledInSelected.map(student => (
                    <tr key={student.stud_id} className="hover:bg-slate-50/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-slate-800">{student.stud_name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-slate-500">{student.roll_no}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => toggleStudentAttendance(student.stud_id)}
                          className={`
                            inline-flex items-center gap-2 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all border-2
                            ${tempAttendance[student.stud_id] === AttendanceStatus.PRESENT
                              ? 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100'
                              : 'bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-100'
                            }
                          `}
                        >
                          {tempAttendance[student.stud_id] === AttendanceStatus.PRESENT ? (
                            <><Check className="w-3 h-3" /> Present</>
                          ) : (
                            <><X className="w-3 h-3" /> Absent</>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="text-center py-12">
                      <UserMinus className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                      <p className="text-slate-400 font-medium">No students enrolled in this subject.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
            <button
              onClick={saveAttendance}
              disabled={isSaving || enrolledInSelected.length === 0}
              className="flex items-center gap-2 px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 disabled:opacity-50 disabled:shadow-none transition-all scale-100 hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSaving ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Save className="w-5 h-5" />
              )}
              Save Attendance
            </button>
          </div>
        </section>
      )}

      {/* Legacy Schedule view can be added back if needed, but requirements focus on Attendance Marking */}
    </div>
  );
};

export default FacultyDashboard;

