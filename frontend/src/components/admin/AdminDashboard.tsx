
import React, { useState } from 'react';
import { Student, Faculty, Subject, TimetableEntry, AttendanceRecord, AttendanceStatus, Department } from '../../types';
import { ICONS } from '../../constants.tsx';
import { calculatePercentage } from '../../services/attendanceService';
import { Download, Upload, AlertCircle, Edit2, Trash2 } from 'lucide-react';
import DataTable from '../common/DataTable';
import SyllabusUpload from './SyllabusUpload';

interface Props {
  students: Student[];
  faculty: Faculty[];
  subjects: Subject[];
  departments: Department[];
  enrollments: { stud_id: number; subject_id: number }[];
  attendance: AttendanceRecord[];
  onRemoveStudent: (id: number) => void;
  onRemoveFaculty: (id: number) => void;
  onRemoveSubject: (id: number) => void;
  onUpdateSubject: (s: Subject) => void;
  onUpdateFaculty: (f: Faculty) => void;
  onUpdateStudent: (s: Student) => void;
  leaves: any[];
  onUpdateLeaveStatus: (leaveId: number, status: 'approved' | 'rejected') => void;
}

const AdminDashboard: React.FC<Props> = ({
  students, faculty, subjects, departments, enrollments, attendance, leaves,
  onRemoveStudent, onRemoveFaculty, onRemoveSubject, onUpdateSubject, onUpdateFaculty, onUpdateStudent, onUpdateLeaveStatus
}) => {
  const [editItem, setEditItem] = useState<{ type: 'course' | 'faculty' | 'student'; data: any } | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{ type: string; id: number; name: string } | null>(null);

  const compDeptId = departments.find(d => d.dept_name.toLowerCase() === 'comp')?.dept_id || 1;

  const renderProgressCircle = (percent: number, size = 32) => {
    const stroke = 2.5;
    const radius = (size - stroke * 2) / 2;
    const circ = 2 * Math.PI * radius;
    const offset = circ - (percent / 100) * circ;
    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="currentColor" strokeWidth={stroke} fill="transparent" className="text-slate-100" />
          <circle
            cx={size / 2} cy={size / 2} r={radius} stroke="currentColor" strokeWidth={stroke} fill="transparent"
            strokeDasharray={circ} strokeDashoffset={offset}
            className={`transition-all duration-1000 ${percent >= 75 ? 'text-emerald-500' : percent >= 50 ? 'text-amber-500' : 'text-rose-500'}`}
          />
        </svg>
        <span className="absolute text-[8px] font-black">{percent}%</span>
      </div>
    );
  };

  const courseColumns = [
    { header: 'Code', key: 'subject_code', sortable: true },
    { header: 'Name', key: 'subject_name', sortable: true },
    {
      header: 'Department',
      key: 'dept_id',
      sortable: true,
      render: (s: Subject) => (
        <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100/50">
          {departments.find(d => d.dept_id === s.dept_id)?.dept_name}
        </span>
      )
    },
    {
      header: 'Semester', key: 'semester', sortable: true,
      render: (s: Subject) => (
        <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100/50">
          {s.semester || 'SEM 1'}
        </span>
      )
    },
    { header: 'Credits', key: 'credits', sortable: true },
    {
      header: 'Actions',
      key: 'actions',
      sortable: false,
      align: 'right' as const,
      render: (s: Subject) => (
        <div className="flex justify-end gap-1">
          <button onClick={() => setEditItem({ type: 'course', data: s })} className="p-1.5 text-indigo-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-indigo-100 shadow-sm">
            <Edit2 className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => setDeleteConfirm({ type: 'course', id: s.subject_id, name: s.subject_name })} className="p-1.5 text-rose-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-rose-100 shadow-sm">
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      )
    }
  ];

  const facultyColumns = [
    { header: 'Name', key: 'faculty_name', sortable: true },
    { header: 'Email Address', key: 'email', sortable: true },
    {
      header: 'Department',
      key: 'dept_id',
      sortable: true,
      render: (f: Faculty) => (
        <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100/50">
          {departments.find(d => d.dept_id === f.dept_id)?.dept_name}
        </span>
      )
    },
    {
      header: 'Course Progress',
      key: 'progress',
      sortable: true,
      align: 'right' as const,
      render: () => renderProgressCircle(Math.floor(Math.random() * 40) + 60) // Mocking progress for now as per original
    },
    {
      header: 'Actions',
      key: 'actions',
      sortable: false,
      align: 'right' as const,
      render: (f: Faculty) => (
        <div className="flex justify-end gap-1">
          <button onClick={() => setEditItem({ type: 'faculty', data: f })} className="p-1.5 text-indigo-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-indigo-100 shadow-sm">
            <Edit2 className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => setDeleteConfirm({ type: 'faculty', id: f.faculty_id, name: f.faculty_name })} className="p-1.5 text-rose-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-rose-100 shadow-sm">
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      )
    }
  ];

  const studentColumns = [
    { header: 'Student Name', key: 'stud_name', sortable: true },
    { header: 'Roll Number', key: 'roll_no', sortable: true },
    { header: 'Academic Email', key: 'email', sortable: true },
    {
      header: 'Dept',
      key: 'dept_id',
      sortable: true,
      render: (s: Student) => (
        <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100/50">
          {departments.find(d => d.dept_id === s.dept_id)?.dept_name}
        </span>
      )
    },
    {
      header: 'Semester',
      key: 'semester',
      sortable: true,
      render: (s: Student) => (
        <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100/50">
          {s.semester || 'SEM 1'}
        </span >
      )
    },
    {
      header: 'Actions',
      key: 'actions',
      sortable: false,
      align: 'right' as const,
      render: (s: Student) => (
        <div className="flex justify-end gap-1">
          <button onClick={() => setEditItem({ type: 'student', data: s })} className="p-1.5 text-indigo-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-indigo-100 shadow-sm">
            <Edit2 className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => setDeleteConfirm({ type: 'student', id: s.stud_id, name: s.stud_name })} className="p-1.5 text-rose-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-rose-100 shadow-sm">
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      )
    }
  ];

  const leaveColumns = [
    {
      header: 'Faculty Name',
      key: 'faculty_name',
      sortable: true,
      render: (l: any) => faculty.find(f => f.faculty_id === l.faculty_id)?.faculty_name || 'Unknown Faculty'
    },
    { header: 'Leave Date', key: 'leave_date', sortable: true },
    { header: 'Reason', key: 'reason', sortable: true },
    {
      header: 'Actions',
      key: 'actions',
      sortable: false,
      align: 'right' as const,
      render: (l: any) => (
        <div className="flex justify-end gap-2">
          <button
            onClick={() => onUpdateLeaveStatus(l.leave_id, 'approved')}
            className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase tracking-widest rounded-lg border border-emerald-100/50 hover:bg-emerald-600 hover:text-white transition-all"
          >
            Approve
          </button>
          <button
            onClick={() => onUpdateLeaveStatus(l.leave_id, 'rejected')}
            className="px-3 py-1 bg-rose-50 text-rose-600 text-[9px] font-black uppercase tracking-widest rounded-lg border border-rose-100/50 hover:bg-rose-600 hover:text-white transition-all"
          >
            Reject
          </button>
        </div>
      )
    }
  ];

  const leavesWithDept = leaves.map(leave => {
    const facultyMember = faculty.find(f => f.faculty_id === leave.faculty_id);
    return {
      ...leave,
      faculty_name: facultyMember?.faculty_name || 'Unknown',
      dept_id: facultyMember?.dept_id
    };
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Drawer for Editing */}
      {editItem && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setEditItem(null)}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl animate-in slide-in-from-right duration-300 p-8">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-black text-indigo-900 tracking-tight">Refine Record</h3>
              <button onClick={() => setEditItem(null)} className="p-3 hover:bg-slate-100 rounded-2xl transition-colors">{ICONS.X}</button>
            </div>

            <form className="space-y-8" onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const formData = new FormData(form);

              if (editItem.type === 'course') {
                onUpdateSubject({
                  ...editItem.data,
                  subject_name: formData.get('subject_name') as string,
                  subject_code: formData.get('subject_code') as string,
                  semester: formData.get('semester') as string,
                  credits: parseInt(formData.get('credits') as string),
                });
              } else if (editItem.type === 'faculty') {
                onUpdateFaculty({
                  ...editItem.data,
                  faculty_name: formData.get('faculty_name') as string,
                  email: formData.get('email') as string
                });
              } else if (editItem.type === 'student') {
                onUpdateStudent({
                  ...editItem.data,
                  stud_name: formData.get('stud_name') as string,
                  roll_no: formData.get('roll_no') as string,
                  email: formData.get('email') as string
                });
              }
              setEditItem(null);
            }}>
              <div className="space-y-6">
                {editItem.type === 'course' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject Name</label>
                      <input name="subject_name" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all" defaultValue={editItem.data.subject_name} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Code</label>
                      <input name="subject_code" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all" defaultValue={editItem.data.subject_code} required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Semester</label>
                        <select name="semester" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all" defaultValue={editItem.data.semester}>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(s => <option key={s} value={`sem${s}`}>Sem {s}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Credits</label>
                        <select name="credits" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all" defaultValue={editItem.data.credits}>
                          {[1, 2, 3, 4, 5].map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                  </>
                )}
                {editItem.type === 'faculty' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input name="faculty_name" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all" defaultValue={editItem.data.faculty_name} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                      <input name="email" type="email" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all" defaultValue={editItem.data.email} required />
                    </div>
                  </>
                )}
                {editItem.type === 'student' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Student Name</label>
                      <input name="stud_name" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all" defaultValue={editItem.data.stud_name} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Roll No</label>
                      <input name="roll_no" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all" defaultValue={editItem.data.roll_no} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                      <input name="email" type="email" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all" defaultValue={editItem.data.email} required />
                    </div>
                  </>
                )}
              </div>
              <button type="submit" className="w-full py-5 bg-indigo-600 text-white font-black rounded-[2rem] shadow-2xl shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all">PERSIST CHANGES</button>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setDeleteConfirm(null)}></div>
          <div className="relative bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-sm w-full animate-in zoom-in duration-200 text-center">
            <div className="w-20 h-20 bg-rose-50 text-rose-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner shadow-rose-100/50">
              <Trash2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Are you sure?</h3>
            <p className="text-slate-500 text-sm mb-10 leading-relaxed font-medium">You are about to delete <strong>{deleteConfirm.name}</strong>. Permanent data loss will occur.</p>
            <div className="flex flex-col gap-3">
              <button onClick={() => {
                if (deleteConfirm.type === 'course') onRemoveSubject(deleteConfirm.id);
                if (deleteConfirm.type === 'faculty') onRemoveFaculty(deleteConfirm.id);
                if (deleteConfirm.type === 'student') onRemoveStudent(deleteConfirm.id);
                setDeleteConfirm(null);
              }} className="w-full py-4 bg-rose-600 text-white font-black rounded-2xl shadow-xl shadow-rose-100 hover:bg-rose-700 active:scale-95 transition-all">CONFIRM DELETE</button>
              <button onClick={() => setDeleteConfirm(null)} className="w-full py-4 bg-slate-50 text-slate-400 font-black rounded-2xl hover:text-slate-600 transition-colors">CANCEL</button>
            </div>
          </div>
        </div>
      )}

      <SyllabusUpload departments={departments} />

      <DataTable
        title="Course Catalog"
        data={subjects}
        columns={courseColumns as any}
        onImport={() => { }}
        onExport={() => { }}
        searchPlaceholder="Search courses..."
        departments={departments}
        initialDeptId={compDeptId}
      />

      <DataTable
        title="Faculty Directory"
        data={faculty}
        columns={facultyColumns as any}
        onImport={() => { }}
        onExport={() => { }}
        searchPlaceholder="Search faculty..."
        departments={departments}
        initialDeptId={compDeptId}
      />

      <DataTable
        title="Student Directory"
        data={students}
        columns={studentColumns as any}
        onImport={() => { }}
        onExport={() => { }}
        searchPlaceholder="Search students..."
        departments={departments}
        initialDeptId={compDeptId}
      />

      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="px-6 py-4 flex justify-between items-center border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shadow-sm border border-amber-100/50">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 tracking-tight">Faculty Leave Verification</h3>
              <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">{leaves.filter(l => l.status === 'pending').length} pending requests</p>
            </div>
          </div>
        </div>

        <DataTable
          title=""
          data={leavesWithDept.filter(l => l.status === 'pending')}
          columns={leaveColumns as any}
          searchPlaceholder="Search leave requests..."
          departments={departments}
          initialDeptId={compDeptId}
        />
      </section>
    </div>
  );
};

export default AdminDashboard;
