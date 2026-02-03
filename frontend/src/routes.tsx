
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { User, UserType, Student, Faculty, Subject, AttendanceRecord, TimetableEntry } from './types';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminSchedule from './components/admin/AdminSchedule';
import UserManagement from './components/admin/UserManagement';
import SubjectManagement from './components/admin/SubjectManagement';
import Reports from './components/admin/Reports';
import FacultyDashboard from './components/faculty/FacultyDashboard';
import TakeStudentAttendance from './components/faculty/TakeStudentAttendance';
import MyAttendance from './components/faculty/MyAttendance';
import StudentDashboard from './components/student/StudentDashboard';
import ScheduleGrid from './components/common/ScheduleGrid';

interface AppRoutesProps {
    user: User;
    students: Student[];
    faculty: Faculty[];
    subjects: Subject[];
    enrollments: any[];
    attendance: AttendanceRecord[];
    timetable: TimetableEntry[];
    stats: any;
    facultyAttendance?: any[];
    facultyStats?: any;
    announcements?: any[];
    notes?: any[];
    leaves?: any[];
    onAttendanceUpdate: () => void;
    handleCheckIn: (facultyId: number) => Promise<void>;
    handleCheckOut: (facultyId: number) => Promise<void>;
    handleApplyLeave: (facultyId: number, reason: string) => Promise<void>;
    handleUpdateLeaveStatus: (leaveId: number, status: 'approved' | 'rejected') => Promise<void>;
    // Admin handlers
    handleDeleteStudent: (id: number) => void;
    handleDeleteFaculty: (id: number) => void;
    handleDeleteSubject: (id: number) => void;
    handleEditSubject: (s: any) => void;
    handleEditFaculty: (f: any) => void;
    handleEditStudent: (s: any) => void;
    handleAddStudent: (s: any) => void;
    handleAddFaculty: (f: any) => void;
    handleAddSubject: (s: any) => void;
    handleAddTimetable: (t: any) => void;
    handleRemoveTimetable: (id: number) => void;
    handleAssignFaculty: (sid: number, fid: number) => void;
    onEnrollStudent: (studId: number, subId: number) => void;
    handleAddNote: (n: any) => Promise<void>;
    handleEditNote: (n: any) => Promise<void>;
    handleDeleteNote: (id: number) => Promise<void>;
    handleAddAnnouncement: (a: any) => Promise<void>;
    handleEditAnnouncement: (a: any) => Promise<void>;
    handleDeleteAnnouncement: (id: number) => Promise<void>;
}

const AppRoutes: React.FC<AppRoutesProps> = (props) => {
    const { user } = props;

    if (user.user_type === UserType.ADMIN) {
        return (
            <Routes>
                <Route path="/dashboard" element={
                    <AdminDashboard
                        students={props.students}
                        faculty={props.faculty}
                        subjects={props.subjects}
                        enrollments={props.enrollments}
                        attendance={props.attendance}
                        leaves={props.leaves || []}
                        onUpdateLeaveStatus={props.handleUpdateLeaveStatus}
                        onRemoveStudent={props.handleDeleteStudent}
                        onRemoveFaculty={props.handleDeleteFaculty}
                        onRemoveSubject={props.handleDeleteSubject}
                        onUpdateSubject={props.handleEditSubject}
                        onUpdateFaculty={props.handleEditFaculty}
                        onUpdateStudent={props.handleEditStudent}
                    />
                } />
                <Route path="/schedule" element={
                    <AdminSchedule
                        subjects={props.subjects}
                        timetable={props.timetable}
                        onAddTimetable={props.handleAddTimetable}
                        onRemoveTimetable={props.handleRemoveTimetable}
                    />
                } />
                <Route path="/user-management" element={
                    <UserManagement
                        students={props.students}
                        faculty={props.faculty}
                        subjects={props.subjects}
                        enrollments={props.enrollments}
                        onAddStudent={props.handleAddStudent}
                        onAddFaculty={props.handleAddFaculty}
                        onEditStudent={props.handleEditStudent}
                        onEditFaculty={props.handleEditFaculty}
                        onDeleteStudent={props.handleDeleteStudent}
                        onDeleteFaculty={props.handleDeleteFaculty}
                        onEnrollStudent={props.onEnrollStudent}
                    />
                } />
                <Route path="/subject-management" element={
                    <SubjectManagement
                        subjects={props.subjects}
                        faculty={props.faculty}
                        students={props.students}
                        onAddSubject={props.handleAddSubject}
                        onEditSubject={props.handleEditSubject}
                        onDeleteSubject={props.handleDeleteSubject}
                        onAssignFaculty={props.handleAssignFaculty}
                    />
                } />
                <Route path="/reports" element={
                    <Reports
                        students={props.students}
                        subjects={props.subjects}
                        attendance={props.attendance}
                        enrollments={props.enrollments}
                        stats={props.stats}
                    />
                } />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
        );
    }

    if (user.user_type === UserType.FACULTY) {
        const facultyData = props.faculty.find(f => f.user_id === user.user_id);
        if (!facultyData) return <div className="text-center p-12 text-slate-400 font-bold uppercase tracking-widest">Loading Faculty Profile...</div>;

        const filteredAnnouncements = (props.announcements || []).filter(a => {
            if (a.faculty_id === facultyData.faculty_id) return true;
            if (a.target === 'faculty') {
                return !a.department || a.department === facultyData.department;
            }
            return false;
        });

        return (
            <Routes>
                <Route path="/dashboard" element={
                    <FacultyDashboard
                        faculty={facultyData}
                        subjects={props.subjects}
                        students={props.students}
                        enrollments={props.enrollments}
                        attendance={props.attendance}
                        timetable={props.timetable}
                        announcements={filteredAnnouncements}
                        notes={props.notes || []}
                        leaves={props.leaves || []}
                        facultyAttendance={props.facultyAttendance || []}
                        facultyStats={props.facultyStats}
                        onAttendanceUpdate={props.onAttendanceUpdate}
                        onAddNote={props.handleAddNote}
                        onEditNote={props.handleEditNote}
                        onDeleteNote={props.handleDeleteNote}
                        onAddAnnouncement={props.handleAddAnnouncement}
                        onDeleteAnnouncement={props.handleDeleteAnnouncement}
                        onCheckIn={() => props.handleCheckIn(facultyData.faculty_id)}
                        onCheckOut={() => props.handleCheckOut(facultyData.faculty_id)}
                        onApplyLeave={(reason) => props.handleApplyLeave(facultyData.faculty_id, reason)}
                    />
                } />
                <Route path="/take-attendance" element={
                    <TakeStudentAttendance
                        faculty={facultyData}
                        subjects={props.subjects}
                        students={props.students}
                        enrollments={props.enrollments}
                        attendance={props.attendance}
                        timetable={props.timetable}
                        onAttendanceUpdate={props.onAttendanceUpdate}
                    />
                } />
                <Route path="/my-attendance" element={
                    <MyAttendance
                        faculty={facultyData}
                        attendance={props.facultyAttendance || []}
                        leaves={props.leaves || []}
                        onCheckIn={() => props.handleCheckIn(facultyData.faculty_id)}
                        onCheckOut={() => props.handleCheckOut(facultyData.faculty_id)}
                        onApplyLeave={(reason) => props.handleApplyLeave(facultyData.faculty_id, reason)}
                    />
                } />
                <Route path="/schedule" element={
                    <ScheduleGrid
                        title={`${facultyData.faculty_name}'s Teaching Schedule`}
                        schedule={props.timetable}
                        isHoliday={(day) => day === 7} // Sunday is holiday
                    />
                } />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
        );
    }

    if (user.user_type === UserType.STUDENT) {
        const studentData = props.students.find(s => s.user_id === user.user_id);
        if (!studentData) return <div className="text-center p-12 text-slate-400 font-bold uppercase tracking-widest">Loading Student Profile...</div>;

        return (
            <Routes>
                <Route path="/" element={
                    <StudentDashboard
                        student={studentData}
                        subjects={props.subjects}
                        enrollments={props.enrollments}
                        attendance={props.attendance}
                        timetable={props.timetable}
                        announcements={props.announcements}
                    />
                } />
                <Route path="/schedule" element={
                    <ScheduleGrid
                        title={`${studentData.semester?.toUpperCase()} Academic Schedule`}
                        schedule={props.timetable}
                        isHoliday={(day) => day === 7}
                    />
                } />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        );
    }

    return <Navigate to="/" replace />;
};

export default AppRoutes;
