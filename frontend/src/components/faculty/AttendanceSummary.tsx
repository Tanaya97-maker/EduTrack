
import React, { useState } from 'react';
import { Faculty, FacultyAttendance as FacultyAttendanceType } from '../../types';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X, LogIn, LogOut, Clock } from 'lucide-react';

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

    // Helper to format date as YYYY-MM-DD in local time
    const formatLocalDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Helper to extract HH:mm:ss from a time string or Date object
    const formatLocalTime = (time: string | Date | null, includeSeconds = true) => {
        if (!time) return '--:--';
        if (typeof time === 'string') {
            const match = time.match(/(\d{2}:\d{2}:\d{2})/) || time.match(/(\d{2}:\d{2})/);
            if (match) {
                return includeSeconds ? match[0] : match[0].substring(0, 5);
            }
            return '--:--';
        }
        return time.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: includeSeconds ? '2-digit' : undefined
        });
    };

    // Calculate working hours in H.MM format with second precision
    const calculateWorkingHours = (checkIn?: string | Date, checkOut?: string | Date) => {
        if (!checkIn || !checkOut) return null;
        try {
            const timeIn = formatLocalTime(checkIn, true);
            const timeOut = formatLocalTime(checkOut, true);

            const [inH, inM, inS = 0] = timeIn.split(':').map(Number);
            const [outH, outM, outS = 0] = timeOut.split(':').map(Number);

            const totalSeconds = (outH * 3600 + outM * 60 + outS) - (inH * 3600 + inM * 60 + inS);
            if (totalSeconds < 0) return null;

            const hours = Math.floor(totalSeconds / 3600);
            const remainingSeconds = totalSeconds % 3600;
            const minutes = Math.floor(remainingSeconds / 60);

            if (minutes === 0) return `${hours}hours`;
            return `${hours}.${String(minutes).padStart(2, '0')}hours`;
        } catch {
            return null;
        }
    };

    const getAttendanceForDate = (date: Date) => {
        const dateStr = formatLocalDate(date);
        const attend = attendance.find(a => a.attendance_date.startsWith(dateStr));
        if (attend) return attend;

        const leave = leaves.find(l => l.leave_date.startsWith(dateStr) && l.status === 'approved');
        if (leave) return { status: 'leave' };

        return null;
    };

    const gridDays = [...Array(paddingDays).fill(null), ...daysInMonth];

    return (
        <>
            <div className="bg-white rounded-[2.5rem] p-4 md:p-8 shadow-xl border border-slate-100 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-4 md:top-6 right-4 md:right-8">
                    <span className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest border-2 ${isGoodStanding ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-600 border-rose-100'}`}>
                        {isGoodStanding ? 'Good Standing' : 'Low Attendance'}
                    </span>
                </div>

                <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg md:text-xl font-black text-slate-800 flex items-center gap-2 md:gap-3">
                        <CalendarIcon className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
                        My Presence
                    </h3>

                    <div className="flex items-center gap-4 md:gap-8 mb-4 md:mb-6">
                        <div className="flex-shrink-0">
                            {renderCircularProgress(overallPercentage)}
                        </div>
                        <div className="space-y-1 md:space-y-2">
                            <h3 className="text-[10px] md:text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Overall Attendance</h3>
                            <p className="text-xl md:text-2xl font-black text-slate-800">{overallPercentage}%</p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setShowCalendar(true)}
                    className="w-full mt-4 md:mt-6 py-3 md:py-4 bg-slate-900 hover:bg-black text-white font-black rounded-xl md:rounded-2xl transition-all duration-300 uppercase tracking-widest text-[10px] md:text-xs shadow-lg shadow-slate-200"
                >
                    View Attendance History
                </button>
            </div>

            {/* Calendar Modal Overlay */}
            {showCalendar && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 md:p-4 bg-slate-900/60 backdrop-blur-md">
                    <div className="bg-white w-full max-w-2xl rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
                        <div className="p-4 md:p-8 bg-black text-white flex justify-between items-center">
                            <div>
                                <h3 className="text-lg md:text-2xl font-black tracking-tight">Attendance Calendar</h3>
                                <p className="text-slate-400 text-[10px] md:text-sm font-bold uppercase tracking-widest mt-1">
                                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 md:gap-4">
                                <div className="flex bg-white/10 rounded-xl md:rounded-2xl p-0.5 md:p-1">
                                    <button onClick={handlePrevMonth} className="p-1.5 md:p-2 hover:bg-white/10 rounded-lg md:rounded-xl transition-colors">
                                        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                                    </button>
                                    <button onClick={handleNextMonth} className="p-1.5 md:p-2 hover:bg-white/10 rounded-lg md:rounded-xl transition-colors">
                                        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                                    </button>
                                </div>
                                <button onClick={() => setShowCalendar(false)} className="p-1.5 md:p-2 hover:bg-white/10 rounded-lg md:rounded-xl transition-colors">
                                    <X className="w-4 h-4 md:w-6 md:h-6" />
                                </button>
                            </div>
                        </div>

                        <div className="p-4 md:p-8">
                            <div className="grid grid-cols-7 mb-2 md:mb-4">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                    <div key={day} className="text-center text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-7 gap-1 md:gap-2">
                                {gridDays.map((date, idx) => {
                                    if (!date) return <div key={`padding-${idx}`} className="h-12 md:h-20" />;

                                    const record = getAttendanceForDate(date);
                                    let statusColor = 'bg-white border-slate-100 text-slate-700';

                                    if (record) {
                                        if (record.status === 'present') statusColor = 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-100';
                                        else if (record.status === 'absent') statusColor = 'bg-rose-500 border-rose-500 text-white shadow-lg shadow-rose-100';
                                        else if (record.status === 'leave') statusColor = 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-100';
                                    }

                                    const isToday = new Date().toDateString() === date.toDateString();
                                    const hasCheckInOut = record && 'check_in_time' in record && 'check_out_time' in record && record.check_in_time && record.check_out_time;
                                    const hours = hasCheckInOut ? calculateWorkingHours(record.check_in_time, record.check_out_time) : null;

                                    return (
                                        <div
                                            key={date.toISOString()}
                                            className={`h-12 md:h-20 rounded-lg md:rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-300 ${statusColor} ${isToday ? 'ring-2 ring-indigo-600 ring-offset-1 md:ring-offset-2' : ''} group relative`}
                                        >
                                            <span className="text-sm md:text-lg font-black">{date.getDate()}</span>
                                            {record && <span className="text-[6px] md:text-[8px] font-black uppercase tracking-tighter opacity-80">{record.status}</span>}

                                            {/* Tooltip with check-in/checkout times */}
                                            {record && record.status === 'present' && 'check_in_time' in record && (
                                                <div className="hidden group-hover:block absolute bottom-full mb-2 bg-slate-900 text-white text-[8px] md:text-[10px] font-bold px-2 py-1 rounded-lg shadow-xl z-10 whitespace-nowrap">
                                                    <div className="flex flex-col gap-0.5">
                                                        {record.check_in_time && <span>In: {formatLocalTime(record.check_in_time)}</span>}
                                                        {'check_out_time' in record && record.check_out_time && <span>Out: {formatLocalTime(record.check_out_time)}</span>}
                                                        {hours && <span className="text-emerald-400">⏱ {hours}</span>}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-4 md:mt-8 flex flex-wrap justify-center gap-3 md:gap-6">
                                <div className="flex items-center gap-1.5 md:gap-2">
                                    <div className="w-3 h-3 md:w-4 md:h-4 bg-emerald-500 rounded"></div>
                                    <span className="text-[10px] md:text-xs font-bold text-slate-600">Present</span>
                                </div>
                                <div className="flex items-center gap-1.5 md:gap-2">
                                    <div className="w-3 h-3 md:w-4 md:h-4 bg-rose-500 rounded"></div>
                                    <span className="text-[10px] md:text-xs font-bold text-slate-600">Absent</span>
                                </div>
                                <div className="flex items-center gap-1.5 md:gap-2">
                                    <div className="w-3 h-3 md:w-4 md:h-4 bg-amber-500 rounded"></div>
                                    <span className="text-[10px] md:text-xs font-bold text-slate-600">Leave</span>
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
