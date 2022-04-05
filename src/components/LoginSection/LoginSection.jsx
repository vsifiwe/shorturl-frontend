import React from "react";
import "./LoginSection.style.css";
import { FormControl, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import LoadingButton from "../LoadingButton";
import { useSelector, useDispatch } from "react-redux";
import { handleEmailLogin } from "../../redux/slice/authSlice";

export default function LoginSection() {
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(handleEmailLogin(values)).then(() => {
        console.log("done");
      });
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
          {isLoading ? <LoadingButton /> : <Button type="submit">Login</Button>}
        </form>
      </div>
    </div>
  );
}
