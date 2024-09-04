import React, { useRef } from "react"; // Importation des modules React et useRef pour gérer les références
import { Swiper, SwiperSlide } from "swiper/react"; // Importation des composants Swiper pour créer le slider
import { Navigation, Pagination } from "swiper/modules"; // Importation des modules Swiper pour la navigation et la pagination
import "swiper/css"; // Importation des styles de base de Swiper
import "swiper/css/navigation"; // Importation des styles pour la navigation de Swiper
import "swiper/css/pagination"; // Importation des styles pour la pagination de Swiper
import "./SliderMovieActors.scss"; // Importation des styles personnalisés pour le slider

// Import des images pour les diapositives
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

// Import du fichier audio qui sera joué lors du changement de diapositive
import polaroid from "../../../../../assets/sons/cliche.mp3";

const SliderMovieActors = () => {
  // Création d'une référence pour l'élément audio afin de pouvoir jouer le son
  const audioRef = useRef(new Audio(polaroid));

  // Fonction pour jouer le son lorsque la diapositive change
  const playSound = () => {
    audioRef.current.play();
  };

  return (
    <div className="swiper-container">
      {/* Composant Swiper pour créer le slider */}
      <Swiper
        modules={[Navigation, Pagination]} // Modules utilisés pour la navigation et la pagination
        spaceBetween={30} // Espace entre les diapositives
        slidesPerView={1} // Nombre de diapositives visibles à la fois
        navigation={{
          nextEl: ".custom-next", // Sélecteur pour le bouton suivant personnalisé
          prevEl: ".custom-prev", // Sélecteur pour le bouton précédent personnalisé
        }}
        pagination={{ clickable: true }} // Pagination cliquable
        loop={true} // Activer la boucle infinie du slider
        onSlideChange={playSound} // Appelle la fonction playSound lors du changement de diapositive
      >
        {/* Diapositives du slider */}
        <SwiperSlide>
          <img src={imageMovieUn} alt="movie1" className="image_slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageMovieDeux} alt="movie2" className="image_slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageMovieTrois} alt="movie3" className="image_slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageMoviQuatre} alt="movie4" className="image_slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageMovieCinq} alt="movie5" className="image_slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageMovieSix} alt="movie6" className="image_slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageMovieSept} alt="movie7" className="image_slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageMovieHuit} alt="movie8" className="image_slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageMovieNeuf} alt="movie9" className="image_slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageMovieDix} alt="movie10" className="image_slider" />
        </SwiperSlide>
      </Swiper>

      {/* Boutons de navigation personnalisés */}
      <div className="custom-prev">
        &lt; {/* Peut être remplacé par une icône FontAwesome si souhaité */}
      </div>
      <div className="custom-next">
        &gt; {/* Peut être remplacé par une icône FontAwesome si souhaité */}
      </div>

      {/* Élement audio utilisé pour jouer le son */}
      <audio ref={audioRef} src={polaroid} />
    </div>
  );
};

export default SliderMovieActors;
----------------------------------------------------------------------------------
/* SliderMovieActors.scss */

/* Conteneur du slider */
.swiper-container {
  position: relative;
  width: 100%;
  height: auto;
  /* Ajouter une hauteur fixe pour le conteneur si nécessaire */
  max-height: 500px; /* Ajustez la hauteur selon vos besoins */
}

/* Diapositives du slider */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Pour que les diapositives s'ajustent à la taille du conteneur */
  width: 100%;
}

/* Style pour les images */
.image_slider {
  max-width: 100%; /* Pour que l'image ne dépasse pas la largeur du conteneur */
  max-height: 100%; /* Pour que l'image ne dépasse pas la hauteur du conteneur */
  object-fit: cover; /* Assure que l'image couvre l'espace tout en maintenant son ratio */
}
----------------------------------------------------------------------------------

options supplémentaires

modules={[Navigation, Pagination]}
  spaceBetween={10}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  loop={true}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  effect="fade"
  centeredSlides={true}
  initialSlide={0}
  speed={600}
  grabCursor={true}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  onSlideChange={() => console.log('Slide changed')}
>
  <SwiperSlide>
    <img src={imageMovieUn} alt="movie1" className="image_slider" />
  </SwiperSlide>
  {/* Autres SwiperSlide */}
