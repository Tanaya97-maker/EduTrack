
import React, { useState } from 'react';
import { Faculty, Subject, FacultyAttendance as FacultyAttendanceType } from '../../types';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X, Bell, Plus, Send, Trash2 } from 'lucide-react';

interface Props {
    faculty: Faculty;
    subjects: Subject[];
    attendance: FacultyAttendanceType[];
    announcements: any[];
    leaves?: any[];
    onPostAnnouncement: (a: any) => Promise<void>;
    onDeleteAnnouncement: (id: number) => Promise<void>;
}

const FacultyAttendance: React.FC<Props> = ({
    faculty,
    subjects,
    attendance,
    announcements,
    leaves = [],
    onPostAnnouncement,
    onDeleteAnnouncement
}) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showAnnounceModal, setShowAnnounceModal] = React.useState(false);
    const [targetType, setTargetType] = React.useState<'student' | 'faculty'>('student');
    const [selectedSemester, setSelectedSemester] = React.useState<string>('');

    const facultySubjects = subjects.filter(s => s.faculty_id === faculty.faculty_id);

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
                        strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
                        className={`transition-all duration-1000 ${percent >= 75 ? 'text-emerald-600' : 'text-rose-500'}`}
                    />
                </svg>
                <span className="absolute text-sm font-black text-slate-800">{percent}%</span>
            </div>
        );
    };

    const handlePostAnnouncementInternal = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);

        const announcementData = {
            faculty_id: faculty.faculty_id,
            title: formData.get('title') as string,
            message: formData.get('message') as string,
            target_type: targetType,
            semester: targetType === 'student' ? formData.get('semester') : null,
            subject_id: targetType === 'student' ? formData.get('subject_id') : null,
            department: targetType === 'faculty' ? formData.get('department') : null,
        };

        if (onPostAnnouncement) {
            await onPostAnnouncement(announcementData);
        }
        setShowAnnounceModal(false);
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
        <div className="space-y-8 p-4">
            <header className="mb-8">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                    Attendance & <span className="text-indigo-600">Announcements</span>
                </h1>
                <p className="text-slate-500 font-medium">Coordinate with students and track your presence.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Attendance Summary Card */}
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

                {/* Announcements Section */}
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col">
                    <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-indigo-50/30">
                        <h3 className="text-xl font-black text-slate-800 flex items-center gap-3">
                            <Bell className="w-6 h-6 text-indigo-600" />
                            Recent Posts
                        </h3>
                        <button
                            onClick={() => setShowAnnounceModal(true)}
                            className="p-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2"
                        >
                            <Plus className="w-5 h-5" />
                            <span className="text-xs font-black uppercase tracking-widest pr-1">New Post</span>
                        </button>
                    </div>
                    <div className="overflow-x-auto flex-1">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Content</th>
                                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Date</th>
                                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {announcements.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-8 py-5">
                                            <p className="text-sm font-bold text-slate-800 mb-0.5">{item.title}</p>
                                            <p className="text-xs text-slate-400 line-clamp-1">{item.message}</p>
                                            <p className="text-[9px] font-black text-indigo-500 uppercase mt-1 tracking-wider">
                                                {item.target_type === 'student' ? `${item.semester || 'All Seminders'} - ${subjects.find(s => s.subject_id === item.subject_id)?.subject_name || 'All Subjects'}` : `Dept: ${item.department || 'All'}`}
                                            </p>
                                        </td>
                                        <td className="px-8 py-5 text-xs font-bold text-slate-500 whitespace-nowrap">
                                            {item.created_at ? new Date(item.created_at).toLocaleDateString() : 'N/A'}
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex justify-end gap-2">
                                                {item.faculty_id === faculty.faculty_id && (
                                                    <button
                                                        onClick={async () => {
                                                            if (confirm('Delete this announcement?')) {
                                                                await onDeleteAnnouncement(item.announcement_id);
                                                            }
                                                        }}
                                                        className="p-2 text-slate-300 hover:text-rose-500 transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {announcements.length === 0 && (
                                    <tr>
                                        <td colSpan={3} className="px-8 py-10 text-center text-slate-400 font-bold italic">No announcements posted yet.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
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
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                                    <span className="text-[10px] font-black uppercase text-slate-500">Present</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-rose-500 rounded-full" />
                                    <span className="text-[10px] font-black uppercase text-slate-500">Absent</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-amber-500 rounded-full" />
                                    <span className="text-[10px] font-black uppercase text-slate-500">Leave</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Announcement Modal */}
            {showAnnounceModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
                    <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
                        <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-indigo-600 text-white">
                            <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
                                <Send className="w-6 h-6" />
                                Post Announcement
                            </h3>
                            <button
                                onClick={() => setShowAnnounceModal(false)}
                                className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handlePostAnnouncementInternal} className="p-8 space-y-6">
                            <div className="flex p-1 bg-slate-50 rounded-2xl border border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setTargetType('student')}
                                    className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${targetType === 'student' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                                >
                                    To Students
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setTargetType('faculty')}
                                    className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${targetType === 'faculty' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                                >
                                    To Faculty
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {targetType === 'student' && (
                                    <>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Semester</label>
                                            <select
                                                name="semester"
                                                required
                                                value={selectedSemester}
                                                onChange={(e) => setSelectedSemester(e.target.value)}
                                                className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all appearance-none"
                                            >
                                                <option value="">Select Semester</option>
                                                {['sem1', 'sem2', 'sem3', 'sem4', 'sem5', 'sem6', 'sem7', 'sem8'].map(sem => (
                                                    <option key={sem} value={sem}>{sem.toUpperCase()}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                                            <select name="subject_id" required className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all appearance-none">
                                                <option value="">Select Subject</option>
                                                {facultySubjects
                                                    .filter(s => !selectedSemester || s.semester === selectedSemester)
                                                    .map(s => (
                                                        <option key={s.subject_id} value={s.subject_id}>{s.subject_name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </>
                                )}
                                {targetType === 'faculty' && (
                                    <div className="col-span-2 space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Department</label>
                                        <select name="department" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all appearance-none">
                                            <option value="">All Departments</option>
                                            <option value="comp">Computer Engineering</option>
                                            <option value="mech">Mechanical Engineering</option>
                                            <option value="ece">Electronics & Communication</option>
                                        </select>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Title</label>
                                <input
                                    name="title"
                                    required
                                    placeholder="Important: Quiz Rescheduled"
                                    className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    placeholder="Details of the announcement..."
                                    className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-100 focus:bg-white outline-none font-bold text-sm transition-all h-32 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all uppercase tracking-widest text-xs"
                            >
                                Send Announcement
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FacultyAttendance;
