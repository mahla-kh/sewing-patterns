import React from "react";

export default function Playground({ children }) {
  return (
    <div className="playground">
      <svg
        width="1000"
        height="500"
        style={{ background: "#f9f9f9", border: "1px solid #ccc" }}
      >
        {children}
      </svg>
    </div>
  );
}
