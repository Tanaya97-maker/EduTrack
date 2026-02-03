import React, { useState } from 'react';
import { Subject, TimetableEntry } from '../../types';
import { ICONS, DAYS_OF_WEEK } from '../../constants';
import { Download, Upload, Plus, Trash2, X } from 'lucide-react';
import DataTable from '../common/DataTable';

interface Props {
  subjects: Subject[];
  timetable: TimetableEntry[];
  onAddTimetable: (t: Omit<TimetableEntry, 'timetable_id'>) => void;
  onRemoveTimetable: (id: number) => void;
}

const AdminSchedule: React.FC<Props> = ({ subjects, timetable, onAddTimetable, onRemoveTimetable }) => {
  const [targetSem, setTargetSem] = useState<string>('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSlot, setNewSlot] = useState({
    subject_id: '',
    day: 1,
    start: '09:00',
    end: '10:00',
    room: ''
  });

  const semesters = ['sem1', 'sem2', 'sem3', 'sem4', 'sem5', 'sem6', 'sem7', 'sem8'];

  const filteredTimetable = timetable.filter(t => {
    const sub = subjects.find(s => Number(s.subject_id) === Number(t.subject_id));
    if (targetSem === 'all') return true;
    return sub?.semester === targetSem;
  }).map(t => {
    const sub = subjects.find(s => Number(s.subject_id) === Number(t.subject_id));
    return {
      ...t,
      subject_name: sub?.subject_name || 'Unknown',
      subject_code: sub?.subject_code || 'N/A',
      semester: sub?.semester || 'N/A'
    };
  });

  const handleAdd = () => {
    if (!newSlot.subject_id) return;
    onAddTimetable({
      subject_id: parseInt(newSlot.subject_id),
      day_of_week: newSlot.day,
      start_time: newSlot.start,
      end_time: newSlot.end,
      room_no: newSlot.room
    });
    setShowAddForm(false);
    // Mock notification feedback
    alert(`Timetable updated! Students in ${targetSem} have been notified.`);
  };

  const scheduleColumns = [
    {
      header: 'Subject',
      key: 'subject_name',
      sortable: true,
      render: (t: any) => (
        <div className="flex flex-col">
          <span className="font-bold text-slate-800">{t.subject_name}</span>
          <span className="text-[10px] text-indigo-500 font-black uppercase tracking-widest">{t.subject_code}</span>
        </div>
      )
    },
    {
      header: 'Day',
      key: 'day_of_week',
      sortable: true,
      render: (t: any) => DAYS_OF_WEEK[t.day_of_week - 1]
    },
    {
      header: 'Time Range',
      key: 'start_time',
      sortable: true,
      align: 'right' as const,
      render: (t: any) => (
        <span className="tabular-nums font-bold text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-100/50">
          {t.start_time} - {t.end_time}
        </span>
      )
    },
    {
      header: 'Hall/Room',
      key: 'room_no',
      sortable: true,
      align: 'center' as const,
      render: (t: any) => (
        <span className="text-[10px] font-black text-slate-500 uppercase">Room {t.room_no || 'TBD'}</span>
      )
    },
    {
      header: 'Semester',
      key: 'semester',
      sortable: true,
      align: 'right' as const,
      render: (t: any) => (
        <span className="text-[9px] font-black text-indigo-400 bg-indigo-50/50 px-2 py-0.5 rounded-full border border-indigo-100/30">
          {t.semester.toUpperCase()}
        </span>
      )
    },
    {
      header: 'Actions',
      key: 'actions',
      sortable: false,
      align: 'right' as const,
      render: (t: any) => (
        <button onClick={() => onRemoveTimetable(t.timetable_id)} className="p-1.5 text-rose-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-rose-100 shadow-sm">
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Top Bar with Filter and Add Button */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 bg-white p-1.5 rounded-xl border border-slate-200 w-full md:w-auto">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Filter Semester:</label>
          <select
            value={targetSem}
            onChange={(e) => setTargetSem(e.target.value)}
            className="bg-slate-50 border-none rounded-lg px-4 py-1.5 text-xs font-bold text-slate-700 focus:ring-0 outline-none cursor-pointer min-w-[140px]"
          >
            <option value="all">All Semesters</option>
            {semesters.map(s => <option key={s} value={s}>{s.toUpperCase().replace('SEM', 'Semester ')}</option>)}
          </select>
        </div>

        <button
          onClick={() => setShowAddForm(true)}
          className="w-full md:w-auto bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 active:scale-95 transition-all uppercase tracking-widest"
        >
          <Plus className="w-4 h-4" /> Schedule Slot
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white p-8 rounded-2xl border border-indigo-100 shadow-xl shadow-indigo-50/50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-black text-indigo-900 uppercase tracking-widest text-[10px]">Add Academic Slot</h4>
            <button onClick={() => setShowAddForm(false)} className="text-slate-400 hover:text-slate-600"><X className="w-4 h-4" /></button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
              <select
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white outline-none font-bold text-sm appearance-none cursor-pointer"
                value={newSlot.subject_id}
                onChange={e => setNewSlot({ ...newSlot, subject_id: e.target.value })}
              >
                <option value="">Select Course</option>
                {subjects
                  .filter(s => targetSem === 'all' || s.semester === targetSem)
                  .map(s => (
                    <option key={s.subject_id} value={s.subject_id}>{s.subject_code}: {s.subject_name}</option>
                  ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Day</label>
              <select
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white outline-none font-bold text-sm appearance-none cursor-pointer"
                value={newSlot.day}
                onChange={e => setNewSlot({ ...newSlot, day: parseInt(e.target.value) })}
              >
                {DAYS_OF_WEEK.map((d, i) => <option key={d} value={i + 1}>{d}</option>)}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Start</label>
              <input type="time" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white outline-none font-bold text-sm" value={newSlot.start} onChange={e => setNewSlot({ ...newSlot, start: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">End</label>
              <input type="time" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white outline-none font-bold text-sm" value={newSlot.end} onChange={e => setNewSlot({ ...newSlot, end: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Hall</label>
              <input placeholder="Ex: Hall 101" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white outline-none font-bold text-sm" value={newSlot.room} onChange={e => setNewSlot({ ...newSlot, room: e.target.value })} />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button onClick={() => setShowAddForm(false)} className="px-6 py-2.5 text-slate-400 font-bold text-xs hover:text-slate-600 transition-colors uppercase tracking-widest">Cancel</button>
            <button onClick={handleAdd} className="px-8 py-2.5 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all outline-none uppercase tracking-widest">Add Slot</button>
          </div>
        </div>
      )}

      <DataTable
        title="Weekly Academic Schedule"
        data={filteredTimetable}
        columns={scheduleColumns as any}
        onImport={() => { }}
        onExport={() => { }}
        searchPlaceholder="Search schedule..."
      />
    </div>
  );
};

export default AdminSchedule;
