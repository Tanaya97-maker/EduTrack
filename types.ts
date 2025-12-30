
export enum UserType {
  STUDENT = 'student',
  FACULTY = 'faculty',
  ADMIN = 'admin'
}

export enum AttendanceStatus {
  PRESENT = 'present',
  ABSENT = 'absent',
  HOLIDAY = 'holiday'
}

export interface User {
  user_id: number;
  email: string;
  user_type: UserType;
  is_active: boolean;
  avatar?: string;
}

export interface Student {
  stud_id: number;
  user_id: number;
  roll_no: string;
  stud_name: string;
  email: string;
}

export interface Faculty {
  faculty_id: number;
  user_id: number;
  faculty_name: string;
  email: string;
}

export interface Subject {
  subject_id: number;
  subject_code: string;
  subject_name: string;
  faculty_id: number | null;
  semester: number;
  credits: number;
  progress?: number; // Course completion %
}

export interface AttendanceRecord {
  attendance_id: number;
  stud_id: number;
  subject_id: number;
  faculty_id: number;
  attendance_date: string;
  status: AttendanceStatus;
}

export interface TimetableEntry {
  timetable_id: number;
  subject_id: number;
  day_of_week: number;
  start_time: string;
  end_time: string;
  room_no: string | null;
  semester?: number;
}

export type AdminTab = 'dashboard' | 'schedule' | 'user-management' | 'subject-management' | 'reports';

export interface AppState {
  currentUser: User | null;
  students: Student[];
  faculty: Faculty[];
  subjects: Subject[];
  enrollments: { stud_id: number; subject_id: number }[];
  attendance: AttendanceRecord[];
  timetable: TimetableEntry[];
}
