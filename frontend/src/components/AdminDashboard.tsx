
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
  const [editItem, setEditItem] = useState<{ type: 'course' | 'faculty' | 'student'; data: any } | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{ type: string; id: number; name: string } | null>(null);

  const renderProgressCircle = (percent: number, size = 40) => {
    const stroke = 3;
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
        <span className="absolute text-[9px] font-black">{percent}%</span>
      </div>
    );
  };

  const TableContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="max-h-[360px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-100 scrollbar-track-transparent pr-2">
      {children}
    </div>
  );

  return (
    <div className="space-y-12 pb-12">
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
                  subject_name: formData.get('subject_name'),
                  subject_code: formData.get('subject_code'),
                  semester: formData.get('semester') as string,
                  credits: parseInt(formData.get('credits') as string),
                });
              } else if (editItem.type === 'faculty') {
                onUpdateFaculty({
                  ...editItem.data,
                  faculty_name: formData.get('faculty_name'),
                  email: formData.get('email')
                });
              } else if (editItem.type === 'student') {
                onUpdateStudent({
                  ...editItem.data,
                  stud_name: formData.get('stud_name'),
                  roll_no: formData.get('roll_no'),
                  email: formData.get('email')
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
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
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

      {/* Section: Courses */}
      <section className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
        <div className="p-10 flex justify-between items-center border-b border-slate-50">
          <div>
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">Course Catalog</h3>
            <p className="text-sm text-slate-400 font-bold mt-1">{subjects.length} active courses</p>
          </div>
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
            {ICONS.BookOpen}
          </div>
        </div>

        <div className="p-6">
          <TableContainer>
            <table className="w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <th className="px-8 pb-4">Code</th>
                  <th className="px-8 pb-4">Name</th>
                  <th className="px-8 pb-4">Faculty Incharge</th>
                  <th className="px-8 pb-4">Sem</th>
                  <th className="px-8 pb-4">Credits</th>
                  <th className="px-8 pb-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map(s => (
                  <tr key={s.subject_id} className="bg-slate-50/20 hover:bg-slate-50 transition-colors group rounded-3xl">
                    <td className="px-8 py-5 text-sm font-black text-indigo-600">{s.subject_code}</td>
                    <td className="px-8 py-5 text-sm font-bold text-slate-700">{s.subject_name}</td>
                    <td className="px-8 py-5">
                      <span className="text-xs font-bold text-slate-500 whitespace-nowrap">
                        {faculty.find(f => f.faculty_id === s.faculty_id)?.faculty_name || 'Unassigned'}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-sm font-black text-slate-800 uppercase tracking-tighter">{s.semester}</td>
                    <td className="px-8 py-5 text-sm font-black text-slate-800">{s.credits}</td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end gap-1">
                        <button onClick={() => setEditItem({ type: 'course', data: s })} className="p-2.5 text-indigo-600 hover:bg-white rounded-xl transition-all shadow-sm border border-transparent hover:border-indigo-100">{ICONS.Edit}</button>
                        <button onClick={() => setDeleteConfirm({ type: 'course', id: s.subject_id, name: s.subject_name })} className="p-2.5 text-rose-600 hover:bg-white rounded-xl transition-all shadow-sm border border-transparent hover:border-rose-100">{ICONS.Delete}</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
        </div>
      </section>

      {/* Section: Faculty */}
      <section className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
        <div className="p-10 flex justify-between items-center border-b border-slate-50">
          <div>
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">Faculty Directory</h3>
            <p className="text-sm text-slate-400 font-bold mt-1">{faculty.length} registered faculty incharge</p>
          </div>
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
            {ICONS.Users}
          </div>
        </div>

        <div className="p-6">
          <TableContainer>
            <table className="w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <th className="px-8 pb-4">Name</th>
                  <th className="px-8 pb-4">Email Address</th>
                  <th className="px-8 pb-4">Subjects Incharge</th>
                  <th className="px-8 pb-4">Course Completed</th>
                  <th className="px-8 pb-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {faculty.map(f => {
                  const teaching = subjects.filter(s => s.faculty_id === f.faculty_id);
                  return (
                    <tr key={f.faculty_id} className="bg-slate-50/20 hover:bg-slate-50 transition-colors group rounded-3xl">
                      <td className="px-8 py-5">
                        <div className="text-sm font-black text-slate-800">{f.faculty_name}</div>
                      </td>
                      <td className="px-8 py-5 text-sm text-slate-400 font-bold">{f.email}</td>
                      <td className="px-8 py-5">
                        <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                          {teaching.map(t => <span key={t.subject_id} className="px-2.5 py-1 bg-white border border-slate-100 text-[9px] font-black text-indigo-600 rounded-lg shadow-sm">{t.subject_code}</span>)}
                          {teaching.length === 0 && <span className="text-[10px] text-slate-300 italic font-medium">No Active Assignments</span>}
                        </div>
                      </td>
                      <td className="px-8 py-5">{renderProgressCircle(98)}</td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex justify-end gap-1">
                          <button onClick={() => setEditItem({ type: 'faculty', data: f })} className="p-2.5 text-indigo-600 hover:bg-white rounded-xl transition-all shadow-sm border border-transparent hover:border-indigo-100">{ICONS.Edit}</button>
                          <button onClick={() => setDeleteConfirm({ type: 'faculty', id: f.faculty_id, name: f.faculty_name })} className="p-2.5 text-rose-600 hover:bg-white rounded-xl transition-all shadow-sm border border-transparent hover:border-rose-100">{ICONS.Delete}</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableContainer>
        </div>
      </section>

      {/* Section: Students */}
      <section className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
        <div className="p-10 flex justify-between items-center border-b border-slate-50">
          <div>
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">Student Directory</h3>
            <p className="text-sm text-slate-400 font-bold mt-1">{students.length} active students</p>
          </div>
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
            {ICONS.GraduationCap}
          </div>
        </div>

        <div className="p-6">
          <TableContainer>
            <table className="w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <th className="px-8 pb-4">Student Name</th>
                  <th className="px-8 pb-4">Roll Number</th>
                  <th className="px-8 pb-4">Academic Email</th>
                  <th className="px-8 pb-4">Subjects Enrolled</th>
                  <th className="px-8 pb-4">Avg. Attendance</th>
                  <th className="px-8 pb-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map(s => {
                  const studentEnrolled = enrollments.filter(e => Number(e.stud_id) === Number(s.stud_id));
                  const avgAttendance = studentEnrolled.length
                    ? Math.round(studentEnrolled.reduce((acc, curr) => acc + calculatePercentage(attendance, s.stud_id, curr.subject_id), 0) / studentEnrolled.length)
                    : 0;
                  return (
                    <tr key={s.stud_id} className="bg-slate-50/20 hover:bg-slate-50 transition-colors group rounded-3xl">
                      <td className="px-8 py-5">
                        <div className="text-sm font-black text-slate-800">{s.stud_name}</div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest opacity-70">{s.roll_no}</div>
                      </td>
                      <td className="px-8 py-5 text-sm text-slate-400 font-bold">{s.email}</td>
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-slate-700">{studentEnrolled.length}</span>
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Subjects Enrolled</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {studentEnrolled.slice(0, 3).map(e => (
                            <span key={e.subject_id} className="px-1.5 py-0.5 bg-indigo-50 text-indigo-600 text-[8px] font-black rounded-md">{subjects.find(sub => Number(sub.subject_id) === Number(e.subject_id))?.subject_code}</span>
                          ))}
                          {studentEnrolled.length > 3 && <span className="text-[8px] font-black text-slate-300 ml-1">+{studentEnrolled.length - 3}</span>}
                        </div>
                      </td>
                      <td className="px-8 py-5">{renderProgressCircle(avgAttendance)}</td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex justify-end gap-1">
                          <button onClick={() => setEditItem({ type: 'student', data: s })} className="p-2.5 text-indigo-600 hover:bg-white rounded-xl transition-all shadow-sm border border-transparent hover:border-indigo-100">{ICONS.Edit}</button>
                          <button onClick={() => setDeleteConfirm({ type: 'student', id: s.stud_id, name: s.stud_name })} className="p-2.5 text-rose-600 hover:bg-white rounded-xl transition-all shadow-sm border border-transparent hover:border-rose-100">{ICONS.Delete}</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableContainer>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
