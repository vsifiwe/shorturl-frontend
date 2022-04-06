import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function preventDefault(event) {
  event.preventDefault();
}

export default function Impressions() {
  return (
    <React.Fragment>
      <h2>Total Impressions</h2>
      <Typography component="p" variant="h4">
        27
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        since 20 April 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
