import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import useWindowDimensions from "../useWindowDimensions";

const socket = io("http://localhost:3030", {
  transports: ["websocket", "polling"],
});

export const ChartLine = () => {
  const [vibrationData, setVibrationData] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    socket.on("sensorData", (sensorData) => {
      setVibrationData((currentData) => [...currentData, sensorData]);
    });
  }, []);

  return (
    <LineChart width={width - 400} height={400} data={vibrationData}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis type="number" domain={[0, 1200]}/>
    </LineChart>
  );
};
