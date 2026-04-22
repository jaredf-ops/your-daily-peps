import Link from 'next/link';
import products from '@/data/products.json';
import siteConfig from '@/lib/siteConfig';

const ALL_CATEGORIES = [
  'Weight Management','Metabolic Health','Healing & Recovery',
  'Pain & Inflammation','Anti-Aging','Sleep Support',
  'Cognitive Enhancement','Libido & Sexual Health','Immune Support',
  'Skin & Beauty','Muscle Growth','Energy & Performance',
];

const categoryMeta = {
  'Weight Management':     { icon: '⚖', description: 'Fat loss, GLP-1 analogs, metabolism modulation' },
  'Metabolic Health':      { icon: '◈', description: 'Insulin sensitivity, mitochondrial support' },
  'Healing & Recovery':    { icon: '✦', description: 'Tissue repair, injury recovery, joint health' },
  'Pain & Inflammation':   { icon: '◎', description: 'Anti-inflammatory, neuroprotective compounds' },
  'Anti-Aging':            { icon: '◐', description: 'Telomere support, cellular longevity peptides' },
  'Sleep Support':         { icon: '☽', description: 'Deep sleep induction, circadian regulation' },
  'Cognitive Enhancement': { icon: '◉', description: 'Focus, memory, neuroprotection, mood' },
  'Libido & Sexual Health':{ icon: '♦', description: 'Hormonal balance, sexual function, drive' },
  'Immune Support':        { icon: '◫', description: 'Innate immunity, thymic peptides, antiviral' },
  'Skin & Beauty':         { icon: '◆', description: 'Collagen synthesis, anti-wrinkle, skin repair' },
  'Muscle Growth':         { icon: '▲', description: 'GH secretagogues, IGF-1 axis, lean mass' },
  'Energy & Performance':  { icon: '◇', description: 'Mitochondrial, endurance, cellular energy' },
};

function getCategoryCount(category) {
  return products.filter(
    (p) => p.categories.includes(category) && p.status === 'available'
  ).length;
}

const availableCount = products.filter((p) => p.status === 'available').length;

const steps = [
  {
    num: '01',
    title: 'Browse the catalog',
    body: 'Filter by goal or search by name. Each compound shows availability and size options.',
  },
  {
    num: '02',
    title: 'Fill out the order form',
    body: 'Select what you want, specify quantities, and choose shipping or local pickup.',
  },
  {
    num: '03',
    title: 'Pay via Venmo',
    body: `Send payment to @${siteConfig.venmo} — dosing instructions ship with every order.`,
  },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6">

      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-border">
        <div className="text-center mx-auto">
          <p className="section-label mb-5">Research compounds — {availableCount} in stock</p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6 whitespace-nowrap">
            Your <span style={{ color: '#0f2744' }}>Daily</span><span style={{ color: '#1d6fb8' }}>Pep</span>
          </h1>
          <p className="text-center text-lg text-muted leading-relaxed mb-10">
            {siteConfig.tagline} Dosing instructions included with every order.
          </p>
          <div className="flex justify-center">
            <Link href="/catalog" className="btn-primary">Browse Catalog</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-border">
          {[
            { value: `${products.length}`,      label: 'Compounds'     },
            { value: `${availableCount}`,        label: 'In Stock'      },
            { value: `${ALL_CATEGORIES.length}`, label: 'Categories'   },
            { value: '$8',                        label: 'Flat Shipping' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold font-mono text-accent">{value}</p>
              <p className="text-xs text-muted mt-1 uppercase tracking-widest font-mono">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer banner */}
      <section className="py-5 border-b border-border">
        <div className="bg-amber-50 border border-amber-200 rounded-sm px-4 py-3 flex gap-3">
          <span className="text-amber-500 text-sm mt-0.5">⚠</span>
          <p className="text-xs text-amber-800 leading-relaxed">
            <span className="font-semibold uppercase tracking-wide text-[10px] mr-2">Research Use Only</span>
            All products are intended for research purposes only and are not approved by the FDA for human use.
            By browsing or purchasing, you confirm you are a qualified researcher and will comply with all applicable laws.
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

      {/* Category grid */}
      <section className="py-16">
        <p className="section-label mb-8">Browse by goal</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {ALL_CATEGORIES.map((cat) => {
            const count = getCategoryCount(cat);
            const meta  = categoryMeta[cat] || {};
            return (
              <Link
                key={cat}
                href={`/catalog?category=${encodeURIComponent(cat)}`}
                className="card p-4 border-l-[3px] border-l-[#1d6fb8] hover:border-accent/30 hover:bg-surface-2 group cursor-pointer transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xl text-muted group-hover:text-accent transition-colors duration-200">
                    {meta.icon}
                  </span>
                  <span className="font-mono text-xs text-muted">{count}</span>
                </div>
                <p className="text-sm font-semibold text-primary mb-1 leading-tight">{cat}</p>
                <p className="text-xs text-muted leading-snug line-clamp-2">{meta.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
}
