-- Run this SQL in your Supabase Dashboard SQL Editor

-- 1. Ensure the bucket exists and is set to public
-- Note: You might need to create the bucket 'EduTrack' in the UI first if this fails.
insert into storage.buckets (id, name, public)
values ('EduTrack', 'EduTrack', true)
on conflict (id) do update set public = true;

-- 2. Enable RLS on storage.objects
alter table storage.objects enable row level security;

-- 3. Allow public inserts (Upload)
create policy "Allow public uploads"
on storage.objects for insert
to public
with check ( bucket_id = 'EduTrack' );

-- 4. Allow public selects (View)
create policy "Allow public viewing"
on storage.objects for select
to public
using ( bucket_id = 'EduTrack' );

-- 5. Allow public updates (Upsert/Overwrite)
create policy "Allow public updates"
on storage.objects for update
to public
using ( bucket_id = 'EduTrack' )
with check ( bucket_id = 'EduTrack' );

-- 6. Allow public deletes (Optional)
create policy "Allow public deletes"
on storage.objects for delete
to public
using ( bucket_id = 'EduTrack' );
