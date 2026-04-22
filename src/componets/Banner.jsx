import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import slide1 from "../assets/slide-02.jpg";
import slide2 from "../assets/slide-03.jpg";
import slide3 from "../assets/slide-04.jpg";

const SLIDES = [
    {
        id: 1,
        image: slide1,
        subTitle: "Women Collection 2026",
        title: "New Season",
    },
    {
        id: 2,
        image: slide2,
        subTitle: "Men Collection 2026",
        title: "Street Essentials",
    },
    {
        id: 3,
        image: slide3,
        subTitle: "Accessories 2026",
        title: "Style Upgrade",
    },
];

const Banner = () => {
    return (
        <section className="hero-banner">
            <Carousel fade interval={4500} indicators controls pause="hover">
                {SLIDES.map((slide) => (
                    <Carousel.Item key={slide.id}>
                        <div className="hero-slide">
                            <img src={slide.image} alt={slide.title} className="hero-image d-block w-100" />
                            <div className="hero-overlay" />
                        </div>

                        <Carousel.Caption className="hero-caption text-start">
                            <p className="hero-subtitle">{slide.subTitle}</p>
                            <h1 className="hero-title">{slide.title}</h1>
                            <Link to="/shop" className="hero-btn">
                                Shop Now
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default Banner;