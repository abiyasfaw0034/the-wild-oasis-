// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://bfxqgtwppvdcqakatukm.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeHFndHdwcHZkY3Fha2F0dWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4Mzg5NzMsImV4cCI6MjAzOTQxNDk3M30.dYTFdNY8w9CaYrr-r3dUXaKLLlHL7uSDfCG4vfru5Ec";
// const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mklbgpjpvioqalwqybmc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rbGJncGpwdmlvcWFsd3F5Ym1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0Mjg1MTEsImV4cCI6MjA1OTAwNDUxMX0.Lu8vhNzBgGkIRP6P4ZbXgTQX5-_9Obojgw2ddh8XSPk";
// process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
