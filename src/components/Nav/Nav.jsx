import HamburgerButton from "../HamburgerButton/HamburgerButton";
import "./Nav.scss";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./logo/Logo";
import HomeNav from "../../pages/home/homenav/HomeNav";

const Nav = () => {
  // showLinks et setshowLinks : Utilisation de useState pour gérer l'état d'affichage
  // des liens de navigation (ouvert ou fermé). showLinks est l'état actuel
  //(initialement false), et setshowLinks est la fonction pour mettre à jour cet état.
  const [showLinks, setshowLinks] = useState(false);
  const location = useLocation();
  // handleShowLinks : Une fonction qui inverse l'état de showLinks lorsqu'elle est
  // appelée, ouvrant ou fermant le menu de navigation.
  const handleShowLinks = () => {
    setshowLinks(!showLinks);
  };
  // handleLinkClick : Une fonction qui ferme le menu de navigation en mettant
  // showLinks à false lorsqu'un lien de navigation est cliqué.
  const handleLinkClick = () => {
    setshowLinks(false);
  };

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

export default Nav;
