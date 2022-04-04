import React from "react";
import "./RegisterSection.style.css";
import { FormControl, TextField, FormHelperText, Button } from "@mui/material";
import { useFormik } from "formik";

export default function RegisterSection() {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="login">
      <div className="left"></div>
      <div className="right">
        <h3>Register</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="input">
            <FormControl>
              {/* <InputLabel htmlFor="email-input">Email address</InputLabel> */}
              <TextField
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                label="Email address"
                variant="filled"
              />
              <FormHelperText id="my-helper-text">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </div>
          <div className="input">
            <FormControl>
              <TextField
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                label="Username"
                variant="filled"
              />
            </FormControl>
          </div>
          <div className="input">
            <FormControl>
              <TextField
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                type="password"
                label="Password"
                variant="filled"
              />
            </FormControl>
          </div>

          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}
