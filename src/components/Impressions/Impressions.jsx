import * as React from "react";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function Impressions() {
  const impressions = useSelector(
    (state) => state.auth.currentView.impressions
  );

  return (
    <React.Fragment>
      <h2>Total Impressions</h2>
      <Typography component="p" variant="h4">
        {impressions}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        since 20 April 2022
      </Typography>
    </React.Fragment>
  );
}
