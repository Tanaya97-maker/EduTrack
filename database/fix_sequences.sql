-- SQL to fix out-of-sync sequences in EduTrack database
-- This happens when manual inserts (from Supabase dashboard) are done
-- The sequence needs to be reset to the next available ID

SELECT setval(pg_get_serial_sequence('users', 'user_id'), COALESCE(MAX(user_id), 0) + 1, false) FROM users;
SELECT setval(pg_get_serial_sequence('faculty', 'faculty_id'), COALESCE(MAX(faculty_id), 0) + 1, false) FROM faculty;
SELECT setval(pg_get_serial_sequence('students', 'stud_id'), COALESCE(MAX(stud_id), 0) + 1, false) FROM students;
SELECT setval(pg_get_serial_sequence('subjects', 'subject_id'), COALESCE(MAX(subject_id), 0) + 1, false) FROM subjects;
SELECT setval(pg_get_serial_sequence('timetable', 'timetable_id'), COALESCE(MAX(timetable_id), 0) + 1, false) FROM timetable;
SELECT setval(pg_get_serial_sequence('attendance', 'attendance_id'), COALESCE(MAX(attendance_id), 0) + 1, false) FROM attendance;
SELECT setval(pg_get_serial_sequence('faculty_attendance', 'faculty_attendance_id'), COALESCE(MAX(faculty_attendance_id), 0) + 1, false) FROM faculty_attendance;
SELECT setval(pg_get_serial_sequence('faculty_leave', 'leave_id'), COALESCE(MAX(leave_id), 0) + 1, false) FROM faculty_leave;
SELECT setval(pg_get_serial_sequence('faculty_notes', 'note_id'), COALESCE(MAX(note_id), 0) + 1, false) FROM faculty_notes;
SELECT setval(pg_get_serial_sequence('faculty_announcements', 'announcement_id'), COALESCE(MAX(announcement_id), 0) + 1, false) FROM faculty_announcements;
