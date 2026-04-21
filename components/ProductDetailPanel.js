'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import productDetails from '@/data/productDetails';

const categoryColors = {
  'Weight Management':     'border-blue-200 text-blue-600',
  'Metabolic Health':      'border-teal-200 text-teal-600',
  'Healing & Recovery':    'border-green-200 text-green-600',
  'Pain & Inflammation':   'border-orange-200 text-orange-600',
  'Anti-Aging':            'border-purple-200 text-purple-600',
  'Sleep Support':         'border-indigo-200 text-indigo-600',
  'Cognitive Enhancement': 'border-yellow-200 text-yellow-700',
  'Libido & Sexual Health':'border-rose-200 text-rose-600',
  'Immune Support':        'border-cyan-200 text-cyan-600',
  'Skin & Beauty':         'border-pink-200 text-pink-600',
  'Muscle Growth':         'border-red-200 text-red-600',
  'Energy & Performance':  'border-amber-200 text-amber-700',
};

export default function ProductDetailPanel({ product, onClose }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const details = productDetails[product.id] || null;
  const available = product.status === 'available';
  const currentSize = selectedSize || product.sizes[0];

  function handleAdd() {
    addItem(product, currentSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-lg bg-white shadow-2xl flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <button
            onClick={onClose}
            className="text-xs font-mono text-muted hover:text-primary transition-colors"
          >
            ← Back to catalog
          </button>
          <span className={`flex items-center gap-1.5 text-xs font-mono ${available ? 'text-available' : 'text-oos'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${available ? 'bg-available' : 'bg-oos'}`} />
            {available ? 'Available' : 'Out of Stock'}
          </span>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-sm px-4 py-3 flex gap-3">
            <span className="text-amber-500 text-sm mt-0.5 shrink-0">⚠</span>
            <p className="text-xs text-amber-800 leading-relaxed">
              <span className="font-semibold uppercase tracking-wide text-[10px] mr-2">Research Use Only</span>
              This product is intended for research purposes only and is not approved by the FDA for human use.
              Not for human consumption, veterinary use, or clinical applications.
            </p>
          </div>

          {/* Name + categories */}
          <div>
            <h2 className="text-2xl font-bold text-primary tracking-tight mb-3">{product.name}</h2>
            <div className="flex flex-wrap gap-1.5">
              {product.categories.map((cat) => (
                <span key={cat} className={`badge ${categoryColors[cat] || 'border-border text-muted'}`}>
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          {details?.overview && (
            <div>
              <p className="section-label mb-2">Overview</p>
              <p className="text-sm text-muted leading-relaxed">{details.overview}</p>
            </div>
          )}

          {/* How It Works */}
          {details?.howItWorks?.length > 0 && (
            <div>
              <p className="section-label mb-3">How It Works</p>
              <div className="space-y-3">
                {details.howItWorks.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-accent font-mono text-xs mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-primary">{item.title}</p>
                      <p className="text-xs text-muted leading-relaxed mt-0.5">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Why Choose */}
          {details?.whyChoose?.length > 0 && (
            <div>
              <p className="section-label mb-3">Why Choose {product.name}</p>
              <ul className="space-y-2">
                {details.whyChoose.map((point, i) => (
                  <li key={i} className="flex gap-2 text-xs text-muted">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Sticky footer — size + add to cart */}
        <div className="shrink-0 px-6 py-4 border-t border-border bg-white">
          {available ? (
            <div className="flex flex-col gap-3">
              {product.sizes.length === 1 ? (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">{product.sizes[0].label}</span>
                  <span className="text-xl font-mono font-bold text-accent">${product.sizes[0].price}</span>
                </div>
              ) : (
                <div>
                  <p className="text-xs text-muted mb-2">Select size</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((s) => (
                      <button
                        key={s.label}
                        onClick={() => setSelectedSize(s)}
                        className={`px-3 py-1.5 text-xs rounded-sm border transition-all duration-150
                          ${currentSize.label === s.label
                            ? 'border-accent/60 bg-accent/10 text-accent'
                            : 'border-border text-muted hover:border-border-2 hover:text-primary'
                          }`}
                      >
                        {s.label} — ${s.price}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <button
                onClick={handleAdd}
                className={`w-full py-3 rounded-sm text-sm font-semibold transition-all duration-150
                  ${added
                    ? 'bg-available text-white'
                    : 'bg-accent text-white hover:bg-blue-700'
                  }`}
              >
                {added ? 'Added to Cart ✓' : `Add to Cart — $${currentSize.price}`}
              </button>
            </div>
          ) : (
            <div className="text-center py-2">
              <p className="text-sm text-muted font-mono">Currently out of stock</p>
              <p className="text-xs text-muted mt-1">Check back soon or contact us to be notified</p>
            </div>
          )}
        </div>

      </div>
    </>
  );
}
