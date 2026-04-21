'use client';

import Link from 'next/link';
import { useCart, useCartCount } from '@/context/CartContext';

export default function Header() {
  const { setIsOpen } = useCart();
  const count = useCartCount();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-bold text-primary tracking-tight">
          YDP
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          <Link href="/catalog" className="text-sm text-muted hover:text-primary transition-colors">Catalog</Link>
          <Link href="/order"   className="text-sm text-muted hover:text-primary transition-colors">Order</Link>
        </nav>

        <button
          onClick={() => setIsOpen(true)}
          className="relative text-sm text-muted hover:text-primary transition-colors font-mono flex items-center gap-1.5"
        >
          Cart
          {count > 0 && (
            <span className="bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
