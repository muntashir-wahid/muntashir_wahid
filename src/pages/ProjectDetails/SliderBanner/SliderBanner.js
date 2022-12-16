import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const SliderBanner = ({ pictures }) => {
  return (
    <Slider autoplay={2000}>
      {pictures.map((pic, index) => (
        <figure key={index} className="w-full">
          <img src={pic} alt="Project" className="w-full h-full" />
        </figure>
      ))}
    </Slider>
  );
};

export default SliderBanner;
