import * as React from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

export default function QrCode() {
  const url = useSelector((state) => state.auth.currentView.currentUrl);
  const color = useSelector((state) => state.auth.qrColor);

  return (
    <React.Fragment>
      <h2>QR Code</h2>
      {url === "" ? (
        <h3>Please select a url you want to share</h3>
      ) : (
        <QRCode value={url} size="128" fgColor={color} />
      )}
    </React.Fragment>
  );
}
