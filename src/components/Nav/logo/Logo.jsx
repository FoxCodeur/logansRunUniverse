import React from "react";
import logo from "../../../assets/images/images-générales/logantitle.png";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img
        className="widthLogo"
        src={logo}
        alt="logo texte avec en arriere plan une sphère rouge"
      />
    </div>
  );
};

export default Logo;
