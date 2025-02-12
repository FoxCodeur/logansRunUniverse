import React from "react";
import data from "../../../../data.json";
import Definition from "../../Definition";
import CubsAudioPlayer from "./CubsAudioPlayer/CubsAudioPlayer";
const TheCubs = () => {
  const cubsData = data.C ? data.C["The Cubs"] : null;

  if (!cubsData) {
    return <div>Les données pour The Cubs ne sont pas disponibles.</div>;
  }

  return (
    <div>
      <Definition section="C" keyName="The Cubs" />
      <CubsAudioPlayer />
    </div>
  );
};

export default TheCubs;
