import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import { useCart } from "../componets/CartProvider";

const Cart = () => {
  const { cartItems, cartCount, cartSubtotal, updateLineQty, removeFromCart, clearCart } =
    useCart();

  return (
    <div className="cart-page">
      <Navbar />
      <section className="cart-hero">
        <div className="container">
          <p className="cart-hero__eyebrow">Shopping bag</p>
          <h1 className="cart-hero__title">Your cart</h1>
          <p className="cart-hero__lead">
            {cartCount === 0
              ? "Items you add will show up here."
              : `${cartCount} item${cartCount === 1 ? "" : "s"} · Subtotal $${cartSubtotal.toFixed(2)}`}
          </p>
        </div>
      </section>

      <section className="cart-body">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty__icon" aria-hidden="true">
                <i className="fa-solid fa-bag-shopping" />
              </div>
              <h2 className="cart-empty__title">Your cart is empty</h2>
              <p className="cart-empty__text">
                Use Quick View on a product to pick size, color, and quantity—then add to cart.
              </p>
              <Link to="/shop" className="cart-empty__btn">
                Start shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-toolbar">
                <Link to="/shop" className="cart-toolbar__link">
                  <i className="fa-solid fa-arrow-left-long" aria-hidden="true" />
                  Continue shopping
                </Link>
                <button type="button" className="cart-toolbar__clear" onClick={clearCart}>
                  Clear cart
                </button>
              </div>

              <div className="cart-layout">
                <ul className="cart-lines" aria-label="Cart items">
                  {cartItems.map((row) => (
                    <li key={row.lineKey} className="cart-line">
                      <div className="cart-line__media">
                        <img src={row.image || ""} alt="" />
                      </div>
                      <div className="cart-line__main">
                        <h2 className="cart-line__title">{row.name}</h2>
                        <p className="cart-line__meta">
                          {row.size} · {row.color}
                          {row.category && (
                            <>
                              {" "}
                              ·{" "}
                              {String(row.category).charAt(0).toUpperCase() +
                                String(row.category).slice(1)}
                            </>
                          )}
                        </p>
                        <p className="cart-line__unit">
                          ${row.price.toFixed(2)} each
                        </p>
                      </div>
                      <div className="cart-line__qty">
                        <span className="cart-line__qty-label" id={`qty-label-${row.lineKey}`}>
                          Qty
                        </span>
                        <div
                          className="cart-line__qty-controls"
                          role="group"
                          aria-labelledby={`qty-label-${row.lineKey}`}
                        >
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            disabled={row.qty <= 1}
                            onClick={() => updateLineQty(row.lineKey, row.qty - 1)}
                          >
                            −
                          </button>
                          <span aria-live="polite">{row.qty}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            disabled={row.qty >= 99}
                            onClick={() => updateLineQty(row.lineKey, row.qty + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="cart-line__right">
                        <p className="cart-line__sub">
                          ${(row.price * row.qty).toFixed(2)}
                        </p>
                        <button
                          type="button"
                          className="cart-line__remove"
                          onClick={() => removeFromCart(row.lineKey)}
                          aria-label={`Remove ${row.name} from cart`}
                        >
                          <i className="fa-solid fa-trash-can" aria-hidden="true" />
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <aside className="cart-summary" aria-labelledby="cart-summary-heading">
                  <h2 id="cart-summary-heading" className="cart-summary__title">
                    Order summary
                  </h2>
                  <div className="cart-summary__row">
                    <span>Subtotal</span>
                    <span>${cartSubtotal.toFixed(2)}</span>
                  </div>
                  <p className="cart-summary__hint">
                    Shipping and taxes calculated at checkout (demo store).
                  </p>
                  <button type="button" className="cart-summary__checkout">
                    Checkout
                  </button>
                  <Link to="/shop" className="cart-summary__shop">
                    Add more items
                  </Link>
                </aside>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
