import React, { createContext, useContext, useEffect, useState } from "react";

// 1. Création du contexte global PortfolioContext
// Permet de partager les données (projets et expériences) dans toute l'application
const PortfolioContext = createContext();

// 2. Hook personnalisé pour accéder facilement au contexte dans n'importe quel composant
// Utilisation : const data = usePortfolio();
export const usePortfolio = () => useContext(PortfolioContext);

// 3. Provider du contexte : englobe l'application et fournit les données/contextes à ses enfants
export const PortfolioProvider = ({ children }) => {
  // --- Gestion des projets ---
  const [projects, setProjects] = useState([]); // Contient la liste des projets
  const [projectsError, setProjectsError] = useState(null); // Message d'erreur s'il y a un souci au chargement

  // --- Gestion des expériences ---
  const [experiences, setExperiences] = useState([]); // Contient la liste des expériences professionnelles
  const [experiencesError, setExperiencesError] = useState(null); // Message d'erreur s'il y a un souci au chargement

  // --- Chargement des projets depuis le fichier JSON lors du montage du composant ---
  useEffect(() => {
    // Fonction asynchrone pour charger les projets
    const fetchProjects = async () => {
      setProjectsError(null); // Réinitialise l'erreur avant de commencer
      try {
        const res = await fetch("/projects.json"); // Récupère le fichier projects.json à la racine publique
        if (!res.ok) throw new Error("Erreur lors du chargement des projets."); // Gère les erreurs de requête HTTP
        const data = await res.json(); // Parse le JSON si la requête réussit
        setProjects(data); // Met à jour l'état des projets
      } catch (err) {
        setProjectsError(err.message); // Stocke le message d'erreur en cas de problème
      }
    };
    fetchProjects(); // Appelle la fonction au montage
  }, []); // Tableau vide = effet exécuté une seule fois au montage

  // --- Chargement des expériences depuis le fichier JSON lors du montage du composant ---
  useEffect(() => {
    // Fonction asynchrone pour charger les expériences
    const fetchExperiences = async () => {
      setExperiencesError(null); // Réinitialise l'erreur avant de commencer
      try {
        const res = await fetch("/cv.json"); // Récupère le fichier cv.json à la racine publique
        if (!res.ok)
          throw new Error("Erreur lors du chargement des expériences."); // Gère les erreurs de requête HTTP
        const data = await res.json(); // Parse le JSON si la requête réussit
        setExperiences(data); // Met à jour l'état des expériences
      } catch (err) {
        setExperiencesError(err.message); // Stocke le message d'erreur en cas de problème
      }
    };
    fetchExperiences(); // Appelle la fonction au montage
  }, []); // Tableau vide = effet exécuté une seule fois au montage

  // --- Rend les états disponibles à toute l'application via le contexte ---
  return (
    <PortfolioContext.Provider
      value={{
        projects, // Liste des projets
        projectsError, // Message d'erreur pour les projets
        experiences, // Liste des expériences
        experiencesError, // Message d'erreur pour les expériences
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

/*
------------------------------------------
Utilisation du contexte dans l'application
------------------------------------------

1. Dans le composant racine (ex : App.js) :
   <PortfolioProvider>
     <App />
   </PortfolioProvider>

2. Dans n'importe quel composant enfant :
   import { usePortfolio } from "../Context/PortfolioProvider";
   const { projects, projectsError, experiences, experiencesError } = usePortfolio();

3. Affiche les données ou un message d'erreur selon la valeur de l'état.
*/
