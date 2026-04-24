import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";

import product1 from "../assets/product-01.jpg";
import product2 from "../assets/product-02.jpg";
import product3 from "../assets/product-03.jpg";
import product4 from "../assets/product-04.jpg";
import product5 from "../assets/product-05.jpg";
import product6 from "../assets/product-06.jpg";
import product7 from "../assets/product-07.jpg";
import product8 from "../assets/product-08.jpg";
import product9 from "../assets/product-09.jpg";
import product10 from "../assets/product-10.jpg";
import product11 from "../assets/product-11.jpg";
import product12 from "../assets/product-12.jpg";
import product13 from "../assets/product-13.jpg";
import product14 from "../assets/product-14.jpg";
import product15 from "../assets/product-15.jpg";
import product16 from "../assets/product-16.jpg";
import { useWishlist } from "./WishlistProvider";
import { useCart } from "./CartProvider";

const PRODUCTS = [
    { id: 1, name: "Esprit Ruffle Shirt", category: "women", price: 16.64, image: product1 },
    { id: 2, name: "Herschel Supply", category: "women", price: 35.31, image: product2 },
    { id: 3, name: "Only Check Trouser", category: "men", price: 25.5, image: product3 },
    { id: 4, name: "Classic Trench Coat", category: "women", price: 75.0, image: product4 },
    { id: 5, name: "Front Pocket Jumper", category: "women", price: 34.75, image: product5 },
    { id: 6, name: "Vintage Inspired Watch", category: "watches", price: 93.2, image: product6 },
    { id: 7, name: "Shirt in Stretch Cotton", category: "women", price: 52.66, image: product7 },
    { id: 8, name: "Pieces Metallic Printed", category: "women", price: 18.96, image: product8 },
    { id: 9, name: "Converse All Star Hi", category: "shoes", price: 75.0, image: product9 },
    { id: 10, name: "Femme T-Shirt in Stripe", category: "women", price: 25.85, image: product10 },
    { id: 11, name: "Herschel Supply Backpack", category: "men", price: 63.16, image: product11 },
    { id: 12, name: "Herschel Supply Tote", category: "men", price: 63.15, image: product12 },
    { id: 13, name: "T-Shirt with Sleeve", category: "women", price: 18.49, image: product13 },
    { id: 14, name: "Pretty Little Thing", category: "bag", price: 54.79, image: product14 },
    { id: 15, name: "Mini Silver Mesh Watch", category: "watches", price: 86.85, image: product15 },
    { id: 16, name: "Square Neck Back", category: "women", price: 29.64, image: product16 },
];

const FILTERS = [
    { key: "all", label: "All Products" },
    { key: "women", label: "Women" },
    { key: "men", label: "Men" },
    { key: "bag", label: "Bag" },
    { key: "shoes", label: "Shoes" },
    { key: "watches", label: "Watches" },
];

const SIZE_OPTIONS = ["XS", "S", "M", "L", "XL"];

const COLOR_OPTIONS = [
    { name: "Black", hex: "#1e293b" },
    { name: "White", hex: "#f1f5f9" },
    { name: "Blue", hex: "#3b82f6" },
    { name: "Sand", hex: "#c4a484" },
];

const AllProduct = () => {
    const [searchParams] = useSearchParams();
    const qFromUrl = searchParams.get("q") ?? "";

    const [activeFilter, setActiveFilter] = useState("all");
    const [sortBy, setSortBy] = useState("featured");
    const [query, setQuery] = useState(qFromUrl);
    const [visibleCount, setVisibleCount] = useState(8);

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [size, setSize] = useState("M");
    const [color, setColor] = useState(COLOR_OPTIONS[0].name);
    const [qty, setQty] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    const closeRef = useRef(null);

    useEffect(() => {
        if (!addedToCart) return;
        const t = window.setTimeout(() => setAddedToCart(false), 2200);
        return () => window.clearTimeout(t);
    }, [addedToCart]);

    const { toggleWishlist, isInWishlist } = useWishlist();
    const { addToCart } = useCart();

    useEffect(() => {
        setQuery(qFromUrl);
        setVisibleCount(8);
    }, [qFromUrl]);

    useEffect(() => {
        if (!selectedProduct) return;
        setSize("M");
        setColor(COLOR_OPTIONS[0].name);
        setQty(1);
        setAddedToCart(false);
    }, [selectedProduct]);

    const closeQuickView = useCallback(() => {
        setSelectedProduct(null);
        setAddedToCart(false);
    }, []);

    useEffect(() => {
        if (!selectedProduct) return;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [selectedProduct]);

    useEffect(() => {
        if (!selectedProduct) return;
        const onKey = (e) => {
            if (e.key === "Escape") closeQuickView();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [selectedProduct, closeQuickView]);

    useEffect(() => {
        if (!selectedProduct) return;
        const t = window.setTimeout(() => closeRef.current?.focus(), 40);
        return () => window.clearTimeout(t);
    }, [selectedProduct]);

    const openQuickView = (product) => {
        setSelectedProduct(product);
    };

    const filteredProducts = useMemo(() => {
        let list = [...PRODUCTS];

        if (activeFilter !== "all") {
            list = list.filter((item) => item.category === activeFilter);
        }

        if (query.trim()) {
            const text = query.toLowerCase();
            list = list.filter((item) => item.name.toLowerCase().includes(text));
        }

        if (sortBy === "price-low") list.sort((a, b) => a.price - b.price);
        if (sortBy === "price-high") list.sort((a, b) => b.price - a.price);
        if (sortBy === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name));

        return list;
    }, [activeFilter, sortBy, query]);

    const visibleProducts = filteredProducts.slice(0, visibleCount);
    const hasMore = visibleCount < filteredProducts.length;

    const categoryLabel = (c) =>
        c ? c.charAt(0).toUpperCase() + c.slice(1) : "";

    const quickViewModal =
        selectedProduct &&
        createPortal(
            <div
                className="ap-qv-root"
                role="dialog"
                aria-modal="true"
                aria-labelledby="ap-qv-title"
            >
                <button
                    type="button"
                    className="ap-qv-backdrop"
                    aria-label="Close quick view"
                    onClick={closeQuickView}
                />
                <div className="ap-qv-panel">
                    <button
                        ref={closeRef}
                        type="button"
                        className="ap-qv-close"
                        aria-label="Close"
                        onClick={closeQuickView}
                    >
                        <i className="fa-solid fa-xmark" aria-hidden="true" />
                    </button>

                    <div className="ap-qv-grid">
                        <div className="ap-qv-gallery">
                            <div className="ap-qv-gallery-inner">
                                <img src={selectedProduct.image} alt="" />
                            </div>
                        </div>

                        <div className="ap-qv-detail">
                            <p className="ap-qv-badge">{categoryLabel(selectedProduct.category)}</p>
                            <h2 id="ap-qv-title" className="ap-qv-title">
                                {selectedProduct.name}
                            </h2>
                            <p className="ap-qv-price">${selectedProduct.price.toFixed(2)}</p>
                            <p className="ap-qv-desc">
                                {selectedProduct.description ||
                                    "Premium quality with a modern silhouette, soft hand-feel, and durable construction—made for everyday wear."}
                            </p>

                            <div className="ap-qv-meta">
                                <span>
                                    <strong>SKU</strong> {selectedProduct.sku || `CZ-${String(selectedProduct.id).padStart(4, "0")}`}
                                </span>
                                <span>
                                    <strong>Ships</strong> 2–4 business days
                                </span>
                            </div>

                            <div className="ap-qv-row">
                                <span className="ap-qv-label" id="ap-qv-size-label">
                                    Size
                                </span>
                                <div className="ap-qv-pills" role="group" aria-labelledby="ap-qv-size-label">
                                    {SIZE_OPTIONS.map((s) => (
                                        <button
                                            key={s}
                                            type="button"
                                            className={`ap-qv-pill ${size === s ? "is-active" : ""}`}
                                            onClick={() => setSize(s)}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="ap-qv-row">
                                <span className="ap-qv-label" id="ap-qv-color-label">
                                    Color
                                </span>
                                <div className="ap-qv-swatches" role="group" aria-labelledby="ap-qv-color-label">
                                    {COLOR_OPTIONS.map((c) => (
                                        <button
                                            key={c.name}
                                            type="button"
                                            className={`ap-qv-swatch ${color === c.name ? "is-active" : ""}`}
                                            style={{ backgroundColor: c.hex }}
                                            title={c.name}
                                            aria-label={c.name}
                                            aria-pressed={color === c.name}
                                            onClick={() => setColor(c.name)}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="ap-qv-row">
                                <span className="ap-qv-label" id="ap-qv-qty-label">
                                    Quantity
                                </span>
                                <div className="ap-qv-qty" role="group" aria-labelledby="ap-qv-qty-label">
                                    <button
                                        type="button"
                                        aria-label="Decrease quantity"
                                        disabled={qty <= 1}
                                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                                    >
                                        −
                                    </button>
                                    <span aria-live="polite">{qty}</span>
                                    <button
                                        type="button"
                                        aria-label="Increase quantity"
                                        disabled={qty >= 99}
                                        onClick={() => setQty((q) => Math.min(99, q + 1))}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="ap-qv-actions">
                                <button
                                    type="button"
                                    className="ap-qv-btn-primary"
                                    onClick={() => {
                                        addToCart({
                                            product: selectedProduct,
                                            size,
                                            color,
                                            qty,
                                        });
                                        setAddedToCart(true);
                                    }}
                                >
                                    {addedToCart ? "Added to bag" : "Add to cart"}
                                </button>
                                <button
                                    type="button"
                                    className={`ap-qv-btn-secondary ${isInWishlist(selectedProduct.id) ? "is-on" : ""}`}
                                    onClick={() => toggleWishlist(selectedProduct)}
                                >
                                    <i
                                        className={isInWishlist(selectedProduct.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                                        aria-hidden="true"
                                    />
                                    {isInWishlist(selectedProduct.id) ? "Saved" : "Wishlist"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
            document.body
        );

    return (
        <section className="all-product-section py-5">
            <div className="container">
                <div className="top-pro">
                    <h3 className="overview">Product Overview</h3>
                </div>

                <div className="ap-toolbar">
                    <div className="ap-filter-wrap">
                        {FILTERS.map((filter) => (
                            <button
                                key={filter.key}
                                type="button"
                                className={`ap-filter-btn ${activeFilter === filter.key ? "is-active" : ""}`}
                                onClick={() => {
                                    setActiveFilter(filter.key);
                                    setVisibleCount(8);
                                }}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    <div className="ap-controls">
                        <input
                            className="ap-search"
                            type="text"
                            placeholder="Search products..."
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                setVisibleCount(8);
                            }}
                        />

                        <select
                            className="ap-sort"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name-asc">Name: A-Z</option>
                        </select>
                    </div>
                </div>

                <div className="row g-4 pt-3">
                    {visibleProducts.map((item, index) => (
                        <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                            <article className="ap-card" style={{ animationDelay: `${index * 40}ms` }}>
                                <div className="ap-image-wrap">
                                    <img src={item.image} alt={item.name} className="ap-image" />
                                    <div className="ap-overlay">
                                        <button
                                            type="button"
                                            className="ap-quick-btn"
                                            onClick={() => openQuickView(item)}
                                        >
                                            Quick View
                                        </button>
                                    </div>
                                </div>

                                <div className="ap-content">
                                    <h4 className="ap-title">{item.name}</h4>
                                    <div className="ap-meta">
                                        <span className="ap-price">${item.price.toFixed(2)}</span>
                                        <button
                                            type="button"
                                            className={`ap-heart ${isInWishlist(item.id) ? "is-active" : ""}`}
                                            aria-label={isInWishlist(item.id) ? "Remove from wishlist" : "Add to wishlist"}
                                            onClick={() => toggleWishlist(item)}
                                        >
                                            {isInWishlist(item.id) ? "❤" : "♡"}
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}

                    {visibleProducts.length === 0 && (
                        <div className="col-12">
                            <p className="ap-empty">No products found. Try another filter or search.</p>
                        </div>
                    )}
                </div>

                {quickViewModal}

                {hasMore && (
                    <div className="load text-center">
                        <button
                            type="button"
                            className="a-load ap-load-btn"
                            onClick={() => setVisibleCount((prev) => prev + 4)}
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllProduct;
