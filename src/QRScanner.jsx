// src/QrScanner.jsx
import React, { useState } from "react";
import QrScanner from "react-qr-scanner";

const QrScannerComponent = () => {
  const [data, setData] = useState("No result");
  const handleScan = (result) => {
    if (result) {
      setData(result.text);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <QrScanner
        delay={3000}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </div>
  );
};

export default QrScannerComponent;
