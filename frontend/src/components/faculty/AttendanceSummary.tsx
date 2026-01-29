
import React, { useState } from 'react';
import { Faculty, FacultyAttendance as FacultyAttendanceType } from '../../types';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Props {
    faculty: Faculty;
    attendance: FacultyAttendanceType[];
    leaves?: any[];
}

const AttendanceSummary: React.FC<Props> = ({ faculty, attendance, leaves = [] }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

    // Calculate Summary
    const totalDays = attendance.length;
    const presentDays = attendance.filter(a => a.status === 'present').length;

    const overallPercentage = totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0;
    const isGoodStanding = overallPercentage >= 75;

    const renderCircularProgress = (percent: number) => {
        const radius = 35;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;

        return (
            <div className="relative inline-flex items-center justify-center">
                <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r={radius} stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-100" />
                    <circle
                        cx="40" cy="40" r={radius} stroke="currentColor" strokeWidth="6" fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className={`transition-all duration-1000 ${percent >= 75 ? 'text-emerald-600' : 'text-rose-500'}`}
                    />
                </svg>
                <span className="absolute text-sm font-black text-slate-800">{percent}%</span>
            </div>
        );
    };

    // Calendar Logic
    const handlePrevMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    };

    const daysInMonth = Array.from({ length: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() }, (_, i) => {
        return new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
    });

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const paddingDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const getAttendanceForDate = (date: Date) => {
        const dateStr = date.toISOString().split('T')[0];
        const attend = attendance.find(a => a.attendance_date.startsWith(dateStr));
        if (attend) return attend;

        const leave = leaves.find(l => l.leave_date.startsWith(dateStr) && l.status === 'approved');
        if (leave) return { status: 'leave' };

        return null;
    };

    const gridDays = [...Array(paddingDays).fill(null), ...daysInMonth];

    return (
        <>
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-6 right-8">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 ${isGoodStanding ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-600 border-rose-100'}`}>
                        {isGoodStanding ? 'Good Standing' : 'Low Attendance'}
                    </span>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-black text-slate-800 flex items-center gap-3">
                        <CalendarIcon className="w-6 h-6 text-indigo-600" />
                        My Presence
                    </h3>

                    <div className="flex items-center gap-8 mb-6">
                        <div className="flex-shrink-0">
                            {renderCircularProgress(overallPercentage)}
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Overall Attendance</h3>
                            <p className="text-2xl font-black text-slate-800">{overallPercentage}%</p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setShowCalendar(true)}
                    className="w-full mt-6 py-4 bg-slate-900 hover:bg-black text-white font-black rounded-2xl transition-all duration-300 uppercase tracking-widest text-xs shadow-lg shadow-slate-200"
                >
                    View Attendance History
                </button>
            </div>

            {/* Calendar Modal Overlay */}
            {showCalendar && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
                    <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
                        <div className="p-8 bg-black text-white flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-black tracking-tight">Attendance Calendar</h3>
                                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">
                                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex bg-white/10 rounded-2xl p-1">
                                    <button onClick={handlePrevMonth} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button onClick={handleNextMonth} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                                <button onClick={() => setShowCalendar(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="grid grid-cols-7 mb-4">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                    <div key={day} className="text-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-7 gap-2">
                                {gridDays.map((date, idx) => {
                                    if (!date) return <div key={`padding-${idx}`} className="h-16" />;

                                    const record = getAttendanceForDate(date);
                                    let statusColor = 'bg-white border-slate-100 text-slate-700';

                                    if (record) {
                                        if (record.status === 'present') statusColor = 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-100';
                                        else if (record.status === 'absent') statusColor = 'bg-rose-500 border-rose-500 text-white shadow-lg shadow-rose-100';
                                        else if (record.status === 'leave') statusColor = 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-100';
                                    }

                                    const isToday = new Date().toDateString() === date.toDateString();

                                    return (
                                        <div
                                            key={date.toISOString()}
                                            className={`h-16 rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-300 ${statusColor} ${isToday ? 'ring-2 ring-indigo-600 ring-offset-2' : ''}`}
                                        >
                                            <span className="text-lg font-black">{date.getDate()}</span>
                                            {record && <span className="text-[8px] font-black uppercase tracking-tighter opacity-80">{record.status}</span>}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-8 flex justify-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                                    <span className="text-xs font-bold text-slate-600">Present</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-rose-500 rounded"></div>
                                    <span className="text-xs font-bold text-slate-600">Absent</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-amber-500 rounded"></div>
                                    <span className="text-xs font-bold text-slate-600">Leave</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AttendanceSummary;
