import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

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


const PRODUCTS = [
    { id: 1, name: "Esprit Ruffle Shirt", category: "women", price: 16.64, image: product1 },
    { id: 2, name: "Herschel Supply", category: "women", price: 35.31, image: product2 },
    { id: 3, name: "Only Check Trouser", category: "men", price: 25.50, image: product3 },
    { id: 4, name: "Classic Trench Coat", category: "women", price: 75.00, image: product4 },
    { id: 5, name: "Front Pocket Jumper", category: "women", price: 34.75, image: product5 },
    { id: 6, name: "Vintage Inspired Watch", category: "watches", price: 93.20, image: product6 },
    { id: 7, name: "Shirt in Stretch Cotton", category: "women", price: 52.66, image: product7 },
    { id: 8, name: "Pieces Metallic Printed", category: "women", price: 18.96, image: product8 },
    { id: 9, name: "Converse All Star Hi", category: "shoes", price: 75.00, image: product9 },
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

const AllProduct = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [sortBy, setSortBy] = useState("featured");
    const [query, setQuery] = useState("");
    const [visibleCount, setVisibleCount] = useState(8);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const { toggleWishlist, isInWishlist } = useWishlist();

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
                                            data-bs-toggle="modal"
                                            data-bs-target="#productQuickViewModal"
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
                <div
                    className="modal fade"
                    id="productQuickViewModal"
                    tabIndex="-1"
                    aria-labelledby="productQuickViewModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content ap-modal">
                            <div className="modal-header border-0 pb-0">
                                <h5 className="modal-title" id="productQuickViewModalLabel">
                                    {selectedProduct?.name || "Product Detail"}
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>

                            <div className="modal-body">
                                {selectedProduct && (
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="ap-modal-image-wrap">
                                                <img
                                                    src={selectedProduct.image}
                                                    alt={selectedProduct.name}
                                                    className="img-fluid rounded-3"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <h4 className="mb-2">{selectedProduct.name}</h4>
                                            <p className="ap-modal-price mb-2">${selectedProduct.price.toFixed(2)}</p>

                                            <p className="ap-modal-desc mb-3">
                                                {selectedProduct.description ||
                                                    "Premium quality product with modern styling, comfortable fit, and durable materials."}
                                            </p>

                                            <div className="mb-3">
                                                <strong>Category:</strong> {selectedProduct.category}
                                            </div>

                                            <div className="mb-3">
                                                <strong>SKU:</strong> {selectedProduct.sku || `SKU-${selectedProduct.id}`}
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label mb-1">Size</label>
                                                <select className="form-select">
                                                    <option>Choose size</option>
                                                    {(selectedProduct.sizes || ["S", "M", "L", "XL"]).map((size) => (
                                                        <option key={size}>{size}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label mb-1">Color</label>
                                                <select className="form-select">
                                                    <option>Choose color</option>
                                                    {(selectedProduct.colors || ["Black", "White", "Blue"]).map((color) => (
                                                        <option key={color}>{color}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="d-flex gap-2">
                                                <button className="btn btn-dark">Add to Cart</button>
                                                <button className="btn btn-outline-secondary">Wishlist</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

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