import React from "react";
import logo from "./logo.svg";
import Netflix from "./components/Netflix";
import { Route, Routes } from "react-router-dom";
import YoutubePage from "./components/YoutubePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Netflix />} />
      <Route path="/youtube" element={<YoutubePage />} />
    </Routes>
  );
}

export default App;
