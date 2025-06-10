import { useContext } from "react";
import { PortfolioContext } from "../Context/PortfolioContext";

/**
 * Hook personnalisé pour accéder facilement au contexte du portfolio.
 * Permet de récupérer { projects, loading, fetchError } n'importe où dans l'app.
 * Utilisation : const { projects, loading, fetchError } = usePortfolio();
 */
export const usePortfolio = () => useContext(PortfolioContext);
