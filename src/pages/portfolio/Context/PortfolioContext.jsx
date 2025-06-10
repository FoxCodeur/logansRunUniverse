import React, { createContext, useState, useEffect } from "react";

// Création du contexte pour le portfolio
export const PortfolioContext = createContext();

/**
 * Ce composant provider gère l'état des projets du portfolio (projets, chargement, erreurs)
 * et rend ces données disponibles à tous ses enfants via le contexte.
 */
export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des projets.");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setFetchError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <PortfolioContext.Provider value={{ projects, loading, fetchError }}>
      {children}
    </PortfolioContext.Provider>
  );
};
