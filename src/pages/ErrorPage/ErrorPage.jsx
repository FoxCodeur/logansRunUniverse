import React from "react";
import { NavLink } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&rsquo;existe pas.</p>
      {/* Supprimer la balise NavLink extérieure */}
      <NavLink to="/">Retourner sur la page d&rsquo;accueil</NavLink>
    </div>
  );
};

export default ErrorPage;
