
import React, { useState } from 'react';
import { Student, Faculty, Subject, TimetableEntry, AttendanceRecord, AttendanceStatus } from '../types';
import { ICONS } from '../constants';
import { calculatePercentage } from '../services/attendanceService';

interface Props {
  students: Student[];
  faculty: Faculty[];
  subjects: Subject[];
  enrollments: { stud_id: number; subject_id: number }[];
  attendance: AttendanceRecord[];
  onRemoveStudent: (id: number) => void;
  onRemoveFaculty: (id: number) => void;
  onRemoveSubject: (id: number) => void;
  onUpdateSubject: (s: Subject) => void;
  onUpdateFaculty: (f: Faculty) => void;
  onUpdateStudent: (s: Student) => void;
}

type ViewMode = 'table' | 'chart';

const AdminDashboard: React.FC<Props> = ({ 
  students, faculty, subjects, enrollments, attendance,
  onRemoveStudent, onRemoveFaculty, onRemoveSubject, onUpdateSubject, onUpdateFaculty, onUpdateStudent
}) => {
  const [viewModes, setViewModes] = useState<Record<string, ViewMode>>({
    courses: 'table',
    faculty: 'table',
    students: 'table'
  });

  const [editItem, setEditItem] = useState<{ type: 'course' | 'faculty' | 'student'; data: any } | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{ type: string; id: number; name: string } | null>(null);

  const toggleViewMode = (key: string) => {
    setViewModes(prev => ({ ...prev, [key]: prev[key] === 'table' ? 'chart' : 'table' }));
  };

  const renderProgressCircle = (percent: number, size = 40) => {
    const stroke = 3;
    const radius = (size - stroke * 2) / 2;
    const circ = 2 * Math.PI * radius;
    const offset = circ - (percent / 100) * circ;
    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle cx={size/2} cy={size/2} r={radius} stroke="currentColor" strokeWidth={stroke} fill="transparent" className="text-slate-100" />
          <circle 
            cx={size/2} cy={size/2} r={radius} stroke="currentColor" strokeWidth={stroke} fill="transparent" 
            strokeDasharray={circ} strokeDashoffset={offset} 
            className={`transition-all duration-1000 ${percent >= 75 ? 'text-emerald-500' : percent >= 50 ? 'text-amber-500' : 'text-rose-500'}`}
          />
        </svg>
        <span className="absolute text-[9px] font-black">{percent}%</span>
      </div>
    );
  };

  return (
    <div className="space-y-12">
      {/* Drawer for Editing */}
      {editItem && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setEditItem(null)}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl animate-in slide-in-from-right duration-300 p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-black text-slate-800">Edit {editItem.type.charAt(0).toUpperCase() + editItem.type.slice(1)}</h3>
              <button onClick={() => setEditItem(null)} className="p-2 hover:bg-slate-100 rounded-lg">✕</button>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setEditItem(null); }}>
              {editItem.type === 'course' && (
                <>
                  <input className="w-full p-3 border rounded-xl" defaultValue={editItem.data.subject_name} placeholder="Subject Name" />
                  <input className="w-full p-3 border rounded-xl" defaultValue={editItem.data.subject_code} placeholder="Code" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="number" className="w-full p-3 border rounded-xl" defaultValue={editItem.data.semester} placeholder="Sem" />
                    <input type="number" className="w-full p-3 border rounded-xl" defaultValue={editItem.data.credits} placeholder="Credits" />
                  </div>
                </>
              )}
              {/* Similar inputs for Faculty/Student... */}
              <button type="submit" className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-100">Update Record</button>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setDeleteConfirm(null)}></div>
          <div className="relative bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full animate-in zoom-in duration-200 text-center">
            <div className="w-20 h-20 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
              {ICONS.Delete}
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Are you sure?</h3>
            <p className="text-slate-500 text-sm mb-8">You are about to delete <strong>{deleteConfirm.name}</strong>. This action cannot be undone.</p>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => setDeleteConfirm(null)} className="py-3 bg-slate-100 text-slate-600 font-bold rounded-xl">Cancel</button>
              <button onClick={() => { 
                if(deleteConfirm.type === 'course') onRemoveSubject(deleteConfirm.id);
                if(deleteConfirm.type === 'faculty') onRemoveFaculty(deleteConfirm.id);
                if(deleteConfirm.type === 'student') onRemoveStudent(deleteConfirm.id);
                setDeleteConfirm(null); 
              }} className="py-3 bg-rose-500 text-white font-bold rounded-xl shadow-lg shadow-rose-100">Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Section: Courses */}
      <section className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 flex justify-between items-center border-b border-slate-50">
          <div>
            <h3 className="text-xl font-black text-slate-800">Course Catalog</h3>
            <p className="text-sm text-slate-400 font-medium">Managing {subjects.length} active subjects</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => toggleViewMode('courses')} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
              {viewModes.courses === 'table' ? ICONS.Chart : ICONS.Table}
            </button>
          </div>
        </div>
        
        <div className="p-4">
          {viewModes.courses === 'table' ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Code</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Faculty</th>
                    <th className="px-6 py-4">Sem</th>
                    <th className="px-6 py-4">Credits</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {subjects.map(s => (
                    <tr key={s.subject_id} className="hover:bg-slate-50/50 group transition-colors">
                      <td className="px-6 py-4 text-xs font-bold text-slate-400">{s.subject_id}</td>
                      <td className="px-6 py-4 text-xs font-black text-indigo-600">{s.subject_code}</td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-700">{s.subject_name}</td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                        {faculty.find(f => f.faculty_id === s.faculty_id)?.faculty_name || 'Unassigned'}
                      </td>
                      <td className="px-6 py-4 text-sm font-black text-slate-700">{s.semester}</td>
                      <td className="px-6 py-4 text-sm font-black text-slate-700">{s.credits}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => setEditItem({ type: 'course', data: s })} className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">{ICONS.Edit}</button>
                          <button onClick={() => setDeleteConfirm({ type: 'course', id: s.subject_id, name: s.subject_name })} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg">{ICONS.Delete}</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400 text-sm font-medium">Chart view for Courses: Enrollment distribution visualization</div>
          )}
        </div>
      </section>

      {/* Section: Faculty */}
      <section className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 flex justify-between items-center border-b border-slate-50">
          <div>
            <h3 className="text-xl font-black text-slate-800">Faculty Roster</h3>
            <p className="text-sm text-slate-400 font-medium">{faculty.length} registered lecturers</p>
          </div>
          <button onClick={() => toggleViewMode('faculty')} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
            {viewModes.faculty === 'table' ? ICONS.Chart : ICONS.Table}
          </button>
        </div>
        
        <div className="p-4">
          {viewModes.faculty === 'table' ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Teaching</th>
                    <th className="px-6 py-4">Attendance</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {faculty.map(f => {
                    const teaching = subjects.filter(s => s.faculty_id === f.faculty_id);
                    return (
                      <tr key={f.faculty_id} className="hover:bg-slate-50/50 group transition-colors">
                        <td className="px-6 py-4 text-xs font-bold text-slate-400">{f.faculty_id}</td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-bold text-slate-700">{f.faculty_name}</div>
                          <div className="text-[10px] font-bold text-indigo-500 uppercase">Faculty Head</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">{f.email}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {teaching.map(t => <span key={t.subject_id} className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-full">{t.subject_code}</span>)}
                            {teaching.length === 0 && <span className="text-[10px] text-slate-300 italic">None</span>}
                          </div>
                        </td>
                        <td className="px-6 py-4">{renderProgressCircle(98)}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => setEditItem({ type: 'faculty', data: f })} className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">{ICONS.Edit}</button>
                            <button onClick={() => setDeleteConfirm({ type: 'faculty', id: f.faculty_id, name: f.faculty_name })} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg">{ICONS.Delete}</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400 text-sm font-medium">Chart view for Faculty: Departmental workload distribution</div>
          )}
        </div>
      </section>

      {/* Section: Students */}
      <section className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 flex justify-between items-center border-b border-slate-50">
          <div>
            <h3 className="text-xl font-black text-slate-800">Student Directory</h3>
            <p className="text-sm text-slate-400 font-medium">{students.length} active enrollments</p>
          </div>
          <button onClick={() => toggleViewMode('students')} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
            {viewModes.students === 'table' ? ICONS.Chart : ICONS.Table}
          </button>
        </div>
        
        <div className="p-4">
          {viewModes.students === 'table' ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Name & Roll</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Courses</th>
                    <th className="px-6 py-4">Attendance</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {students.map(s => {
                    const studentEnrolled = enrollments.filter(e => e.stud_id === s.stud_id);
                    const avgAttendance = studentEnrolled.length 
                      ? Math.round(studentEnrolled.reduce((acc, curr) => acc + calculatePercentage(attendance, s.stud_id, curr.subject_id), 0) / studentEnrolled.length)
                      : 0;
                    return (
                      <tr key={s.stud_id} className="hover:bg-slate-50/50 group transition-colors">
                        <td className="px-6 py-4 text-xs font-bold text-slate-400">{s.stud_id}</td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-bold text-slate-700">{s.stud_name}</div>
                          <div className="text-[10px] font-black text-slate-400 tracking-tighter uppercase">{s.roll_no}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">{s.email}</td>
                        <td className="px-6 py-4 text-sm font-black text-slate-700">{studentEnrolled.length} enrolled</td>
                        <td className="px-6 py-4">{renderProgressCircle(avgAttendance)}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => setEditItem({ type: 'student', data: s })} className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">{ICONS.Edit}</button>
                            <button onClick={() => setDeleteConfirm({ type: 'student', id: s.stud_id, name: s.stud_name })} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg">{ICONS.Delete}</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400 text-sm font-medium">Chart view for Students: Academic performance trends</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
