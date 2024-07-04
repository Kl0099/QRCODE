import { useState } from "react";
import { QrReader } from "react-qr-reader";

function App() {
  const [data, setData] = useState("No result");
  return (
    <div className=" lg:w-1/2 lg:mx-auto h-[600px] w-[90%] mx-auto">
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            //@ts-ignore
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        //@ts-ignore
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </div>
  );
}

export default App;
