import React, { useState } from "react";

import './Carousel.css';

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

                if (offset === 0) className += " ActiveCarouselItem";
                else if (offset === 1 || offset === images.length - 1) className += " SideCarouselItem";
                else className += " HiddenCarouselItem";

                const translateX = (offset > images.length / 2 ? offset - images.length : offset) * 40;
                
                return (
                    <img
                    key={index}
                    src={img}
                    alt=""
                    className={className}
                    style={{
                    transform: `translateX(${translateX}%) scale(${offset === 0 ? 1 : 0.7})`, }}
                    onClick={() => handleClick(index)} />
                );
      })}
        </div>
    );
};

export default Carousel;