import React from "react";
import PropTypes from "prop-types";
// import "animate.css";
import "./slide.scss"
import Animate from 'animate.css-react'
import 'animate.css/animate.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Minimogslider({
  swipeable,
  interval,
  autoPlay,
  sliders,
  showThumbs,
  infiniteLoop,
  showArrows,
  showIndicators,
  centerMode,
  minimog,Minimodata
}) {
  return (
    <Carousel
        showThumbs={false}
    >
      {Minimodata.slider.map((i) => (
          <img
              className="w-full  "
              src={i.image}
          />
      ))}
    </Carousel>
  );
}

Minimogslider.prototype = {
  showAr: PropTypes.bool,
};
