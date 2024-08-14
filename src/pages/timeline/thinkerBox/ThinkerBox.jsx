import React from "react";
import "./ThinkerBox.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import thinker0 from "../../../assets/images/animationThinkerTimeline/00.png";
import thinker1 from "../../../assets/images/animationThinkerTimeline/01.png";
import thinker2 from "../../../assets/images/animationThinkerTimeline/02.png";
import thinker3 from "../../../assets/images/animationThinkerTimeline/03.png";
import thinker4 from "../../../assets/images/animationThinkerTimeline/04.png";
import thinker5 from "../../../assets/images/animationThinkerTimeline/05.png";
import thinker6 from "../../../assets/images/animationThinkerTimeline/06.png";
import thinker7 from "../../../assets/images/animationThinkerTimeline/07.png";
import thinker8 from "../../../assets/images/animationThinkerTimeline/08.png";
const ThinkerBox = () => {
  return (
    <>
      <h2 className="titreCentré">Aujourd'hui, le règne des machines</h2>
      <div className="thinkerBox">
        <LazyLoadImage src={thinker0} loading="lazy" />
        <LazyLoadImage src={thinker1} loading="lazy" />
        <LazyLoadImage src={thinker2} loading="lazy" />
        <LazyLoadImage src={thinker3} loading="lazy" />
        <LazyLoadImage src={thinker4} loading="lazy" />
        <LazyLoadImage src={thinker5} loading="lazy" />
        <LazyLoadImage src={thinker6} loading="lazy" />
        <LazyLoadImage src={thinker7} loading="lazy" />
        <LazyLoadImage src={thinker8} loading="lazy" />
      </div>
    </>
  );
};

export default ThinkerBox;
