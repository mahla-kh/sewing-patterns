import React from "react";
import Playground from "./Playground";
import BalatanePosht from "./patterns/BalatanePosht";
import PropertiesPanel from "./PropertiesPanel";
import BalataneAnterior from "./patterns/BalataneAnterior";

export default function Firstpage() {
  return (
    <div className="full">
      <Playground>
        <BalatanePosht />
        <BalataneAnterior />
      </Playground>
      <PropertiesPanel />
    </div>
  );
}
