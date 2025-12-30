
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
  onEnrollStudent: (studId: number, subId: number) => void;
}

const UserManagement: React.FC<Props> = ({ students, faculty, subjects, enrollments, onAddStudent, onAddFaculty, onEnrollStudent }) => {
  const [mode, setMode] = useState<UserType.STUDENT | UserType.FACULTY>(UserType.STUDENT);
  const [showAdd, setShowAdd] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', roll: '', sem: '1' });

  const handleAdd = () => {
    if (mode === UserType.STUDENT) {
      onAddStudent({ stud_name: formData.name, email: formData.email, roll_no: formData.roll, user_id: Date.now() });
    } else {
      onAddFaculty({ faculty_name: formData.name, email: formData.email, user_id: Date.now() });
    }
    setShowAdd(false);
    setFormData({ name: '', email: '', roll: '', sem: '1' });
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex justify-between items-center">
        <div className="flex gap-4 p-1 bg-slate-50 rounded-2xl">
          <button 
            onClick={() => setMode(UserType.STUDENT)}
            className={`px-6 py-3 rounded-xl text-sm font-black transition-all ${mode === UserType.STUDENT ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-400'}`}
          >
            Student Management
          </button>
          <button 
            onClick={() => setMode(UserType.FACULTY)}
            className={`px-6 py-3 rounded-xl text-sm font-black transition-all ${mode === UserType.FACULTY ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-400'}`}
          >
            Faculty Management
          </button>
        </div>
        <button 
          onClick={() => setShowAdd(true)}
          className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-black text-sm flex items-center gap-2 shadow-xl shadow-indigo-50"
        >
          {ICONS.Plus} Register {mode === UserType.STUDENT ? 'Student' : 'Faculty'}
        </button>
      </div>

      {showAdd && (
        <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 animate-in zoom-in duration-200">
          <h4 className="font-black text-indigo-900 mb-6 uppercase tracking-widest text-xs">Registration Form</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input placeholder="Full Name" className="p-4 rounded-2xl border-none font-bold text-sm" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            <input placeholder="Email Address" className="p-4 rounded-2xl border-none font-bold text-sm" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            {mode === UserType.STUDENT && (
              <>
                <input placeholder="Roll Number" className="p-4 rounded-2xl border-none font-bold text-sm" value={formData.roll} onChange={e => setFormData({...formData, roll: e.target.value})} />
                <select className="p-4 rounded-2xl border-none font-bold text-sm" value={formData.sem} onChange={e => setFormData({...formData, sem: e.target.value})}>
                  {[1,2,3,4,5,6,7,8].map(s => <option key={s} value={s}>Semester {s}</option>)}
                </select>
              </>
            )}
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button onClick={() => setShowAdd(false)} className="px-6 py-3 text-indigo-400 font-bold">Discard</button>
            <button onClick={handleAdd} className="px-8 py-3 bg-indigo-600 text-white font-black rounded-2xl shadow-lg shadow-indigo-200">Submit Application</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(mode === UserType.STUDENT ? students : faculty).map((item: any) => (
          <div key={item.stud_id || item.faculty_id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-200 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-xl">
                {(item.stud_name || item.faculty_name).charAt(0)}
              </div>
              <div>
                <h5 className="font-black text-slate-800">{item.stud_name || item.faculty_name}</h5>
                <p className="text-xs text-slate-400 font-bold">{item.email}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Assignments</span>
                  <button className="text-[10px] font-black text-indigo-600 hover:underline">Manage</button>
                </div>
                {mode === UserType.STUDENT ? (
                  <div className="flex flex-wrap gap-2">
                    {enrollments.filter(e => e.stud_id === item.stud_id).map(e => {
                      const sub = subjects.find(s => s.subject_id === e.subject_id);
                      return <span key={e.subject_id} className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-bold text-slate-600">{sub?.subject_code}</span>;
                    })}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {subjects.filter(s => s.faculty_id === item.faculty_id).map(s => (
                      <span key={s.subject_id} className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-bold text-slate-600">{s.subject_code}</span>
                    ))}
                  </div>
                )}
              </div>
              <button className="w-full py-3 bg-slate-100 text-slate-500 rounded-xl text-xs font-black uppercase tracking-widest group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                Open Full Records
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
