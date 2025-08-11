import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import photo_window_w_plants from '../images/window_photo.jpg';
import photo_succulents from '../images/succulents.png';
import photo_plant from '../images/plant_in_floor_pot.png';
import photo_rosemary from '../images/rosemary.png';
import photo_dracaena from '../images/dracaena.png';

/* import components */
import Carousel from '../components/Carousel';
import Slideshow from "../components/Slideshow";

const images = [ photo_succulents, photo_rosemary, photo_dracaena ];

const Home = () => {
    return (
        <div>
            <section className="HomeFirstSection">
                <img src={photo_window_w_plants} alt="" className="HomeFirstPhoto"/>
                <section className="HomeFirstSectionText">
                    <h1 className="FirstHeader">Bring nature home</h1>
                    <p className="HomeFirstText">
                        Discover lush indoor plants, handpicked for your lifestyle.
                    </p>
                    <NavLink to="/assortment-all" className="Button HomeFirstButton">shop now</NavLink>
                </section>
            </section>
            <section className="HomeSecondSection">
                <img src={photo_plant} alt="" className="HomeSecondSectionImage" />
                <section className="HomeSecondSectionText">
                    <h2 className="SecondHeader">Rooted in care</h2>
                    <p className="HomeText">
                        At our store, we believe plants make people happier.
                        Whether you're a plant parent pro or just starting out, we’re here to help you grow — one leaf at a time.
                    </p>
                </section>
            </section>
            <section className="HomeCarouselSection">
                <h2 className="SecondHeader">Fresh Finds for Your Space</h2>
                <section className="HomeCarouselSectionContent">
                    <p className="HomeText HomeCarouselText">
                        These beauties are trending right now.
                        Add a touch of green to your desk, shelf, or corner nook.
                    </p>
                    <Carousel images={images} className="" />
                </section>
            </section>
            <section className="HomeColorSection">
                <h2 className="SecondHeader">What makes us different?</h2>
                <ul className="HomeList">
                    <li className="HomeListItem">🪴 Carefully selected plants for any lifestyle</li>
                    <li className="HomeListItem">🌎 Sustainable packaging</li>
                    <li className="HomeListItem">✨ Stylish pots handmade by local artisans</li>
                    <li className="HomeListItem">💌 Friendly plant care tips with every order</li>
                </ul>
            </section>
            <Slideshow />
        </div>
    )
};

export default Home;