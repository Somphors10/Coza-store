import React from 'react'

const ContactFile = () => {
  return (
    <section className="contact">
		<div className="container">
			<div className="m-contact">
				<div className="s-contact con1-media con2-media">
					<form></form>
						<h4 className="suam">
							Send Us A Message
						</h4>

						<div className="i-contact">
							<input className="in-contact" type="text" name="email" placeholder="Your Email Address"/>
							<img className="img-contact" src="images/icons/icon-email.png" alt=""/>
						</div>

						<div className="text-contact">
							<textarea className="help-contact" name="msg" placeholder="How Can We Help?"></textarea>
						</div>

						<button className="submit">
							Submit
						</button>
					<form/>
				</div>

				<div className="address con1-media con2-media">
					<div className="m-address">
						<span className="s-address">
							<span className="sp-address"></span>
						</span>

						<div className="d-address">
							<span className="m1-address"><i className="fa-solid fa-location-dot"></i>
								Address
							</span>

							<p className="p-address">
								Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US
							</p>
						</div>
					</div>

					<div className="m-address">
						<span className="s-address">
							<span className="sp-address"></span>
						</span>

						<div className="d-talk">
							<span className="m1-address"><i className="fa-solid fa-phone"></i>
								Lets Talk
							</span>

							<p className="p-talk">
								+855 85371346
							</p>
						</div>
					</div>

					<div className="m-address">
						<span className="s-support">
							<span className="sp-support"></span>
						</span>

						<div className="d-support">
							<span className="m1-address"><i className="fa-solid fa-square-envelope"></i>
								Sale Support
							</span>

							<p className="p-talk">
								somphorstae9@gmail.com
							</p>
						</div>
					</div>
				</div>
			</div>
		    </div>
       
	</section>
  )
}

export default ContactFile