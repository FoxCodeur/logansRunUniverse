import React from "react";
import NavbarPortfolio from "./navbarPortfolio/NavbarPortfolio";
import Hero from "./hero/Hero";
import Parallax1 from "./parallax1/Parallax1";
import Portfolio1 from "./portfolio1/Portfolio1";
import ExperiencePro from "./ExperiencePro/ExperiencePro";
import "./Portfolio.scss";
import LogansRunAnimated from "./LogansRunAnimated/LogansRunAnimated";
import Skills from "./Skills/Skills";

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
        <section className="sectionPortfolio">
          <LogansRunAnimated />
        </section>
        <section className="sectionPortfolio" id="Portfolio">
          <Portfolio1 />
        </section>
        <section className="sectionPortfolio" id="CV">
          <ExperiencePro />
        </section>
      </main>
    </>
  );
};

export default Portfolio;
