import React, { useState } from "react";
// Importation des bibliothèques nécessaires
import ReactAudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css"; // Importer les styles CSS de la bibliothèque ReactAudioPlayer
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import cubs from "@/assets/images/images-générales/cubs_player.png";

// Importation des fichiers audio
import terminatedInCathedral from "@/assets/sons/cubs/Terminated_in_Cathedral.mp3";
import cubsAudio from "@/assets/sons/cubs/Cubs.mp3";

const CubsAudioPlayer = () => {
  const [audioSrc, setAudioSrc] = useState(terminatedInCathedral);

  const changeAudio = (newAudio) => {
    console.log(`Changing audio to: ${newAudio}`); // Log du changement de piste
    setAudioSrc(newAudio);
  };

  return (
    <div className="audio-player-container">
      <LazyLoadImage
        className="cubs-logo"
        src={cubs}
        alt="cubs logo"
        effect="blur"
      />
      <ReactAudioPlayer
        className="react-h5-audio-player"
        src={audioSrc}
        autoPlay={false}
        controls
      />
      {/* Boutons pour changer de piste audio */}
      <button onClick={() => changeAudio(terminatedInCathedral)}>
        Terminated in Cathedral
      </button>
      <button onClick={() => changeAudio(cubsAudio)}>Cubs</button>
    </div>
  );
};

export default CubsAudioPlayer;
