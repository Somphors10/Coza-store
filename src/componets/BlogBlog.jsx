import React from "react";
import { Link } from "react-router-dom";

import blog4 from "../assets/blog-04.jpg";
import blog5 from "../assets/blog-05.jpg";
import blog6 from "../assets/blog-06.jpg";
import productMin1 from "../assets/product-min-01.jpg";
import productMin2 from "../assets/product-min-02.jpg";
import productMin3 from "../assets/product-min-03.jpg";

const posts = [
	{
		id: 1,
		image: blog4,
		day: "22",
		month: "Jan 2018",
		title: "8 Inspiring Ways to Wear Dresses in the Winter",
		excerpt:
			"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
	},
	{
		id: 2,
		image: blog5,
		day: "18",
		month: "Jan 2018",
		title: "The Great Big List of Men's Gifts for the Holidays",
		excerpt:
			"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
	},
	{
		id: 3,
		image: blog6,
		day: "16",
		month: "Jan 2018",
		title: "5 Winter-to-Spring Fashion Trends to Try Now",
		excerpt:
			"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
	},
];

const categories = ["Fashion", "Beauty", "Street Style", "Life Style", "DIY & Crafts"];

const featured = [
	{ id: 1, img: productMin1, title: "White Shirt With Pleat Detail Back", price: "$19.00" },
	{ id: 2, img: productMin2, title: "Converse All Star Hi Black Canvas", price: "$39.00" },
	{ id: 3, img: productMin3, title: "Nixon Porter Leather Watch In Tan", price: "$17.00" },
];

const archive = [
	{ label: "July 2018", count: 9 },
	{ label: "June 2018", count: 39 },
	{ label: "May 2018", count: 29 },
	{ label: "April 2018", count: 35 },
	{ label: "March 2018", count: 22 },
	{ label: "February 2018", count: 32 },
	{ label: "January 2018", count: 21 },
	{ label: "December 2017", count: 26 },
];

const tags = ["Fashion", "Lifestyle", "Denim", "Streetstyle", "Crafts"];

const BlogBlog = () => {
	return (
		<section className="blog-page">
			<div className="container">
				<div className="row g-4">
					<div className="col-lg-9">
						<div className="blog-feed">
							{posts.map((p) => (
								<article key={p.id} className="blog-post-card">
									<Link to="/detailBlogCard" className="blog-media">
										<img src={p.image} alt={p.title} />
										<div className="blog-date-pill">
											<div className="blog-date-day">{p.day}</div>
											<div className="blog-date-month">{p.month}</div>
										</div>
									</Link>

									<div className="blog-post-body">
										<h3 className="blog-post-title">
											<Link to="/detailBlogCard">{p.title}</Link>
										</h3>

										<p className="blog-post-excerpt">{p.excerpt}</p>

										<div className="blog-post-footer">
											<div className="blog-meta">
												<span>
													<span className="muted">By</span> Admin
												</span>
												<span className="sep">|</span>
												<span>StreetStyle, Fashion, Couple</span>
												<span className="sep">|</span>
												<span>8 Comments</span>
											</div>

											<Link to="/detailBlogCard" className="blog-continue">
												Continue Reading <span className="arrow">→</span>
											</Link>
										</div>
									</div>
								</article>
							))}

							<div className="blog-pagination">
								<a href="#!" className="pg active">1</a>
								<a href="#!" className="pg">2</a>
							</div>
						</div>
					</div>

					<div className="col-lg-3">
						<aside className="blog-sidebar">
							<div className="sidebar-card">
								<div className="sidebar-search">
									<input type="text" placeholder="Search" />
									<button type="button" aria-label="Search">
										<i className="fa-solid fa-magnifying-glass"></i>
									</button>
								</div>
							</div>

							<div className="sidebar-card">
								<h4 className="sidebar-title">Categories</h4>
								<ul className="sidebar-list">
									{categories.map((c) => (
										<li key={c}>
											<a href="#!">{c}</a>
										</li>
									))}
								</ul>
							</div>

							<div className="sidebar-card">
								<h4 className="sidebar-title">Featured Products</h4>
								<ul className="featured-list">
									{featured.map((f) => (
										<li key={f.id} className="featured-item">
											<a href="#!" className="featured-thumb">
												<img src={f.img} alt={f.title} />
											</a>
											<div className="featured-text">
												<a href="#!" className="featured-title">{f.title}</a>
												<div className="featured-price">{f.price}</div>
											</div>
										</li>
									))}
								</ul>
							</div>

							<div className="sidebar-card">
								<h4 className="sidebar-title">Archive</h4>
								<ul className="archive-list">
									{archive.map((a) => (
										<li key={a.label}>
											<a href="#!" className="archive-row">
												<span>{a.label}</span>
												<span className="archive-count">({a.count})</span>
											</a>
										</li>
									))}
								</ul>
							</div>

							<div className="sidebar-card">
								<h4 className="sidebar-title">Tags</h4>
								<div className="tag-cloud">
									{tags.map((t) => (
										<a key={t} href="#!" className="tag-pill">{t}</a>
									))}
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogBlog;