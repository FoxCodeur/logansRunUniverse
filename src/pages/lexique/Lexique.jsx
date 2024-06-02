import React from "react";
import "./Lexique.scss";
import LexiqueSearchBar from "./lexiqueSearchBar/LexiqueSearchBar";
import SectionTitreResume from "./sectionTitreResume/SectionTitreResume";
import SectionDataList from "./sectionDataList/SectionDataList";
// importation du tableau data qui contient toutes les définitions de l'application.
import data from "../../data.json";
import SectionLogansRunMedias from "./sectionLogansRunMedias/SectionLogansRunMedias";
import SectionLexique from "./sectionLexique/SectionLexique";

const Lexique = () => {
  return (
    <div className="lexiqueContainer">
      <LexiqueSearchBar />
      <SectionTitreResume />
      <SectionDataList data={data} />
      <SectionLogansRunMedias />
      <SectionLexique />
    </div>
  );
};

export default Lexique;
