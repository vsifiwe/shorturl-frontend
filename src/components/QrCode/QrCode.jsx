import { Button, ButtonGroup, TextField } from "@mui/material";
import * as React from "react";
import QRCode from "react-qr-code";
import { useDispatch, useSelector } from "react-redux";
import { changeQrColor } from "../../redux/slice/authSlice";
import { Formik } from "formik";

export default function QrCode() {
  const url = useSelector((state) => state.auth.currentView.currentUrl);
  const color = useSelector((state) => state.auth.qrColor);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h2>QR Code</h2>
      {url === "" ? (
        <h3>Please select a url you want to share</h3>
      ) : (
        <>
          <QRCode value={url} size="128" fgColor={color} />
          <br />
          <Formik
            initialValues={{ color: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.color) {
                errors.color = "Required";
              }
              return errors;
            }}
            onSubmit={(values) => {
              dispatch(changeQrColor(values.color));
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
                  name="color"
                  id="outlined-basic"
                  label="Brand color"
                  // fullWidth
                  variant="outlined"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.color}
                />
                {errors.link && touched.link && errors.link}
                <Button type="submit" variant="outlined" size="small">
                  +
                </Button>
              </form>
            )}
          </Formik>
        </>
      )}
    </React.Fragment>
  );
}
