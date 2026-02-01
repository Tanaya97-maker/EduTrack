-- Supabase Setup Script for EduTrack
-- Run this script in your Supabase SQL Editor after creating your database

-- Step 1: Enable Row Level Security on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE faculty ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE timetable ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE faculty_attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE faculty_leave ENABLE ROW LEVEL SECURITY;
ALTER TABLE faculty_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE faculty_announcements ENABLE ROW LEVEL SECURITY;

-- Step 2: Create policies for service role access (full access for backend)
-- Users table
CREATE POLICY "Enable all access for service role" ON users
  FOR ALL USING (true) WITH CHECK (true);

-- Faculty table
CREATE POLICY "Enable all access for service role" ON faculty
  FOR ALL USING (true) WITH CHECK (true);

-- Students table
CREATE POLICY "Enable all access for service role" ON students
  FOR ALL USING (true) WITH CHECK (true);

-- Subjects table
CREATE POLICY "Enable all access for service role" ON subjects
  FOR ALL USING (true) WITH CHECK (true);

-- Enrollments table
CREATE POLICY "Enable all access for service role" ON enrollments
  FOR ALL USING (true) WITH CHECK (true);

-- Timetable table
CREATE POLICY "Enable all access for service role" ON timetable
  FOR ALL USING (true) WITH CHECK (true);

-- Attendance table
CREATE POLICY "Enable all access for service role" ON attendance
  FOR ALL USING (true) WITH CHECK (true);

-- Faculty Attendance table
CREATE POLICY "Enable all access for service role" ON faculty_attendance
  FOR ALL USING (true) WITH CHECK (true);

-- Faculty Leave table
CREATE POLICY "Enable all access for service role" ON faculty_leave
  FOR ALL USING (true) WITH CHECK (true);

-- Faculty Notes table
CREATE POLICY "Enable all access for service role" ON faculty_notes
  FOR ALL USING (true) WITH CHECK (true);

-- Faculty Announcements table
CREATE POLICY "Enable all access for service role" ON faculty_announcements
  FOR ALL USING (true) WITH CHECK (true);

-- Verification: Check if RLS is enabled
-- SELECT schemaname, tablename, rowsecurity 
-- FROM pg_tables 
-- WHERE schemaname = 'public' 
-- ORDER BY tablename;
