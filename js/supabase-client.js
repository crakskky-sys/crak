// CRAKS Payment Management System - Supabase Client
// Replace these with your actual Supabase project credentials

const SUPABASE_URL = 'https://mrhgqnflqwiibxziaxzn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yaGdxbmZscXdpaWJ4emlheHpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwOTM4MzIsImV4cCI6MjA4NTY2OTgzMn0.jYz35b8SPptW-AkwUKkgDZT2RKzwfjHeKBYhPrOrhFQ';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
