import React from "react";
import PropTypes from "prop-types";
// import "animate.css";
import "./slide.scss"
import Animate from 'animate.css-react'
import 'animate.css/animate.css'
import { Carousel } from "react-responsive-carousel";
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
  minimog,
}) {
  return (
    <Carousel
      interval={interval}
      autoPlay={autoPlay == false ? false : true}
      centerMode={centerMode == false ? false : true}
      infiniteLoop={infiniteLoop == false ? false : true}
      showArrows={showArrows == false ? false : true}
      showIndicators={showIndicators == false ? false : true}
      swipeable={swipeable == false ? false : true}
      showThumbs={showThumbs == true ? true : false}
    >
      {minimog.slider.map((i) => (
        <div>
          <img
            className="w-full  "
            src={i.image}
          />
          <Animate

              appear="fadeInDown"
              durationAppear={1000}
              component="div"><h1 className="">
            An animated element
          </h1></Animate>

        </div>
      ))}
    </Carousel>
  );
}

Minimogslider.prototype = {
  showAr: PropTypes.bool,
};
