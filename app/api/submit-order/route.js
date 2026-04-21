import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

let resendInstance;
function getResend() {
  if (!resendInstance) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error('Missing RESEND_API_KEY');
    }
    resendInstance = new Resend(key);
  }
  return resendInstance;
}

export async function POST(req) {
  try {
    const order = await req.json();

    // 1. Save to Supabase
    const { error: dbError } = await supabase.from('orders').insert([{
      name:          order.name,
      email:         order.email,
      phone:         order.phone || null,
      notes:         order.notes || null,
      shipping:      order.shipping,
      items:         order.items,
      supplies:      order.supplies,
      coupon_code:   order.couponCode || null,
      discount:      order.discount,
      subtotal:      order.subtotal,
      shipping_cost: order.shippingCost,
      extras_total:  order.extrasTotal,
      total:         order.total,
      status:        'pending',
    }]);

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      return Response.json({ error: 'Database error' }, { status: 500 });
    }

    // 2. Mark coupon as used if one was applied
    if (order.couponCode) {
      await supabase
        .from('coupons')
        .update({ used: true })
        .eq('code', order.couponCode);
    }

    // 3. Build email HTML
    const itemsHtml = order.items.map((i) =>
      `<tr>
        <td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;">${i.product}</td>
        <td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;">${i.size}</td>
        <td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;text-align:center;">${i.qty}</td>
        <td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;text-align:right;">$${i.lineTotal}</td>
      </tr>`
    ).join('');

    const suppliesHtml = order.supplies?.length > 0
      ? order.supplies.map((s) =>
          `<tr>
            <td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;" colspan="3">${s.name}</td>
            <td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;text-align:right;">$${s.price}</td>
          </tr>`
        ).join('')
      : '';

    const emailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#111827;">
        <div style="background:#1d6fb8;padding:20px 24px;border-radius:4px 4px 0 0;">
          <h1 style="color:white;margin:0;font-size:18px;font-weight:700;">New Order — Your Daily Pep</h1>
        </div>

        <div style="padding:24px;background:#f8f9fa;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 4px 4px;">

          <h2 style="font-size:14px;color:#6b7280;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.05em;">Customer</h2>
          <table style="width:100%;margin-bottom:24px;">
            <tr><td style="padding:4px 0;color:#6b7280;width:100px;">Name</td><td style="font-weight:600;">${order.name}</td></tr>
            <tr><td style="padding:4px 0;color:#6b7280;">Email</td><td>${order.email}</td></tr>
            ${order.phone ? `<tr><td style="padding:4px 0;color:#6b7280;">Phone</td><td>${order.phone}</td></tr>` : ''}
            <tr><td style="padding:4px 0;color:#6b7280;">Delivery</td><td>${order.shipping}</td></tr>
            ${order.notes ? `<tr><td style="padding:4px 0;color:#6b7280;">Notes</td><td>${order.notes}</td></tr>` : ''}
          </table>

          <h2 style="font-size:14px;color:#6b7280;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.05em;">Items Ordered</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <thead>
              <tr style="background:#e5e7eb;">
                <th style="padding:8px;text-align:left;font-size:12px;">Product</th>
                <th style="padding:8px;text-align:left;font-size:12px;">Size</th>
                <th style="padding:8px;text-align:center;font-size:12px;">Qty</th>
                <th style="padding:8px;text-align:right;font-size:12px;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
              ${suppliesHtml}
            </tbody>
          </table>

          <h2 style="font-size:14px;color:#6b7280;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.05em;">Totals</h2>
          <table style="width:100%;margin-bottom:24px;">
            <tr><td style="padding:4px 0;color:#6b7280;">Subtotal</td><td style="text-align:right;">$${order.subtotal}</td></tr>
            <tr><td style="padding:4px 0;color:#6b7280;">Shipping</td><td style="text-align:right;">$${order.shippingCost}</td></tr>
            ${order.extrasTotal > 0 ? `<tr><td style="padding:4px 0;color:#6b7280;">Supplies</td><td style="text-align:right;">$${order.extrasTotal}</td></tr>` : ''}
            ${order.discount > 0 ? `<tr><td style="padding:4px 0;color:#16a34a;">Coupon (${order.couponCode})</td><td style="text-align:right;color:#16a34a;">-$${order.discount}</td></tr>` : ''}
            <tr style="border-top:2px solid #111827;">
              <td style="padding:10px 0 4px;font-weight:700;font-size:16px;">Total Due via Venmo</td>
              <td style="text-align:right;font-weight:700;font-size:16px;color:#1d6fb8;">$${order.total}</td>
            </tr>
          </table>

          <div style="background:#dbeafe;border:1px solid #93c5fd;border-radius:4px;padding:16px;text-align:center;">
            <p style="margin:0 0 4px;font-size:12px;color:#6b7280;">Awaiting Venmo payment from ${order.name}</p>
            <p style="margin:0;font-size:20px;font-weight:700;color:#1d6fb8;">$${order.total}</p>
          </div>

        </div>
      </div>
    `;

    const confirmationHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#111827;">
        <div style="background:#1d6fb8;padding:20px 24px;border-radius:4px 4px 0 0;">
          <h1 style="color:white;margin:0;font-size:18px;font-weight:700;">Order Confirmed — Your Daily Pep</h1>
        </div>

        <div style="padding:24px;background:#f8f9fa;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 4px 4px;">

          <p style="margin:0 0 20px;font-size:14px;line-height:1.5;">
            Hi ${order.name}, thanks for your order! Here&apos;s what you ordered and how to complete your payment.
          </p>

          <h2 style="font-size:14px;color:#6b7280;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.05em;">Items ordered</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <thead>
              <tr style="background:#e5e7eb;">
                <th style="padding:8px;text-align:left;font-size:12px;">Product</th>
                <th style="padding:8px;text-align:left;font-size:12px;">Size</th>
                <th style="padding:8px;text-align:center;font-size:12px;">Qty</th>
                <th style="padding:8px;text-align:right;font-size:12px;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
              ${suppliesHtml}
            </tbody>
          </table>

          <h2 style="font-size:14px;color:#6b7280;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.05em;">Totals</h2>
          <table style="width:100%;margin-bottom:24px;">
            <tr><td style="padding:4px 0;color:#6b7280;">Subtotal</td><td style="text-align:right;">$${order.subtotal}</td></tr>
            <tr><td style="padding:4px 0;color:#6b7280;">Shipping</td><td style="text-align:right;">$${order.shippingCost}</td></tr>
            ${order.extrasTotal > 0 ? `<tr><td style="padding:4px 0;color:#6b7280;">Supplies</td><td style="text-align:right;">$${order.extrasTotal}</td></tr>` : ''}
            ${order.discount > 0 ? `<tr><td style="padding:4px 0;color:#16a34a;">Coupon (${order.couponCode})</td><td style="text-align:right;color:#16a34a;">-$${order.discount}</td></tr>` : ''}
            <tr style="border-top:2px solid #111827;">
              <td style="padding:10px 0 4px;font-weight:700;font-size:16px;">Total Due</td>
              <td style="text-align:right;font-weight:700;font-size:16px;color:#1d6fb8;">$${order.total}</td>
            </tr>
          </table>

          <div style="background:#dbeafe;border:1px solid #93c5fd;border-radius:4px;padding:16px;margin-bottom:20px;">
            <p style="margin:0 0 8px;font-size:14px;color:#111827;line-height:1.5;">
              To complete your order, send $${order.total} to @YourDailyPeps on Venmo.
            </p>
            <p style="margin:0;font-size:16px;font-weight:700;color:#1d6fb8;">@YourDailyPeps</p>
          </div>

          <p style="margin:0 0 20px;font-size:12px;color:#6b7280;line-height:1.5;">
            Once we confirm your payment, we&apos;ll fulfill and ship your order. Questions? Text us at 801-336-8567.
          </p>

          <p style="margin:0;font-size:10px;color:#9ca3af;line-height:1.4;border-top:1px solid #e5e7eb;padding-top:16px;">
            Your Daily Pep | yourdailypep.com | All products are for research use only.
          </p>

        </div>
      </div>
    `;

    // 4. Send email via Resend
    const { error: emailError } = await getResend().emails.send({
      from:    'orders@yourdailypep.com',
      to:      'yourdailypeps@gmail.com',
      subject: `New Order — ${order.name} ($${order.total})`,
      html:    emailHtml,
    });

    if (emailError) {
      console.error('Resend error:', emailError);
      // Don't fail the order — it's saved to DB, email is non-critical
    }

    try {
      await getResend().emails.send({
        from:    'orders@yourdailypep.com',
        to:      order.email,
        subject: `Your Order is Confirmed — $${order.total} due via Venmo`,
        html:    confirmationHtml,
      });
    } catch (confirmationErr) {
      console.error('Resend confirmation email error:', confirmationErr);
    }

    return Response.json({ success: true });

  } catch (err) {
    console.error('submit-order error:', err);
    return Response.json({ error: 'Failed to process order' }, { status: 500 });
  }
}
