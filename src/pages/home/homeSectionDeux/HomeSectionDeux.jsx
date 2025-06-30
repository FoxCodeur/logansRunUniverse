import React from "react";
import { useEffect, useRef } from "react";
// useEffect pour exécuter du code après la création du composant.
//et useRef pour sélectionner un élément qui n' pas de rapport avec le state.
import "./HomeSectionDeux.scss";
import "../Home.scss";
import ceremonieCarousel from "@/assets/images/images-générales/carousel.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
const HomeSectionDeux = () => {
  const newsletterRef = useRef();
  // console.log(newsletterRef);

  useEffect(() => {
    // console.log(newsletterRef);
    // Crée une nouvelle instance de IntersectionObserver qui surveille
    //l'intersection d'un élément avec le viewport.
    const observer = new IntersectionObserver((entries) => {
      // Vérifie si le premier élément observé est visible dans le viewport.
      if (entries[0].isIntersecting) {
        // Ajoute la classe active à l'élément référencé par newsletterRef
        //si celui-ci est visible dans le viewport.
        newsletterRef.current.classList.add("active");
      }
    });
    // console.log(observer);
    //l'observateur de commencer à surveiller l'élément référencé par newsletterRef.
    observer.observe(newsletterRef.current);
    // le tableau vide indique que cet effet ne doit s'exécuter qu'une seule fois,
    //après le montage du composant.
  }, []);
  return (
    <div className="marginUpDownContainer">
      {/* <div ref={newsletterRef} className="image-container appearImage"> : Crée un div avec les classes image-container et appearImage
    et attache newsletterRef à ce div pour l'observation. */}
      <div ref={newsletterRef} className="image-container appearImage">
        <figure>
          {/* Utilisation de LazyLoadImage à la place de <img> */}
          <LazyLoadImage
            className="ceremonieCarousel"
            src={ceremonieCarousel}
            alt="Participants masqués flottant lors de la cérémonie du Carousel"
            loading="lazy"
            width={1134}
            height={522}
          />
          <figcaption>La cérémonie du Carousel</figcaption>
        </figure>
      </div>
      <div className="scroll-reveal">
        <p>
          <span>
            En ce début de 22ème siècle, l'ordre mondial fixe l'espérance de vie
            des humains à 21 ans. Lors du dernier jour de son existence, chaque
            citoyen doit impérativement se rendre dans un Carrousel, où chaque
            jour se déroule la fête rituelle du renouveau. Là, les participants
            qui revêtent l’aube blanche de purification (au préalable drogués)
            se réunissent autour de l’arène, vaste édifice circulaire, à gradins
            étagés, occupé en son centre par un cristal rouge. Tous vont mourir
            pulvérisés par des lasers! Le génocide programmé se déroule tel un
            moment festif et d’ailleurs le publique enthousiaste ne manque pas
            de venir assister aux crémations car chacun espère la promesse du
            renouveau. En effet selon les croyances véhiculés par le Penseur,
            chaque mise à mort contribue à la naissance d’un bébé. Les machines
            veillent ainsi à la stabilité de l'accroissement démographique
            mondial. Cette dictatture a un prix qui vaut sans conteste son
            pesant d'or car depuis que les hommes ont accepté de sacrifier leur
            liberté il n'y a plus de guerres, famines, maladie.
          </span>
        </p>
      </div>
    </div>
  );
};

export default HomeSectionDeux;
