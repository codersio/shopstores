import React from "react";
import PropTypes from "prop-types";
// import "animate.css";
import "./slide.scss"
import Animate from 'animate.css-react'
import 'animate.css/animate.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
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
    <Slider
        duration={2000}
        autoplay
        touchDisabled={true}
        infinite={true}
    >
      {Minimodata.slider.map((i) => (
        <div className="" style={{ background: `url('${i.image}') no-repeat center center` }}
        >

            {/*<img src=>*/}
          {/*<img*/}
          {/*    className="w-full  "*/}
          {/*    src={i.image}*/}
          {/*/>*/}
         <div className="inner  absolute mt-[14%] ml-[8rem] space-y-16">
           <div><h1 className="absolute text-[13px] md:text-[20px]  top-5 leading-[1.5em] f-[500]">New Arrivals</h1></div>
           <p className="md:text-[70px] text-[20px] leading-[1.3em]">Clean Vibe <br/>
             This Summer</p>

           <button className="w-[10rem] rounded-md p-3 mt-[2rem] border border-black">
             Shop Now
           </button>
         </div>
        </div>
      ))}
    </Slider>
  );
}

Minimogslider.prototype = {
  showAr: PropTypes.bool,
};
