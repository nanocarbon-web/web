import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://iykdvbuavbddscdmzjaq.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_fz1ex5W70RdSkosBJugsJQ__5CS8xiD';

export const supabase = createClient(supabaseUrl, supabaseKey);
