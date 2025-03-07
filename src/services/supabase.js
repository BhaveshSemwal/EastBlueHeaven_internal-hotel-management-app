import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zluezgzfkszkzasxeheo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdWV6Z3pma3N6a3phc3hlaGVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyNjQzNDIsImV4cCI6MjA0Mzg0MDM0Mn0.ySr_c8cbrSOoAEpAC-Pa3VL4HWKo6ZkVONWb-w9So6c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
 