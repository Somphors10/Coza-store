import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import { useWishlist } from "../componets/WishlistProvider";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <Navbar />
      <section className="wishlist-hero">
        <div className="container">
          <p className="wishlist-hero__eyebrow">Saved for later</p>
          <h1 className="wishlist-hero__title">Your wishlist</h1>
          <p className="wishlist-hero__lead">
            {wishlistItems.length === 0
              ? "Items you love will appear here."
              : `${wishlistItems.length} item${wishlistItems.length === 1 ? "" : "s"} saved`}
          </p>
        </div>
      </section>

      <section className="wishlist-body">
        <div className="container">
          {wishlistItems.length === 0 ? (
            <div className="wishlist-empty">
              <div className="wishlist-empty__icon" aria-hidden="true">
                <i className="fa-regular fa-heart" />
              </div>
              <h2 className="wishlist-empty__title">Nothing here yet</h2>
              <p className="wishlist-empty__text">
                Tap the heart on any product while you shop—we will keep your favorites here.
              </p>
              <Link to="/shop" className="wishlist-empty__btn">
                Browse the shop
              </Link>
            </div>
          ) : (
            <>
              <div className="wishlist-toolbar">
                <Link to="/shop" className="wishlist-toolbar__link">
                  <i className="fa-solid fa-arrow-left-long" aria-hidden="true" />
                  Continue shopping
                </Link>
                <button type="button" className="wishlist-toolbar__clear" onClick={clearWishlist}>
                  Clear wishlist
                </button>
              </div>

              <ul className="wishlist-grid">
                {wishlistItems.map((item) => (
                  <li key={item.id} className="wishlist-card">
                    <div className="wishlist-card__media">
                      <img
                        src={item.image || ""}
                        alt={item.name || "Product"}
                      />
                    </div>
                    <div className="wishlist-card__body">
                      <h2 className="wishlist-card__title">{item.name}</h2>
                      {item.category && (
                        <p className="wishlist-card__cat">
                          {String(item.category).charAt(0).toUpperCase() + String(item.category).slice(1)}
                        </p>
                      )}
                      <p className="wishlist-card__price">
                        ${typeof item.price === "number" ? item.price.toFixed(2) : item.price}
                      </p>
                      <div className="wishlist-card__actions">
                        <Link to="/shop" className="wishlist-card__shop">
                          View in shop
                        </Link>
                        <button
                          type="button"
                          className="wishlist-card__remove"
                          onClick={() => removeFromWishlist(item.id)}
                          aria-label={`Remove ${item.name} from wishlist`}
                        >
                          <i className="fa-solid fa-trash-can" aria-hidden="true" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wishlist;
