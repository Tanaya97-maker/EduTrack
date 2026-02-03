import React, { useState } from 'react';
import { Subject, Faculty, Student } from '../../types';
import { Download, Upload, Plus, Edit2, Trash2, X } from 'lucide-react';
import DataTable from '../common/DataTable';
import { exportToExcel, importFromExcel } from '../../utils/excelUtils';

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
    faculty_id: '',
    department: 'comp'
  });

  const semesters = ['sem1', 'sem2', 'sem3', 'sem4', 'sem5', 'sem6', 'sem7', 'sem8'];

  const resetForm = () => {
    setFormData({ code: '', name: '', sem: 'sem1', credits: '1', faculty_id: '', department: 'comp' });
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
      faculty_id: sub.faculty_id?.toString() || '',
      department: sub.department || 'comp'
    });
    setShowForm(true);
  };

  const handleSubmit = () => {
    const subjectData = {
      subject_code: formData.code,
      subject_name: formData.name,
      semester: formData.sem,
      credits: parseInt(formData.credits),
      faculty_id: formData.faculty_id ? parseInt(formData.faculty_id) : null,
      department: formData.department
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

  const handleExport = (semSubjects: Subject[]) => {
    exportToExcel(semSubjects, `Subjects_${semSubjects[0]?.semester || 'List'}`);
  };

  const handleImport = async (file: File) => {
    try {
      const importedData = await importFromExcel(file);
      for (const item of importedData) {
        onAddSubject({
          subject_code: item.subject_code || item.code,
          subject_name: item.subject_name || item.name,
          semester: item.semester || item.sem || 'sem1',
          credits: parseInt(item.credits) || 3,
          department: item.department || item.dept || 'comp',
          faculty_id: null
        });
      }
    } catch (error) {
      console.error("Import failed:", error);
      alert("Failed to import Excel file.");
    }
  };

  const subjectColumns = [
    { header: 'Subject Name', key: 'subject_name', sortable: true },
    { header: 'Code', key: 'subject_code', sortable: true, align: 'right' as const },
    {
      header: 'Faculty Incharge',
      key: 'faculty_id',
      sortable: true,
      render: (sub: Subject) => faculty.find(f => f.faculty_id === sub.faculty_id)?.faculty_name || 'Unassigned'
    },
    {
      header: 'Dept',
      key: 'department',
      sortable: true,
      render: (sub: Subject) => (
        <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100/50">
          {sub.department || 'COMP'}
        </span>
      )
    },
    { header: 'Credits', key: 'credits', sortable: true, align: 'right' as const },
    {
      header: 'Enrolled',
      key: 'enrollment_count',
      sortable: true,
      align: 'right' as const,
      render: (sub: Subject) => (
        <span className="text-[10px] font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200/50">
          {sub.enrollment_count || 0} Students
        </span>
      )
    },
    {
      header: 'Actions',
      key: 'actions',
      sortable: false,
      align: 'right' as const,
      render: (sub: Subject) => (
        <div className="flex justify-end gap-1">
          <button onClick={() => handleEditClick(sub)} className="p-1.5 text-indigo-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-indigo-100 shadow-sm">
            <Edit2 className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => handleDelete(sub.subject_id)} className="p-1.5 text-rose-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-rose-100 shadow-sm">
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-xl font-black text-slate-800 tracking-tight">Academic Curriculum</h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Course Management System</p>
        </div>
        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="w-full md:w-auto bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 active:scale-95 transition-all uppercase tracking-widest"
        >
          <Plus className="w-4 h-4" /> Add Course
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-8 rounded-2xl border border-indigo-100 shadow-xl shadow-indigo-50/50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-black text-indigo-900 uppercase tracking-widest text-[10px]">
              {editId ? 'Update' : 'Add New'} Subject
            </h4>
            <button onClick={resetForm} className="text-slate-400 hover:text-slate-600 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Code</label>
              <input placeholder="Ex: CS101" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white transition-all font-bold text-sm outline-none" value={formData.code} onChange={e => setFormData({ ...formData, code: e.target.value })} />
            </div>
            <div className="space-y-1.5 lg:col-span-2">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Title</label>
              <input placeholder="Ex: Introduction to Algorithms" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white transition-all font-bold text-sm outline-none" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Academic Semester</label>
              <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white transition-all font-bold text-sm outline-none appearance-none cursor-pointer" value={formData.sem} onChange={e => setFormData({ ...formData, sem: e.target.value })}>
                {semesters.map(s => <option key={s} value={s}>{s.toUpperCase().replace('SEM', 'Semester ')}</option>)}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Credit Weightage</label>
              <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white transition-all font-bold text-sm outline-none appearance-none cursor-pointer" value={formData.credits} onChange={e => setFormData({ ...formData, credits: e.target.value })}>
                {[1, 2, 3, 4, 5].map(c => <option key={c} value={c}>{c} Credits</option>)}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Department</label>
              <select
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white transition-all font-bold text-sm outline-none appearance-none cursor-pointer"
                value={formData.department}
                onChange={e => setFormData({ ...formData, department: e.target.value })}
              >
                <option value="comp">Computer</option>
                <option value="mech">Mechanical</option>
                <option value="ece">Electronics</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Faculty Incharge</label>
              <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white transition-all font-bold text-sm outline-none appearance-none cursor-pointer" value={formData.faculty_id} onChange={e => setFormData({ ...formData, faculty_id: e.target.value })}>
                <option value="">Vacant (Unassigned)</option>
                {faculty
                  .filter(f => !formData.department || f.department?.toLowerCase() === formData.department.toLowerCase())
                  .map(f => <option key={f.faculty_id} value={f.faculty_id}>{f.faculty_name}</option>)
                }
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-8 gap-3">
            <button onClick={resetForm} className="px-6 py-2.5 text-slate-400 font-bold text-xs hover:text-slate-600 transition-colors uppercase tracking-widest">Cancel</button>
            <button onClick={handleSubmit} className="px-8 py-2.5 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all outline-none uppercase tracking-widest">
              {editId ? 'Update' : 'Save'}
            </button>
          </div>
        </div>
      )}

      <div className="space-y-8">
        {semesters.map(sem => {
          const semSubjects = subjects.filter(s => s.semester === sem);
          if (semSubjects.length === 0) return null;

          return (
            <DataTable
              key={sem}
              title={sem.replace('sem', 'Semester ')}
              data={semSubjects}
              columns={subjectColumns as any}
              onImport={handleImport}
              onExport={() => handleExport(semSubjects)}
              searchPlaceholder={`Search within ${sem.replace('sem', 'Semester ')}...`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SubjectManagement;
