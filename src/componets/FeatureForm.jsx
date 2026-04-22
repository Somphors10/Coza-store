import React, { useMemo, useState } from "react";
import itemCard4 from "../assets/item-cart-04.jpg";
import itemCard5 from "../assets/item-cart-05.jpg";

const initialItems = [
	{
		id: 1,
		name: "Fresh Strawberries",
		price: 36,
		qty: 1,
		image: itemCard4,
	},
	{
		id: 2,
		name: "Lightweight Jacket",
		price: 16,
		qty: 1,
		image: itemCard5,
	},
];

const FeatureForm = () => {
	const [items, setItems] = useState(initialItems);
	const [coupon, setCoupon] = useState("");
	const [country, setCountry] = useState("");
	const [state, setState] = useState("");
	const [zip, setZip] = useState("");

	const updateQty = (id, type) => {
		setItems((prev) =>
			prev.map((item) =>
				item.id === id
					? {
						...item,
						qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
					}
					: item
			)
		);
	};

	const setQtyDirect = (id, value) => {
		const numeric = Math.max(1, Number(value) || 1);
		setItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty: numeric } : item)));
	};

	const subtotal = useMemo(
		() => items.reduce((sum, item) => sum + item.price * item.qty, 0),
		[items]
	);

	const shipping = subtotal > 70 ? 0 : 5.99;
	const total = subtotal + shipping;

	return (
		<section className="feature feature-modern">
			<div className="container">
				<div className="row g-4">
					<div className="col-lg-8">
						<div className="feature-card">
							<div className="feature-card-header">
								<h4 className="feature-title">Shopping Cart</h4>
							</div>

							<div className="table-responsive">
								<table className="table table-modern align-middle mb-0">
									<thead>
										<tr>
											<th>Product</th>
											<th>Price</th>
											<th>Quantity</th>
											<th className="text-end">Total</th>
										</tr>
									</thead>
									<tbody>
										{items.map((item) => (
											<tr key={item.id}>
												<td>
													<div className="product-cell">
														<img src={item.image} alt={item.name} className="product-thumb" />
														<span>{item.name}</span>
													</div>
												</td>
												<td>${item.price.toFixed(2)}</td>
												<td>
													<div className="qty-control">
														<button type="button" onClick={() => updateQty(item.id, "dec")}>
															<i className="fa-solid fa-minus"></i>
														</button>
														<input
															type="number"
															min="1"
															value={item.qty}
															onChange={(e) => setQtyDirect(item.id, e.target.value)}
														/>
														<button type="button" onClick={() => updateQty(item.id, "inc")}>
															<i className="fa-solid fa-plus"></i>
														</button>
													</div>
												</td>
												<td className="text-end fw-semibold">
													${(item.price * item.qty).toFixed(2)}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>

							<div className="feature-actions">
								<input
									type="text"
									className="feature-input"
									placeholder="Coupon code"
									value={coupon}
									onChange={(e) => setCoupon(e.target.value)}
								/>
								<button type="button" className="btn-soft">
									Apply Coupon
								</button>
								<button type="button" className="btn-soft">
									Update Cart
								</button>
							</div>
						</div>
					</div>

					<div className="col-lg-4">
						<div className="feature-card summary-card">
							<h4 className="feature-title mb-3">Cart Totals</h4>

							<div className="summary-row">
								<span>Subtotal</span>
								<strong>${subtotal.toFixed(2)}</strong>
							</div>

							<div className="summary-row">
								<span>Shipping</span>
								<strong>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</strong>
							</div>

							<hr />

							<div className="summary-row total-row">
								<span>Total</span>
								<strong>${total.toFixed(2)}</strong>
							</div>

							<p className="shipping-note">Calculate Shipping</p>

							<select
								className="feature-input"
								value={country}
								onChange={(e) => setCountry(e.target.value)}
							>
								<option value="">Select a country...</option>
								<option value="USA">USA</option>
								<option value="UK">UK</option>
								<option value="Canada">Canada</option>
							</select>

							<input
								className="feature-input"
								type="text"
								placeholder="State / Country"
								value={state}
								onChange={(e) => setState(e.target.value)}
							/>

							<input
								className="feature-input"
								type="text"
								placeholder="Postcode / ZIP"
								value={zip}
								onChange={(e) => setZip(e.target.value)}
							/>

							<button type="button" className="btn-primary-feature">
								Proceed to Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeatureForm;