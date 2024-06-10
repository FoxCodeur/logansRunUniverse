import React from "react";
import "./SectionAnimatedCard.scss";
import traitvertical from "../../../assets/images/images-générales/trait-vert-vertical.png";
import redLine from "../../../assets/images/images-générales/redLine.png";
const SectionAnimatedCardLexique = () => {
  return (
    <>
      <div className="moreMargintiret"></div>

      <div className="box_center">
        <h2 className="reliefTitle">La loi du sommeil</h2>
      </div>
      <div className="wrapperAnimatedCard box_center">
        <div className="AnimatedCardContainer">
          <input type="radio" name="slide" id="c1" checked />
          <label htmlFor="c1" className="LexiqueCard">
            <div className="row">
              <div className="icon box_center ">1</div>
              <div className="description"></div>
            </div>
          </label>
          {/* ------------------------------------------------------------ */}
          <input type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className="LexiqueCard">
            <div className="row">
              <div className="icon box_center">2</div>
              <div className="description"></div>
            </div>
          </label>
          {/* ------------------------------------------------------------ */}
          <input type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className="LexiqueCard">
            <div className="row">
              <div className="icon box_center">3</div>
              <div className="description"></div>
            </div>
          </label>
          {/* ------------------------------------------------------------ */}
          <input type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className="LexiqueCard">
            <div className="row">
              <div className="icon box_center">4</div>
              <div className="description"></div>
            </div>
          </label>
          {/* ------------------------------------------------------------ */}
          <input type="radio" name="slide" id="c5" />
          <label htmlFor="c5" className="LexiqueCard">
            <div className="row">
              <div className="icon box_center">5</div>
              <div className="description"></div>
            </div>
          </label>
          {/* ------------------------------------------------------------ */}
          <input type="radio" name="slide" id="c6" />
          <label htmlFor="c6" className="LexiqueCard">
            <div className="row">
              <div className="icon box_center">6</div>
              <div className="description"></div>
            </div>
          </label>
        </div>
      </div>
      <div className="box_center">
        <img src={traitvertical} alt="trait vert vertical" />
      </div>
    </>
  );
};

export default SectionAnimatedCardLexique;
