import react, { useState } from "react";
import configFile from "../../config.json";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Formik } from "formik";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { createNewLinkSuccess, loadData } from "../../redux/slice/authSlice";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

export default function NewLink() {
  const dispatch = useDispatch();
  const [loading, isLoading] = useState(false);
  let currentUrl = useSelector((state) => state.auth.currentView.currentUrl);
  let token = useSelector((state) => state.auth.tokens.access);
  let currentInfo = useSelector((state) => state.auth.currentInfo);
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            .post(`${configFile.api}/s/create/`, { url: values.link }, config)
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
              fullWidth
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
        initialValues={{
          uuid: currentInfo.uuid,
          id: currentInfo.id,
          long_url: currentInfo.long_url,
          impressions: currentInfo.impressions,
          owner: currentInfo.owner,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.uuid) {
            errors.uuid = "Required";
          }
          if (!values.id) {
            errors.id = "Required";
          }
          if (!values.long_url) {
            errors.long_url = "Required";
          }
          if (!values.impressions) {
            errors.impressions = "Required";
          }
          if (!values.owner) {
            errors.owner = "Required";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
          // isLoading(true);
          // axios
          //   .post(
          //     "http://localhost:8000/s/create/",
          //     { url: values.link },
          //     config
          //   )
          //   .then((res) => {
          //     if (res.status === 201) {
          //       dispatch(createNewLinkSuccess(res.data));
          //     }
          //   })
          //   .then(() => isLoading(false));
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
              sx={{ width: 300 }}
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
              <>
                <Button
                  onClick={() => navigator.clipboard.writeText(currentUrl)}
                  variant="contained"
                >
                  <ContentPasteIcon />
                </Button>
                <Button onClick={handleClickOpen} variant="outlined">
                  Edit
                </Button>
              </>
            )}
          </form>
        )}
      </Formik>
      <Formik
        initialValues={{
          uuid: currentInfo.uuid,
          id: currentInfo.id,
          long_url: currentInfo.long_url,
          impressions: currentInfo.impressions,
          owner: currentInfo.owner,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.uuid) {
            errors.uuid = "Required";
          }
          if (!values.id) {
            errors.id = "Required";
          }
          if (!values.long_url) {
            errors.long_url = "Required";
          }
          if (!values.impressions) {
            errors.impressions = "Required";
          }
          if (!values.owner) {
            errors.owner = "Required";
          }
          return errors;
        }}
        onSubmit={(values) => {
          const data = {
            uuid: values.uuid,
            long_url: values.long_url,
            impressions: values.impressions,
            owner: values.owner,
          };
          axios
            .put(`${configFile.api}/s/${values.id}/`, data, config)
            .then(() =>
              axios
                .get(`${configFile.api}/s/urls`, config)
                .then((res) => dispatch(loadData(res.data)))
                .finally(handleClose)
            )
            .finally(handleClose);
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
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <form onSubmit={handleSubmit}>
              <DialogContent>
                <DialogContentText>
                  Change the back part of the short url
                </DialogContentText>

                <TextField
                  autoFocus
                  margin="dense"
                  name="uuid"
                  label="custom part"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.uuid}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Change</Button>
              </DialogActions>
            </form>
          </Dialog>
        )}
      </Formik>
    </div>
  );
}
