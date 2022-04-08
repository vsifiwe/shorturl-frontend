import react, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { createNewLinkSuccess } from "../../redux/slice/authSlice";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

export default function NewLink() {
  const dispatch = useDispatch();
  const [loading, isLoading] = useState(false);
  let currentUrl = useSelector((state) => state.auth.currentView.currentUrl);
  let token = useSelector((state) => state.auth.tokens.access);
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return currentUrl === "" ? (
    <div className="container">
      <h2>Create a new link</h2>
      <Formik
        initialValues={{ link: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.link) {
            errors.email = "Required";
          }
          return errors;
        }}
        onSubmit={(values) => {
          isLoading(true);
          axios
            .post(
              "http://localhost:8000/s/create/",
              { url: values.link },
              config
            )
            .then((res) => {
              if (res.status === 201) {
                dispatch(createNewLinkSuccess(res.data));
              }
            })
            .then(() => isLoading(false));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className="input" onSubmit={handleSubmit}>
            <TextField
              name="link"
              id="outlined-basic"
              label="Long link"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.link}
            />
            {errors.link && touched.link && errors.link}
            {loading ? (
              <Button variant="outlined">Loading...</Button>
            ) : (
              <Button type="submit" variant="contained">
                Create
              </Button>
            )}
          </form>
        )}
      </Formik>
    </div>
  ) : (
    <div className="container">
      <h2>Short Link</h2>
      <Formik
        initialValues={{ link: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.link) {
            errors.email = "Required";
          }
          return errors;
        }}
        onSubmit={(values) => {
          isLoading(true);
          axios
            .post(
              "http://localhost:8000/s/create/",
              { url: values.link },
              config
            )
            .then((res) => {
              if (res.status === 201) {
                dispatch(createNewLinkSuccess(res.data));
              }
            })
            .then(() => isLoading(false));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className="input" onSubmit={handleSubmit}>
            <TextField
              name="link"
              id="outlined-basic"
              disabled
              label="Short link"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={currentUrl}
            />
            {errors.link && touched.link && errors.link}
            {loading ? (
              <Button variant="outlined">Loading...</Button>
            ) : (
              <Button
                onClick={() => navigator.clipboard.writeText(currentUrl)}
                variant="contained"
              >
                <ContentPasteIcon />
              </Button>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
}
