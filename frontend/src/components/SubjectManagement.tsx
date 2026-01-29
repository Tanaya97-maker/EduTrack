
import React, { useState } from 'react';
import { Subject, Faculty, Student } from '../types';
import { ICONS } from '../constants';
import { Download, Upload, Plus, Edit2, Trash2 } from 'lucide-react';

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

  const semesters = ['sem1', 'sem2', 'sem3', 'sem4', 'sem5', 'sem6', 'sem7', 'sem8'];

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
    <div className="space-y-12">
      {/* Top Header with Global Actions */}
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-black text-slate-800 tracking-tight">Course Management</h3>
          <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest text-[10px]">Academic Curriculum</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-black border border-slate-100 hover:bg-slate-100 transition-all">
            <Download className="w-4 h-4" /> Import (.csv)
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-black border border-indigo-100 hover:bg-indigo-100 transition-all">
            <Upload className="w-4 h-4" /> Export (.csv)
          </button>
          <button
            onClick={() => { resetForm(); setShowForm(true); }}
            className="flex-1 md:flex-none bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-indigo-100 active:scale-95 transition-all text-xs uppercase tracking-widest"
          >
            <Plus className="w-4 h-4" /> Add Course
          </button>
        </div>
      </div>

      {showForm && (
        <div className="bg-white p-10 rounded-[2.5rem] border-2 border-indigo-50 shadow-2xl shadow-indigo-50/50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-black text-indigo-900 uppercase tracking-[0.2em] text-sm">
              {editId ? 'Update' : 'Add New'} Subject
            </h4>
            <button onClick={resetForm} className="text-slate-300 hover:text-slate-500 transition-colors">
              <Plus className="w-5 h-5 rotate-45" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Code</label>
              <input placeholder="Ex: CS101" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none" value={formData.code} onChange={e => setFormData({ ...formData, code: e.target.value })} />
            </div>
            <div className="space-y-2 lg:col-span-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Title</label>
              <input placeholder="Ex: Introduction to Algorithms" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Academic Semester</label>
              <select className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none appearance-none cursor-pointer" value={formData.sem} onChange={e => setFormData({ ...formData, sem: e.target.value })}>
                {semesters.map(s => <option key={s} value={s}>{s.toUpperCase().replace('SEM', 'Semester ')}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Credit Weightage</label>
              <select className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none appearance-none cursor-pointer" value={formData.credits} onChange={e => setFormData({ ...formData, credits: e.target.value })}>
                {[1, 2, 3, 4, 5].map(c => <option key={c} value={c}>{c} Credits</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Faculty Incharge</label>
              <select className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white transition-all font-bold text-sm outline-none appearance-none cursor-pointer" value={formData.faculty_id} onChange={e => setFormData({ ...formData, faculty_id: e.target.value })}>
                <option value="">Vacant (Unassigned)</option>
                {faculty.map(f => <option key={f.faculty_id} value={f.faculty_id}>{f.faculty_name}</option>)}
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-10 gap-4">
            <button onClick={resetForm} className="px-8 py-4 text-slate-400 font-black text-sm hover:text-slate-600 transition-colors uppercase tracking-widest">Cancel</button>
            <button onClick={handleSubmit} className="px-10 py-4 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all outline-none uppercase tracking-widest">
              {editId ? 'Update' : 'Save'}
            </button>
          </div>
        </div>
      )}

      {/* Semester Grouped Tables */}
      <div className="space-y-12">
        {semesters.map(sem => {
          const semSubjects = subjects.filter(s => s.semester === sem);
          if (semSubjects.length === 0) return null;

          return (
            <div key={sem} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
              <div className="p-8 border-b border-slate-50 bg-slate-50/30">
                <h4 className="text-xl font-black text-indigo-900 uppercase tracking-widest">{sem.replace('sem', 'Semester ')}</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white">
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Subject Name</th>
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Code</th>
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Faculty Incharge</th>
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Credits</th>
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Enrolled</th>
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Edit</th>
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Delete</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {semSubjects.map(sub => (
                      <tr key={sub.subject_id} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-8 py-5 text-sm font-black text-slate-800">{sub.subject_name}</td>
                        <td className="px-8 py-5 text-sm font-bold text-indigo-600">{sub.subject_code}</td>
                        <td className="px-8 py-5 text-sm font-medium text-slate-500">
                          {faculty.find(f => f.faculty_id === sub.faculty_id)?.faculty_name || 'Unassigned'}
                        </td>
                        <td className="px-8 py-5 text-sm font-black text-slate-800">{sub.credits}</td>
                        <td className="px-8 py-5">
                          <span className="text-xs font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-full">{sub.enrollment_count || 0} Students</span>
                        </td>
                        <td className="px-8 py-5">
                          <button onClick={() => handleEditClick(sub)} className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-xl transition-all shadow-sm border border-transparent hover:border-indigo-100">
                            <Edit2 className="w-4 h-4" />
                          </button>
                        </td>
                        <td className="px-8 py-5 text-right">
                          <button onClick={() => handleDelete(sub.subject_id)} className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-white rounded-xl transition-all shadow-sm border border-transparent hover:border-rose-100">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectManagement;
