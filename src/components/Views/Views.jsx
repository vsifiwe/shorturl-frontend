import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";

function preventDefault(event) {
  event.preventDefault();
}

export default function Views() {
  const data = useSelector((state) => state.auth.currentView.deviceInfo);

  return (
    <React.Fragment>
      <h2>Recent Views</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Ip Address</TableCell>
            <TableCell>Operating System</TableCell>
            <TableCell align="right">Browser</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => {
            return (
              <TableRow key={d.id}>
                <TableCell>{d.country}</TableCell>
                <TableCell>{d.city}</TableCell>
                <TableCell>{d.ip}</TableCell>
                <TableCell>{d.os}</TableCell>
                <TableCell align="right">{d.browser}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}
