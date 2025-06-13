import React, { createContext, useContext, useEffect, useState } from "react";

const PortfolioContext = createContext();

export const usePortfolio = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  // Pour les projets (logique existante)
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projectsError, setProjectsError] = useState(null);

  // Pour les expériences (nouvelle logique)
  const [experiences, setExperiences] = useState([]);
  const [loadingExperiences, setLoadingExperiences] = useState(true);
  const [experiencesError, setExperiencesError] = useState(null);

  // Chargement des projets (inchangé)
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

  // Chargement des expériences (nouveau)
  useEffect(() => {
    fetch("/cv.json")
      .then((res) => {
        if (!res.ok)
          throw new Error("Erreur lors du chargement des expériences.");
        return res.json();
      })
      .then((data) => {
        setExperiences(data);
        setLoadingExperiences(false);
      })
      .catch((err) => {
        setExperiencesError(err.message);
        setLoadingExperiences(false);
      });
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        loadingProjects,
        projectsError,
        experiences,
        loadingExperiences,
        experiencesError,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
