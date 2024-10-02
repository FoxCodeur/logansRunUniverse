import "./Nav.scss";
import { useState, useEffect } from "react"; // Ajout de useEffect pour gérer le scroll
import { NavLink, useLocation } from "react-router-dom";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import Logo from "./logo/Logo";
import HomeNav from "../../pages/home/homenav/HomeNav";

const Nav = () => {
  const [showLinks, setshowLinks] = useState(false);
  const location = useLocation();

  const handleShowLinks = () => {
    setshowLinks(!showLinks);
  };

  const handleLinkClick = () => {
    setshowLinks(false);
  };

  // Utiliser useEffect pour gérer le débordement de la page
  useEffect(() => {
    if (showLinks) {
      document.body.style.overflow = "hidden"; // Désactive le défilement lorsque le menu est ouvert
    } else {
      document.body.style.overflow = "auto"; // Réactive le défilement lorsque le menu est fermé
    }
    return () => {
      document.body.style.overflow = "auto"; // Nettoyage pour rétablir le style par défaut
    };
  }, [showLinks]);

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : ""}`}>
      <div className="navbar_content">
        <div className="navbar_logo">
          <Logo />
        </div>
        <ul className="navbar_links">
          <li className="navbar_item">
            <NavLink
              to="/"
              className="navbar_link slideInDown-1"
              onClick={handleLinkClick}
            >
              Logan's_Run
            </NavLink>
            <NavLink
              to="/lexique"
              className="navbar_link slideInDown-2"
              onClick={handleLinkClick}
            >
              Lexique
            </NavLink>
            <NavLink
              to="/timelines"
              className="navbar_link slideInDown-3"
              onClick={handleLinkClick}
            >
              Timelines
            </NavLink>
            <NavLink
              to="/games"
              className="navbar_link slideInDown-4"
              onClick={handleLinkClick}
            >
              Games
            </NavLink>
            <NavLink
              to="/portfolio"
              className="navbar_link slideInDown-4"
              onClick={handleLinkClick}
            >
              Portfolio
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="home_nav_container">
        {location.pathname === "/" && <HomeNav />}
      </div>
      <button className="navbar_burger" type="button" onClick={handleShowLinks}>
        <HamburgerButton opened={showLinks} />
      </button>
    </nav>
  );
};

export default Nav; // Export du composant Nav pour être utilisé ailleurs dans l'application.
