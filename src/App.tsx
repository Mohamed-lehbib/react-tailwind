import React from "react";
import logo from "./logo.svg";
import Netflix from "./pages/Netflix";
import { Route, Routes } from "react-router-dom";
import YoutubePage from "./pages/YoutubePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Netflix />} />
      <Route path="/youtube" element={<YoutubePage />} />
    </Routes>
  );
}

export default App;
