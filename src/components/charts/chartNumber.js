import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3030", {
  transports: ["websocket", "polling"],
});

export const ChartNumber = () => {

  const [vibrationNumber, setVibrationNumber] = useState([0])

  useEffect(() => {
    socket.on("sensorData", (sensorData) => {
      setVibrationNumber(sensorData.value);
    });
  }, [])

  return (
    <div className={
      (vibrationNumber >= 1000) ? "redText" 
      : (vibrationNumber < 1000 && vibrationNumber >=500) ? "orangeText" 
      : ((vibrationNumber >= 0 && vibrationNumber < 500)) ? "greenText" : ""
    }>{vibrationNumber}</div>
  )
}
