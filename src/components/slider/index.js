import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function Slider({
  swipeable,
  interval,
  autoPlay,
  sliders,
  showThumbs,
  infiniteLoop,
  showArrows,
  showIndicators,
  centerMode,
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
      {sliders.map((i) => (
        <img className="w-full" src={i.image} />
      ))}
    </Carousel>
  );
}

Slider.prototype = {
  showAr: PropTypes.bool,
};
