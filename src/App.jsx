import React from "react";
import "./App.css";
import QrReader from "./QrCode";
// import QrScannerComponent from "./QRScanner";/

function App() {
  return (
    <div className="App">
      <h1>QR Code Scanner</h1>
      {/* <QrScannerComponent /> */}
      <QrReader />
    </div>
  );
}

export default App;
