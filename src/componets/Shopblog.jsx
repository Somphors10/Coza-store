import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../assets/banner-01.jpg";
import banner2 from "../assets/banner-02.jpg";
import banner3 from "../assets/banner-03.jpg";

const cards = [
    { id: 1, title: "Women", subtitle: "Spring 2018", image: banner1, delayClass: "delay-1" },
    { id: 2, title: "Men", subtitle: "Spring 2018", image: banner2, delayClass: "delay-2" },
    { id: 3, title: "Accessories", subtitle: "Spring 2018", image: banner3, delayClass: "delay-3" },
];

const Shopblog = () => {
    return (
        <section className="py-5 category">
            <div className="container">
                <div className="row g-4">
                    {cards.map((card) => (
                        <div key={card.id} className="col-md-6 col-xl-4">
                            <div className={`card s-card ${card.delayClass}`}>
                                <img className="card-img-top s-card-img" src={card.image} alt={`${card.title} collection`} />

                                <Link to="/shop" className="ws-18" aria-label={`Shop ${card.title}`}>
                                    <span className="women">{card.title}</span>
                                    <br />
                                    <span className="spring">{card.subtitle}</span>
                                </Link>

                                <div className="card-hover">
                                    <div className="m-shop">
                                        <span className="shop">Shop Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shopblog;