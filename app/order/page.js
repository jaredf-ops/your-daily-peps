'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import siteConfig from '@/lib/siteConfig';

function SuccessScreen({ total, name }) {
  const venmoUrl = `venmo://paycharge?txn=pay&recipients=${siteConfig.venmo}&amount=${total}&note=YDP Order`;

  return (
    <div className="max-w-lg mx-auto px-6 py-20 text-center">
      <div className="text-4xl mb-6">✓</div>
      <h1 className="text-2xl font-bold text-primary mb-2">Order Received</h1>
      <p className="text-sm text-muted mb-10">
        Thanks {name}. We have your order and will fulfill it once we confirm your Venmo payment.
      </p>

      <div className="card p-6 text-left mb-6">
        <p className="section-label mb-4">Pay via Venmo</p>
        <div className="space-y-2 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-muted">Send to</span>
            <span className="font-mono font-bold text-primary">@{siteConfig.venmo}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted">Amount</span>
            <span className="font-mono font-bold text-accent text-lg">${total}</span>
          </div>
        </div>
        <a
          href={venmoUrl}
          className="btn-primary w-full text-center block"
        >
          Open Venmo →
        </a>
        <p className="text-[10px] text-muted text-center mt-3">
          If the link doesn&apos;t open Venmo, search @{siteConfig.venmo} in the app manually.
        </p>
      </div>

      <p className="text-xs text-muted mb-6">
        Questions? Text us at <span className="font-mono">{siteConfig.phone}</span>
      </p>

      <Link href="/catalog" className="text-xs text-accent hover:underline underline-offset-2">
        ← Back to catalog
      </Link>
    </div>
  );
}

export default function OrderPage() {
  const { items, subtotal, clearCart } = useCart();

  const [name,     setName]     = useState('');
  const [email,    setEmail]    = useState('');
  const [phone,    setPhone]    = useState('');
  const [pickup,   setPickup]   = useState(false);
  const [extras,   setExtras]   = useState([]);
  const [coupon,   setCoupon]   = useState('');
  const [couponResult, setCouponResult] = useState(null);
  const [couponErr,    setCouponErr]    = useState('');
  const [applying, setApplying] = useState(false);
  const [loading,  setLoading]  = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);
  const [initials, setInitials] = useState('');
  const [acknowledged, setAcknowledged] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const shippingCost  = pickup ? 0 : siteConfig.shippingFee;
  const extrasTotal   = extras.reduce((s, e) => s + e.price, 0);
  const discount      = couponResult?.discount || 0;
  const total         = subtotal + shippingCost + extrasTotal - discount;

  function formatPhone(value) {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0,3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
  }

  function toggleExtra(supply) {
    setExtras((prev) =>
      prev.find((s) => s.name === supply.name)
        ? prev.filter((s) => s.name !== supply.name)
        : [...prev, supply]
    );
  }

  async function applyCoupon() {
    if (!coupon.trim()) return;
    setApplying(true);
    setCouponErr('');
    setCouponResult(null);
    try {
      const res = await fetch('/api/validate-coupon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: coupon.trim().toUpperCase() }),
      });
      const data = await res.json();
      if (res.ok) {
        setCouponResult(data);
      } else {
        setCouponErr(data.error || 'Invalid coupon code.');
      }
    } catch {
      setCouponErr('Could not validate coupon. Try again.');
    } finally {
      setApplying(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitAttempted(true);
    if (!acknowledged || !initials.trim()) return;
    if (items.length === 0) return;
    setLoading(true);
    try {
      const res = await fetch('/api/submit-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, email, phone,
          shipping: pickup ? 'Local Pickup' : 'Ship',
          items: items.map((i) => ({
            product:   i.product.name,
            size:      i.size.label,
            price:     i.size.price,
            qty:       i.qty,
            lineTotal: i.size.price * i.qty,
          })),
          supplies: extras,
          couponCode: couponResult?.code || null,
          discount,
          subtotal,
          shippingCost,
          extrasTotal,
          total,
          initials,
          acknowledgedResearchUse: true,
        }),
      });
      if (res.ok) {
        setFinalTotal(total);
        clearCart();
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again or text us at ' + siteConfig.phone);
      }
    } catch {
      alert('Something went wrong. Please try again or text us at ' + siteConfig.phone);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) return <SuccessScreen total={finalTotal} name={name} />;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <div className="mb-10">
        <p className="section-label mb-3">Place an Order</p>
        <h1 className="text-4xl font-bold text-primary tracking-tight">Order Form</h1>
      </div>

      {/* Disclaimer */}
      <div className="mb-8 bg-amber-50 border border-amber-200 rounded-sm px-4 py-3 flex gap-3">
        <span className="text-amber-500 text-sm mt-0.5 shrink-0">⚠</span>
        <p className="text-xs text-amber-800 leading-relaxed">
          <span className="font-semibold uppercase tracking-wide text-[10px] mr-2">Research Use Only</span>
          By submitting this order you confirm these compounds are for research purposes only,
          that you are a qualified researcher, and that you will comply with all applicable laws regarding their use.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted font-mono text-sm mb-4">Your cart is empty.</p>
          <Link href="/catalog" className="btn-primary">Browse Catalog</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left col — form fields */}
            <div className="lg:col-span-2 space-y-8">

              {/* Contact info */}
              <div>
                <p className="section-label mb-4">Your Information</p>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-muted block mb-1.5">Full Name *</label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Smith"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted block mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted block mb-1.5">Phone *</label>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(formatPhone(e.target.value))}
                      placeholder="(801) 555-0100"
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping preference */}
              <div>
                <p className="section-label mb-4">Delivery Method</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPickup(false)}
                    className={`p-4 rounded-sm border text-left transition-all duration-150
                      ${!pickup
                        ? 'border-[#1d6fb8] bg-blue-50 ring-1 ring-[#1d6fb8]/30'
                        : 'border-border bg-white hover:border-[#9ca3af]'
                      }`}
                  >
                    <p className={`text-sm text-primary ${!pickup ? 'font-bold' : 'font-medium'}`}>Ship</p>
                    <p className="text-xs text-muted mt-1">$8 flat rate shipping</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPickup(true)}
                    className={`p-4 rounded-sm border text-left transition-all duration-150
                      ${pickup
                        ? 'border-[#1d6fb8] bg-blue-50 ring-1 ring-[#1d6fb8]/30'
                        : 'border-border bg-white hover:border-[#9ca3af]'
                      }`}
                  >
                    <p className={`text-sm text-primary ${pickup ? 'font-bold' : 'font-medium'}`}>Local Pickup</p>
                    <p className="text-xs text-muted mt-1">Free — we&apos;ll coordinate</p>
                  </button>
                </div>
              </div>

              {/* Supplies */}
              {siteConfig.supplies.length > 0 && (
                <div>
                  <p className="section-label mb-4">Add Supplies</p>
                  <div className="space-y-2">
                    {siteConfig.supplies.map((supply) => {
                      const checked = !!extras.find((s) => s.name === supply.name);
                      return (
                        <label
                          key={supply.name}
                          className={`flex items-center justify-between p-3 rounded-sm border cursor-pointer transition-all duration-150
                            ${checked ? 'border-accent/40 bg-accent/5' : 'border-border hover:border-border-2'}`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleExtra(supply)}
                              className="accent-accent"
                            />
                            <span className="text-sm text-primary">{supply.name}</span>
                          </div>
                          <span className="text-sm font-mono text-muted">+${supply.price}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Coupon */}
              <div>
                <p className="section-label mb-4">Coupon Code</p>
                <div className="flex gap-2">
                  <input
                    value={coupon}
                    onChange={(e) => { setCoupon(e.target.value); setCouponErr(''); setCouponResult(null); }}
                    placeholder="Enter code"
                    className="input-field flex-1"
                  />
                  <button
                    type="button"
                    onClick={applyCoupon}
                    disabled={applying || !coupon.trim()}
                    className="btn-ghost shrink-0 disabled:opacity-40"
                  >
                    {applying ? 'Checking...' : 'Apply'}
                  </button>
                </div>
                {couponResult && (
                  <p className="text-xs text-available mt-2">
                    ✓ Code applied — ${couponResult.discount} off
                  </p>
                )}
                {couponErr && (
                  <p className="text-xs text-oos mt-2">{couponErr}</p>
                )}
              </div>

            </div>

            {/* Right col — order summary */}
            <div className="lg:col-span-1">
              <div className="card p-5 sticky top-20">
                <p className="section-label mb-4">Order Summary</p>

                {/* Items */}
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.key} className="flex justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-primary truncate">{item.product.name}</p>
                        <p className="text-[10px] text-muted">{item.size.label} × {item.qty}</p>
                      </div>
                      <span className="text-xs font-mono text-primary shrink-0">
                        ${item.size.price * item.qty}
                      </span>
                    </div>
                  ))}

                  {extras.map((s) => (
                    <div key={s.name} className="flex justify-between gap-2">
                      <p className="text-xs text-muted truncate">{s.name}</p>
                      <span className="text-xs font-mono text-muted shrink-0">${s.price}</span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-xs text-muted">
                    <span>Subtotal</span>
                    <span className="font-mono">${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-xs text-muted">
                    <span>Shipping</span>
                    <span className="font-mono">{pickup ? 'Free' : `$${siteConfig.shippingFee}`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-xs text-available">
                      <span>Discount</span>
                      <span className="font-mono">−${discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-bold text-primary pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="font-mono text-accent">${total}</span>
                  </div>
                </div>

                {/* Venmo preview */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-[10px] text-muted text-center mb-1">You&apos;ll pay via Venmo after submitting</p>
                  <p className="text-xs text-center font-mono text-primary">@{siteConfig.venmo}</p>
                </div>

                <button
                  type="submit"
                  disabled={loading || items.length === 0}
                  className="btn-primary w-full mt-5 disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : `Submit Order — $${total}`}
                </button>

                <p className="text-[10px] text-muted text-center mt-3">
                  Dosing instructions included with every order.
                </p>

                <div className={`mt-4 pt-4 border-t border-border rounded-sm p-3 transition-all duration-200 ${submitAttempted && (!acknowledged || !initials.trim()) ? 'border-2 border-red-400 bg-red-50' : 'border border-amber-200 bg-amber-50'}`}>
                  <p className="text-[10px] text-amber-800 leading-relaxed mb-3">
                    These compounds are for research use only, are not FDA approved, and are not intended for human consumption or use in clinical applications. By submitting you confirm you are a qualified researcher and will comply with all applicable laws.
                  </p>
                  <label className="flex items-start gap-2 cursor-pointer mb-3">
                    <input
                      type="checkbox"
                      checked={acknowledged}
                      onChange={(e) => setAcknowledged(e.target.checked)}
                      className="mt-0.5 accent-accent shrink-0"
                    />
                    <span className="text-[10px] text-amber-900 font-medium leading-relaxed">I understand these compounds are for research use only.</span>
                  </label>
                  <div>
                    <label className="text-[10px] text-muted block mb-1">Initials *</label>
                    <input
                      value={initials}
                      onChange={(e) => setInitials(e.target.value.toUpperCase().slice(0, 4))}
                      placeholder="JF"
                      maxLength={4}
                      className={`w-20 text-center font-mono tracking-widest text-sm px-2 py-1.5 border rounded-sm focus:outline-none transition-colors ${submitAttempted && !initials.trim() ? 'border-red-400 bg-red-50' : 'border-border focus:border-accent'}`}
                    />
                  </div>
                  {submitAttempted && (!acknowledged || !initials.trim()) && (
                    <p className="text-[10px] text-red-500 mt-2 font-medium">Please check the box and enter your initials to continue.</p>
                  )}
                </div>
              </div>
            </div>

          </div>
        </form>
      )}
    </div>
  );
}
