import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://dzluahgzueekvlpipiqe.supabase.co";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6bHVhaGd6dWVla3ZscGlwaXFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMDQ4NTksImV4cCI6MjA2Nzc4MDg1OX0.Uw0Xx9nXrTHwQL1kT3voSfVWptdKYMMiUvG6qC6KTAg";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export { supabase };
