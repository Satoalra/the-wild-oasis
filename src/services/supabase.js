import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://aucsbojziwxqrzkrealu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1Y3Nib2p6aXd4cXJ6a3JlYWx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NzIzMjAsImV4cCI6MjA2MDM0ODMyMH0.ryvNPtEh162xJRc5FXmYkFVYibRSOo63vr9F2zttFSE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
