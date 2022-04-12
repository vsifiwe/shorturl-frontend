import * as React from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Link";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentView } from "../../redux/slice/authSlice";
import { CSVLink } from "react-csv";
import { CSVDownload } from "react-csv";

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
    </React.Fragment>
  );
};
export const ActionListItems = () => {
  const csvData = useSelector((state) => state.auth.shorturls);
  const [download, setDownload] = React.useState(false);
  return (
    <React.Fragment>
      <ListItemButton onClick={() => setDownload(true)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Export to CSV" />
        {download && (
          <CSVDownload
            filename={"export-url.csv"}
            data={csvData}
            target="_blank"
          />
        )}
      </ListItemButton>
    </React.Fragment>
  );
};
