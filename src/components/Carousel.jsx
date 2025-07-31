import React, { useState } from "react";

import './Carousel.css';

const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="CarouselSection">
            {images.map((img, index) => {
                let className="CarouselItem";
                if (index === activeIndex) {
                    className += " ActiveCarouselItem";
                } else if (
                    index === (activeIndex - 2 + images.length) % images.length ||
                    index === (activeIndex + 2) % images.length
                ) {
                    className += " SideCarouselItem";
                } else {
                    className += " HiddenCarouselItem";
                }

                return (
                    <img key={index} src={img} className={className} onClick={() => handleClick(index)} />
                )
            })}
        </div>
    );
};

export default Carousel;