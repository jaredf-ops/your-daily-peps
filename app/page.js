import Link from 'next/link';
import products from '@/data/products.json';
import siteConfig from '@/lib/siteConfig';

const ALL_CATEGORIES = [
  'GLP-1 & Metabolic Analogs','Growth Hormone Peptides','Tissue Repair Peptides',
  'Anti-Inflammatory Peptides','Longevity Research Peptides','Neurological Peptides',
  'Melanocortin Peptides','Immunomodulatory Peptides','Dermatological Peptides',
  'Mitochondrial Peptides',
];

const categoryMeta = {
  'GLP-1 & Metabolic Analogs':    { icon: '◈', description: 'GLP-1 receptor agonists, amylin analogs, and metabolic signaling compounds' },
  'Growth Hormone Peptides':       { icon: '▲', description: 'GHRH analogs, ghrelin mimetics, and GH axis secretagogues' },
  'Tissue Repair Peptides':        { icon: '✦', description: 'Angiogenic and regenerative peptides studied in wound and connective tissue models' },
  'Anti-Inflammatory Peptides':    { icon: '◎', description: 'NF-kB modulators and cytokine-regulating research compounds' },
  'Longevity Research Peptides':   { icon: '◐', description: 'Telomerase activators, senolytics, and cellular aging research compounds' },
  'Neurological Peptides':         { icon: '◉', description: 'Neuropeptides studied in CNS signaling, neurotrophic factor expression, and sleep research' },
  'Melanocortin Peptides':         { icon: '◆', description: 'Synthetic melanocortin receptor agonists studied in pigmentation and HPG axis research' },
  'Immunomodulatory Peptides':     { icon: '◫', description: 'Peptides studied in immune regulation, T-cell function, and antimicrobial activity' },
  'Dermatological Peptides':       { icon: '♦', description: 'Compounds studied in collagen synthesis, melanogenesis, and dermatological research' },
  'Mitochondrial Peptides':        { icon: '◇', description: 'Mitochondria-targeting compounds studied in cellular energy metabolism research' },
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
    body: 'Filter by compound class or search by name. Each compound shows availability and size options.',
  },
  {
    num: '02',
    title: 'Fill out the order form',
    body: 'Select what you want, specify quantities, and choose shipping or local pickup.',
  },
  {
    num: '03',
    title: 'Pay via Venmo',
    body: `Send payment to @${siteConfig.venmo} and your order will be fulfilled and shipped promptly.`,
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
            {siteConfig.tagline}
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
