
import React, { useState, useEffect } from 'react';
import { Faculty } from '../../types';
import { Clock, Plus, Save, X, Calendar as CalendarIcon, CheckCircle, AlertCircle } from 'lucide-react';

interface Props {
    faculty: Faculty;
    attendance: any[];
    leaves: any[];
    onCheckIn: () => void;
    onCheckOut: () => void;
    onApplyLeave: (reason: string) => void;
}

const MyAttendance: React.FC<Props> = ({
    faculty,
    attendance,
    leaves,
    onCheckIn,
    onCheckOut,
    onApplyLeave
}) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [showLeaveModal, setShowLeaveModal] = useState(false);
    const [leaveReason, setLeaveReason] = useState('');
    const [isCheckingIn, setIsCheckingIn] = useState(false);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    // Update clock every second
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

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
            // Handle ISO string or HH:mm:ss format
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

    const todayDate = formatLocalDate(new Date());
    const todayAttendance = attendance.find(a => a.faculty_id === faculty.faculty_id && a.attendance_date.startsWith(todayDate));
    const myLeaves = leaves.filter(l => l.faculty_id === faculty.faculty_id);

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

    const workingHours = todayAttendance ? calculateWorkingHours(todayAttendance.check_in_time, todayAttendance.check_out_time) : null;

    const handleCheckInClick = async () => {
        if (isCheckingIn) return;
        setIsCheckingIn(true);
        try {
            await onCheckIn();
        } finally {
            setIsCheckingIn(false);
        }
    };

    const handleCheckOutClick = async () => {
        if (isCheckingOut) return;
        setIsCheckingOut(true);
        try {
            await onCheckOut();
        } finally {
            setIsCheckingOut(false);
        }
    };

    // Helper to clean date string (remove timestamp)
    const cleanDate = (dateStr: string) => {
        if (!dateStr) return '';
        return dateStr.split('T')[0];
    };

    return (
        <div className="space-y-8 p-4">
            <header className="mb-8">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                    My <span className="text-indigo-600">Attendance & Leave</span>
                </h1>
                <p className="text-slate-500 font-medium">Manage your daily attendance and leave applications.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* My Attendance Section */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col justify-between">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-black text-slate-800 flex items-center gap-3">
                                <Clock className="w-6 h-6 text-indigo-600" />
                                My Attendance
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${todayAttendance?.check_in_time && todayAttendance?.check_out_time ? 'bg-emerald-100 text-emerald-700' : todayAttendance?.check_in_time ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'}`}>
                                {todayAttendance?.check_in_time && todayAttendance?.check_out_time ? 'Completed' : todayAttendance?.check_in_time ? 'In Progress' : 'Not Started'}
                            </span>
                        </div>

                        <div className="bg-slate-50 rounded-3xl p-6 text-center space-y-4">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                <p className="text-4xl font-black tabular-nums text-slate-900">{currentTime.toLocaleTimeString()}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-200/50">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Check-In</p>
                                    <p className="text-sm font-black text-emerald-600">{formatLocalTime(todayAttendance?.check_in_time)}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Check-Out</p>
                                    <p className="text-sm font-black text-rose-600">{formatLocalTime(todayAttendance?.check_out_time)}</p>
                                </div>
                            </div>

                            {workingHours && (
                                <div className="pt-2 border-t border-slate-200/50">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Duration</p>
                                    <p className="text-lg font-black text-indigo-600">{workingHours}</p>
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={handleCheckInClick}
                                disabled={!!todayAttendance?.check_in_time || isCheckingIn}
                                className={`py-4 font-black rounded-2xl transition-all shadow-lg uppercase tracking-widest text-xs flex items-center justify-center gap-2 ${!!todayAttendance?.check_in_time ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none' : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-100'}`}
                            >
                                {isCheckingIn ? 'Processing...' : (todayAttendance?.check_in_time ? 'Checked-In' : 'Check-In')}
                            </button>
                            <button
                                onClick={handleCheckOutClick}
                                disabled={!todayAttendance?.check_in_time || !!todayAttendance?.check_out_time || isCheckingOut}
                                className={`py-4 font-black rounded-2xl transition-all shadow-lg uppercase tracking-widest text-xs flex items-center justify-center gap-2 ${(!todayAttendance?.check_in_time || !!todayAttendance?.check_out_time) ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none' : 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-100'}`}
                            >
                                {isCheckingOut ? 'Processing...' : (todayAttendance?.check_out_time ? 'Checked-Out' : 'Check-Out')}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Apply for Leave Section */}
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col">
                    <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                        <h3 className="text-xl font-black text-slate-800 flex items-center gap-3">
                            <CalendarIcon className="w-6 h-6 text-indigo-600" />
                            Apply for Leave
                        </h3>
                        <button
                            onClick={() => setShowLeaveModal(true)}
                            className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="overflow-x-auto flex-1">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Date</th>
                                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Reason</th>
                                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {myLeaves.map((record, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-8 py-5 text-sm font-bold text-slate-800">{cleanDate(record.leave_date)}</td>
                                        <td className="px-8 py-5 text-sm font-medium text-slate-500">{record.reason}</td>
                                        <td className="px-8 py-5 text-right">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${record.status === 'approved' ? 'bg-emerald-50 text-emerald-600' : record.status === 'rejected' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'}`}>
                                                {record.status === 'approved' ? <CheckCircle className="w-3 h-3" /> : record.status === 'rejected' ? <X className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                                                {record.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                {myLeaves.length === 0 && (
                                    <tr>
                                        <td colSpan={3} className="px-8 py-10 text-center text-slate-400 font-bold">No leave applications found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Leave Modal */}
            {showLeaveModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-8 animate-in zoom-in duration-200">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Apply for Leave</h3>
                            <button onClick={() => setShowLeaveModal(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                                <X className="w-5 h-5 text-slate-400" />
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Leave Reason</label>
                                <textarea
                                    className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all min-h-[120px] resize-none"
                                    placeholder="Describe your reason for leave..."
                                    value={leaveReason}
                                    onChange={(e) => setLeaveReason(e.target.value)}
                                />
                            </div>

                            <button
                                onClick={() => {
                                    if (leaveReason.trim()) {
                                        onApplyLeave(leaveReason);
                                        setShowLeaveModal(false);
                                        setLeaveReason('');
                                    }
                                }}
                                className="w-full py-4 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                <Save className="w-5 h-5" />
                                Submit Application
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyAttendance;
