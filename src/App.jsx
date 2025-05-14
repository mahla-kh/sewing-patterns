import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./Firstpage";
import { PropertiesProvider } from "./context/PropertiesProvider";

export default function App() {
  return (
    <BrowserRouter>
      <PropertiesProvider>
        <Routes>
          <Route index element={<Firstpage />} />
          <Route path="/" element={<Firstpage />} />
        </Routes>
      </PropertiesProvider>
    </BrowserRouter>
  );
}
