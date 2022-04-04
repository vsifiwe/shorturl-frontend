import React from "react";
import "./HeroSection.style.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function HeroSection() {
  return (
    <div className="hero">
      <p className="title">Create Short Links</p>
      <p className="copy">
        A URL shortener built by AmaliTech to help you share your content easily
        and in a more concise manner
      </p>
      <div>
        <TextField label="Long link" placeholder="Paste a link to shorten it" />
        <Button variant="contained">Shorten</Button>
      </div>
    </div>
  );
}
