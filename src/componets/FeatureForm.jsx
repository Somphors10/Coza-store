import React from 'react'
import itemCard4 from '../assets/item-cart-04.jpg'
import itemCard5 from '../assets/item-cart-05.jpg'

const FeatureForm = () => {

  return (
    <form className="feature"> 
		<div className="container">
			<div className="row">
				<div className="col-lg-10 col-xl-7 m-feature">
					<div className="s-feature lr-media">
						<div className="wrap-feature">
							<table className="table-shopping-cart">
								<tbody><tr className="table_head">
									<th className="column-1">Product</th>
									<th className="column-2"></th>
									<th className="column-3">Price</th>
									<th className="column-4">Quantity</th>
									<th className="column-5">Total</th>
								</tr>

								<tr className="table_row">
									<td className="column-1">
										<div className="how-itemcart1">
											<img src={itemCard4} alt=""/>
										</div>
									</td>
									<td className="column-2">Fresh Strawberries</td>
									<td className="column-3">$ 36.00</td>
									<td className="column-4">
										<div className="di-fresh">
						
											<div class="d-flex flex-row">
												<button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
												onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
												<i class="fas fa-minus"></i>
												</button>

												<input id="form1" min="0" name="quantity" value="1" type="number"
												class="form-control form-control-sm" style={{width: "50px"}} />

												<button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
												onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
												<i class="fas fa-plus"></i>
												</button>
											</div>
											

										</div>
									</td>
									<td className="column-5">$ 36.00</td>
								</tr>

								<tr className="table_row">
									<td className="column-1">
										<div className="how-itemcart1">
											<img src={itemCard5} alt="IMG"/>
										</div>
									</td>
									<td className="column-2">Lightweight Jacket</td>
									<td className="column-3">$ 16.00</td>
									<td className="column-4">
										<div className="di-fresh">
											<div className="di2-fresh">
												<i className="fa-solid fa-minus"></i>
											</div>

											<input className="in-val" type="number" name="num-product2" value="1"/>

											<div className="di-val">
												<i className="fa-solid fa-plus"></i>
											</div>
										</div>
									</td>
									<td className="column-5">$ 16.00</td>
								</tr>
							</tbody></table>
						</div>

						<div className="apply-di  p-lr-15-sm">
							<div className="row">
								<div className="col">
									<div className="apply-coupon">
										<input className="type-in" type="text" name="coupon" placeholder="Coupon Code"/>
									</div>
								</div>
								<div className="col">
									<div className="di-coupon">Apply coupon</div>
								</div>
								<div className="col">
									<div className="di-coupon">
										Update Cart
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-sm-10 col-lg-7 col-xl-5 cart-total ">
					<div className="m-cart-total p-lr-15 m-lr-0">
						<h4 className="s-cart-total">
							Cart Totals
						</h4>

						<div className="m-subtotal">
							<div className="s-subtotal">
								<span className="sp-subtotal">
									Subtotal:
								</span>
							</div>

							<div className="price-subtotal">
								<span className="sp-subtotal">
									$79.65
								</span>
							</div>
						</div>

						<div className="m-shipping">
							<div className="s-shipping w-full-ssm">
								<span className="sp-subtotal">
									Shipping:
								</span>
							</div>

							<div className="fea-caption w-full-ssm p-r-0-sm">
								<p className="sub-caption">
									There are no shipping methods available. Please double check your address, or contact us if you need any help.
								</p>
								
								<div className="pt-15">
									<span className="calcu-shipp">
										Calculate Shipping
									</span>

									<div className="di-select rs1-select2 rs2-select2">
										<select className="js-select2 select2-hidden-accessible" name="time" tabindex="-1" aria-hidden="true"/>
											<option>Select a country...</option>
											<option>USA</option>
											<option>UK</option>
										<div className="dropDownSelect2"></div>
									</div>

									<div className="in-state">
										<input className="state-type" type="text" name="state" placeholder="State /  country"/>
									</div>

									<div className="in-state">
										<input className="state-type" type="text" name="postcode" placeholder="Postcode / Zip"/>
									</div>
									
									<div className="flex-w">
										<div className="up-total">
											Update Totals
										</div>
									</div>
										
								</div>
							</div>
						</div>

						<div className="pro-tol">
							<div className="size-208">
								<span className="sp-text">
									Total:
								</span>
							</div>

							<div className="size-text">
								<span className="font-text">
									$79.65
								</span>
							</div>
						</div>

						<button className="button-checkout">
							Proceed to Checkout
						</button>
					</div>
				</div>
			</div>
		</div>
	</form> 
  )
}

export default FeatureForm