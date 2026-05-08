'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import products from '@/data/products.json';
import siteConfig from '@/lib/siteConfig';
import { useCart } from '@/context/CartContext';
import ProductDetailPanel from '@/components/ProductDetailPanel';

const ALL_CATEGORIES = [
  'GLP-1 & Metabolic Analogs','Growth Hormone Peptides','Tissue Repair Peptides',
  'Anti-Inflammatory Peptides','Longevity Research Peptides','Neurological Peptides',
  'Melanocortin Peptides','Immunomodulatory Peptides','Dermatological Peptides',
  'Mitochondrial Peptides','Supplies',
];

const categoryColors = {
  'GLP-1 & Metabolic Analogs':    'border-blue-200 text-blue-600',
  'Growth Hormone Peptides':       'border-teal-200 text-teal-600',
  'Tissue Repair Peptides':        'border-green-200 text-green-600',
  'Anti-Inflammatory Peptides':    'border-orange-200 text-orange-600',
  'Longevity Research Peptides':   'border-purple-200 text-purple-600',
  'Neurological Peptides':         'border-indigo-200 text-indigo-600',
  'Melanocortin Peptides':         'border-rose-200 text-rose-600',
  'Immunomodulatory Peptides':     'border-cyan-200 text-cyan-600',
  'Dermatological Peptides':       'border-pink-200 text-pink-600',
  'Mitochondrial Peptides':        'border-amber-200 text-amber-700',
  'Supplies':                      'border-slate-200 text-slate-600',
};

const availableCount = products.filter((p) => p.status === 'available').length;

const steps = [
  {
    num: '01',
    title: 'Browse products',
    body: 'Filter by compound class or search by name. Each compound shows availability and size options.',
  },
  {
    num: '02',
    title: 'Fill out the order form',
    body: 'Select what you want, specify quantities, and choose shipping or local pickup.',
  },
  {
    num: '03',
    title: 'Complete payment',
    body: 'After submitting your order you will receive an email with payment instructions. Your order will be fulfilled once payment is confirmed.',
  },
];

function ProductCard({ product, onViewDetails }) {
  const { addItem } = useCart();
  const available = product.status === 'available';
  const firstAvailableSize = product.sizes.find(s => !s.label.includes('Out of Stock')) || product.sizes[0];
  const [selectedSize, setSelectedSize] = useState(firstAvailableSize);
  const [added, setAdded] = useState(false);

  const sizeInStock = !selectedSize.label.includes('Out of Stock');

  function handleAdd() {
    if (!sizeInStock) return;
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className={`card p-5 flex flex-col gap-4 border-t-[3px] border-t-[#1d6fb8] transition-all duration-200 ${available ? 'hover:border-accent/30 hover:bg-surface-2' : 'opacity-50'}`}>

      {/* Name + categories */}
      <div>
        <h3 className="text-sm font-semibold text-primary leading-tight mb-2">{product.name}</h3>
        <div className="flex flex-wrap gap-1">
          {product.categories.map((cat) => (
            <span key={cat} className={`badge ${categoryColors[cat] || 'border-border text-muted'}`}>
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Size selector */}
      {available && (
        <div>
          {product.sizes.length === 1 ? (
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted">{product.sizes[0].label}</span>
              <span className="text-base font-mono font-bold text-accent">${product.sizes[0].price}</span>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-2">
              <select
                value={selectedSize.label}
                onChange={(e) => setSelectedSize(product.sizes.find(s => s.label === e.target.value))}
                className="input-field text-xs py-1.5 flex-1"
              >
                {product.sizes.map((s) => (
                  <option key={s.label} value={s.label}>{s.label}</option>
                ))}
              </select>
              <span className="text-base font-mono font-bold text-accent shrink-0">${selectedSize.price}</span>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
        <span className={`flex items-center gap-1.5 text-xs font-mono ${available ? 'text-available' : 'text-oos'}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${available ? 'bg-available' : 'bg-oos'}`} />
          {available ? 'Available' : 'Out of Stock'}
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onViewDetails(product)}
            className="text-xs text-[#374151] font-medium hover:text-primary transition-colors underline underline-offset-2"
          >
            Details
          </button>
          {available && (
            sizeInStock ? (
              <button
                onClick={handleAdd}
                className={`text-xs font-medium transition-colors ${added ? 'text-available' : 'text-accent hover:underline underline-offset-2'}`}
              >
                {added ? 'Added ✓' : 'Add to Cart →'}
              </button>
            ) : (
              <span className="text-xs font-mono text-oos">Out of Stock</span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function HomeContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [search, setSearch]       = useState('');
  const [activeCategory, setCategory] = useState(initialCategory);
  const [availableOnly, setAvailOnly] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch   = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || p.categories.includes(activeCategory);
      const matchesAvail    = !availableOnly || p.status === 'available';
      return matchesSearch && matchesCategory && matchesAvail;
    });
  }, [search, activeCategory, availableOnly]);

  return (
    <>
      <div className="max-w-6xl mx-auto px-6">

        {/* Hero */}
        <section className="pt-20 pb-16 border-b border-border">
          <div className="text-center mx-auto">
            <p className="section-label mb-5">Research compounds — {availableCount} in stock</p>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6 whitespace-nowrap">
              Your <span style={{ color: '#0f2744' }}>Daily</span><span style={{ color: '#1d6fb8' }}>Pep</span>
            </h1>
            <p className="text-center text-lg text-muted leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

        </section>

        {/* Disclaimer */}
        <section className="py-5 border-b border-border">
          <div className="bg-amber-50 border border-amber-200 rounded-sm px-4 py-3 flex gap-3">
            <span className="text-amber-500 text-sm mt-0.5">⚠</span>
            <p className="text-xs text-amber-800 leading-relaxed">
              <span className="font-semibold uppercase tracking-wide text-[10px] mr-2">Research Use Only</span>
              All products are sold strictly for laboratory research purposes only. Not for human or animal consumption. Not FDA approved. Not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 border-b border-border">
          <p className="section-label mb-10">How to order</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num}>
                <p className="font-mono text-4xl font-bold text-border mb-4">{step.num}</p>
                <h3 className="text-base font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="py-12">
          <p className="section-label mb-3">Research Compounds</p>
          <h2 className="text-3xl font-bold text-primary tracking-tight mb-8">Products</h2>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search compounds..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field sm:max-w-xs"
            />
            <button
              onClick={() => setAvailOnly(!availableOnly)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm border text-sm transition-all duration-150
                ${availableOnly
                  ? 'bg-accent/10 border-accent/40 text-accent'
                  : 'border-border text-muted hover:border-border-2 hover:text-primary'
                }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${availableOnly ? 'bg-accent' : 'bg-muted'}`} />
              Available only
            </button>
            <span className="flex items-center text-xs font-mono text-muted ml-auto">
              {filtered.length} compound{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-border">
            {['All', ...ALL_CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1 text-xs font-mono rounded-sm border transition-all duration-150
                  ${activeCategory === cat
                    ? 'border-accent/60 bg-accent/10 text-accent'
                    : 'border-border text-muted hover:border-border-2 hover:text-primary'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted font-mono text-sm">No compounds match your filters.</p>
              <button
                onClick={() => { setSearch(''); setCategory('All'); setAvailOnly(false); }}
                className="mt-4 text-xs text-accent hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={setDetailProduct}
                />
              ))}
            </div>
          )}
        </section>

      </div>

      <ProductDetailPanel
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="max-w-6xl mx-auto px-6 py-12 text-muted text-sm font-mono">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
