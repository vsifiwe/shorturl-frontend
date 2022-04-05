import React from "react";
import "./RegisterSection.style.css";
import { FormControl, TextField, FormHelperText, Button } from "@mui/material";
import { useFormik } from "formik";
import { startEmailLogin } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(() => startEmailLogin());
      axios
        .post("http://localhost:8000/auth/register", values)
        .then(() => navigate("/login"))
        .catch(() => alert("An error occured in your registration"));
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

          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  );
}
