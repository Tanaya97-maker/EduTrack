
import React, { useState } from 'react';
import { Subject, TimetableEntry } from '../types';
import { ICONS, DAYS_OF_WEEK } from '../constants';

interface Props {
  subjects: Subject[];
  timetable: TimetableEntry[];
  onAddTimetable: (t: Omit<TimetableEntry, 'timetable_id'>) => void;
  onRemoveTimetable: (id: number) => void;
}

const AdminSchedule: React.FC<Props> = ({ subjects, timetable, onAddTimetable, onRemoveTimetable }) => {
  const [targetSem, setTargetSem] = useState<string>('sem1');
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
    const sub = subjects.find(s => s.subject_id === t.subject_id);
    return sub?.semester === targetSem;
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

  const openAddForDay = (dayIndex: number) => {
    setNewSlot(prev => ({ ...prev, day: dayIndex + 1 }));
    setShowAddForm(true);
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm shadow-slate-200/50">
        <div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Temporal Architect</h3>
          <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest text-[10px]">Weekly Curricular Orchestration</p>
        </div>
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl w-full md:w-auto">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4">Filter:</label>
          <select
            value={targetSem}
            onChange={(e) => setTargetSem(e.target.value)}
            className="bg-white border-2 border-indigo-50 rounded-xl px-6 py-3 text-sm font-black text-indigo-900 focus:ring-4 focus:ring-indigo-50 outline-none transition-all appearance-none cursor-pointer min-w-[160px]"
          >
            {semesters.map(s => <option key={s} value={s}>{s.toUpperCase().replace('SEM', 'Semester ')}</option>)}
          </select>
        </div>
      </div>

      {showAddForm && (
        <div className="bg-white border-2 border-indigo-100 rounded-[2.5rem] p-10 space-y-8 shadow-2xl shadow-indigo-100/50 animate-in zoom-in-95 duration-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
          <div className="flex justify-between items-center">
            <h4 className="font-black text-indigo-900 uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 font-black">{ICONS.Plus}</span>
              Register Curricular Slot
            </h4>
            <button onClick={() => setShowAddForm(false)} className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-300 transition-colors">{ICONS.X}</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest ml-1">Subject Module</label>
              <select
                className="w-full p-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all appearance-none"
                value={newSlot.subject_id}
                onChange={e => setNewSlot({ ...newSlot, subject_id: e.target.value })}
              >
                <option value="">Select Module</option>
                {subjects.filter(s => s.semester === targetSem).map(s => (
                  <option key={s.subject_id} value={s.subject_id}>{s.subject_code}: {s.subject_name}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest ml-1">Academic Day</label>
              <select
                className="w-full p-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all appearance-none"
                value={newSlot.day}
                onChange={e => setNewSlot({ ...newSlot, day: parseInt(e.target.value) })}
              >
                {DAYS_OF_WEEK.map((d, i) => <option key={d} value={i + 1}>{d}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest ml-1">Session Start</label>
              <input type="time" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all" value={newSlot.start} onChange={e => setNewSlot({ ...newSlot, start: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest ml-1">Session End</label>
              <input type="time" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all" value={newSlot.end} onChange={e => setNewSlot({ ...newSlot, end: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest ml-1">Facility Room</label>
              <input placeholder="Room/Hall" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all" value={newSlot.room} onChange={e => setNewSlot({ ...newSlot, room: e.target.value })} />
            </div>
          </div>

          <div className="flex justify-end gap-4 border-t border-slate-50 pt-8 mt-2">
            <button onClick={() => setShowAddForm(false)} className="px-8 py-4 text-slate-400 font-black text-sm hover:text-slate-600 transition-colors">ABORT</button>
            <button onClick={handleAdd} className="bg-indigo-600 text-white font-black px-12 py-4 rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all outline-none">DEPLOY SLOT</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {DAYS_OF_WEEK.map((day, dIdx) => {
          const daySlots = filteredTimetable.filter(t => t.day_of_week === dIdx + 1);
          return (
            <div key={day} className="flex flex-col gap-5">
              <div className="flex justify-between items-center px-4 py-3 bg-white rounded-2xl border border-slate-100 shadow-sm relative group overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-500"></div>
                <span className="text-[11px] font-black uppercase text-slate-700 tracking-[0.15em] ml-1">{day}</span>
                <button
                  onClick={() => openAddForDay(dIdx)}
                  className="w-8 h-8 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all transform active:scale-75 shadow-sm border border-indigo-100/50"
                >
                  {ICONS.Plus}
                </button>
              </div>

              <div className="flex-1 space-y-4 min-h-[400px]">
                {daySlots.length > 0 ? (
                  daySlots.sort((a, b) => a.start_time.localeCompare(b.start_time)).map(slot => {
                    const sub = subjects.find(s => s.subject_id === slot.subject_id);
                    return (
                      <div key={slot.timetable_id} className="bg-white p-5 rounded-[1.75rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all group relative overflow-hidden">
                        <button
                          onClick={() => onRemoveTimetable(slot.timetable_id)}
                          className="absolute top-3 right-3 p-2 bg-white text-rose-300 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all shadow-sm border border-slate-50 hover:border-rose-100"
                        >
                          {ICONS.Delete}
                        </button>
                        <div className="bg-indigo-50/50 text-indigo-600 text-[9px] font-black px-2.5 py-1 rounded-lg inline-block uppercase tracking-widest mb-3 border border-indigo-100/30">
                          {sub?.subject_code || 'MOD001'}
                        </div>
                        <h5 className="text-xs font-black text-slate-800 leading-relaxed pr-4">{sub?.subject_name || 'Generic Module'}</h5>
                        <div className="mt-6 flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                            <span className="p-1 px-1.5 bg-slate-50 rounded-md text-slate-500">{slot.start_time}</span>
                            <span>to</span>
                            <span className="p-1 px-1.5 bg-slate-50 rounded-md text-slate-500">{slot.end_time}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[9px] font-black text-indigo-400 uppercase tracking-tighter">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></div>
                            Facility {slot.room_no || 'TBD'}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="h-40 flex flex-col items-center justify-center border-2 border-dashed border-slate-100 rounded-[2rem] text-center p-6 bg-slate-50/30">
                    <div className="text-[32px] mb-2 opacity-20 filter grayscale">📅</div>
                    <div className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.2em]">Sanctuary Mode</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSchedule;
