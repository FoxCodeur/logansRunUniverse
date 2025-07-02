import { useState, useEffect } from "react";

/**
 * Hook personnalisé pour détecter si l'écran est en mode "mobile" selon un breakpoint donné.
 * @param {number} breakpoint - Largeur maximale (en pixels) pour considérer un écran comme mobile (défaut : 768px).
 * @returns {boolean} - true si l'écran est plus petit que le breakpoint, sinon false.
 */
const useIsMobile = (breakpoint = 768) => {
  // Initialise le state en fonction de la largeur de la fenêtre au chargement
  const [isMobile, setIsMobile] = useState(() => {
    // Vérifie si "window" existe (utile pour l'exécution côté serveur)
    if (typeof window !== "undefined") {
      return window.innerWidth < breakpoint;
    }
    return false; // Valeur par défaut si on ne peut pas accéder à window (ex : SSR)
  });

  useEffect(() => {
    // Fonction appelée à chaque redimensionnement de la fenêtre
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Ajoute l'écouteur d'événement "resize" au montage du composant
    window.addEventListener("resize", handleResize);

    // Appelle handleResize une fois au montage pour synchroniser l'état (utile si SSR/hydratation)
    handleResize();

    // Nettoie l'écouteur d'événement lors du démontage du composant
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]); // Déclenche à chaque changement de breakpoint

  // Retourne true si l'écran est considéré comme "mobile", sinon false
  return isMobile;
};

export default useIsMobile;
