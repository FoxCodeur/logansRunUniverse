import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Création du contexte React pour partager les données globales
 * Ce contexte permettra à tous les composants enfants d'accéder à :
 * - Les données chargées depuis data.json
 * - L'état du mode sombre/dark mode
 * - Les fonctions pour manipuler ces données
 */
export const DataContext = createContext();

/**
 * DataProvider - Composant fournisseur du contexte
 * @param {Object} props - Les propriétés du composant
 * @param {ReactNode} props.children - Les composants enfants à enrober
 * @returns {JSX.Element} Le fournisseur de contexte
 */
export const DataProvider = ({ children }) => {
  // État pour stocker les données chargées depuis le JSON
  const [data, setData] = useState(null);

  // État pour gérer le thème sombre/clair
  const [isDarkMode, setIsDarkMode] = useState(false);

  /**
   * Effet pour charger les données JSON au montage du composant
   * Utilise fetch pour récupérer les données depuis public/data.json
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");

        // Vérifie si la réponse est valide (status 200-299)
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        // Transforme la réponse en JSON et met à jour l'état
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    };

    // Appel de la fonction asynchrone
    fetchData();

    // Le tableau de dépendances vide [] signifie que cet effet ne s'exécute qu'au montage
  }, []);

  /**
   * Fonction pour basculer entre les modes sombre/clair
   * Inverse simplement la valeur actuelle de isDarkMode
   */
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  /**
   * Fonction utilitaire pour récupérer une définition spécifique
   * @param {string} section - La section du JSON (ex: "personnages")
   * @param {string} keyName - La clé de l'entrée recherchée
   * @returns {Object|null} L'entrée trouvée ou null si inexistante
   */
  const getDefinition = (section, keyName) => {
    // Utilise l'opérateur optionnel ?. pour éviter les erreurs si data est null
    return data?.[section]?.[keyName] || null;
  };

  // Valeurs fournies par le contexte à tous les composants enfants
  const contextValue = {
    data, // Les données complètes
    isDarkMode, // L'état du mode sombre
    toggleDarkMode, // Fonction pour changer le mode
    getDefinition, // Fonction pour chercher des données
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

// Validation des props avec PropTypes
DataProvider.propTypes = {
  /**
   * Les composants enfants que DataProvider va enrober
   * Doit être un nœud React valide et est obligatoire
   */
  children: PropTypes.node.isRequired,
};
