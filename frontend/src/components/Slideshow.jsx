import React, { useEffect, useState } from "react";

import "../styles/Slideshow.css";

import browsing from "../images/woman_look_at_laptop.jpg";
import choosing from "../images/people_smiling_looking_at_phone.jpg";
import delivering from "../images/woman_holding_box.jpg";
import growing from "../images/plants.jpg";

const steps = [
    {
        img: browsing,
        text: "Browse",
    },
    {
        img: choosing,
        text: "Choose",
    },
    {
        img: delivering,
        text: "Delivered with love",
    },
    {
        img: growing,
        text: "Watch it grow",
    },
];

const Slideshow = () => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % steps.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="HomeSlideshowSection">
            {steps.map((step, index) => (
                <div key={index} className={`SlideshowFade ${index === currentStep ? "Active" : ""}`}>
                    <p className="SlideshowText">{step.text}</p>
                    <img src={step.img} alt={step.name} className="SlideshowImage" />
                </div>
            ))}
        </section>
    )
};

export default Slideshow;