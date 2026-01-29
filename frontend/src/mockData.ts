
import { UserType, AttendanceStatus } from './types';

export const MOCK_USERS = [
  { user_id: 1, email: 'admin@edu.com', password_hash: '123', user_type: UserType.ADMIN, is_active: true },
  { user_id: 2, email: 'faculty.john@edu.com', password_hash: '123', user_type: UserType.FACULTY, is_active: true },
  { user_id: 3, email: 'student.alice@edu.com', password_hash: '123', user_type: UserType.STUDENT, is_active: true },
  { user_id: 4, email: 'student.bob@edu.com', password_hash: '123', user_type: UserType.STUDENT, is_active: true },
];

export const MOCK_FACULTY = [
  { faculty_id: 1, user_id: 2, faculty_name: 'Dr. John Smith', email: 'faculty.john@edu.com', department: 'comp' as 'comp' }
];

export const MOCK_STUDENTS = [
  { stud_id: 1, user_id: 3, roll_no: 'CS101', stud_name: 'Alice Johnson', email: 'student.alice@edu.com', semester: 'sem1' },
  { stud_id: 2, user_id: 4, roll_no: 'CS102', stud_name: 'Bob Miller', email: 'student.bob@edu.com', semester: 'sem1' }
];

export const MOCK_SUBJECTS = [
  { subject_id: 1, subject_code: 'CS301', subject_name: 'Database Systems', faculty_id: 1, semester: 'sem3', credits: 4 },
  { subject_id: 2, subject_code: 'CS302', subject_name: 'Web Engineering', faculty_id: 1, semester: 'sem3', credits: 3 },
  { subject_id: 3, subject_code: 'MAT101', subject_name: 'Advanced Calculus', faculty_id: null, semester: 'sem1', credits: 4 }
];

export const MOCK_ENROLLMENTS = [
  { stud_id: 1, subject_id: 1 },
  { stud_id: 1, subject_id: 2 },
  { stud_id: 2, subject_id: 1 },
];

export const MOCK_TIMETABLE = [
  { timetable_id: 1, subject_id: 1, day_of_week: 1, start_time: '09:00', end_time: '10:00', room_no: 'LHC-101' },
  { timetable_id: 2, subject_id: 2, day_of_week: 1, start_time: '10:00', end_time: '11:00', room_no: 'LAB-204' },
  { timetable_id: 3, subject_id: 1, day_of_week: 2, start_time: '11:00', end_time: '12:00', room_no: 'LHC-101' },
];

export const MOCK_ATTENDANCE = [
  { attendance_id: 1, stud_id: 1, subject_id: 1, faculty_id: 1, attendance_date: '2023-10-01', status: AttendanceStatus.PRESENT },
  { attendance_id: 2, stud_id: 2, subject_id: 1, faculty_id: 1, attendance_date: '2023-10-01', status: AttendanceStatus.ABSENT },
];

export const MOCK_FACULTY_ATTENDANCE = [
  { faculty_attendance_id: 1, faculty_id: 1, attendance_date: '2026-01-20', status: 'present' },
  { faculty_attendance_id: 2, faculty_id: 1, attendance_date: '2026-01-19', status: 'present' },
];

export const MOCK_FACULTY_LEAVES = [
  { leave_id: 1, faculty_id: 1, leave_date: '2026-02-10', reason: 'Family medical issue', status: 'pending' }
];

export const MOCK_FACULTY_NOTES = [
  { note_id: 1, faculty_id: 1, title: 'Database Lecture Plan', content: 'Focus on normalization and ACID properties.', created_at: '2026-01-15', updated_at: '2026-01-15' }
];

export const MOCK_FACULTY_ANNOUNCEMENTS = [
  { announcement_id: 1, faculty_id: 1, target_type: 'student', semester: 'sem3', subject_id: 1, title: 'Quiz postponed', message: 'The quiz scheduled for Monday is postponed to Wednesday.', created_at: '2026-01-18' }
];
