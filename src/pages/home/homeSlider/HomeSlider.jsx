import React from "react";
import "./HomeSlider.scss";
import "../Home.scss";
import loganBirthUn from "../../../assets/images/images-générales/image1.png";
import loganBirthDeux from "../../../assets/images/images-générales/image2.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
const HomeSlider = () => {
  return (
    <div className="slider">
      <div className="slides">
        <div>
          <LazyLoadImage
            className="slide"
            src={loganBirthUn}
            alt=""
            loading="lazy"
          />
        </div>
        <div>
          <LazyLoadImage
            className="slide"
            src={loganBirthDeux}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
