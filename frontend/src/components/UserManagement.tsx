
import React, { useState } from 'react';
import { Student, Faculty, Subject, UserType } from '../types';
import { ICONS } from '../constants';
import { Download, Upload, Plus, Edit2, Trash2, X } from 'lucide-react';
import DataTable from './common/DataTable';

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

  const studentColumns = [
    { header: 'Name', key: 'stud_name', sortable: true },
    { header: 'Roll No', key: 'roll_no', sortable: true, align: 'right' as const },
    { header: 'Email', key: 'email', sortable: true },
    {
      header: 'Semester',
      key: 'semester',
      sortable: true,
      render: (item: Student) => (
        <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100/50">
          {item.semester || 'SEM 1'}
        </span>
      )
    },
    {
      header: 'Subjects Enrolled',
      key: 'subjects',
      sortable: false,
      render: (item: Student) => (
        <div className="flex flex-wrap gap-1 max-w-[200px]">
          {enrollments.filter(e => Number(e.stud_id) === Number(item.stud_id)).map(e => (
            <span key={e.subject_id} className="px-1.5 py-0.5 bg-slate-50 border border-slate-100 text-[8px] font-black text-slate-500 rounded-md">
              {subjects.find(s => Number(s.subject_id) === Number(e.subject_id))?.subject_code}
            </span>
          ))}
          {enrollments.filter(e => Number(e.stud_id) === Number(item.stud_id)).length === 0 && (
            <span className="text-[10px] text-slate-300 italic">No assignments</span>
          )}
        </div>
      )
    },
    {
      header: 'Actions',
      key: 'actions',
      sortable: false,
      align: 'right' as const,
      render: (item: Student) => (
        <div className="flex justify-end gap-1">
          <button onClick={() => handleEditClick(item)} className="p-1.5 text-indigo-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-indigo-100 shadow-sm">
            <Edit2 className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => handleDelete(item.stud_id)} className="p-1.5 text-rose-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-rose-100 shadow-sm">
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      )
    }
  ];

  const facultyColumns = [
    { header: 'Name', key: 'faculty_name', sortable: true },
    { header: 'Email', key: 'email', sortable: true },
    {
      header: 'Subjects Teaching',
      key: 'subjects',
      sortable: false,
      render: (item: Faculty) => (
        <div className="flex flex-wrap gap-1 max-w-[250px]">
          {subjects.filter(s => Number(s.faculty_id) === Number(item.faculty_id)).map(s => (
            <span key={s.subject_id} className="px-1.5 py-0.5 bg-indigo-50/50 border border-indigo-100/50 text-[8px] font-black text-indigo-600 rounded-md">
              {s.subject_code}
            </span>
          ))}
          {subjects.filter(s => Number(s.faculty_id) === Number(item.faculty_id)).length === 0 && (
            <span className="text-[10px] text-slate-300 italic">No assignments</span>
          )}
        </div>
      )
    },
    {
      header: 'Actions',
      key: 'actions',
      sortable: false,
      align: 'right' as const,
      render: (item: Faculty) => (
        <div className="flex justify-end gap-1">
          <button onClick={() => handleEditClick(item)} className="p-1.5 text-indigo-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-indigo-100 shadow-sm">
            <Edit2 className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => handleDelete(item.faculty_id)} className="p-1.5 text-rose-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-rose-100 shadow-sm">
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Top Bar with Mode Switch and Buttons */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => { setMode(UserType.STUDENT); resetForm(); }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${mode === UserType.STUDENT ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Students
          </button>
          <button
            onClick={() => { setMode(UserType.FACULTY); resetForm(); }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${mode === UserType.FACULTY ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Faculty
          </button>
        </div>

        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 active:scale-95 transition-all outline-none uppercase tracking-widest"
        >
          <Plus className="w-4 h-4" /> Register {mode === UserType.STUDENT ? 'Student' : 'Faculty'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-8 rounded-2xl border border-indigo-100 shadow-xl shadow-indigo-50/50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-black text-indigo-900 uppercase tracking-widest text-[10px]">
              {editId ? 'Modify' : 'New Registration'}: {mode === UserType.STUDENT ? 'Student' : 'Faculty'}
            </h4>
            <button onClick={resetForm} className="text-slate-400 hover:text-slate-600 transition-colors"><X className="w-4 h-4" /></button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
              <input placeholder="Ex: John Doe" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white transition-all font-bold text-sm outline-none" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <input type="email" placeholder="john@edu.com" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white transition-all font-bold text-sm outline-none" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
            </div>
            {mode === UserType.STUDENT && (
              <>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Roll Number</label>
                  <input placeholder="Ex: CS2024" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white transition-all font-bold text-sm outline-none" value={formData.roll} onChange={e => setFormData({ ...formData, roll: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Semester</label>
                  <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white transition-all font-bold text-sm outline-none appearance-none cursor-pointer" value={formData.sem} onChange={e => setFormData({ ...formData, sem: e.target.value })}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(s => <option key={s} value={`sem${s}`}>Semester {s}</option>)}
                  </select>
                </div>
              </>
            )}
          </div>

          <div className="mt-6 space-y-3">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">
              {mode === UserType.STUDENT ? 'Courses Enrolled' : 'Courses Teaching'}
              <span className="text-[8px] lowercase opacity-60"> (select all that apply)</span>
            </label>
            <div className="flex flex-wrap gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100 min-h-[80px]">
              {subjects.map(sub => (
                <button
                  key={sub.subject_id}
                  onClick={() => toggleSubject(sub.subject_id)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black border transition-all flex items-center gap-1.5 ${formData.subject_ids.includes(sub.subject_id) ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100' : 'bg-white border-slate-200 text-slate-400 hover:border-indigo-300'}`}
                >
                  {sub.subject_code} - {sub.subject_name}
                  {formData.subject_ids.includes(sub.subject_id) && <X className="w-3 h-3 opacity-60" />}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button onClick={resetForm} className="px-6 py-2.5 text-slate-400 font-bold text-xs hover:text-slate-600 transition-colors uppercase tracking-widest">Cancel</button>
            <button onClick={handleSubmit} className="px-8 py-2.5 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all outline-none uppercase tracking-widest">
              Save
            </button>
          </div>
        </div>
      )}

      {/* Directory Table UI */}
      <DataTable
        title={`${mode === UserType.STUDENT ? 'Student' : 'Faculty'} Directory`}
        data={(mode === UserType.STUDENT ? students : faculty) as any}
        columns={(mode === UserType.STUDENT ? studentColumns : facultyColumns) as any}
        onImport={() => { }}
        onExport={() => { }}
        searchPlaceholder={`Search ${mode === UserType.STUDENT ? 'students' : 'faculty'}...`}
      />
    </div>
  );
};

export default UserManagement;
