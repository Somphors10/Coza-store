import React from "react";
import { Link } from "react-router-dom";

import productMin1 from "../assets/product-min-01.jpg";
import productMin2 from "../assets/product-min-02.jpg";
import productMin3 from "../assets/product-min-03.jpg";
import { getFeedBlogPosts } from "../data/blogPosts";

const posts = getFeedBlogPosts();

const categories = ["Fashion", "Beauty", "Street Style", "Life Style", "DIY & Crafts"];

const featured = [
  { id: 1, img: productMin1, title: "White Shirt With Pleat Detail Back", price: "$19.00" },
  { id: 2, img: productMin2, title: "Converse All Star Hi Black Canvas", price: "$39.00" },
  { id: 3, img: productMin3, title: "Nixon Porter Leather Watch In Tan", price: "$17.00" },
];

const archive = [
  { label: "July 2026", count: 9 },
  { label: "June 2026", count: 39 },
  { label: "May 2026", count: 29 },
  { label: "April 2026", count: 35 },
  { label: "March 2026", count: 22 },
  { label: "February 2026", count: 32 },
  { label: "January 2026", count: 21 },
  { label: "December 2025", count: 26 },
];

const tags = ["Fashion", "Lifestyle", "Denim", "Streetstyle", "Crafts"];

const BlogBlog = () => {
  return (
    <section className="blog-page">
      <div className="container blog-page__container">
        <div className="row g-4 g-xl-5">
          <div className="col-lg-8 col-xl-8">
            <div className="blog-feed">
              <header className="blog-feed__intro">
                <h2 className="blog-feed__title">Latest articles</h2>
                <p className="blog-feed__subtitle">
                  Ideas and inspiration—updated regularly.
                </p>
              </header>

              {posts.map((p) => {
                const d = new Date(`${p.dateISO}T12:00:00`);
                const dayStr = String(d.getDate());
                const monthStr = d.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                });
                return (
                <article key={p.id} className="blog-post-card">
                  <div className="blog-post-card-inner">
                    <Link to={`/blog/post/${p.id}`} className="blog-media">
                      <img src={p.image} alt={p.title} />
                      <div className="blog-date-pill">
                        <div className="blog-date-day">{dayStr}</div>
                        <div className="blog-date-month">{monthStr}</div>
                      </div>
                    </Link>

                    <div className="blog-post-body">
                      <div className="blog-post-meta-row">
                        <span className="blog-chip">
                          <i className="fa-regular fa-user" aria-hidden="true" />
                          {p.author}
                        </span>
                        <span className="blog-chip">
                          <i className="fa-regular fa-folder" aria-hidden="true" />
                          {p.tags.join(", ")}
                        </span>
                        <span className="blog-chip blog-chip--muted">
                          <i className="fa-regular fa-clock" aria-hidden="true" />
                          {p.readMinutes} min read
                        </span>
                      </div>

                      <h3 className="blog-post-title">
                        <Link to={`/blog/post/${p.id}`}>{p.title}</Link>
                      </h3>

                      <p className="blog-post-excerpt">{p.excerpt}</p>

                      <div className="blog-post-footer">
                        <span className="blog-comments-hint">
                          <i className="fa-regular fa-comment-dots" aria-hidden="true" />
                          8 comments
                        </span>
                        <Link to={`/blog/post/${p.id}`} className="blog-continue">
                          Read article
                          <span className="arrow" aria-hidden="true">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
              })}

              <nav className="blog-pagination" aria-label="Blog pagination">
                <button type="button" className="pg is-active" aria-current="page">
                  1
                </button>
                <button type="button" className="pg">
                  2
                </button>
                <button type="button" className="pg">
                  3
                </button>
              </nav>
            </div>
          </div>

          <div className="col-lg-4 col-xl-3 ms-lg-auto">
            <aside className="blog-sidebar">
              <div className="sidebar-card sidebar-card--search">
                <h4 className="sidebar-title">Search</h4>
                <div className="sidebar-search">
                  <label className="visually-hidden" htmlFor="blog-sidebar-search">
                    Search blog
                  </label>
                  <input
                    id="blog-sidebar-search"
                    type="search"
                    placeholder="Search articles…"
                    autoComplete="off"
                  />
                  <button type="button" aria-label="Search">
                    <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="sidebar-card">
                <h4 className="sidebar-title">Categories</h4>
                <ul className="sidebar-list">
                  {categories.map((c) => (
                    <li key={c}>
                      <button type="button" className="sidebar-list-btn">
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card">
                <h4 className="sidebar-title">Featured products</h4>
                <ul className="featured-list">
                  {featured.map((f) => (
                    <li key={f.id} className="featured-item">
                      <Link to="/shop" className="featured-thumb">
                        <img src={f.img} alt={f.title} />
                      </Link>
                      <div className="featured-text">
                        <Link to="/shop" className="featured-title">
                          {f.title}
                        </Link>
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
                      <button type="button" className="archive-row">
                        <span>{a.label}</span>
                        <span className="archive-count">{a.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card">
                <h4 className="sidebar-title">Tags</h4>
                <div className="tag-cloud">
                  {tags.map((t) => (
                    <button key={t} type="button" className="tag-pill">
                      {t}
                    </button>
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
