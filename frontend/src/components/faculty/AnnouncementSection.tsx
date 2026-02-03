
import React, { useState } from 'react';
import { Faculty, Subject } from '../../types';
import { Bell, Plus, Send, Trash2, X } from 'lucide-react';

interface Props {
    faculty: Faculty;
    subjects: Subject[];
    announcements: any[];
    onPostAnnouncement: (a: any) => Promise<void>;
    onDeleteAnnouncement: (id: number) => Promise<void>;
}

const AnnouncementSection: React.FC<Props> = ({
    faculty,
    subjects,
    announcements,
    onPostAnnouncement,
    onDeleteAnnouncement
}) => {
    const [showAnnounceModal, setShowAnnounceModal] = useState(false);
    const [targetType, setTargetType] = useState<'student' | 'faculty'>('student');
    const [selectedSemester, setSelectedSemester] = useState<string>('');

    const facultySubjects = subjects.filter(s => s.faculty_id === faculty.faculty_id);

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

    return (
        <>
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col">
                <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-indigo-50/30">
                    <h3 className="text-xl font-black text-slate-800 flex items-center gap-3">
                        <Bell className="w-6 h-6 text-indigo-600" />
                        Announcements
                    </h3>
                    <button
                        onClick={() => setShowAnnounceModal(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl transition-all text-xs uppercase tracking-widest shadow-lg shadow-indigo-100"
                    >
                        <Plus className="w-4 h-4" />
                        New Post
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Announcement Details</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Target Audience</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Date Posted</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {announcements.map((ann) => (
                                <tr key={ann.announcement_id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-6">
                                        <p className="text-base font-bold text-slate-800 mb-1">{ann.title}</p>
                                        <p className="text-xs text-slate-400 line-clamp-2 max-w-md leading-relaxed">{ann.message}</p>
                                    </td>
                                    <td className="px-8 py-6 text-xs font-bold text-slate-500 whitespace-nowrap">
                                        {ann.target_type === 'student'
                                            ? `${ann.semester || 'All Semesters'} • ${subjects.find(s => s.subject_id === ann.subject_id)?.subject_name || 'All Subjects'}`
                                            : `Faculty • ${ann.department || 'All Departments'}`}
                                    </td>
                                    <td className="px-8 py-6 text-xs font-bold text-slate-500 whitespace-nowrap">
                                        {new Date(ann.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        {ann.faculty_id === faculty.faculty_id && (
                                            <button
                                                onClick={() => onDeleteAnnouncement(ann.announcement_id)}
                                                className="p-2.5 bg-slate-50 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {announcements.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-8 py-16 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="p-4 bg-slate-50 rounded-full text-slate-200">
                                                <Bell className="w-12 h-12" />
                                            </div>
                                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No announcements yet. Start by creating one!</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Announcement Modal */}
            {showAnnounceModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
                    <div className="bg-white w-full max-w-lg rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
                        <div className="p-8 bg-indigo-600 text-white flex justify-between items-center">
                            <h3 className="text-2xl font-black tracking-tight">New Announcement</h3>
                            <button onClick={() => setShowAnnounceModal(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handlePostAnnouncementInternal} className="p-8 space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Target Audience</label>
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setTargetType('student')}
                                        className={`flex-1 py-3 px-4 rounded-2xl font-bold text-sm transition-all ${targetType === 'student' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                                    >
                                        Students
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setTargetType('faculty')}
                                        className={`flex-1 py-3 px-4 rounded-2xl font-bold text-sm transition-all ${targetType === 'faculty' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                                    >
                                        Faculty
                                    </button>
                                </div>
                            </div>

                            {targetType === 'student' && (
                                <>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Semester</label>
                                        <select
                                            name="semester"
                                            value={selectedSemester}
                                            onChange={(e) => setSelectedSemester(e.target.value)}
                                            className="w-full px-4 py-3 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-bold text-sm"
                                        >
                                            <option value="">All Semesters</option>
                                            <option value="1">Semester 1</option>
                                            <option value="2">Semester 2</option>
                                            <option value="3">Semester 3</option>
                                            <option value="4">Semester 4</option>
                                            <option value="5">Semester 5</option>
                                            <option value="6">Semester 6</option>
                                            <option value="7">Semester 7</option>
                                            <option value="8">Semester 8</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Subject</label>
                                        <select
                                            name="subject_id"
                                            className="w-full px-4 py-3 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-bold text-sm"
                                        >
                                            <option value="">All Subjects</option>
                                            {facultySubjects.map(sub => (
                                                <option key={sub.subject_id} value={sub.subject_id}>
                                                    {sub.subject_name} ({sub.subject_code})
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </>
                            )}

                            {targetType === 'faculty' && (
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Department</label>
                                    <select
                                        name="department"
                                        className="w-full px-4 py-3 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-bold text-sm"
                                    >
                                        <option value="">All Departments</option>
                                        <option value="Comp">Computer</option>
                                        <option value="Mech">Mechanical</option>
                                        <option value="EC">Electronics</option>
                                        <option value="IT">Information Technology</option>
                                    </select>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    placeholder="Announcement title"
                                    className="w-full px-4 py-3 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-bold text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Write your announcement here..."
                                    className="w-full px-4 py-3 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-bold text-sm resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 px-6 rounded-[2rem] shadow-2xl shadow-indigo-100 transition-all active:scale-95 text-sm uppercase tracking-widest flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                Post Announcement
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AnnouncementSection;
