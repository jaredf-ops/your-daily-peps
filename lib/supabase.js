import { createClient } from '@supabase/supabase-js';

const supabaseUrl         = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

let _client;

function getClient() {
  if (!_client) {
    if (!supabaseUrl || !supabaseServiceRole) {
      throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    }
    _client = createClient(supabaseUrl, supabaseServiceRole);
  }
  return _client;
}

// Lazy proxy: avoids calling createClient at import (so `next build` works without .env in CI).
// API routes that use `supabase` still get the same surface as a SupabaseClient.
export const supabase = new Proxy(Object.create(null), {
  get(_target, prop) {
    const c = getClient();
    const value = c[prop];
    return typeof value === 'function' ? value.bind(c) : value;
  },
});
