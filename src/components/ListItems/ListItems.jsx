import * as React from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Link";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  Input,
  DialogActions,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  updateCurrentView,
  resetCurrentView,
} from "../../redux/slice/authSlice";
import { CSVDownload } from "react-csv";
import axios from "axios";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const SecondaryListItems = () => {
  const data = useSelector((state) => state.auth.shorturls);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Short Links
      </ListSubheader>
      {data.map((d) => (
        <ListItemButton onClick={() => dispatch(updateCurrentView(d))}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={d.uuid} />
        </ListItemButton>
      ))}
      <ListItemButton onClick={() => dispatch(resetCurrentView())}>
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
        <ListItemText primary="New Link" />
      </ListItemButton>
    </React.Fragment>
  );
};
export const ActionListItems = () => {
  const csvData = useSelector((state) => state.auth.shorturls);
  const [download, setDownload] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  let token = useSelector((state) => state.auth.tokens.access);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      csv_file: "",
    },
    onSubmit: (values) => {
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      let data = new FormData();
      data.append("csv_file", values.csv_file);

      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/s/bulk`, data, config)
        .then((res) => console.log(res))
        .then(handleClose);
    },
  });

  return (
    <React.Fragment>
      <ListItemButton onClick={() => setDownload(true)}>
        <ListItemIcon>
          <CloudDownloadIcon />
        </ListItemIcon>
        <ListItemText primary="Download to CSV" />
        {download && (
          <CSVDownload
            filename={"export-url.csv"}
            data={csvData}
            target="_blank"
          />
        )}
      </ListItemButton>
      <ListItemButton onClick={handleClickOpen}>
        <ListItemIcon>
          <UploadFileIcon />
        </ListItemIcon>
        <ListItemText primary="Upload CSV" />
      </ListItemButton>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>Upload CSV file</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Upload a CSV file that contains multiple long links you want to
              shorten. Make sure the first row is this text "Link"
            </DialogContentText>
            <Input
              // accept=".csv"
              onChange={(event) =>
                formik.setFieldValue("csv_file", event.target.files[0])
              }
              type="file"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Finish</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
};
