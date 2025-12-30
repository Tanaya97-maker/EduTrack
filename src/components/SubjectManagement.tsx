
import React, { useState } from 'react';
import { Subject, Faculty, Student } from '../types';
import { ICONS } from '../constants';

interface Props {
  subjects: Subject[];
  faculty: Faculty[];
  students: Student[];
  onAddSubject: (s: any) => void;
  onAssignFaculty: (subId: number, facId: number) => void;
}

const SubjectManagement: React.FC<Props> = ({ subjects, faculty, students, onAddSubject, onAssignFaculty }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [newSub, setNewSub] = useState({ code: '', name: '', sem: '1', credits: '4' });

  const handleAdd = () => {
    onAddSubject({
      subject_code: newSub.code,
      subject_name: newSub.name,
      semester: parseInt(newSub.sem),
      credits: parseInt(newSub.credits),
      faculty_id: null
    });
    setShowAdd(false);
    setNewSub({ code: '', name: '', sem: '1', credits: '4' });
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex justify-between items-center">
        <div>
          <h3 className="text-xl font-black text-slate-800">Curriculum Repository</h3>
          <p className="text-sm text-slate-400">Total {subjects.length} modules currently offered</p>
        </div>
        <button 
          onClick={() => setShowAdd(true)}
          className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-black text-sm flex items-center gap-2 shadow-xl shadow-indigo-50"
        >
          {ICONS.Plus} Create New Course
        </button>
      </div>

      {showAdd && (
        <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
          <h4 className="font-black text-indigo-900 mb-6 uppercase tracking-widest text-xs">New Subject Schema</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input placeholder="Subject Code" className="p-4 rounded-2xl border-none font-bold text-sm" value={newSub.code} onChange={e => setNewSub({...newSub, code: e.target.value})} />
            <input placeholder="Subject Name" className="p-4 rounded-2xl border-none font-bold text-sm" value={newSub.name} onChange={e => setNewSub({...newSub, name: e.target.value})} />
            <select className="p-4 rounded-2xl border-none font-bold text-sm" value={newSub.sem} onChange={e => setNewSub({...newSub, sem: e.target.value})}>
              {[1,2,3,4,5,6,7,8].map(s => <option key={s} value={s}>Semester {s}</option>)}
            </select>
            <input type="number" placeholder="Credits" className="p-4 rounded-2xl border-none font-bold text-sm" value={newSub.credits} onChange={e => setNewSub({...newSub, credits: e.target.value})} />
          </div>
          <div className="flex justify-end mt-6">
            <button onClick={handleAdd} className="px-12 py-3 bg-indigo-600 text-white font-black rounded-2xl shadow-lg shadow-indigo-200">Save Module</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.map(sub => (
          <div key={sub.subject_id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col">
            <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-start">
              <div>
                <span className="bg-indigo-100 text-indigo-700 text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-widest">{sub.subject_code}</span>
                <h4 className="mt-3 font-black text-slate-800 text-lg leading-tight">{sub.subject_name}</h4>
              </div>
              <div className="text-right">
                <div className="text-xs font-black text-slate-400">SEM</div>
                <div className="text-xl font-black text-slate-800">{sub.semester}</div>
              </div>
            </div>
            
            <div className="p-6 flex-1 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Assigned Faculty</label>
                <select 
                  className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-xs font-bold"
                  value={sub.faculty_id || ''}
                  onChange={(e) => onAssignFaculty(sub.subject_id, parseInt(e.target.value))}
                >
                  <option value="">Vacant Position</option>
                  {faculty.map(f => <option key={f.faculty_id} value={f.faculty_id}>{f.faculty_name}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl text-center">
                  <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Credits</div>
                  <div className="text-lg font-black text-slate-700">{sub.credits}</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl text-center">
                  <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Enrollment</div>
                  <div className="text-lg font-black text-slate-700">12</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectManagement;
