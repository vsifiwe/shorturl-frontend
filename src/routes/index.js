import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, AboutPage } from "../pages";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
}
