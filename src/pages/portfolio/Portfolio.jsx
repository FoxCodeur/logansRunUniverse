import React from "react";
import NavbarPortfolio from "./navbarPortfolio/NavbarPortfolio";
import Hero from "./hero/Hero";
import Parallax1 from "./parallax1/Parallax1";
import Skills from "./services/Skills";
import Parallaxe2 from "./parallax2/Parallax2";
import Portfolio1 from "./portfolio1/Portfolio1";
import "./Portfolio.scss";
import Experience from "./experience/experience";

const Portfolio = () => {
  return (
    <>
      <nav
        className="sectionNavbar"
        id="Homepage"
        aria-label="Navigation principale"
      >
        <NavbarPortfolio />
      </nav>
      <main className="portfolioContainer">
        <section className="sectionPortfolio">
          <Hero />
        </section>
        <section className="sectionPortfolio">
          <Parallax1 />
        </section>
        <section className="sectionPortfolio" id="Services">
          <Skills />
        </section>
        <section className="sectionPortfolio" id="Portfolio">
          <Parallaxe2 />
        </section>
        <section className="sectionPortfolio">
          <Portfolio1 />
        </section>
        <section className="sectionPortfolio" id="Contact">
          <Experience />
        </section>
      </main>
    </>
  );
};

export default Portfolio;
