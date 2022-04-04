import React from "react";
import "./Header.style.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div>Logo</div>
      <div>
        <ul>
          <li>About</li>
          <li>Pricing</li>
          <li>Something</li>
        </ul>
      </div>
      <div>
        <ul>
          <Button variant="text">
            <Link to="/login">Login</Link>
          </Button>

          <Link to="/register">
            <Button variant="contained">Register</Button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
