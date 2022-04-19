// import React from "react";
// import "./LoginSection.style.css";
// import { FormControl, TextField, Button } from "@mui/material";
// import { useFormik } from "formik";
// import LoadingButton from "../LoadingButton";
// import { useSelector, useDispatch } from "react-redux";
// import { handleEmailLogin, startEmailLogin } from "../../redux/slice/authSlice";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function LoginSection() {
//   const navigate = useNavigate();
//   const isLoading = useSelector((state) => state.auth.isLoading);
//   const dispatch = useDispatch();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: (values) => {
//       dispatch(() => dispatch(startEmailLogin()));
//       axios
//         .post(`http://localhost:8000/auth/login/`, values)
//         .then((res) => dispatch(handleEmailLogin(res.data)))
//         .then(() => navigate("/dashboard"));
//     },
//   });

//   return (
//     <div className="login">
//       <div className="left"></div>
//       <div className="right">
//         <h3>Login</h3>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="input">
//             <FormControl>
//               <TextField
//                 name="email"
//                 label="Email / Username"
//                 variant="filled"
//                 onChange={formik.handleChange}
//                 value={formik.values.email}
//               />
//             </FormControl>
//           </div>
//           <div className="input">
//             <FormControl>
//               <TextField
//                 name="password"
//                 type="password"
//                 label="Password"
//                 variant="filled"
//                 onChange={formik.handleChange}
//                 value={formik.values.password}
//               />
//             </FormControl>
//           </div>
//           {isLoading ? <LoadingButton /> : <Button type="submit">Login</Button>}
//         </form>
//       </div>
//     </div>
//   );
// }

import * as React from "react";
import configFile from "../../config.json";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { handleEmailLogin, startEmailLogin } from "../../redux/slice/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import GoogleButton from "../GoogleButton";
import FacebookIcon from "@mui/icons-material/Facebook";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://amalitech.com/">
        AmaliTech
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginSection() {
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      dispatch(() => dispatch(startEmailLogin()));
      axios
        .post(`${configFile.api}/auth/login/`, values)
        .then((res) => dispatch(handleEmailLogin(res.data)))
        .then(() => navigate("/dashboard"));
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              // component="form"
              sx={{ mt: 1 }}
            >
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </form>
              <div className="social-btns">
                <Button
                  // type="submit"
                  fullWidth
                  variant="text"
                  sx={{ mt: 3, mb: 2 }}
                >
                  <GoogleButton />
                </Button>
                <Button
                  // type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                >
                  <FacebookIcon /> {" Sign in with FaceBook"}
                </Button>
              </div>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
