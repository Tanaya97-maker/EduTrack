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

    // Fetch data on mount or user login
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const data = await apiService.getAllData(user?.user_id, user?.user_type);
            if (data && !data.error) {
                setStudents(data.students || []);
                setFaculty(data.faculty || []);
                setSubjects(data.subjects || []);
                setEnrollments(data.enrollments || []);
                setAttendanceRecords(data.attendance || []);

                // Fetch specialized schedule
                if (user?.user_type === 'student' && (data.students?.[0]?.stud_id)) {
                    const sched = await apiService.getStudentSchedule(data.students[0].stud_id);
                    setTimetable(sched || []);
                } else if (user?.user_type === 'faculty' && (data.faculty?.[0]?.faculty_id)) {
                    const sched = await apiService.getFacultySchedule(data.faculty[0].faculty_id);
                    setTimetable(sched || []);
                } else {
                    setTimetable(data.timetable || []);
                }
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
            console.error("API Error:", err);
            setError("Failed to fetch data from server.");
        } finally {
            setIsLoading(false);
        }
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
                setError('');
            } else {
                setError(loggedInUser?.error || 'Invalid credentials.');
            }
        } catch (err) {
            setError('Backend connection failed. Please ensure the server is running.');
        } finally {
            setIsLoading(false);
        }
    };

    // --- Handlers ---

    // Student
    const handleAddStudent = async (s: any) => {
        await apiService.manageUser('add_student', s);
        fetchData();
    };
    const handleEditStudent = async (s: any) => {
        await apiService.manageUser('edit_student', s);
        fetchData();
    };
    const handleDeleteStudent = async (id: number) => {
        await apiService.manageUser('delete_student', { stud_id: id });
        fetchData();
    };

    // Faculty
    const handleAddFaculty = async (f: any) => {
        await apiService.manageUser('add_faculty', f);
        fetchData();
    };
    const handleEditFaculty = async (f: any) => {
        await apiService.manageUser('edit_faculty', f);
        fetchData();
    };
    const handleDeleteFaculty = async (id: number) => {
        await apiService.manageUser('delete_faculty', { faculty_id: id });
        fetchData();
    };

    // Subject
    const handleAddSubject = async (s: any) => {
        await apiService.manageSubject('add_subject', s);
        fetchData();
    };
    const handleEditSubject = async (s: any) => {
        await apiService.manageSubject('edit_subject', s);
        fetchData();
    };
    const handleDeleteSubject = async (id: number) => {
        await apiService.manageSubject('delete_subject', { subject_id: id });
        fetchData();
    };

    const handleAddTimetable = async (t: any) => {
        await apiService.manageSubject('add_timetable', t);
        fetchData();
    };

    const handleRemoveTimetable = async (id: number) => {
        await apiService.manageSubject('remove_timetable', { id });
        fetchData();
    };

    const handleAssignFaculty = async (subject_id: number, faculty_id: number) => {
        await apiService.manageSubject('edit_subject', { subject_id, faculty_id });
        fetchData();
    };

    const handleCheckIn = async (facultyId: number) => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const today = `${year}-${month}-${day}`;
        const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        await apiService.manageFacultyAttendance('check_in', { faculty_id: facultyId, date: today, time });
        fetchData();
    };

    const handleCheckOut = async (facultyId: number) => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const today = `${year}-${month}-${day}`;
        const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        await apiService.manageFacultyAttendance('check_out', { faculty_id: facultyId, date: today, time });
        fetchData();
    };

    const handleApplyLeave = async (facultyId: number, reason: string) => {
        await apiService.manageLeave('apply_leave', {
            faculty_id: facultyId,
            leave_date: new Date().toISOString().split('T')[0],
            reason: reason
        });
        fetchData();
    };

    const handleUpdateLeaveStatus = async (leaveId: number, status: 'approved' | 'rejected') => {
        await apiService.manageLeave('update_status', { leave_id: leaveId, status });
        fetchData();
    };

    // Announcements
    const handleAddAnnouncement = async (a: any) => {
        await apiService.manageAnnouncement('add_announcement', a);
        fetchData();
    };
    const handleEditAnnouncement = async (a: any) => {
        await apiService.manageAnnouncement('edit_announcement', a);
        fetchData();
    };
    const handleDeleteAnnouncement = async (id: number) => {
        await apiService.manageAnnouncement('delete_announcement', { announcement_id: id });
        fetchData();
    };

    // Notes
    const handleAddNote = async (n: any) => {
        await apiService.manageNote('add_note', n);
        fetchData();
    };
    const handleEditNote = async (n: any) => {
        await apiService.manageNote('edit_note', n);
        fetchData();
    };
    const handleDeleteNote = async (id: number) => {
        await apiService.manageNote('delete_note', { note_id: id });
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


    return (
        <BrowserRouter>
            <div className="min-h-screen bg-slate-50 flex">
                <Sidebar userType={user.user_type} />

                <div className="flex-1 flex flex-col min-h-screen">
                    <Header
                        user={user}
                        pageTitle={""}
                        onLogout={() => setUser(null)}
                    />

                    <main className="flex-1 p-8 lg:p-12 max-w-7xl mx-auto w-full">

                        <AppRoutes
                            user={user}
                            students={students}
                            faculty={faculty}
                            subjects={subjects}
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
