import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getBlogPostById } from "../data/blogPosts";
import productMin1 from "../assets/product-min-01.jpg";
import productMin2 from "../assets/product-min-02.jpg";
import productMin3 from "../assets/product-min-03.jpg";

const FEATURED_SIDEBAR = [
  { id: 1, img: productMin1, title: "White Shirt With Pleat Detail Back", price: "$19.00" },
  { id: 2, img: productMin2, title: "Converse All Star Hi Black Canvas", price: "$39.00" },
  { id: 3, img: productMin3, title: "Nixon Porter Leather Watch In Tan", price: "$17.00" },
];

const CATEGORIES = ["Fashion", "Beauty", "Street Style", "Life Style", "DIY & Crafts"];

const DetailBlogCard = () => {
  const { postId } = useParams();
  const post = useMemo(() => getBlogPostById(postId), [postId]);

  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  useEffect(() => {
    if (!post) return;
    const prev = document.title;
    document.title = `${post.title} · Coza Store`;
    return () => {
      document.title = prev;
    };
  }, [post]);

  useEffect(() => {
    if (!post) return;
    const onScroll = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      const p = scrollable > 0 ? (el.scrollTop / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [post]);

  const copyLink = useCallback(() => {
    const url = window.location.href;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      });
    }
  }, []);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="bpost-missing">
          <div className="container bpost-missing__inner">
            <p className="bpost-missing__eyebrow">Blog</p>
            <h1 className="bpost-missing__title">Article not found</h1>
            <p className="bpost-missing__text">
              This post may have moved. Head back to the blog listing to keep reading.
            </p>
            <Link to="/blog" className="bpost-missing__btn">
              Back to blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const dateObj = new Date(`${post.dateISO}T12:00:00`);
  const dayNum = String(dateObj.getDate());
  const monthLine = dateObj.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div
        className="bpost-read-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />
      <Navbar />
      <main id="main-article" className="bpost">
        <header className="bpost-hero">
          <div className="bpost-hero__media">
            <img src={post.image} alt="" />
            <div className="bpost-hero__scrim" aria-hidden="true" />
          </div>
          <div className="container bpost-hero__wrap">
            <nav className="bpost-breadcrumb" aria-label="Breadcrumb">
              <Link to="/home1">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/blog">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="is-current">Article</span>
            </nav>
            <div className="bpost-hero__date" aria-label="Published date">
              <span className="bpost-hero__date-day">{dayNum}</span>
              <span className="bpost-hero__date-month">{monthLine}</span>
            </div>
            <h1 className="bpost-hero__title">{post.title}</h1>
            <div className="bpost-hero__meta">
              <span className="bpost-pill">
                <i className="fa-regular fa-user" aria-hidden="true" />
                {post.author}
              </span>
              <span className="bpost-pill">
                <i className="fa-regular fa-clock" aria-hidden="true" />
                {post.readMinutes} min read
              </span>
              <button type="button" className="bpost-copy" onClick={copyLink}>
                <i className="fa-solid fa-link" aria-hidden="true" />
                {copied ? "Copied" : "Copy link"}
              </button>
            </div>
          </div>
        </header>

        <div className="bpost-layout">
          <div className="container">
            <div className="row g-4 g-xl-5">
              <div className="col-lg-8">
                <article className="bpost-article">
                  <p className="bpost-lead">{post.excerpt}</p>
                  <div className="bpost-prose">
                    {post.paragraphs.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>

                  <div className="bpost-tags">
                    <span className="bpost-tags__label">Tags</span>
                    <div className="bpost-tags__list">
                      {post.tags.map((tag) => (
                        <span key={tag} className="bpost-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <section className="bpost-comments" aria-labelledby="comments-heading">
                    <h2 id="comments-heading" className="bpost-comments__title">
                      Leave a comment
                    </h2>
                    <p className="bpost-comments__note">
                      Your email will not be published. Fields marked * are required.
                    </p>
                    <form className="bpost-form" onSubmit={(e) => e.preventDefault()}>
                      <label className="bpost-label" htmlFor="bpost-comment">
                        Comment *
                      </label>
                      <textarea
                        id="bpost-comment"
                        className="bpost-input bpost-input--textarea"
                        placeholder="Share your thoughts…"
                        rows={5}
                        required
                      />

                      <div className="bpost-form__grid">
                        <div>
                          <label className="bpost-label" htmlFor="bpost-name">
                            Name *
                          </label>
                          <input id="bpost-name" className="bpost-input" type="text" required />
                        </div>
                        <div>
                          <label className="bpost-label" htmlFor="bpost-email">
                            Email *
                          </label>
                          <input id="bpost-email" className="bpost-input" type="email" required />
                        </div>
                      </div>

                      <label className="bpost-label" htmlFor="bpost-web">
                        Website <span className="bpost-optional">(optional)</span>
                      </label>
                      <input id="bpost-web" className="bpost-input" type="url" placeholder="https://" />

                      <button type="submit" className="bpost-submit">
                        Post comment
                      </button>
                    </form>
                  </section>

                  <div className="bpost-back">
                    <Link to="/blog" className="bpost-back__link">
                      <i className="fa-solid fa-arrow-left-long" aria-hidden="true" />
                      Back to all articles
                    </Link>
                  </div>
                </article>
              </div>

              <div className="col-lg-4">
                <aside className="bpost-aside">
                  <div className="bpost-aside-card">
                    <h3 className="bpost-aside__title">Search</h3>
                    <div className="bpost-aside-search">
                      <label className="visually-hidden" htmlFor="bpost-aside-q">
                        Search blog
                      </label>
                      <input id="bpost-aside-q" type="search" placeholder="Search articles…" />
                      <button type="button" aria-label="Search">
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </div>
                  </div>

                  <div className="bpost-aside-card">
                    <h3 className="bpost-aside__title">Categories</h3>
                    <ul className="bpost-aside-list">
                      {CATEGORIES.map((c) => (
                        <li key={c}>
                          <button type="button" className="bpost-aside-link">
                            {c}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bpost-aside-card">
                    <h3 className="bpost-aside__title">Featured products</h3>
                    <ul className="bpost-aside-featured">
                      {FEATURED_SIDEBAR.map((f) => (
                        <li key={f.id}>
                          <Link to="/shop" className="bpost-aside-thumb">
                            <img src={f.img} alt="" />
                          </Link>
                          <div>
                            <Link to="/shop" className="bpost-aside-product">
                              {f.title}
                            </Link>
                            <div className="bpost-aside-price">{f.price}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DetailBlogCard;
