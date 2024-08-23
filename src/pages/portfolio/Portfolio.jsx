import React from "react";
import NavbarPortfolio from "./navbarPortfolio/NavbarPortfolio";
import Hero from "./hero/Hero";
import Parallax1 from "./parallax1/Parallax1";
import Services from "./services/Services";
import Parallaxe2 from "./parallax2/Parallax2";
import Portfolio1 from "./portfolio1/Portfolio1";
import Contact from "./contact/Contact";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <>
      <div className="sectionNavbar" id="Homepage">
        <NavbarPortfolio />
      </div>
      <div className="portfolioContainer">
        <section className="sectionPortfolio">
          <Hero />
        </section>
        <section className="sectionPortfolio">
          <Parallax1 />
        </section>
        <section className="sectionPortfolio" id="Services">
          <Services />
        </section>
        <section className="sectionPortfolio" id="Portfolio">
          <Parallaxe2 />
        </section>
        <section className="sectionPortfolio">
          <Portfolio1 />
        </section>
        <section className="sectionPortfolio" id="Contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Portfolio;
