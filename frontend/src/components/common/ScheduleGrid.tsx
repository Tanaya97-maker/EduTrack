import React from 'react';
import { TimetableEntry } from '../../types';
import { DAYS_OF_WEEK } from '../../constants';
import { MapPin } from 'lucide-react';

interface Props {
    schedule: TimetableEntry[];
    title?: string;
    isHoliday?: (day: number) => boolean;
}

const HOURS = Array.from({ length: 9 }, (_, i) => i + 9); // 9 AM to 5 PM

const ScheduleGrid: React.FC<Props> = ({ schedule, title, isHoliday }) => {
    const getEntryForSlot = (day: number, hour: number) => {
        return schedule.find(entry => {
            if (entry.day_of_week !== day) return false;
            const startHour = parseInt(entry.start_time.split(':')[0]);
            return startHour === hour;
        });
    };

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                    {title || 'Weekly Schedule'}
                </h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead className="sticky top-0 z-10">
                        <tr className="bg-slate-50/80 backdrop-blur-sm border-b border-slate-100">
                            <th className="px-6 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500 w-24">
                                Time
                            </th>
                            {DAYS_OF_WEEK.map((day, i) => (
                                <th
                                    key={day}
                                    className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500 text-center border-l border-slate-100/50 ${isHoliday && isHoliday(i + 1) ? 'bg-rose-50/30' : ''
                                        }`}
                                >
                                    {day}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {HOURS.map((hour) => (
                            <tr key={hour} className="hover:bg-indigo-50/10 transition-colors group">
                                <td className="px-6 py-3 text-[10px] font-black text-slate-400 bg-slate-50/30 border-r border-slate-100/50 text-center whitespace-nowrap tabular-nums">
                                    {hour > 12 ? `${hour - 12} PM` : hour === 12 ? '12 PM' : `${hour} AM`}
                                </td>
                                {Array.from({ length: 7 }, (_, i) => i + 1).map((day) => {
                                    const entry = getEntryForSlot(day, hour);
                                    const holiday = isHoliday && isHoliday(day);

                                    return (
                                        <td
                                            key={day}
                                            className={`px-2 py-2 border-l border-slate-100/50 relative transition-colors ${holiday ? 'bg-rose-50/5' : ''
                                                }`}
                                        >
                                            <div className="w-full relative">
                                                {entry && (
                                                    <div
                                                        className={`p-2 rounded-lg shadow-sm border flex flex-col justify-between transition-all hover:scale-[1.01] cursor-default ${entry.is_holiday
                                                            ? 'bg-rose-50 border-rose-100 text-rose-700'
                                                            : 'bg-indigo-600 border-indigo-500 text-white shadow-indigo-100'
                                                            }`}
                                                    >
                                                        <div>
                                                            <p className="text-[9px] font-black uppercase tracking-widest opacity-80 mb-0.5">
                                                                {entry.display_info || entry.start_time}
                                                            </p>
                                                            <p className="text-[11px] font-black leading-tight">
                                                                {entry.display_info
                                                                    ? entry.display_info.split('(')[0]
                                                                    : 'Class'}
                                                            </p>
                                                        </div>
                                                        {entry.room_no && (
                                                            <div className="flex items-center gap-1 opacity-80 mt-1">
                                                                <MapPin className="w-2.5 h-2.5" />
                                                                <span className="text-[8px] font-bold">
                                                                    {entry.room_no}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                                {holiday && !entry && (
                                                    <div className="flex items-center justify-center py-1">
                                                        <span className="text-[9px] font-black text-slate-500 uppercase">
                                                            Holiday
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScheduleGrid;
