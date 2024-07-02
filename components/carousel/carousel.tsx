"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: "/images/rose.png",
  },
  {
    url: "/images/rose.png",
  },
  //Second image url
  {
    url: "/images/rose.png",
  },
  //Third image url
  {
    url: "/images/rose.png",
  },
];
const CarouselMui = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        // infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl?.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default CarouselMui;
