
import React from 'react';
import { Faculty, Subject, Student, AttendanceRecord, TimetableEntry, Department, FacultySubject } from '../../types';
import { PieChart, Clock, Calendar as CalendarIcon } from 'lucide-react';
import AttendanceSummary from './AttendanceSummary';
import AnnouncementSection from './AnnouncementSection';
import FacultyNotes from './FacultyNotes';
import DataTable from '../common/DataTable';
import TimetableUpload from './TimetableUpload';

interface Props {
  faculty: Faculty;
  subjects: Subject[];
  students: Student[];
  enrollments: { stud_id: number; subject_id: number }[];
  attendance: AttendanceRecord[];
  timetable: TimetableEntry[];
  onAttendanceUpdate: () => void;
  facultyAttendance?: any[];
  facultyStats?: any;
  announcements?: any[];
  notes?: any[];
  leaves?: any[];
  onAddNote?: (n: any) => Promise<void>;
  onEditNote?: (n: any) => Promise<void>;
  onDeleteNote?: (id: number) => Promise<void>;
  onAddAnnouncement?: (a: any) => Promise<void>;
  onDeleteAnnouncement?: (id: number) => Promise<void>;
  onCheckIn?: (time: string) => Promise<void>;
  onCheckOut?: (time: string) => Promise<void>;
  onApplyLeave?: (reason: string) => void;
  departments: Department[];
  facultySubjects: FacultySubject[];
  uploadedSchedules?: any[];
}

const FacultyDashboard: React.FC<Props> = ({
  faculty,
  subjects,
  students,
  enrollments,
  attendance,
  timetable,
  onAttendanceUpdate,
  facultyAttendance,
  facultyStats,
  announcements,
  notes,
  leaves,
  onAddNote,
  onEditNote,
  onDeleteNote,
  onAddAnnouncement,
  onDeleteAnnouncement,
  onCheckIn,
  onCheckOut,
  onApplyLeave,
  departments,
  facultySubjects
}) => {
  const demoFacultyAttendance = facultyAttendance || [];
  const demoLeaves = leaves || [];

  const formatLocalTime = (time: string | Date | null) => {
    if (!time) return '--:--';
    if (typeof time === 'string') {
      const match = time.match(/(\d{2}:\d{2})/);
      return match ? match[0] : '--:--';
    }
    return time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  };

  const calculateWorkingHours = (checkIn?: string | Date, checkOut?: string | Date) => {
    if (!checkIn || !checkOut) return null;
    try {
      const timeInStr = formatLocalTime(checkIn);
      const timeOutStr = formatLocalTime(checkOut);
      const [inH, inM] = timeInStr.split(':').map(Number);
      const [outH, outM] = timeOutStr.split(':').map(Number);
      const diffMinutes = (outH * 60 + outM) - (inH * 60 + inM);
      if (diffMinutes < 0) return null;
      const hours = Math.floor(diffMinutes / 60);
      const mins = diffMinutes % 60;
      return `${hours}h ${mins}m`;
    } catch { return null; }
  };

  const attendanceLogColumns = [
    {
      header: 'Date',
      key: 'attendance_date',
      sortable: true,
      render: (a: any) => new Date(a.attendance_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    },
    {
      header: 'Status',
      key: 'status',
      sortable: true,
      render: (a: any) => (
        <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${a.status === 'present' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-600 border-rose-100'
          }`}>
          {a.status}
        </span>
      )
    },
    {
      header: 'Check In',
      key: 'check_in_time',
      sortable: true,
      render: (a: any) => <span className="text-slate-600 font-bold">{formatLocalTime(a.check_in_time)}</span>
    },
    {
      header: 'Check Out',
      key: 'check_out_time',
      sortable: true,
      render: (a: any) => <span className="text-slate-600 font-bold">{formatLocalTime(a.check_out_time)}</span>
    },
    {
      header: 'Work Period',
      key: 'duration',
      align: 'right' as const,
      render: (a: any) => {
        const h = calculateWorkingHours(a.check_in_time, a.check_out_time);
        return h ? <span className="text-indigo-600 font-black text-xs">{h}</span> : <span className="text-slate-300 italic text-[10px]">--:--</span>;
      }
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      <header>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Faculty <span className="text-indigo-600">Dashboard</span>
            </h1>
            <p className="text-slate-500 font-medium">Academic progress and staff presence.</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Welcome back</p>
            <p className="text-lg font-bold text-slate-800">Prof. {faculty.faculty_name}</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AttendanceSummary
          faculty={faculty}
          attendance={demoFacultyAttendance}
          leaves={demoLeaves}
        />

        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center gap-8 mb-6 h-full">
            <div className="flex-shrink-0 w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
              <PieChart className="w-12 h-12" />
            </div>
            <div className="space-y-4 flex-1">
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Academic Overview</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Hours</p>
                  <p className="text-2xl font-black text-slate-800">60h</p>
                </div>
                <div className="p-4 bg-indigo-50 rounded-2xl">
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">Hours Taken</p>
                  <p className="text-2xl font-black text-indigo-600">45h</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <span>Portion Completed</span>
                  <span className="text-emerald-500">{facultyStats?.attendancePercentage || 75}%</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: `${facultyStats?.attendancePercentage || 75}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DataTable
        title="My Attendance Log"
        data={demoFacultyAttendance}
        columns={attendanceLogColumns as any}
        onExport={() => { }}
        searchPlaceholder="Filter dates..."
      />

      {faculty.is_timetable_admin && (
        <TimetableUpload
          faculty={faculty}
          departments={departments}
          onUploadSuccess={onAttendanceUpdate}
        />
      )}

      <AnnouncementSection
        faculty={faculty}
        subjects={subjects}
        announcements={announcements || []}
        onPostAnnouncement={onAddAnnouncement || (async () => { })}
        onDeleteAnnouncement={onDeleteAnnouncement || (async () => { })}
        departments={departments}
        facultySubjects={facultySubjects}
      />

      <FacultyNotes
        faculty={faculty}
        notes={notes || []}
        onAddNote={onAddNote || (async () => { })}
        onEditNote={onEditNote || (async () => { })}
        onDeleteNote={onDeleteNote || (async () => { })}
      />
    </div>
  );
};

export default FacultyDashboard;
