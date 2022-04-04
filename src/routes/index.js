import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  AboutPage,
  LoginPage,
  RegisterPage,
  Dashboard,
} from "../pages";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}
