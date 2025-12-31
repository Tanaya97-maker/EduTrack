
import React, { useState } from 'react';
import { Subject, Faculty, Student } from '../types';
import { ICONS } from '../constants';

interface Props {
  subjects: Subject[];
  faculty: Faculty[];
  students: Student[];
  onAddSubject: (s: any) => void;
  onEditSubject: (s: any) => void;
  onDeleteSubject: (id: number) => void;
  onAssignFaculty: (subId: number, facId: number) => void;
}

const SubjectManagement: React.FC<Props> = ({ subjects, faculty, students, onAddSubject, onEditSubject, onDeleteSubject, onAssignFaculty }) => {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    sem: 'sem1',
    credits: '1',
    faculty_id: ''
  });

  const resetForm = () => {
    setFormData({ code: '', name: '', sem: 'sem1', credits: '1', faculty_id: '' });
    setEditId(null);
    setShowForm(false);
  };

  const handleEditClick = (sub: Subject) => {
    setEditId(sub.subject_id);
    setFormData({
      code: sub.subject_code,
      name: sub.subject_name,
      sem: sub.semester || 'sem1',
      credits: sub.credits.toString(),
      faculty_id: sub.faculty_id?.toString() || ''
    });
    setShowForm(true);
  };

  const handleSubmit = () => {
    const subjectData = {
      subject_code: formData.code,
      subject_name: formData.name,
      semester: formData.sem,
      credits: parseInt(formData.credits),
      faculty_id: formData.faculty_id ? parseInt(formData.faculty_id) : null
    };

    if (editId) {
      onEditSubject({ subject_id: editId, ...subjectData });
    } else {
      onAddSubject(subjectData);
    }
    resetForm();
  };

  const handleDelete = (id: number) => {
    if (confirm("Permanently delete this curriculum module? This cannot be undone.")) {
      onDeleteSubject(id);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-black text-slate-800 tracking-tight">Curriculum Architecture</h3>
          <p className="text-sm font-bold text-slate-400 mt-1">Found {subjects.length} active educational modules</p>
        </div>
        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="w-full md:w-auto bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-indigo-100 active:scale-95 transition-all"
        >
          {ICONS.Plus} Register New Subject
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-10 rounded-[2.5rem] border-2 border-indigo-50 shadow-2xl shadow-indigo-50/50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-black text-indigo-900 uppercase tracking-[0.2em] text-sm">
              {editId ? 'Refine' : 'Architect'} Subject Schema
            </h4>
            <button onClick={resetForm} className="text-slate-300 hover:text-slate-500 transition-colors">{ICONS.X}</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Display Code</label>
              <input placeholder="Ex: CS101" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none" value={formData.code} onChange={e => setFormData({ ...formData, code: e.target.value })} />
            </div>
            <div className="space-y-2 lg:col-span-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Module Title</label>
              <input placeholder="Ex: Introduction to Algorithms" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Academic Semester</label>
              <select className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none appearance-none" value={formData.sem} onChange={e => setFormData({ ...formData, sem: e.target.value })}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(s => <option key={s} value={`sem${s}`}>Semester {s}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Credit Weightage</label>
              <select className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none appearance-none" value={formData.credits} onChange={e => setFormData({ ...formData, credits: e.target.value })}>
                {[1, 2, 3, 4, 5].map(c => <option key={c} value={c}>{c} Credits</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Assignment Lead</label>
              <select className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none appearance-none" value={formData.faculty_id} onChange={e => setFormData({ ...formData, faculty_id: e.target.value })}>
                <option value="">Vacant (Unassigned)</option>
                {faculty.map(f => <option key={f.faculty_id} value={f.faculty_id}>{f.faculty_name}</option>)}
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-10 gap-4">
            <button onClick={resetForm} className="px-8 py-4 text-slate-400 font-black text-sm hover:text-slate-600 transition-colors">DISCARD</button>
            <button onClick={handleSubmit} className="px-10 py-4 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all outline-none">
              {editId ? 'UPDATE SCHEMA' : 'DEPLOY SUBJECT'}
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.map(sub => (
          <div key={sub.subject_id} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm flex flex-col group hover:shadow-2xl hover:shadow-indigo-50/50 hover:border-indigo-100 transition-all relative">
            <div className="bg-slate-50 p-8 border-b border-slate-100 flex justify-between items-start">
              <div className="flex-1">
                <span className="bg-white text-indigo-600 text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest border border-indigo-100 shadow-sm">{sub.subject_code}</span>
                <h4 className="mt-4 font-black text-slate-800 text-xl leading-tight min-h-[3rem]">{sub.subject_name}</h4>
              </div>
              <div className="flex flex-col items-end gap-4 ml-4">
                <div className="flex flex-col gap-1 items-end">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Sem</span>
                  <span className="text-xl font-black text-indigo-600 uppercase">{sub.semester}</span>
                </div>
                <div className="flex gap-1 bg-white/50 backdrop-blur-sm p-1 rounded-xl shadow-sm">
                  <button onClick={() => handleEditClick(sub)} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-lg transition-all">
                    {/* Persistent Edit */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  </button>
                  <button onClick={() => handleDelete(sub.subject_id)} className="p-2 text-slate-400 hover:text-rose-600 hover:bg-white rounded-lg transition-all">
                    {/* Persistent Trash */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-8 flex-1 space-y-8 bg-white">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] ml-1">Assigned Academic Lead</label>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100/50">
                  <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-black text-xs">
                    {faculty.find(f => f.faculty_id === sub.faculty_id)?.faculty_name.charAt(0) || '?'}
                  </div>
                  <span className="text-xs font-bold text-slate-600">
                    {faculty.find(f => f.faculty_id === sub.faculty_id)?.faculty_name || 'Unassigned Faculty'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-indigo-50 to-white rounded-3xl text-center border border-indigo-100/50 shadow-sm">
                  <div className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-1 leading-none">Credits</div>
                  <div className="text-2xl font-black text-indigo-900">{sub.credits}</div>
                </div>
                <div className="p-5 bg-gradient-to-br from-slate-50 to-white rounded-3xl text-center border border-slate-100/50 shadow-sm">
                  <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1 leading-none">Enrolled</div>
                  <div className="text-2xl font-black text-slate-800">{sub.enrollment_count || 0}</div>
                </div>
              </div>
            </div>
            {/* Added accent line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectManagement;
