import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bfxqgtwppvdcqakatukm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeHFndHdwcHZkY3Fha2F0dWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4Mzg5NzMsImV4cCI6MjAzOTQxNDk3M30.dYTFdNY8w9CaYrr-r3dUXaKLLlHL7uSDfCG4vfru5Ec";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
