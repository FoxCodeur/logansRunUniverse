import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import FoxCodeurLogo from "@/assets/images/images-générales/fox-codeur.png";
import renard from "@/assets/images/images-générales/renard.png";
import Logo from "../Nav/logo/Logo";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_inside">
        <Logo />
        <img
          className="foxCodeurLogo"
          src={FoxCodeurLogo}
          alt=" illustration d'une tête de renard"
        />

        <div className="socials-container">
          <div className="github">
            <FontAwesomeIcon icon={faGithubAlt} className="socialsStyle" />
            {/* github icon */}
          </div>
          <div className="linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="socialsStyle" />
            {/* LinkedIn icon */}
          </div>{" "}
          <div className="socialFox">
            <img
              className="fox socialsStyle"
              src={renard}
              alt="nouvelle édition du roman Logan's run"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
