-- Run this in Supabase: SQL Editor → New query → Run
-- Fixes: "new row violates row-level security policy for table email"
-- Your app uses the anon (public) key; RLS must allow INSERT for role "anon".

-- If a conflicting policy name exists, drop it first or use a different policy name.
drop policy if exists "email_insert_public" on public."email";

create policy "email_insert_public"
  on public."email"
  for insert
  to anon, authenticated
  with check (true);

-- Optional: do not let anyone read rows with the anon key (keeps signups private)
-- Skip this if you already have a SELECT policy you need.
-- create policy "email_no_anon_select"
--   on public."email"
--   for select
--   to anon
--   using (false);
