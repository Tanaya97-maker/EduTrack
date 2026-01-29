
import React, { useState } from 'react';
import { Student, Faculty, Subject, UserType } from '../types';
import { ICONS } from '../constants';
import { Download, Upload, Plus, Edit2, Trash2, X } from 'lucide-react';

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
      ? enrollments.filter(e => e.stud_id === (item.stud_id || item.faculty_id)).map(e => e.subject_id)
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
        subject_ids: formData.subject_ids
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
      {/* Top Bar with Mode Switch and Buttons */}
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col lg:flex-row justify-between items-center gap-6">
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

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-black border border-slate-100 hover:bg-slate-100 transition-all">
            <Download className="w-4 h-4" /> Import (.csv)
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-black border border-indigo-100 hover:bg-indigo-100 transition-all">
            <Upload className="w-4 h-4" /> Export (.csv)
          </button>
          <button
            onClick={() => { resetForm(); setShowForm(true); }}
            className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-indigo-100 active:scale-95 transition-all outline-none"
          >
            <Plus className="w-5 h-5" /> Register {mode === UserType.STUDENT ? 'Student' : 'Faculty'}
          </button>
        </div>
      </div>

      {showForm && (
        <div className="bg-white p-10 rounded-[2.5rem] border-2 border-indigo-50 shadow-2xl shadow-indigo-50/50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-black text-indigo-900 uppercase tracking-[0.2em] text-sm">
              {editId ? 'Modify' : 'New Registration'}: {mode === UserType.STUDENT ? 'Student' : 'Faculty'}
            </h4>
            <button onClick={resetForm} className="text-slate-300 hover:text-slate-500 transition-colors"><X className="w-5 h-5" /></button>
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
                  <select className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none appearance-none cursor-pointer" value={formData.sem} onChange={e => setFormData({ ...formData, sem: e.target.value })}>
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
            <button onClick={resetForm} className="px-8 py-4 text-slate-400 font-black text-sm hover:text-slate-600 transition-colors uppercase tracking-widest">Cancel</button>
            <button onClick={handleSubmit} className="px-10 py-4 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all outline-none uppercase tracking-widest">
              Save
            </button>
          </div>
        </div>
      )}

      {/* Directory Table UI */}
      <div className="bg-white border border-slate-100">
        <div className="p-8 border-b border-slate-50 bg-slate-50/30">
          <h4 className="text-xl font-black text-indigo-900 uppercase tracking-widest">User Directory</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                {mode === UserType.STUDENT ? (
                  <>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Name</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Roll No</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Email</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Semester</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Subjects Enrolled</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Edit</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-right">Delete</th>
                  </>
                ) : (
                  <>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Name</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Email</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Subjects Teaching</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Edit</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-right">Delete</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {(mode === UserType.STUDENT ? students : faculty).map((item: any) => (
                <tr key={item.stud_id || item.faculty_id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-3 text-sm font-bold">{item.stud_name || item.faculty_name}</td>
                  {mode === UserType.STUDENT && (
                    <td className="px-8 py-3 text-sm font-bold text-slate-600">{item.roll_no}</td>
                  )}
                  <td className="px-8 py-3 text-sm font-medium text-slate-500">{item.email}</td>
                  {mode === UserType.STUDENT && (
                    <td className="px-8 py-3">
                      <span className="text-xs font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">{item.semester || 'SEM 1'}</span>
                    </td>
                  )}
                  <td className="px-8 py-3">
                    <div className="flex flex-wrap gap-1.5 max-w-[300px]">
                      {mode === UserType.STUDENT ? (
                        enrollments.filter(e => Number(e.stud_id) === Number(item.stud_id)).map(e => (
                          <span key={e.subject_id} className="px-2 py-1 bg-white border border-slate-200 text-[9px] font-black text-slate-500 rounded-lg shadow-sm">
                            {subjects.find(s => Number(s.subject_id) === Number(e.subject_id))?.subject_code}
                          </span>
                        ))
                      ) : (
                        subjects.filter(s => Number(s.faculty_id) === Number(item.faculty_id)).map(s => (
                          <span key={s.subject_id} className="px-2 py-1 bg-white border border-slate-200 text-[9px] font-black text-indigo-500 rounded-lg shadow-sm">
                            {s.subject_code}
                          </span>
                        ))
                      )}
                      {(mode === UserType.STUDENT ?
                        enrollments.filter(e => Number(e.stud_id) === Number(item.stud_id)).length :
                        subjects.filter(s => Number(s.faculty_id) === Number(item.faculty_id)).length) === 0 && (
                          <span className="text-[10px] text-slate-300 italic">No assignments</span>
                        )}
                    </div>
                  </td>
                  {mode === UserType.STUDENT ? (
                    <>
                      <td className="px-8 py-5">
                        <button onClick={() => handleEditClick(item)} className="p-2 text-indigo-500 hover:bg-indigo-50 rounded-lg transition-all">
                          <Edit2 className="w-4 h-4" />
                        </button>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button onClick={() => handleDelete((item.stud_id || item.faculty_id))} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-8 py-5">
                        <button onClick={() => handleEditClick(item)} className="p-2 text-indigo-500 hover:bg-indigo-50 rounded-lg transition-all">
                          <Edit2 className="w-4 h-4" />
                        </button>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button onClick={() => handleDelete((item.stud_id || item.faculty_id))} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
