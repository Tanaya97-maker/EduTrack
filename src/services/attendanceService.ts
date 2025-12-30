
import { AttendanceRecord, AttendanceStatus } from '../types';
import { apiService } from './apiService';

/**
 * Marks attendance by calling the PHP backend.
 */
export const markAttendance = async (
  stud_id: number,
  subject_id: number,
  faculty_id: number,
  attendance_date: string,
  status: AttendanceStatus
): Promise<boolean> => {
  try {
    const result = await apiService.markAttendance({
      stud_id,
      subject_id,
      faculty_id,
      attendance_date,
      status
    });
    return result.success;
  } catch (error) {
    console.error("API Error marking attendance:", error);
    return false;
  }
};

/**
 * Logic for calculating attendance percentage.
 */
export const calculatePercentage = (
  attendanceRecords: AttendanceRecord[],
  stud_id: number,
  subject_id: number
) => {
  const filtered = attendanceRecords.filter(r => r.stud_id === stud_id && r.subject_id === subject_id);
  const workingDays = filtered.length;
  if (workingDays === 0) return 0;

  const presentDays = filtered.filter(r => r.status === AttendanceStatus.PRESENT).length;
  return Math.round((presentDays / workingDays) * 100);
};
