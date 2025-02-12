import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
import TypeWriterBox from "./TypeWriterBox";
const Box = () => {
  const boxData = data.B ? data.B["Box"] : null;

  if (!boxData) {
    return <div>Les données pour Box ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="B" keyName="Box" />
      <TypeWriterBox />
    </div>
  );
};

export default Box;
