import React from "react";
import "./LoginSection.style.css";
import {
  FormControl,
  TextField,
  FormHelperText,
  InputLabel,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import LoadingButton from "../LoadingButton";

export default function LoginSection() {
  const formik = useFormik({
    initialValues: {
      email: "",
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
        <h3>Login</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="input">
            <FormControl>
              <TextField
                name="email"
                label="Email / Username"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
          </div>
          <div className="input">
            <FormControl>
              <TextField
                name="password"
                type="password"
                label="Password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
          </div>
          <LoadingButton />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}
