import React from "react";
import logo from "@/assets/images/images-générales/logantitle.png";
import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <h1>
        <img className="widthLogo" src={logo} alt="Logan's run" />
      </h1>
    </Link>
  );
};

export default Logo;
