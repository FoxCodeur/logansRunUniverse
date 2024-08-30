import React, { useState, useEffect } from "react"; // Importation des hooks React pour la gestion d'état et des effets
import hero from "../../../assets/images/images-générales/JeanLuc.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"; // Importation des composants et des styles pour CircularProgressbar
import "react-circular-progressbar/dist/styles.css"; // Importation des styles par défaut de CircularProgressbar
import "./Hero.scss";

const Hero = () => {
  const [percentage, setPercentage] = useState(0); // État pour suivre la valeur du pourcentage de la barre de progression

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        const newPercentage = prev + 1;
        return newPercentage >= 100
          ? (clearInterval(interval), 100) // Si newPercentage >= 100, arrête l'intervalle et retourne 100
          : newPercentage; // Sinon, retourne newPercentage
      });
    }, 100); // Intervalle de temps entre chaque mise à jour (100 ms)

    return () => clearInterval(interval); // Nettoie l'intervalle lorsque le composant est démonté
  }, []); // Le tableau vide signifie que cet effet s'exécute uniquement au montage du composant

  return (
    <div className="hero">
      {/* Conteneur principal du composant */}
      <div className="wrapperHero">
        {/* Conteneur pour le texte et le bouton */}
        <div className="textHeroContainer boxCenterColumn">
          <h2>DETCHERRY JEAN-LUC</h2>
          <h1>Intégrateur Web</h1>
          <a
            href="mailto:detcherry@gmail.com?subject=Contact depuis le site&body=Bonjour Jean-Luc,"
            className="buttonHeroContainer contactButton" // Ajout de la classe 'contactButton'
          >
            Contact Me
          </a>
          <div className="scroll-icon">
            <svg
              width="30"
              height="70" // Augmenté pour inclure le chevron
              viewBox="0 0 30 70"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <rect
                x="1.5"
                y="1.5"
                width="27"
                height="47"
                rx="13.5"
                stroke="#fff"
                strokeWidth="3"
              />
              <circle cx="15" cy="12" r="3.5" fill="#fff" />{" "}
              {/* Molette agrandie */}
              {/* Chevron orienté vers le bas */}
              <path
                d="M10 55 L15 60 L20 55" // Définition du chevron
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="imageHeroContainer">
        {/* Conteneur pour l'image et la barre de progression */}
        <LazyLoadImage src={hero} />{" "}
        {/* Composant LazyLoadImage pour charger l'image de manière paresseuse */}
        <div className="progress-circle">
          {/* Conteneur pour la barre de progression circulaire */}
          <CircularProgressbar
            value={percentage} // Valeur actuelle de la barre de progression
            text={`${percentage}%`} // Texte affiché au centre de la barre (le pourcentage)
            strokeWidth={3} // Épaisseur de la barre de progression
            styles={buildStyles({
              // Styles personnalisés pour la barre de progression
              pathColor: `rgba(62, 152, 199, ${percentage / 100})`, // Couleur de la barre avec transparence dynamique
              textColor: "#000000", // Couleur du texte (le pourcentage) au centre
              textSize: "10px", // Taille du texte
              trailColor: "#d6d6d6", // Couleur de l'arrière-plan de la barre de progression
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
