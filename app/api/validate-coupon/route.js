import { supabase } from '@/lib/supabase';

export async function POST(req) {
  try {
    const { code } = await req.json();
    if (!code) return Response.json({ error: 'No code provided.' }, { status: 400 });

    const { data, error } = await supabase
      .from('coupons')
      .select('*')
      .eq('code', code.toUpperCase())
      .eq('used', false)
      .single();

    if (error || !data) {
      return Response.json({ error: 'Invalid or already used coupon code.' }, { status: 400 });
    }

    return Response.json({ code: data.code, discount: data.discount });

  } catch (err) {
    console.error('validate-coupon error:', err);
    return Response.json({ error: 'Validation failed.' }, { status: 500 });
  }
}
