
import React from 'react';
import { Faculty, Subject, Student, AttendanceRecord, TimetableEntry } from '../types';
import { PieChart } from 'lucide-react';
import AttendanceSummary from './faculty/AttendanceSummary';
import AnnouncementSection from './faculty/AnnouncementSection';
import FacultyNotes from './faculty/FacultyNotes';


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
  onCheckIn?: () => void;
  onCheckOut?: () => void;
  onApplyLeave?: (reason: string) => void;
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
  onApplyLeave
}) => {
  const demoFacultyAttendance = facultyAttendance || [];
  const demoLeaves = leaves || [];

  return (
    <div className="space-y-8 p-4">
      <header className="mb-8 ">
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

      {/* Stats and Attendance Row - Grid 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Overall Faculty Attendance Summary */}
        <AttendanceSummary
          faculty={faculty}
          attendance={demoFacultyAttendance}
          leaves={demoLeaves}
        />

        {/* Academic Stats */}
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

      {/* Announcements Section */}
      <AnnouncementSection
        faculty={faculty}
        subjects={subjects}
        announcements={announcements || []}
        onPostAnnouncement={onAddAnnouncement || (async () => { })}
        onDeleteAnnouncement={onDeleteAnnouncement || (async () => { })}
      />

      {/* Notes Section - Remove outer div */}
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
