import React from "react";
import "./SliderMovieActors.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imageMovieUn from "../../../../../assets/images/movie/movie1.png";
import imageMovieDeux from "../../../../../assets/images/movie/movie2.png";
import imageMovieTrois from "../../../../../assets/images/movie/movie3.png";
import imageMoviQuatre from "../../../../../assets/images/movie/movie4.png";
import imageMovieCinq from "../../../../../assets/images/movie/movie5.png";
import imageMovieSix from "../../../../../assets/images/movie/movie6.png";
import imageMovieSept from "../../../../../assets/images/movie/movie7.png";
import imageMovieHuit from "../../../../../assets/images/movie/movie8.png";
import imageMovieNeuf from "../../../../../assets/images/movie/movie9.png";
import imageMovieDix from "../../../../../assets/images/movie/movie10.png";

const SliderMovieActors = () => {
  return (
    <div className="slider-movie-actors">
      <img src={imageMovieUn} alt="movie1" className="image_slider active" />
      <img src={imageMovieDeux} alt="movie2" className="image_slider" />
      <img src={imageMovieTrois} alt="movie3" className="image_slider" />
      <img src={imageMoviQuatre} alt="movie4" className="image_slider" />
      <img src={imageMovieCinq} alt="movie5" className="image_slider" />
      <img src={imageMovieSix} alt="movie6" className="image_slider" />
      <img src={imageMovieSept} alt="movie7" className="image_slider" />
      <img src={imageMovieHuit} alt="movie8" className="image_slider" />
      <img src={imageMovieNeuf} alt="movie9" className="image_slider" />
      <img src={imageMovieDix} alt="movie10" className="image_slider" />

      {/* Bouton pour l'image suivante */}
      <button className="suivant cliche" aria-label="Next">
        <FontAwesomeIcon icon="chevron-right" />
      </button>

      {/* Bouton pour l'image précédente */}
      <button className="precedent cliche" aria-label="Previous">
        <FontAwesomeIcon icon="chevron-left" />
      </button>
    </div>
  );
};

export default SliderMovieActors;
