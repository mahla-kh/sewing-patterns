import React from "react";
import Playground from "./Playground";
import BalatanePosht from "./patterns/BalatanePosht";
import PropertiesPanel from "./PropertiesPanel";
import BalataneAnterior from "./patterns/BalataneAnterior";
import AnteriorTest from "./patterns/AnteriorTest";
import PosteriorTork from "./patterns/PosteriorTork";
import AnteriorTork from "./patterns/AnteriorTork";

export default function Firstpage() {
  return (
    <div className="full">
      <Playground>
        <BalatanePosht />
        {/* <BalataneAnterior /> */}
        <AnteriorTest />
        <PosteriorTork />
        <AnteriorTork />
      </Playground>
      <PropertiesPanel />
    </div>
  );
}
