import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./SectionDataList.scss";

const SectionDataList = () => {
  // Déclaration des états, le premier pour stocker les titres et le second pour
  //  gérer les erreurs
  const [titles, setTitles] = useState([]);
  const [error, setError] = useState(null);

  // Utilisation de useEffect pour récupérer les données au chargement du composant
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupération des données depuis le fichier JSON
        const response = await fetch("/data.json");

        // Vérification de la réponse HTTP
        if (!response.ok)
          throw new Error("Erreur lors du chargement des données");

        // Conversion de la réponse en JSON
        const data = await response.json();

        // Extraction des titres :
        // 1️⃣ Object.values(data) → transforme l'objet en tableau de valeurs
        // 2️⃣ flatMap(Object.values) → récupère toutes les valeurs imbriquées
        //  des objets internes
        // 3️⃣ map(item => item.titre) → récupère uniquement les titres
        const extractedTitles = Object.values(data)
          .flatMap(Object.values)
          .map((item) => item.titre);

        // Mise à jour de l'état avec les titres extraits ou un message si vide
        setTitles(
          extractedTitles.length
            ? extractedTitles
            : ["Définitions non disponibles"]
        );
      } catch (err) {
        // Gestion des erreurs et mise à jour de l'état d'erreur
        setError(err.message);
      }
    };

    // Appel de la fonction fetchData
    fetchData();
  }, []); // Le tableau de dépendances vide garantit que l'effet ne s'exécute qu'une seule fois

  return error ? (
    // Affichage du message d'erreur si une erreur est détectée
    <p className="error-message">{error}</p>
  ) : (
    <>
      {/* Liste des titres sous forme de liens de navigation */}
      <ul className="grid-list-search">
        {titles.map((title, index) => (
          <li className="list-search-style" key={index}>
            {/* Création d'un lien vers une URL formatée avec le titre */}
            {/* Objectif : Générer des URL lisibles et compatibles avec le web.
             Les espaces ne sont pas valides dans une URL, c'est pourquoi on les
              remplace par des - pour une meilleure structure. C'est une bonne
               pratique SEO et améliore l'accessibilité.*/}
            <NavLink to={`/${title.toLowerCase().replace(/ /g, "-")}`}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* Ajout d'un séparateur visuel */}
      <div className="tiret"></div>
    </>
  );
};

export default SectionDataList;
