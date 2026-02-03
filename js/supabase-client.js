// CRAKS Payment Management System - Supabase Client
// Replace these with your actual Supabase project credentials

const SUPABASE_URL = 'https://swhzokzephhoswyobwvv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3aHpva3plcGhob3N3eW9id3Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxMDY1NTUsImV4cCI6MjA4NTY4MjU1NX0.8NhrMHORyIqz3SPaTZAA8PZa_kFdkxKiHeBJcsfJLUc';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
