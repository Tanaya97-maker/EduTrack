
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

export interface Department {
  dept_id: number;
  dept_name: string;
}

export interface Student {
  stud_id: number;
  user_id: number;
  roll_no: string;
  stud_name: string;
  email: string;
  semester: string; // sem1 to sem8
  division?: string;
  dept_id?: number;
}

export interface Faculty {
  faculty_id: number;
  user_id: number;
  faculty_name: string;
  email: string;
  dept_id?: number;
  is_timetable_admin?: boolean;
}

export interface FacultyAttendance {
  faculty_attendance_id: number;
  faculty_id: number;
  attendance_date: string;
  check_in_time?: string;
  check_out_time?: string;
  status: 'present' | 'absent' | 'leave';
}

export interface FacultyLeave {
  leave_id: number;
  faculty_id: number;
  leave_date: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface FacultyNote {
  note_id: number;
  faculty_id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface FacultyAnnouncement {
  announcement_id: number;
  faculty_id: number;
  target_type: 'student' | 'faculty';
  semester?: string;
  subject_id?: number;
  dept_id?: number;
  title: string;
  message: string;
  created_at: string;
}

export interface Subject {
  subject_id: number;
  subject_code: string;
  subject_name: string;
  faculty_id: number | null;
  semester: string; // Changed to string sem1-sem8
  dept_id?: number;
  credits: number;
  progress?: number;
  enrollment_count?: number; // Calculated field
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
  semester?: string;
  display_info?: string;
  is_holiday?: boolean;
}

export interface Department {
  dept_id: number;
  dept_name: string;
}

export interface FacultySubject {
  faculty_id: number;
  subject_id: number;
}

export interface Holiday {
  holiday_id: number;
  holiday_name: string;
  holiday_date: string;
  year: number;
}

export interface UploadedSyllabus {
  package_id: number;
  dept_id: number;
  semester: string;
  file_url: string;
  status: 'processing' | 'completed' | 'failed';
  error_msg?: string;
  uploaded_at?: string;
  departments?: Department;
}

export interface UploadedSchedule {
  schedule_id: number;
  dept_id: number;
  semester: number;
  division: string;
  file_url: string;
  uploaded_by?: number;
  created_at?: string;
  is_active?: boolean;
  Department?: Department;
  Faculty?: Faculty;
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
