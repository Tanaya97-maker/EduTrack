
import React, { useState } from 'react';
import { Student, Faculty, Subject, UserType } from '../types';
import { ICONS } from '../constants';

interface Props {
  students: Student[];
  faculty: Faculty[];
  subjects: Subject[];
  enrollments: { stud_id: number; subject_id: number }[];
  onAddStudent: (s: any) => void;
  onAddFaculty: (f: any) => void;
  onEditStudent: (s: any) => void;
  onEditFaculty: (f: any) => void;
  onDeleteStudent: (id: number) => void;
  onDeleteFaculty: (id: number) => void;
  onEnrollStudent: (studId: number, subId: number) => void;
}

const UserManagement: React.FC<Props> = ({
  students, faculty, subjects, enrollments,
  onAddStudent, onAddFaculty, onEditStudent, onEditFaculty,
  onDeleteStudent, onDeleteFaculty, onEnrollStudent
}) => {
  const [mode, setMode] = useState<UserType.STUDENT | UserType.FACULTY>(UserType.STUDENT);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roll: '',
    sem: 'sem1',
    subject_ids: [] as number[]
  });

  const resetForm = () => {
    setFormData({ name: '', email: '', roll: '', sem: 'sem1', subject_ids: [] });
    setEditId(null);
    setShowForm(false);
  };

  const handleEditClick = (item: any) => {
    const itemEnrolled = mode === UserType.STUDENT
      ? enrollments.filter(e => e.stud_id === item.stud_id).map(e => e.subject_id)
      : subjects.filter(s => s.faculty_id === item.faculty_id).map(s => s.subject_id);

    setEditId(mode === UserType.STUDENT ? item.stud_id : item.faculty_id);
    setFormData({
      name: mode === UserType.STUDENT ? item.stud_name : item.faculty_name,
      email: item.email,
      roll: item.roll_no || '',
      sem: item.semester || 'sem1',
      subject_ids: itemEnrolled
    });
    setShowForm(true);
  };

  const handleSubmit = () => {
    if (mode === UserType.STUDENT) {
      const payload = {
        stud_name: formData.name,
        email: formData.email,
        roll_no: formData.roll,
        semester: formData.sem,
        subject_ids: formData.subject_ids
      };
      if (editId) {
        onEditStudent({ stud_id: editId, ...payload });
      } else {
        onAddStudent(payload);
      }
    } else {
      const payload = {
        faculty_name: formData.name,
        email: formData.email,
        subject_ids: formData.subject_ids // Not directly supported by manage_user for faculty yet, but added for future sync
      };
      if (editId) {
        onEditFaculty({ faculty_id: editId, ...payload });
      } else {
        onAddFaculty(payload);
      }
    }
    resetForm();
  };

  const toggleSubject = (id: number) => {
    setFormData(prev => ({
      ...prev,
      subject_ids: prev.subject_ids.includes(id)
        ? prev.subject_ids.filter(sid => sid !== id)
        : [...prev.subject_ids, id]
    }));
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this record? This action is permanent.")) {
      if (mode === UserType.STUDENT) {
        onDeleteStudent(id);
      } else {
        onDeleteFaculty(id);
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-4 p-1 bg-slate-50 rounded-2xl">
          <button
            onClick={() => { setMode(UserType.STUDENT); resetForm(); }}
            className={`px-6 py-3 rounded-xl text-sm font-black transition-all ${mode === UserType.STUDENT ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-400'}`}
          >
            Student Directory
          </button>
          <button
            onClick={() => { setMode(UserType.FACULTY); resetForm(); }}
            className={`px-6 py-3 rounded-xl text-sm font-black transition-all ${mode === UserType.FACULTY ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-400'}`}
          >
            Faculty Directory
          </button>
        </div>
        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="w-full md:w-auto bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-indigo-100 active:scale-95 transition-all"
        >
          {ICONS.Plus} Register {mode === UserType.STUDENT ? 'Student' : 'Faculty'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-10 rounded-[2.5rem] border-2 border-indigo-50 shadow-2xl shadow-indigo-50/50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-black text-indigo-900 uppercase tracking-[0.2em] text-sm">
              {editId ? 'Modify' : 'New Registration'}: {mode === UserType.STUDENT ? 'Student' : 'Faculty'}
            </h4>
            <button onClick={resetForm} className="text-slate-300 hover:text-slate-500 transition-colors">{ICONS.X}</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Full Name</label>
              <input placeholder="Ex: John Doe" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Email Address</label>
              <input type="email" placeholder="john@edu.com" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
            </div>
            {mode === UserType.STUDENT && (
              <>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Roll Number</label>
                  <input placeholder="Ex: CS2024" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none" value={formData.roll} onChange={e => setFormData({ ...formData, roll: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Semester</label>
                  <select className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none" value={formData.sem} onChange={e => setFormData({ ...formData, sem: e.target.value })}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(s => <option key={s} value={`sem${s}`}>Semester {s}</option>)}
                  </select>
                </div>
              </>
            )}
          </div>

          <div className="mt-8 space-y-4">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">
              {mode === UserType.STUDENT ? 'Courses Enrolled' : 'Courses Teaching'}
              <span> (one faculty per subject)</span>
            </label>
            <div className="flex flex-wrap gap-3 p-6 bg-slate-50 rounded-3xl min-h-[100px]">
              {subjects.map(sub => (
                <button
                  key={sub.subject_id}
                  onClick={() => toggleSubject(sub.subject_id)}
                  className={`px-4 py-2 rounded-xl text-xs font-black border-2 transition-all flex items-center gap-2 ${formData.subject_ids.includes(sub.subject_id) ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-white border-slate-100 text-slate-400 hover:border-indigo-200'}`}
                >
                  {sub.subject_code} - {sub.subject_name}
                  {formData.subject_ids.includes(sub.subject_id) && <span className="opacity-60">✕</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-10">
            <button onClick={resetForm} className="px-8 py-4 text-slate-400 font-black text-sm hover:text-slate-600 transition-colors">CANCEL</button>
            <button onClick={handleSubmit} className="px-10 py-4 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all outline-none">
              SAVE
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(mode === UserType.STUDENT ? students : faculty).map((item: any) => (
          <div key={item.stud_id || item.faculty_id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-50/50 hover:border-indigo-100 transition-all group relative overflow-hidden">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-[1.5rem] flex items-center justify-center font-black text-2xl shadow-lg shadow-indigo-100 ring-4 ring-white">
                  {(item.stud_name || item.faculty_name).charAt(0)}
                </div>
                <div>
                  <h5 className="font-black text-slate-800 text-lg leading-tight">{item.stud_name || item.faculty_name}</h5>
                  <p className="text-xs text-slate-700 font-bold mt-1 tracking-tighter opacity-70">{item.email}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {mode === UserType.STUDENT && (
                <div className="flex gap-4">
                  <div className="flex-1 bg-slate-50 p-3 rounded-2xl text-center border border-slate-100/50">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Roll Number</p>
                    <p className="text-sm font-black text-indigo-900">{item.roll_no}</p>
                  </div>
                  <div className="flex-1 bg-slate-50 p-3 rounded-2xl text-center border border-slate-100/50">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Semester</p>
                    <p className="text-sm font-black text-indigo-900 uppercase">{item.semester || 'N/A'}</p>
                  </div>
                </div>
              )}

              <div className="p-6 bg-white border-2 rounded-[2rem] text-slate-900 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">
                    {mode === UserType.STUDENT ? 'Subjects Enrolled' : 'Subjects Teaching'}
                  </span>
                  <div className="w-6 h-6 bg-indigo-600 rounded-lg flex items-center justify-center text-[10px] font-black text-white">
                    {mode === UserType.STUDENT
                      ? enrollments.filter(e => Number(e.stud_id) === Number(item.stud_id)).length
                      : subjects.filter(s => Number(s.faculty_id) === Number(item.faculty_id)).length}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mode === UserType.STUDENT ? (
                    (() => {
                      const studentEnrolled = enrollments.filter(e => Number(e.stud_id) === Number(item.stud_id));
                      return studentEnrolled.length > 0 ? (
                        studentEnrolled.map(e => {
                          const sub = subjects.find(s => Number(s.subject_id) === Number(e.subject_id));
                          return <span key={e.subject_id} className="px-3 py-1.5 bg-white border border-slate-900 rounded-xl text-[9px] font-black tracking-wider text-slate-900">{sub?.subject_code || 'N/A'}</span>;
                        })
                      ) : (
                        <span className="text-xs text-slate-400 font-bold italic">No subjects enrolled</span>
                      );
                    })()
                  ) : (
                    (() => {
                      const teaching = subjects.filter(s => Number(s.faculty_id) === Number(item.faculty_id));
                      return teaching.length > 0 ? (
                        teaching.map(s => (
                          <span key={s.subject_id} className="px-3 py-1.5 bg-white border border-slate-900 rounded-xl text-[9px] font-black tracking-wider text-slate-900">{s.subject_code}</span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-400 font-bold italic">No assignments found</span>
                      );
                    })()
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-1 z-10 mt-2 bg-white/80 backdrop-blur-sm p-1 rounded-xl">
              <button onClick={() => handleEditClick(item)} className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                {/* Edit Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              </button>
              <button
                onClick={() => handleDelete((item.stud_id || item.faculty_id))}
                className="p-2.5 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all border border-transparent hover:border-rose-100 group/del"
                title="Permanent Removal"
              >
                {/* Trash Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              </button>
            </div>

            {/* Added subtle accent decor */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-50/50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
