import Link from 'next/link';
import siteConfig from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-1">{siteConfig.name}</p>
            <p className="text-xs text-muted">{siteConfig.tagline}</p>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/"        className="text-xs text-muted hover:text-primary transition-colors">Home</Link>
            <Link href="/catalog" className="text-xs text-muted hover:text-primary transition-colors">Catalog</Link>
            <Link href="/order"   className="text-xs text-muted hover:text-primary transition-colors">Order</Link>
          </nav>
        </div>
        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted leading-relaxed max-w-2xl">
            <span className="font-mono tracking-widest uppercase text-[10px] mr-2">Disclaimer</span>
            {siteConfig.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
