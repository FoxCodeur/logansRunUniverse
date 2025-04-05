import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Création du contexte
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Chargement des données JSON
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    };
    fetchData();
  }, []);

  // Fonction pour basculer le mode sombre
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const getDefinition = (section, keyName) => {
    return data?.[section]?.[keyName] || null;
  };

  return (
    <DataContext.Provider
      value={{ data, isDarkMode, toggleDarkMode, getDefinition }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
