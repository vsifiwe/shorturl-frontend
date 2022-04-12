import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <img
        src="https://amalitech.com/wp-content/uploads/2020/04/amali-services-white-01-294x84.png"
        alt="Amalitech services logo"
      />
      <div>
        <ul>
          <li>Features</li>
          <li>About Us</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div>
        <ul>
          <Button variant="outlined" color="warning">
            <Link to="/login">Login</Link>
          </Button>

          <Link to="/register">
            <Button variant="contained" color="error">
              Register
            </Button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
