import React, { useState, useEffect } from "react";
import Typewriter from "react-typewriter-effect";
// Importe le fichier JSON directement
import typewriterData from "../../../../typewriter.json";
const TypeWriterBox = () => {
  const [phrases, setPhrases] = useState([]);

  useEffect(() => {
    // Utilise les données importées
    const phrasesArray =
      typewriterData[0]?.B?.["Box"]?.typewriter?.phrases || [];
    setPhrases(phrasesArray);
  }, []);
  return (
    <div className="typewriter-container">
      <Typewriter
        textStyle={{ fontFamily: "Orbitron", color: "#000", fontSize: "24px" }}
        startDelay={1000} //Ce paramètre définit le délai (en millisecondes) avant que l'animation du texte ne commence après le chargement de la page.
        cursorColor="darkred"
        cursorStyle="{ width: '20px', height: '3em' }"
        multiText={phrases}
        // multiText={phrases}
        multiTextDelay={1000} //multiTextDelay: Ce paramètre définit le délai (en millisecondes) entre l'affichage de deux textes consécutifs dans l'animation.
        typeSpeed={100} // signifie que chaque caractère prendra 50 millisecondes pour être tapé, ce qui correspond à une vitesse de frappe modérée.
      />
    </div>
  );
};

export default TypeWriterBox;
