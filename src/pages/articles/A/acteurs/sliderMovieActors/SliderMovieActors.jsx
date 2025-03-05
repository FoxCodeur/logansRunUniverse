import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Importation des composants de base Swiper
import { Navigation, Pagination, EffectFade } from "swiper/modules"; // Importation des modules Swiper nécessaires
import "swiper/css"; // Importation du style de base Swiper
import "swiper/css/navigation"; // Importation du style de navigation
import "swiper/css/pagination"; // Importation du style de pagination
import "swiper/css/effect-fade"; // Importation du style de l'effet de fondu
import { LazyLoadImage } from "react-lazy-load-image-component"; // Importation de LazyLoadImage
import "react-lazy-load-image-component/src/effects/blur.css"; // Importer les styles d'effet si nécessaire
import "./SliderMovieActors.scss";

// Import des images
import imageMovieUn from "@/assets/images/movie/movie1.png";
import imageMovieDeux from "@/assets/images/movie/movie2.png";
import imageMovieTrois from "@/assets/images/movie/movie3.png";
import imageMoviQuatre from "@/assets/images/movie/movie4.png";
import imageMovieCinq from "@/assets/images/movie/movie5.png";
import imageMovieSix from "@/assets/images/movie/movie6.png";
import imageMovieHuit from "@/assets/images/movie/movie8.png";
import imageMovieNeuf from "@/assets/images/movie/movie9.png";
import imageMovieDix from "@/assets/images/movie/movie10.png";

const SliderMovieActors = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade]} // Modules Swiper utilisés pour la navigation, la pagination et l'effet de fondu
      spaceBetween={10} // Espace entre les slides
      slidesPerView={1} // Nombre de slides visibles
      navigation // Activer les boutons de navigation
      pagination={{ clickable: true }} // Activer la pagination cliquable
      loop={true} // Activer la boucle infinie
      effect="fade" // Utilisation de l'effet de fondu
      fadeEffect={{ crossFade: true }} // Option pour un fondu croisé plus fluide
    >
      {/* Chaque SwiperSlide représente une image */}
      <SwiperSlide>
        <LazyLoadImage
          src={imageMovieUn}
          alt="movie1"
          effect="blur" // Effet de flou lors du chargement
          className="image_slider"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage
          src={imageMovieDeux}
          alt="movie2"
          effect="blur" // Effet de flou lors du chargement
          className="image_slider"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage
          src={imageMovieTrois}
          alt="movie3"
          effect="blur" // Effet de flou lors du chargement
          className="image_slider"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage
          src={imageMoviQuatre}
          alt="movie4"
          effect="blur" // Effet de flou lors du chargement
          className="image_slider"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage
          src={imageMovieCinq}
          alt="movie5"
          effect="blur" // Effet de flou lors du chargement
          className="image_slider"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage
          src={imageMovieSix}
          alt="movie6"
          effect="blur" // Effet de flou lors du chargement
          className="image_slider"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage
          src={imageMovieHuit}
          alt="movie8"
          effect="blur" // Effet de flou lors du chargement
          className="image_slider"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage
          src={imageMovieNeuf}
          alt="movie9"
          effect="blur" // Effet de flou lors du chargement
          className="image_slider"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage
          src={imageMovieDix}
          alt="movie10"
          effect="blur" // Effet de flou lors du chargement
          className="image_slider"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderMovieActors;
