import React from "react";
import NavbarPortfolio from "../../components/navbarPortfolio/NavbarPortfolio";
import Hero from "../../components/hero/Hero";
import Parallax1 from "../../components/parallax1/Parallax1";
import Portfolio1 from "../../components/portfolio1/Portfolio1";
import ExperiencePro from "../../components/ExperiencePro/ExperiencePro";
import "./Portfolio.scss";
import LogansRunAnimated from "../../components/LogansRunAnimated/LogansRunAnimated";
import Skills from "../../components/Skills/Skills";

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
        <section className="sectionPortfolio" id="Competences">
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
