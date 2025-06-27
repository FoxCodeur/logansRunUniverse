import React from "react";
import "./NavbarPortfolio.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SidebarPortfolio from "../sidebarPortfolio/SidebarPortfolio";

const NavbarPortfolio = () => {
  return (
    <div className="navbarPortfolio">
      <SidebarPortfolio />
      <div className="navbarPortfolio_wrapper d-flex">
        <span className="navbarPortfolio_brand">Fox Codeur</span>
        <div className="navbarPortfolio_socials">
          <a
            href="https://github.com/FoxCodeur/LOGAN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon
              icon={faGithubAlt}
              className="navbarPortfolio_socials_Style"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jean-luc-detcherry-04388018/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="navbarPortfolio_socials_Style"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarPortfolio;
