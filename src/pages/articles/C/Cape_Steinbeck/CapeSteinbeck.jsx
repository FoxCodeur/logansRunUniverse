import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";

const CapeSteinbeck = () => {
  // console.log("Imported Data: ", data); // Log the entire data object to verify import
  const capeSteinbeckData = data.C ? data.C["Cape Steinbeck"] : null;
  // console.log("Cape-Steinbeck Data: ", capeSteinbeckData); // Log specific data for Cape-Steinbeck

  if (!capeSteinbeckData) {
    return <div>Les données pour Cape Steinbeck ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="C" keyName="Cape Steinbeck" />
    </div>
  );
};

export default CapeSteinbeck;
