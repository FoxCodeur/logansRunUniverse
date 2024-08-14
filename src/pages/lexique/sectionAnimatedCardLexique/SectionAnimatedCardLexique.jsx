import React, { useState } from "react";
import "./SectionAnimatedCard.scss";
import traitvertical from "../../../assets/images/images-générales/trait-vert-vertical.png";
import redLine from "../../../assets/images/images-générales/redLine.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SectionAnimatedCardLexique = () => {
  const [selectedCard, setSelectedCard] = useState("c1");

  const handleChange = (event) => {
    setSelectedCard(event.target.id);
  };

  return (
    <>
      <div className="moreMargintiret"></div>

      <div className="box_center">
        <h2 className="reliefTitle">La loi du sommeil</h2>
      </div>
      <div className="wrapperAnimatedCard box_center">
        <div className="AnimatedCardContainer">
          <input
            type="radio"
            name="slide"
            id="c1"
            checked={selectedCard === "c1"}
            onChange={handleChange}
          />
          <label htmlFor="c1" className="LexiqueCard">
            <div className="row">
              <div className="icon box_center">1</div>
              <div className="description"></div>
            </div>
          </label>
          {/* ------------------------------------------------------------ */}
          <input
            type="radio"
            name="slide"
            id="c2"
            checked={selectedCard === "c2"}
            onChange={handleChange}
          />
          <label htmlFor="c2" className="LexiqueCard">
            <div className="row">
              <div className="icon box_center">2</div>
              <div className="description"></div>
            </div>
          </label>
          {/* ------------------------------------------------------------ */}
          <input
            type="radio"
            name="slide"
            id="c3"
            checked={selectedCard === "c3"}
            onChange={handleChange}
          />
          <label htmlFor="c3" className="LexiqueCard">
            <div className="row">
              <div className="icon box_center">3</div>
              <div className="description"></div>
            </div>
          </label>
          {/* ------------------------------------------------------------ */}
          <input
            type="radio"
            name="slide"
            id="c4"
            checked={selectedCard === "c4"}
            onChange={handleChange}
          />
          <label htmlFor="c4" className="LexiqueCard">
            <div className="row">
              <div className="icon box_center">4</div>
              <div className="description"></div>
            </div>
          </label>
          {/* ------------------------------------------------------------ */}
          <input
            type="radio"
            name="slide"
            id="c5"
            checked={selectedCard === "c5"}
            onChange={handleChange}
          />
          <label htmlFor="c5" className="LexiqueCard">
            <div className="row">
              <div className="icon box_center">5</div>
              <div className="description"></div>
            </div>
          </label>
          {/* ------------------------------------------------------------ */}
          <input
            type="radio"
            name="slide"
            id="c6"
            checked={selectedCard === "c6"}
            onChange={handleChange}
          />
          <label htmlFor="c6" className="LexiqueCard">
            <div className="row">
              <div className="icon box_center">6</div>
              <div className="description"></div>
            </div>
          </label>
        </div>
      </div>
      <div className="box_center">
        <LazyLoadImage
          src={traitvertical}
          alt="trait vert vertical"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default SectionAnimatedCardLexique;
