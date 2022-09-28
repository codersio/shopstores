import React from "react";
import PropTypes from "prop-types";
import "animate.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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
            className="w-full animate__animated animate__bounce "
            src={i.image}
          />
          <h1 class="animate__animated animate__bounce animate__delay-5s">
            An animated element
          </h1>
        </div>
      ))}
    </Carousel>
  );
}

Minimogslider.prototype = {
  showAr: PropTypes.bool,
};
