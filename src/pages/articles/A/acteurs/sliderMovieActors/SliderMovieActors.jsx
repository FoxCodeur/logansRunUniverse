import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Importation des composants de base Swiper
import { Navigation, Pagination } from "swiper/modules"; // Importation des modules Swiper nécessaires
import "swiper/css"; // Importation du style de base Swiper
import "swiper/css/navigation"; // Importation du style de navigation
import "swiper/css/pagination"; // Importation du style de pagination
import "./SliderMovieActors.scss";

// Import des images
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
    <Swiper
      modules={[Navigation, Pagination]} // Modules Swiper utilisés pour la navigation et la pagination
      spaceBetween={10} // Espace entre les slides
      slidesPerView={1} // Nombre de slides visibles
      // speed={400} // La transition en ms
      // grabCursor={true} curseur avec main
      navigation // Activer les boutons de navigation
      pagination={{ clickable: true }} // Activer la pagination cliquable
      loop={true} // Activer la boucle infinie
    >
      {/* Chaque SwiperSlide représente une image */}
      <SwiperSlide>
        <img
          src={imageMovieUn}
          alt="movie1"
          className="image_slider borderAffiches"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={imageMovieDeux}
          alt="movie2"
          className="image_slider borderAffiches"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={imageMovieTrois}
          alt="movie3"
          className="image_slider borderAffiches"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={imageMoviQuatre}
          alt="movie4"
          className="image_slider borderAffiches"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={imageMovieCinq}
          alt="movie5"
          className="image_slider borderAffiches"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={imageMovieSix}
          alt="movie6"
          className="image_slider borderAffiches"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={imageMovieSept}
          alt="movie7"
          className="image_slider borderAffiches"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={imageMovieHuit}
          alt="movie8"
          className="image_slider borderAffiches"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={imageMovieNeuf}
          alt="movie9"
          className="image_slider borderAffiches"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={imageMovieDix}
          alt="movie10"
          className="image_slider borderAffiches"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderMovieActors;
