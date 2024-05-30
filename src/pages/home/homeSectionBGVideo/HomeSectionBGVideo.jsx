import React from "react";
import "./HomeSectionBGVideo.scss";
import "../Home.scss";
import videoBG from "../../../assets/videos/holly.mp4";
import starring from "../../../assets/images/images-générales/starring.png";
import starring2 from "../../../assets/images/images-générales/starring2.png";
import starring3 from "../../../assets/images/images-générales/starring3.png";
import starring4 from "../../../assets/images/images-générales/starring4.png";
const HomeSectionBGVideo = () => {
  return (
    <>
      <div className="d-flex">
        <img
          className="starring"
          src={starring}
          alt="le nom de l'acteur Michael York"
        />
        <img
          className="starring"
          src={starring2}
          alt="le nom de l'actrice Jenny Agutter"
        />
        <img
          className="starring"
          src={starring3}
          alt="le nom de l'actrice Farraw Fawcett"
        />
      </div>
      <div className="shadowBallContainer">
        <section className="stage">
          <figure className="ball"></figure>
          <section className="stage">
            <figure className="ball2"></figure>
          </section>
        </section>
        <div className="accueilVideoBG box_center">
          <video src={videoBG} autoPlay loop muted className="hollyBG" />
        </div>
      </div>
      <div className="image-container">
        <img
          className="starring"
          src={starring4}
          alt="le nom de l'actrice Farraw Fawcett"
        />
      </div>
      <div className="moreMargintiret"></div>
    </>
  );
};

export default HomeSectionBGVideo;
