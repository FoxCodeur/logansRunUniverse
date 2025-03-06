import React from "react";
import { NavLink } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&rsquo;existe pas.</p>
      <NavLink to="/" className="return-home">
        Retourner sur la page d&apos;accueil
      </NavLink>
    </div>
  );
};

export default ErrorPage;
