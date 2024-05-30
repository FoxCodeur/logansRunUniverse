import React from "react";
import "./Lexique.scss";
import LexiqueSearchBar from "./lexiqueSearchBar/LexiqueSearchBar";
import SectionTitreResume from "./sectionTitreResume/SectionTitreResume";
import SectionDataList from "./sectionDataList/SectionDataList";
// importation du tableau data qui contient toutes les définitions de l'application.
import data from "../../data.json";
import SectionLogansRunMedias from "./sectionLogansRunMedias/SectionLogansRunMedias";

const Lexique = () => {
  return (
    <div className="lexiqueContainer">
      <LexiqueSearchBar />
      <SectionTitreResume />
      <SectionDataList data={data} />
      <SectionLogansRunMedias />
    </div>
  );
};

export default Lexique;
