import React from "react";
import { Helmet } from "react-helmet";
import "./Lexique.scss";
import LexiqueSearchBar from "./lexiqueSearchBar/LexiqueSearchBar";
import SectionTitreResume from "./sectionTitreResume/SectionTitreResume";
import SectionDataList from "./sectionDataList/SectionDataList";
// importation du tableau data qui contient toutes les définitions de l'application.
import data from "../../data.json";
import SectionLogansRunMedias from "./sectionLogansRunMedias/SectionLogansRunMedias";
import SectionLexique from "./sectionLexique/SectionLexique";
import SectionAnimatedCardLexique from "./sectionAnimatedCardLexique/SectionAnimatedCardLexique";

const Lexique = () => {
  return (
    <div className="lexiqueContainer">
      <Helmet>
        <title>Logan's Run Universe Lexicon - Definitions and Media</title>
        <meta
          name="description"
          content="Explore the lexicon of the Logan's Run universe with detailed definitions and associated media."
        />
        {/* Add other relevant meta tags for SEO */}
      </Helmet>
      <LexiqueSearchBar />
      <SectionTitreResume />
      <SectionDataList data={data} />
      <SectionLogansRunMedias />
      <SectionLexique />
      <SectionAnimatedCardLexique />
    </div>
  );
};

export default Lexique;
