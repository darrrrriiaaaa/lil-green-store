import React from "react";

import girl_growing_plants from "../images/girl_growing_plants.jpg";
import plants_photo from "../images/plants_on_windowsill.jpg";
import plant_photo from "../images/statue_plant.jpg";

const About = () => {
    return (
        <div className="AboutUsContent">
            <section className="AboutUsSection AboutUsColorSection">
                <img src={girl_growing_plants} alt="" className="AboutUsImage"/>
                <p className="CursiveText AboutUsText">
                    At lil' green store, we believe in bringing joy, calm, and connection through greenery. Whether you're a seasoned plant parent or just getting started, we're here to help you grow something beautiful.
                </p>
            </section>
            <section className="AboutUsSection">
                <p className="AboutUsText">
                    It all started with a tiny succulent and a sunny windowsill. We wanted to make plant care approachable, enjoyable, and stylish. Today, we’re proud to offer handpicked plants and handmade pots to homes all around.
                </p>
                <img src={plants_photo} alt="" className="AboutUsImage" />
            </section>
        </div>
    )
};

export default About;