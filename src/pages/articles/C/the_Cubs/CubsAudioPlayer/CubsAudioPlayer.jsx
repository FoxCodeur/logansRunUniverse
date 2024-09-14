import React, { useState } from "react";
import ReactAudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css"; // Importer les styles CSS de la bibliothèque ReactAudioPlayer
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import cubs from "../../../../../assets/images/images-générales/cubs_player.png";

const CubsAudioPlayer = () => {
  const [audioSrc, setAudioSrc] = useState("/cubs/Terminated_in_Cathedral.mp3");

  const changeAudio = (newAudio) => {
    console.log(`Changing audio to: ${newAudio}`); // Log the new audio source
    setAudioSrc(newAudio);
  };

  return (
    <div className="audio-player-container">
      {" "}
      {/* Classe principale du conteneur */}
      <LazyLoadImage
        className="cubs-logo" // Classe de style pour l'image du logo
        src={cubs}
        alt="cubs logo"
        effect="blur" // Effet de flou pendant le chargement de l'image
      />
      <ReactAudioPlayer
        className="react-h5-audio-player" // Classe de style pour le lecteur audio
        src={audioSrc} // Source de l'audio à jouer
        autoPlay={false} // Ne pas jouer automatiquement
        controls // Afficher les contrôles de base
      />
      {/* Boutons pour changer de piste audio */}
      <button onClick={() => changeAudio("/cubs/Terminated_in_Cathedral.mp3")}>
        Terminated in Cathedral
      </button>
      <button onClick={() => changeAudio("/cubs/cubs.mp3")}>Cubs</button>
    </div>
  );
};

export default CubsAudioPlayer;
