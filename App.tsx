
import React, { useState, useEffect } from 'react';
import { 
  User, 
  UserType, 
  Student, 
  Faculty, 
  Subject, 
  AttendanceRecord, 
  TimetableEntry
} from './types';
import { 
  MOCK_USERS, 
  MOCK_STUDENTS, 
  MOCK_FACULTY, 
  MOCK_SUBJECTS, 
  MOCK_ENROLLMENTS, 
  MOCK_ATTENDANCE, 
  MOCK_TIMETABLE 
} from './mockData';
import FacultyDashboard from './components/FacultyDashboard';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';
import AdminSchedule from './components/AdminSchedule';
import UserManagement from './components/UserManagement';
import SubjectManagement from './components/SubjectManagement';
import Reports from './components/Reports';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { ICONS } from './constants';
import { apiService } from './services/apiService';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [isLoading, setIsLoading] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);

  // Live Backend State
  const [students, setStudents] = useState<Student[]>([]);
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [timetable, setTimetable] = useState<TimetableEntry[]>([]);

  // Fetch data on mount or user login
  const fetchData = async () => {
    if (isDemoMode) {
      loadMockData();
      return;
    }

    setIsLoading(true);
    try {
      const data = await apiService.getAllData();
      if (data && !data.error) {
        setStudents(data.students || []);
        setFaculty(data.faculty || []);
        setSubjects(data.subjects || []);
        setEnrollments(data.enrollments || []);
        setAttendanceRecords(data.attendance || []);
        setTimetable(data.timetable || []);
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
      } else {
        // Correcting login: Fallback to mock for demo if PHP is missing or credentials failed in DB
        const mockMatch = MOCK_USERS.find(u => u.email === email && u.password_hash === password);
        if (mockMatch) {
          setUser(mockMatch);
          setIsDemoMode(true);
          console.info("Logged in via Demo Mode (Mock Data)");
        } else {
          setError(loggedInUser?.error || 'Invalid credentials.');
        }
      }
    } catch (err) {
      // Automatic fallback if PHP server isn't running at all
      const mockMatch = MOCK_USERS.find(u => u.email === email && (u.password_hash === password || password === '123'));
      if (mockMatch) {
        setUser(mockMatch);
        setIsDemoMode(true);
        console.warn("Backend connection failed. Entered Demo Mode.");
      } else {
        setError('Backend connection failed. Please check if PHP server is running.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddStudent = async (s: any) => {
    if (!isDemoMode) await apiService.manageUser('add_student', s);
    fetchData();
  };

  const handleAddFaculty = async (f: any) => {
    if (!isDemoMode) await apiService.manageUser('add_faculty', f);
    fetchData();
  };

  const handleAssignFaculty = async (subject_id: number, faculty_id: number) => {
    if (!isDemoMode) await apiService.manageSubject('assign_faculty', { subject_id, faculty_id });
    fetchData();
  };

  const handleRemoveStudent = async (id: number) => {
    if (!isDemoMode) await apiService.manageUser('remove_student', { id });
    fetchData();
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="w-full max-w-md bg-white rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-slate-100">
          <div className="bg-indigo-600 p-12 text-white text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl backdrop-blur-md mb-6 ring-8 ring-white/10">
              {ICONS.GraduationCap}
            </div>
            <h1 className="text-4xl font-black tracking-tight">EduTrack</h1>
            <p className="text-indigo-100 text-[10px] font-black uppercase tracking-[0.2em] mt-3 opacity-60">PHP/MySQL Cloud Portal</p>
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
            <div className="text-center text-[10px] text-slate-300 font-bold uppercase tracking-widest pt-2">
              Password is "123" for Demo
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar 
        userType={user.user_type} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      
      <div className="flex-1 flex flex-col min-h-screen">
        <Header 
          user={user} 
          pageTitle={activeTab} 
          onLogout={() => setUser(null)} 
        />
        
        <main className="flex-1 p-8 lg:p-12 max-w-7xl mx-auto w-full">
          {isDemoMode && (
            <div className="bg-amber-50 border border-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl mb-6 flex justify-between items-center shadow-sm">
              <span>Running in Offline/Demo Mode (Backend Unavailable)</span>
              <button onClick={() => setIsDemoMode(false)} className="underline">Retry Live Sync</button>
            </div>
          )}
          
          {user.user_type === UserType.ADMIN ? (
            <>
              {activeTab === 'dashboard' && (
                <AdminDashboard 
                  students={students}
                  faculty={faculty}
                  subjects={subjects}
                  enrollments={enrollments}
                  attendance={attendanceRecords}
                  onRemoveStudent={handleRemoveStudent}
                  onRemoveFaculty={id => apiService.manageUser('remove_faculty', {id}).then(fetchData)}
                  onRemoveSubject={id => apiService.manageSubject('remove', {id}).then(fetchData)}
                  onUpdateSubject={s => apiService.manageSubject('edit', s).then(fetchData)}
                  onUpdateFaculty={f => apiService.manageUser('edit_faculty', f).then(fetchData)}
                  onUpdateStudent={s => apiService.manageUser('edit_student', s).then(fetchData)}
                />
              )}
              {activeTab === 'schedule' && (
                <AdminSchedule 
                  subjects={subjects} 
                  timetable={timetable} 
                  onAddTimetable={t => apiService.manageSubject('add_timetable', t).then(fetchData)} 
                  onRemoveTimetable={id => apiService.manageSubject('remove_timetable', {id}).then(fetchData)} 
                />
              )}
              {activeTab === 'user-management' && (
                <UserManagement 
                  students={students} 
                  faculty={faculty} 
                  subjects={subjects} 
                  enrollments={enrollments}
                  onAddStudent={handleAddStudent}
                  onAddFaculty={handleAddFaculty}
                  onEnrollStudent={(studId, subId) => apiService.manageUser('enroll', {studId, subId}).then(fetchData)}
                />
              )}
              {activeTab === 'subject-management' && (
                <SubjectManagement 
                  subjects={subjects} 
                  faculty={faculty} 
                  students={students} 
                  onAddSubject={s => apiService.manageSubject('add', s).then(fetchData)}
                  onAssignFaculty={handleAssignFaculty}
                />
              )}
              {activeTab === 'reports' && (
                <Reports 
                  students={students} 
                  subjects={subjects} 
                  attendance={attendanceRecords} 
                  enrollments={enrollments} 
                />
              )}
            </>
          ) : user.user_type === UserType.FACULTY ? (
            <FacultyDashboard 
              faculty={faculty.find(f => f.user_id === user.user_id)!}
              subjects={subjects}
              students={students}
              enrollments={enrollments}
              attendance={attendanceRecords}
              timetable={timetable}
              onAttendanceUpdate={fetchData} 
            />
          ) : (
            <StudentDashboard 
              student={students.find(s => s.user_id === user.user_id)!}
              subjects={subjects}
              enrollments={enrollments}
              attendance={attendanceRecords}
              timetable={timetable}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;