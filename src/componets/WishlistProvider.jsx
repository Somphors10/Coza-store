import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        try {
            const raw = localStorage.getItem("wishlist-items");
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("wishlist-items", JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const isInWishlist = useCallback(
        (id) => wishlistItems.some((item) => item.id === id),
        [wishlistItems]
    );

    const toggleWishlist = useCallback((product) => {
        setWishlistItems((prev) => {
            const exists = prev.some((item) => item.id === product.id);
            if (exists) return prev.filter((item) => item.id !== product.id);
            return [...prev, product];
        });
    }, []);

    const removeFromWishlist = useCallback((id) => {
        setWishlistItems((prev) => prev.filter((item) => item.id !== id));
    }, []);

    const clearWishlist = useCallback(() => setWishlistItems([]), []);

    const value = useMemo(
        () => ({
            wishlistItems,
            wishlistCount: wishlistItems.length,
            isInWishlist,
            toggleWishlist,
            removeFromWishlist,
            clearWishlist,
        }),
        [wishlistItems, isInWishlist, toggleWishlist, removeFromWishlist, clearWishlist]
    );

    return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
    const ctx = useContext(WishlistContext);
    if (!ctx) throw new Error("useWishlist must be used inside WishlistProvider");
    return ctx;
};