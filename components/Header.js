'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart, useCartCount } from '@/context/CartContext';

export default function Header() {
  const { setIsOpen } = useCart();
  const count = useCartCount();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-bold text-primary tracking-tight">
          YDP
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6">
          <Link href="/catalog" className="text-sm text-muted hover:text-primary transition-colors">Catalog</Link>
          <Link href="/order"   className="text-sm text-muted hover:text-primary transition-colors">Order</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="text-sm text-muted hover:text-primary transition-colors font-mono flex items-center gap-1.5"
          >
            Cart
            {count > 0 && (
              <span className="bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                {count}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-muted hover:text-primary transition-colors text-lg leading-none"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="sm:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-4">
          <Link
            href="/catalog"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-primary font-medium"
          >
            Catalog
          </Link>
          <Link
            href="/order"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-primary font-medium"
          >
            Order
          </Link>
        </div>
      )}
    </header>
  );
}
