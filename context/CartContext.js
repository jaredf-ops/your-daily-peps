'use client';

import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems]     = useState([]);
  const [isOpen, setIsOpen]   = useState(false);

  function addItem(product, size) {
    setItems((prev) => {
      const key = `${product.id}-${size.label}`;
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) => i.key === key ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { key, product, size, qty: 1 }];
    });
    setIsOpen(true);
  }

  function removeItem(key) {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }

  function updateQty(key, qty) {
    if (qty < 1) return removeItem(key);
    setItems((prev) => prev.map((i) => i.key === key ? { ...i, qty } : i));
  }

  function clearCart() {
    setItems([]);
  }

  const subtotal = items.reduce((sum, i) => sum + i.size.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, subtotal, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartCount() {
  const { items } = useContext(CartContext);
  return items.reduce((sum, i) => sum + i.qty, 0);
}
