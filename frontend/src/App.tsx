import React, { useState, useEffect } from 'react';
import type {
    User,
    Student,
    Faculty,
    Subject,
    AttendanceRecord,
    TimetableEntry
} from './types';
import { UserType } from './types';
import {
    MOCK_USERS,
    MOCK_STUDENTS,
    MOCK_FACULTY,
    MOCK_SUBJECTS,
    MOCK_ENROLLMENTS,
    MOCK_ATTENDANCE,
    MOCK_TIMETABLE,
    MOCK_FACULTY_ATTENDANCE,
    MOCK_FACULTY_ANNOUNCEMENTS,
    MOCK_FACULTY_NOTES,
    MOCK_FACULTY_LEAVES
} from './mockData';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { ICONS } from './constants';
import { apiService } from './services/apiService';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isDemoMode, setIsDemoMode] = useState(false);

    // Live Backend State
    const [students, setStudents] = useState<Student[]>([]);
    const [faculty, setFaculty] = useState<Faculty[]>([]);
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [enrollments, setEnrollments] = useState<any[]>([]);
    const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
    const [timetable, setTimetable] = useState<TimetableEntry[]>([]);
    const [facultyAttendance, setFacultyAttendance] = useState<any[]>([]);
    const [announcements, setAnnouncements] = useState<any[]>([]);
    const [notes, setNotes] = useState<any[]>([]);
    const [leaves, setLeaves] = useState<any[]>([]);
    const [stats, setStats] = useState<any>({ total_users: 0, total_courses: 0 });
    const [facultyStats, setFacultyStats] = useState<any>({});
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch data on mount or user login
    const fetchData = async () => {
        if (isDemoMode) {
            loadMockData();
            return;
        }

        setIsLoading(true);
        try {
            const data = await apiService.getAllData(user?.user_id, user?.user_type);
            if (data && !data.error) {
                setStudents(data.students || []);
                setFaculty(data.faculty || []);
                setSubjects(data.subjects || []);
                setEnrollments(data.enrollments || []);
                setAttendanceRecords(data.attendance || []);
                setTimetable(data.timetable || []);
                setAnnouncements(data.announcements || []);
                setNotes(data.notes || []);
                setLeaves(data.leaves || []);
                setFacultyAttendance(data.facultyAttendance || []);
                if (user?.user_type === 'faculty') {
                    setFacultyStats({ attendancePercentage: data.attendancePercentage });
                }
                setStats(data.stats || {
                    total_users: (data.students?.length || 0) + (data.faculty?.length || 0),
                    total_courses: data.subjects?.length || 0,
                    participationRate: data.stats?.participationRate || 85
                });
            } else {
                throw new Error(data?.error || "Empty data");
            }
        } catch (err) {
            console.warn("API unavailable, falling back to Mock Data.");
            loadMockData();
            setIsDemoMode(true);
        } finally {
            setIsLoading(false);
        }
    };

    const loadMockData = () => {
        setStudents(MOCK_STUDENTS);
        setFaculty(MOCK_FACULTY);
        setSubjects(MOCK_SUBJECTS);
        setEnrollments(MOCK_ENROLLMENTS);
        setAttendanceRecords(MOCK_ATTENDANCE);
        setTimetable(MOCK_TIMETABLE);
        setFacultyAttendance(MOCK_FACULTY_ATTENDANCE);
        setAnnouncements(MOCK_FACULTY_ANNOUNCEMENTS);
        setNotes(MOCK_FACULTY_NOTES);
        setLeaves(MOCK_FACULTY_LEAVES);
    };

    useEffect(() => {
        if (user) {
            fetchData();
        }
    }, [user]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const loggedInUser = await apiService.login({ email, password });

            if (loggedInUser && !loggedInUser.error) {
                setUser(loggedInUser);
                setIsDemoMode(false);
                setError('');
            } else {
                const mockMatch = MOCK_USERS.find(u => u.email === email && u.password_hash === password);
                if (mockMatch) {
                    setUser(mockMatch);
                    setIsDemoMode(true);
                    console.info("Logged in via Demo Mode (Mock Data)");
                    setError('');
                } else {
                    setError(loggedInUser?.error || 'Invalid credentials.');
                }
            }
        } catch (err) {
            const mockMatch = MOCK_USERS.find(u => u.email === email && (u.password_hash === password || password === '123'));
            if (mockMatch) {
                setUser(mockMatch);
                setIsDemoMode(true);
                console.warn("Backend connection failed. Entered Demo Mode.");
                setError('');
            } else {
                setError('Backend connection failed. Please ensure the PHP server is running and database is configured.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    // --- Handlers ---

    // Student
    const handleAddStudent = async (s: any) => {
        if (!isDemoMode) await apiService.manageUser('add_student', s);
        fetchData();
    };
    const handleEditStudent = async (s: any) => {
        if (!isDemoMode) await apiService.manageUser('edit_student', s);
        fetchData();
    };
    const handleDeleteStudent = async (id: number) => {
        if (!isDemoMode) await apiService.manageUser('delete_student', { stud_id: id });
        fetchData();
    };

    // Faculty
    const handleAddFaculty = async (f: any) => {
        if (!isDemoMode) await apiService.manageUser('add_faculty', f);
        fetchData();
    };
    const handleEditFaculty = async (f: any) => {
        if (!isDemoMode) await apiService.manageUser('edit_faculty', f);
        fetchData();
    };
    const handleDeleteFaculty = async (id: number) => {
        if (!isDemoMode) await apiService.manageUser('delete_faculty', { faculty_id: id });
        fetchData();
    };

    // Subject
    const handleAddSubject = async (s: any) => {
        if (!isDemoMode) await apiService.manageSubject('add_subject', s);
        fetchData();
    };
    const handleEditSubject = async (s: any) => {
        if (!isDemoMode) await apiService.manageSubject('edit_subject', s);
        fetchData();
    };
    const handleDeleteSubject = async (id: number) => {
        if (!isDemoMode) await apiService.manageSubject('delete_subject', { subject_id: id });
        fetchData();
    };

    const handleAddTimetable = async (t: any) => {
        if (!isDemoMode) await apiService.manageSubject('add_timetable', t);
        else {
            setTimetable(prev => [...prev, { ...t, timetable_id: Math.max(0, ...prev.map(st => st.timetable_id)) + 1 }]);
        }
        fetchData();
    };

    const handleRemoveTimetable = async (id: number) => {
        if (!isDemoMode) await apiService.manageSubject('remove_timetable', { id });
        else {
            setTimetable(prev => prev.filter(t => t.timetable_id !== id));
        }
        fetchData();
    };

    const handleAssignFaculty = async (subject_id: number, faculty_id: number) => {
        if (!isDemoMode) await apiService.manageSubject('edit_subject', { subject_id, faculty_id });
        fetchData();
    };

    const handleCheckIn = async (facultyId: number) => {
        const today = new Date().toISOString().split('T')[0];
        const time = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        if (!isDemoMode) {
            await apiService.manageFacultyAttendance('check_in', { faculty_id: facultyId, date: today, time });
        } else {
            const newRecord = {
                faculty_attendance_id: Date.now(),
                faculty_id: facultyId,
                attendance_date: today,
                check_in_time: time,
                status: 'present'
            };
            setFacultyAttendance(prev => [...prev, newRecord]);
        }
        fetchData();
    };

    const handleCheckOut = async (facultyId: number) => {
        const today = new Date().toISOString().split('T')[0];
        const time = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        if (!isDemoMode) {
            await apiService.manageFacultyAttendance('check_out', { faculty_id: facultyId, date: today, time });
        } else {
            setFacultyAttendance(prev => prev.map(rec =>
                rec.faculty_id === facultyId && rec.attendance_date === today
                    ? { ...rec, check_out_time: time }
                    : rec
            ));
        }
        fetchData();
    };

    const handleApplyLeave = async (facultyId: number, reason: string) => {
        if (!isDemoMode) {
            await apiService.manageLeave('apply_leave', {
                faculty_id: facultyId,
                leave_date: new Date().toISOString().split('T')[0],
                reason: reason
            });
        } else {
            const newLeave = {
                leave_id: Date.now(),
                faculty_id: facultyId,
                leave_date: new Date().toISOString().split('T')[0],
                reason: reason,
                status: 'pending'
            };
            setLeaves(prev => [...prev, newLeave]);
        }
        fetchData();
    };

    const handleUpdateLeaveStatus = async (leaveId: number, status: 'approved' | 'rejected') => {
        if (!isDemoMode) {
            await apiService.manageLeave('update_status', { leave_id: leaveId, status });
        } else {
            setLeaves(prev => prev.map(l => l.leave_id === leaveId ? { ...l, status } : l));
        }
        fetchData();
    };

    // Announcements
    const handleAddAnnouncement = async (a: any) => {
        if (!isDemoMode) await apiService.manageAnnouncement('add_announcement', a);
        fetchData();
    };
    const handleEditAnnouncement = async (a: any) => {
        if (!isDemoMode) await apiService.manageAnnouncement('edit_announcement', a);
        fetchData();
    };
    const handleDeleteAnnouncement = async (id: number) => {
        if (!isDemoMode) await apiService.manageAnnouncement('delete_announcement', { announcement_id: id });
        fetchData();
    };

    // Notes
    const handleAddNote = async (n: any) => {
        if (!isDemoMode) await apiService.manageNote('add_note', n);
        fetchData();
    };
    const handleEditNote = async (n: any) => {
        if (!isDemoMode) await apiService.manageNote('edit_note', n);
        fetchData();
    };
    const handleDeleteNote = async (id: number) => {
        if (!isDemoMode) await apiService.manageNote('delete_note', { note_id: id });
        fetchData();
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
                <div className="w-full max-w-md bg-white rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-slate-100">
                    <div className="bg-indigo-600 p-12 text-white text-center">
                        <h1 className="text-4xl font-black tracking-tight">EduTrack</h1>
                        <p className="text-indigo-100 text-[10px] font-black uppercase tracking-[0.2em] mt-3 opacity-60">Attendance Tracking System</p>
                    </div>
                    <form onSubmit={handleLogin} className="p-12 space-y-6">
                        {error && (
                            <div className="bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold p-4 rounded-2xl flex items-center gap-3">
                                <div className="p-1 bg-rose-500 text-white rounded-full">!</div>
                                {error}
                            </div>
                        )}
                        <div className="space-y-4">
                            <input
                                type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-bold text-sm"
                                value={email} onChange={e => setEmail(e.target.value)} required
                            />
                            <input
                                type="password" placeholder="Secure Password" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-bold text-sm"
                                value={password} onChange={e => setPassword(e.target.value)} required
                            />
                        </div>
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 px-6 rounded-[2rem] shadow-2xl shadow-indigo-100 transition-all active:scale-95 text-sm uppercase tracking-widest disabled:opacity-50"
                        >
                            {isLoading ? 'Processing...' : 'Authenticate'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    const filteredStudents = students.filter(s =>
        s.stud_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.roll_no.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredFaculty = faculty.filter(f =>
        f.faculty_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredSubjects = subjects.filter(s =>
        s.subject_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.subject_code.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <BrowserRouter>
            <div className="min-h-screen bg-slate-50 flex">
                <Sidebar userType={user.user_type} />

                <div className="flex-1 flex flex-col min-h-screen">
                    <Header
                        user={user}
                        pageTitle={""}
                        onLogout={() => setUser(null)}
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                    />

                    <main className="flex-1 p-8 lg:p-12 max-w-7xl mx-auto w-full">
                        {isDemoMode && (
                            <div className="bg-amber-50 border border-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl mb-6 flex justify-between items-center shadow-sm">
                                <span>Running in Offline/Demo Mode (Backend Unavailable)</span>
                                <button onClick={() => setIsDemoMode(false)} className="underline">Retry Live Sync</button>
                            </div>
                        )}

                        <AppRoutes
                            user={user}
                            students={filteredStudents}
                            faculty={filteredFaculty}
                            subjects={filteredSubjects}
                            enrollments={enrollments}
                            attendance={attendanceRecords}
                            timetable={timetable}
                            facultyAttendance={facultyAttendance}
                            facultyStats={facultyStats}
                            announcements={announcements}
                            notes={notes}
                            leaves={leaves}
                            stats={stats}
                            onAttendanceUpdate={fetchData}
                            handleCheckIn={handleCheckIn}
                            handleCheckOut={handleCheckOut}
                            handleApplyLeave={handleApplyLeave}
                            handleUpdateLeaveStatus={handleUpdateLeaveStatus}
                            handleDeleteStudent={handleDeleteStudent}
                            handleDeleteFaculty={handleDeleteFaculty}
                            handleDeleteSubject={handleDeleteSubject}
                            handleEditSubject={handleEditSubject}
                            handleEditFaculty={handleEditFaculty}
                            handleEditStudent={handleEditStudent}
                            handleAddStudent={handleAddStudent}
                            handleAddFaculty={handleAddFaculty}
                            handleAddSubject={handleAddSubject}
                            handleAddTimetable={handleAddTimetable}
                            handleRemoveTimetable={handleRemoveTimetable}
                            handleAssignFaculty={handleAssignFaculty}
                            handleAddAnnouncement={handleAddAnnouncement}
                            handleEditAnnouncement={handleEditAnnouncement}
                            handleDeleteAnnouncement={handleDeleteAnnouncement}
                            handleAddNote={handleAddNote}
                            handleEditNote={handleEditNote}
                            handleDeleteNote={handleDeleteNote}
                            onEnrollStudent={(studId, subId) => apiService.manageUser('enroll', { studId, subId }).then(fetchData)}
                        />
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
