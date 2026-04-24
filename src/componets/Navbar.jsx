import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo-01.png";
import { useWishlist } from "./WishlistProvider";
import { useCart } from "./CartProvider";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const { wishlistCount } = useWishlist();
  const { cartCount } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchOpen, setSearchOpen] = useState(false);
  const [draft, setDraft] = useState("");

  const panelRef = useRef(null);
  const searchToggleRef = useRef(null);
  const inputRef = useRef(null);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
  }, []);

  const toggleSearch = useCallback(() => {
    setSearchOpen((o) => !o);
  }, []);

  const submitSearch = useCallback(() => {
    const term = draft.trim();
    if (term) {
      navigate(`/shop?q=${encodeURIComponent(term)}`);
    } else {
      navigate("/shop");
    }
    closeSearch();
  }, [draft, navigate, closeSearch]);

  useEffect(() => {
    if (!searchOpen) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(t);
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    if (location.pathname !== "/shop") return;
    const q = new URLSearchParams(location.search).get("q");
    if (q) setDraft(q);
  }, [searchOpen, location.pathname, location.search]);

  useEffect(() => {
    if (!searchOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") closeSearch();
    };

    const onPointerDown = (e) => {
      const el = e.target;
      if (!(el instanceof Node)) return;
      if (panelRef.current?.contains(el)) return;
      if (searchToggleRef.current?.contains(el)) return;
      closeSearch();
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [searchOpen, closeSearch]);

  return (
    <header className="main-header">
      <nav
        className={`navbar navbar-expand-lg ${
          isDark ? "navbar-dark" : "navbar-light"
        } custom-navbar`}
      >
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/home1">
            <img src={logo} alt="Coza Store" className="brand-logo" />
          </Link>

          <button
            className="navbar-toggler nav-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-links-wrap">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle nav-link-custom"
                  href="#"
                  id="homeDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </Link>
                <ul className="dropdown-menu nav-dropdown" aria-labelledby="homeDropdown">
                  <li><Link className="dropdown-item" to="/home1">Homepage 1</Link></li>
                  <li><Link className="dropdown-item" to="/home2">Homepage 2</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="/shop" className="nav-link nav-link-custom">Shop</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/feature" className="nav-link nav-link-custom">Feature</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link nav-link-custom">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link nav-link-custom">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link nav-link-custom">Contact</NavLink>
              </li>
            </ul>

            <div className="nav-actions">
              <button
                type="button"
                className={`theme-toggle${isDark ? " is-on" : ""}`}
                onClick={toggleTheme}
                aria-pressed={isDark}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                title={isDark ? "Light mode" : "Dark mode"}
              >
                <span className="theme-toggle-track" aria-hidden="true">
                  <span className="theme-toggle-thumb">
                    <i
                      className={`fa-solid ${isDark ? "fa-moon" : "fa-sun"}`}
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </button>

              <div className="nav-search-anchor">
                <button
                  ref={searchToggleRef}
                  type="button"
                  className={`icon-btn nav-search-trigger${searchOpen ? " is-active" : ""}`}
                  aria-label="Search products"
                  aria-expanded={searchOpen}
                  aria-controls="nav-search-panel"
                  onClick={toggleSearch}
                >
                  <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
                </button>
              </div>

              <Link to="/wishlist" className="icon-btn wishlist-btn" aria-label="Wishlist">
                <i className="fa-regular fa-heart" />
                {wishlistCount > 0 && <span className="icon-badge">{wishlistCount}</span>}
              </Link>

              <Link to="/cart" className="icon-btn" aria-label="Shopping cart">
                <i className="fa-solid fa-bag-shopping" aria-hidden="true" />
                {cartCount > 0 && <span className="icon-badge">{cartCount}</span>}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {searchOpen && (
        <div
          id="nav-search-panel"
          ref={panelRef}
          className="nav-search-panel"
          role="search"
        >
          <div className="container nav-search-inner">
            <div className="nav-search-field">
              <i className="fa-solid fa-magnifying-glass nav-search-field-icon" aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                className="nav-search-input"
                placeholder="Search products, categories, brands…"
                autoComplete="off"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    submitSearch();
                  }
                }}
              />
            </div>
            <div className="nav-search-actions">
              <button type="button" className="nav-search-btn-secondary" onClick={closeSearch}>
                Cancel
              </button>
              <button type="button" className="nav-search-btn-primary" onClick={submitSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
