import React from "react";
import Playground from "./Playground";
import BalatanePosht from "./patterns/BalatanePosht";
import PropertiesPanel from "./PropertiesPanel";

export default function Firstpage() {
  return (
    <div className="full">
      <Playground>
        <BalatanePosht />
      </Playground>
      <PropertiesPanel />
    </div>
  );
}
