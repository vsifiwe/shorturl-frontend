import React from "react";
import { Button } from "@mui/material";
export default function HeroSection() {
  return (
    <div className="hero">
      <p className="title">Create Short Links</p>
      <p className="copy">
        A URL shortener built by AmaliTech to help you share your content easily
        and in a more concise manner
      </p>
      <Button color="error" variant="contained">
        Start Now
      </Button>
    </div>
  );
}
