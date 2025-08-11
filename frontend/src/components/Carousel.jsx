import React, { useState } from "react";

import '../styles/Carousel.css';

const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const mod = (n, m) => ((n % m) + m) % m;

    return (
        <div className="CarouselSection">
            {images.map((img, index) => {
                const offset = mod(index - activeIndex, images.length);
                let className = "CarouselItem";

                let translateX = 0;
                let scale = 1;
                let opacity = 1;

                if (offset === 0)
                    className += " ActiveCarouselItem";
                else if (offset === 1) {
                    className += " SideCarouselItem";
                    translateX = 100;
                    scale = 0.6;
                    opacity = 0.5;
                } else if (offset === images.length - 1) {
                    className += " SideCarouselItem";
                    translateX = -100;
                    scale = 0.6;
                    opacity = 0.5;
                } else {
                    className += " HiddenCarouselItem";
                    opacity = 0;
                }
             
                return (
                    <img
                    key={index}
                    src={img}
                    alt={`carousel item ${index}`}
                    className={className}
                    style={{
                        transform: `translateX(${translateX}%) scale(${scale})`,
                        opacity: opacity,
                    }}
                    onClick={() => handleClick(index)} />
                );
      })}
        </div>
    );
};

export default Carousel;