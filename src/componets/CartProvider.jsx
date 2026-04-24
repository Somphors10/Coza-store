import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "coza-cart-items";

const CartContext = createContext(null);

function lineKeyFor(productId, size, color) {
  return `${productId}__${size}__${color}`;
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      /* ignore */
    }
  }, [cartItems]);

  const addToCart = useCallback(({ product, size, color, qty }) => {
    if (!product || qty < 1) return;
    const lineKey = lineKeyFor(product.id, size, color);
    const unitPrice =
      typeof product.price === "number" ? product.price : Number(product.price) || 0;

    setCartItems((prev) => {
      const idx = prev.findIndex((row) => row.lineKey === lineKey);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = {
          ...next[idx],
          qty: Math.min(99, next[idx].qty + qty),
        };
        return next;
      }
      return [
        ...prev,
        {
          lineKey,
          id: product.id,
          name: product.name,
          price: unitPrice,
          image: product.image,
          category: product.category,
          size,
          color,
          qty,
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback((lineKey) => {
    setCartItems((prev) => prev.filter((row) => row.lineKey !== lineKey));
  }, []);

  const updateLineQty = useCallback((lineKey, qty) => {
    const nextQty = Math.max(1, Math.min(99, Number(qty) || 1));
    setCartItems((prev) =>
      prev.map((row) =>
        row.lineKey === lineKey ? { ...row, qty: nextQty } : row
      )
    );
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const value = useMemo(() => {
    const cartCount = cartItems.reduce((sum, row) => sum + row.qty, 0);
    const cartSubtotal = cartItems.reduce(
      (sum, row) => sum + row.price * row.qty,
      0
    );
    return {
      cartItems,
      cartCount,
      cartSubtotal,
      addToCart,
      removeFromCart,
      updateLineQty,
      clearCart,
    };
  }, [cartItems, addToCart, removeFromCart, updateLineQty, clearCart]);

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
