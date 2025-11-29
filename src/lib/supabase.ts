
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://loinniyxosvqixotxqfq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvaW5uaXl4b3N2cWl4b3R4cWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwMzA1NTMsImV4cCI6MjA3NzYwNjU1M30.UjgYBNrySRcbtA5fzKNZyVKfE10TOpK3kngi5wyests';

export const Supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
)