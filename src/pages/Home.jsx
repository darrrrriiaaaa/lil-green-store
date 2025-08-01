import React from "react";
import { NavLink } from "react-router-dom";

import photo_window_w_plants from '../images/window_photo.jpg';
import photo_succulents from '../images/succulents.png';
import photo_plant from '../images/plant_in_floor_pot.png';
import photo_rosemary from '../images/rosemary.png';
import photo_dracaena from '../images/dracaena.png';

/* import components */
import Carousel from '../components/Carousel';

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
            <section className="HomeThirdSection">
                <h2 className="SecondHeader">Fresh Finds for Your Space</h2>
                <section className="HomeThirdSectionContent">
                    <p className="HomeText HomeCarouselText">
                        These beauties are trending right now.
                        Add a touch of green to your desk, shelf, or corner nook.
                    </p>
                    <Carousel images={images} className="" />
                </section>
            </section>
        </div>
    )
};

export default Home;