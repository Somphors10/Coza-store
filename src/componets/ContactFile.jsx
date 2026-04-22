import React from "react";

const ContactFile = () => {
	return (
		<section className="contact contact-modern">
			<div className="container">
				<div className="row g-4 align-items-stretch">
					{/* Contact Form */}
					<div className="col-lg-7">
						<div className="contact-card contact-form-card h-100">
							<h4 className="contact-title">Send Us A Message</h4>

							<form className="contact-form-ui">
								<div className="contact-input-wrap">
									<i className="fa-regular fa-envelope contact-input-icon"></i>
									<input
										className="contact-input"
										type="email"
										name="email"
										placeholder="Your Email Address"
									/>
								</div>

								<div className="contact-input-wrap textarea-wrap">
									<i className="fa-regular fa-comment contact-input-icon"></i>
									<textarea
										className="contact-textarea"
										name="message"
										placeholder="How can we help?"
										rows="6"
									></textarea>
								</div>

								<button type="submit" className="contact-submit-btn">
									Submit
								</button>
							</form>
						</div>
					</div>

					{/* Contact Info */}
					<div className="col-lg-5">
						<div className="contact-card contact-info-card h-100">
							<div className="info-item">
								<div className="info-icon">
									<i className="fa-solid fa-location-dot"></i>
								</div>
								<div>
									<h5 className="info-title">Address</h5>
									<p className="info-text">
										Coza Store Center, 8th floor, 379 Hudson St,
										New York, NY 10018, US
									</p>
								</div>
							</div>

							<div className="info-item">
								<div className="info-icon">
									<i className="fa-solid fa-phone"></i>
								</div>
								<div>
									<h5 className="info-title">Let&apos;s Talk</h5>
									<p className="info-link">+855 85371346</p>
								</div>
							</div>

							<div className="info-item">
								<div className="info-icon">
									<i className="fa-solid fa-square-envelope"></i>
								</div>
								<div>
									<h5 className="info-title">Sale Support</h5>
									<p className="info-link">somphorstae9@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactFile;