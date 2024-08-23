import React from "react";
import "./NavbarPortfolio.scss";
import "../../../components/Footer/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import SidebarPortfolio from "./sidebarPortfolio/SidebarPortfolio";

const NavbarPortfolio = () => {
  return (
    <div className="navbarPortfolio">
      {/* sidebar */}
      <SidebarPortfolio />
      <div className="navbarPortfolio_wrapper d-flex">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Detcherry Dev
        </motion.span>
        <div className="navbarPortfolio_socials">
          <a
            href="https://github.com/FoxCodeur/LOGAN"
            target="_blank"
            rel="noopener noreferrer"
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
