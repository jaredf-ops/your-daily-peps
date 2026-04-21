'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import siteConfig from '@/lib/siteConfig';

export default function CartDrawer() {
  const { items, removeItem, updateQty, subtotal, isOpen, setIsOpen } = useCart();

  const shipping  = subtotal > 0 ? siteConfig.shippingFee : 0;
  const total     = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <h2 className="text-sm font-semibold text-primary">
            Cart
            {items.length > 0 && (
              <span className="ml-2 font-mono text-xs text-muted">
                ({items.reduce((s, i) => s + i.qty, 0)} item{items.reduce((s, i) => s + i.qty, 0) !== 1 ? 's' : ''})
              </span>
            )}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-primary transition-colors text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <p className="text-muted font-mono text-sm">Your cart is empty.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-accent hover:underline underline-offset-2"
              >
                Browse catalog →
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-border last:border-0">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-primary truncate">{item.product.name}</p>
                    <p className="text-xs text-muted mt-0.5">{item.size.label}</p>
                    <p className="text-xs font-mono text-accent mt-1">${item.size.price} each</p>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    {/* Qty controls */}
                    <div className="flex items-center gap-2 border border-border rounded-sm">
                      <button
                        onClick={() => updateQty(item.key, item.qty - 1)}
                        className="px-2 py-1 text-muted hover:text-primary transition-colors text-sm leading-none"
                      >
                        −
                      </button>
                      <span className="text-sm font-mono text-primary w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.key, item.qty + 1)}
                        className="px-2 py-1 text-muted hover:text-primary transition-colors text-sm leading-none"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-sm font-mono font-bold text-primary">
                      ${item.size.price * item.qty}
                    </p>

                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-[10px] text-muted hover:text-oos transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="shrink-0 px-6 py-5 border-t border-border bg-surface space-y-3">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-muted">
                <span>Subtotal</span>
                <span className="font-mono">${subtotal}</span>
              </div>
              <div className="flex justify-between text-xs text-muted">
                <span>Shipping (flat rate)</span>
                <span className="font-mono">${shipping}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-primary pt-2 border-t border-border">
                <span>Estimated Total</span>
                <span className="font-mono text-accent">${total}</span>
              </div>
            </div>

            <p className="text-[10px] text-muted text-center">
              Pickup available — remove shipping on the order form
            </p>

            <Link
              href="/order"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center block"
            >
              Proceed to Order Form
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
