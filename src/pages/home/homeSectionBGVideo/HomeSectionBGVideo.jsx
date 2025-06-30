import React from "react";
import "./HomeSectionBGVideo.scss";
import "../Home.scss";
import videoBG from "@/assets/videos/holly.mp4";
import starring from "@/assets/images/images-générales/starring.webp";
import starring2 from "@/assets/images/images-générales/starring2.webp";
import starring3 from "@/assets/images/images-générales/starring3.webp";
import starring4 from "@/assets/images/images-générales/starring4.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useIsMobile from "@/hooks/useIsMobile"; // <-- AJOUT de l'import du hook

const HomeSectionBGVideo = () => {
  const isMobile = useIsMobile(); // <-- UTILISATION du hook

  if (isMobile) return null; // <-- Ne rien rendre du tout sur mobile

  return (
    <>
      <div className="d-flex starrings">
        <LazyLoadImage
          className="starring"
          src={starring}
          alt="le nom de l'acteur Michael York"
          loading="lazy"
        />
        <LazyLoadImage
          className="starring"
          src={starring2}
          alt="le nom de l'actrice Jenny Agutter"
          loading="lazy"
        />
        <LazyLoadImage
          className="starring"
          src={starring3}
          alt="le nom de l'actrice Farraw Fawcett"
          loading="lazy"
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
          <video
            src={videoBG}
            autoPlay
            loop
            muted
            className="hollyBG"
            preload="none"
            poster="/chemin/vers/une-image-légère.webp"
            playsInline
          />
        </div>
      </div>
      <div className="image-container">
        <LazyLoadImage
          className="starring"
          src={starring4}
          alt="date de sortie du films"
          loading="lazy"
        />
      </div>
      <div className="moreMargintiret"></div>
    </>
  );
};

export default HomeSectionBGVideo;
