// import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img from "./images/data";

const CarouselEffect = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      labels={false}
    >
      {img.map((image, index) => (
        <img src={image} key={index} alt="" />
      ))}
    </Carousel>
  );
};

export default CarouselEffect;

