import React from "react";
import "./LoginSection.style.css";
import {
  FormControl,
  TextField,
  FormHelperText,
  InputLabel,
  Button,
} from "@mui/material";

export default function LoginSection() {
  return (
    <div className="login">
      <div className="left"></div>
      <div className="right">
        <h3>Login</h3>
        <div className="input">
          <FormControl>
            <TextField label="Email / Username" variant="filled" />
          </FormControl>
        </div>
        <div className="input">
          <FormControl>
            <TextField type="password" label="Password" variant="filled" />
          </FormControl>
        </div>

        <Button>Login</Button>
      </div>
    </div>
  );
}
