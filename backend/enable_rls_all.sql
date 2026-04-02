-- Enable RLS on all core tables
ALTER TABLE "attendance" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "departments" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "enrollments" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "faculty" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "faculty_attendance" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "faculty_leave" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "faculty_notes" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "faculty_announcements" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "holidays" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "notifications" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "schedules" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "students" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "subjects" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "faculty_subjects" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "timetable" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "users" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "syllabus_completions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "syllabus_packages" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "syllabus_subtopics" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "syllabus_units" ENABLE ROW LEVEL SECURITY;

-- Adding basic policies (Allowing all for postgres/service_role which bypasses RLS anyway, 
-- and adding public/authenticated read access for now as a baseline)

-- For simplicity and to ensure the backend still works, we allow full access to the postgres user
-- (Already handled by Postgres by default, but we can be explicit if needed)

-- Example policies for standard tables
CREATE POLICY "Enable all for authenticated users" ON "users" FOR ALL TO authenticated USING (true);
CREATE POLICY "Enable all for authenticated users" ON "students" FOR ALL TO authenticated USING (true);
CREATE POLICY "Enable all for authenticated users" ON "faculty" FOR ALL TO authenticated USING (true);
CREATE POLICY "Enable all for authenticated users" ON "subjects" FOR ALL TO authenticated USING (true);
CREATE POLICY "Enable all for authenticated users" ON "departments" FOR ALL TO authenticated USING (true);
CREATE POLICY "Enable all for authenticated users" ON "attendance" FOR ALL TO authenticated USING (true);
CREATE POLICY "Enable all for authenticated users" ON "enrollments" FOR ALL TO authenticated USING (true);
CREATE POLICY "Enable all for authenticated users" ON "timetable" FOR ALL TO authenticated USING (true);
CREATE POLICY "Enable all for authenticated users" ON "schedules" FOR ALL TO authenticated USING (true);
CREATE POLICY "Enable all for authenticated users" ON "notifications" FOR ALL TO authenticated USING (true);
CREATE POLICY "Enable all for authenticated users" ON "faculty_announcements" FOR ALL TO authenticated USING (true);

-- Ensure storage policies are also included (re-running from the other file)
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public uploads' AND tablename = 'objects') THEN
        CREATE POLICY "Allow public uploads" ON storage.objects FOR INSERT TO public WITH CHECK ( bucket_id = 'EduTrack' );
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public viewing' AND tablename = 'objects') THEN
        CREATE POLICY "Allow public viewing" ON storage.objects FOR SELECT TO public USING ( bucket_id = 'EduTrack' );
    END IF;
END $$;
