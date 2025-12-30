
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
  const [targetSem, setTargetSem] = useState<number>(5);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSlot, setNewSlot] = useState({
    subject_id: '',
    day: 1,
    start: '09:00',
    end: '10:00',
    room: ''
  });

  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  
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
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <div>
          <h3 className="text-xl font-black text-slate-800">Timetable Architect</h3>
          <p className="text-sm text-slate-400">Configure weekly schedules by semester</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Select Semester:</label>
          <select 
            value={targetSem} 
            onChange={(e) => setTargetSem(parseInt(e.target.value))}
            className="bg-slate-50 border-none rounded-xl px-4 py-2 text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            {semesters.map(s => <option key={s} value={s}>Semester {s}</option>)}
          </select>
          <button 
            onClick={() => setShowAddForm(true)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg shadow-indigo-100 flex items-center gap-2"
          >
            {ICONS.Plus} Add Slot
          </button>
        </div>
      </div>

      {showAddForm && (
        <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 space-y-6">
          <div className="flex justify-between items-center">
            <h4 className="font-black text-indigo-900">Add New Lecture Slot</h4>
            <button onClick={() => setShowAddForm(false)} className="text-indigo-400 hover:text-indigo-600">✕</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <select 
              className="p-3 rounded-xl border-none text-sm font-medium"
              value={newSlot.subject_id}
              onChange={e => setNewSlot({...newSlot, subject_id: e.target.value})}
            >
              <option value="">Select Subject</option>
              {subjects.filter(s => s.semester === targetSem).map(s => (
                <option key={s.subject_id} value={s.subject_id}>{s.subject_name} ({s.subject_code})</option>
              ))}
            </select>
            <select 
              className="p-3 rounded-xl border-none text-sm font-medium"
              value={newSlot.day}
              onChange={e => setNewSlot({...newSlot, day: parseInt(e.target.value)})}
            >
              {DAYS_OF_WEEK.map((d, i) => <option key={d} value={i+1}>{d}</option>)}
            </select>
            <input type="time" className="p-3 rounded-xl border-none text-sm font-medium" value={newSlot.start} onChange={e => setNewSlot({...newSlot, start: e.target.value})} />
            <input type="time" className="p-3 rounded-xl border-none text-sm font-medium" value={newSlot.end} onChange={e => setNewSlot({...newSlot, end: e.target.value})} />
            <input placeholder="Room No" className="p-3 rounded-xl border-none text-sm font-medium" value={newSlot.room} onChange={e => setNewSlot({...newSlot, room: e.target.value})} />
          </div>
          <button onClick={handleAdd} className="w-full bg-indigo-600 text-white font-black py-3 rounded-xl">Confirm Slot Assignment</button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        {DAYS_OF_WEEK.map((day, dIdx) => {
          const daySlots = filteredTimetable.filter(t => t.day_of_week === dIdx + 1);
          return (
            <div key={day} className="space-y-4">
              <div className="text-center py-2 bg-slate-100 rounded-lg text-[10px] font-black uppercase text-slate-500 tracking-widest">{day}</div>
              {daySlots.length > 0 ? (
                daySlots.sort((a,b) => a.start_time.localeCompare(b.start_time)).map(slot => {
                  const sub = subjects.find(s => s.subject_id === slot.subject_id);
                  return (
                    <div key={slot.timetable_id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm relative group">
                      <button 
                        onClick={() => onRemoveTimetable(slot.timetable_id)}
                        className="absolute top-2 right-2 p-1 bg-rose-50 text-rose-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        {ICONS.Delete}
                      </button>
                      <div className="text-[10px] font-black text-indigo-600 uppercase mb-1">{sub?.subject_code}</div>
                      <div className="text-xs font-bold text-slate-800 line-clamp-1">{sub?.subject_name}</div>
                      <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400 font-bold">
                        <span>{slot.start_time} - {slot.end_time}</span>
                        <span className="text-indigo-400">Rm {slot.room_no}</span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="h-20 flex items-center justify-center border-2 border-dashed border-slate-100 rounded-2xl text-[10px] text-slate-300 font-bold uppercase">No Classes</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSchedule;
