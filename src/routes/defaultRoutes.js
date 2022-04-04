import { Routes, Route } from "react-router-dom";
import { LandingPage, AboutPage } from "../pages";

import React from "react";

export default function defaultRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
}
