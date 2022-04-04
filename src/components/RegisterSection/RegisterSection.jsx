import React from "react";
import "./RegisterSection.style.css";
import {
  FormControl,
  TextField,
  FormHelperText,
  InputLabel,
  Button,
} from "@mui/material";

export default function RegisterSection() {
  return (
    <div className="login">
      <div className="left"></div>
      <div className="right">
        <h3>Register</h3>
        <div className="input">
          <FormControl>
            {/* <InputLabel htmlFor="email-input">Email address</InputLabel> */}
            <TextField label="Email address" variant="filled" />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
        </div>
        <div className="input">
          <FormControl>
            {/* <InputLabel htmlFor="username-input">Username</InputLabel> */}
            <TextField fullWidth label="Username" variant="filled" />
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
