import React from "react";
import "./HomeSlider.scss";
import "../Home.scss";
import loganBirthUn from "../../../assets/images/images-générales/image1.png";
import loganBirthDeux from "../../../assets/images/images-générales/image2.png";
const HomeSlider = () => {
  return (
    <div className="slider">
      <div className="slides">
        <div>
          <img className="slide" src={loganBirthUn} alt="" />
        </div>
        <div>
          <img className="slide" src={loganBirthDeux} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
