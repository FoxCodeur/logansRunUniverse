import React, { createContext, useContext, useEffect, useState } from "react";

const PortfolioContext = createContext();

export const usePortfolio = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projectsError, setProjectsError] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des projets.");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoadingProjects(false);
      })
      .catch((err) => {
        setProjectsError(err.message);
        setLoadingProjects(false);
      });
  }, []);

  return (
    <PortfolioContext.Provider
      value={{ projects, loadingProjects, projectsError }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
