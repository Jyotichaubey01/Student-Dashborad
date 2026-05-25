import { createClient } from "@supabase/supabase-js";

cNEXT_PUBLIC_SUPABASE_URL=https://irxmtqfolgbcvtyzxyap.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyeG10cWZvbGdiY3Z0eXp4eWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MjgyNTksImV4cCI6MjA5NTMwNDI1OX0.-tdvLI_dRcYHZRaFnURwVEN6LelOqAdtDXR4CtKhZGE

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getCourses() {
  const { data, error } = await supabase.from("courses").select("*");
  if (error) throw error;
  return data;
}