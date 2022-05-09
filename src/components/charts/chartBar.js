import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

export const ChartBar = () => {
  const [month, setMonth] = useState([]);
  const [green, setGreen] = useState([]);
  const [orange, setOrange] = useState([]);
  const [red, setRed] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/reports").then(function (response) {
      response.data.forEach((data) => {
        setMonth((current) => [...current, data.month]);
        setGreen((current) => [...current, data.green]);
        setOrange((current) => [...current, data.orange]);
        setRed((current) => [...current, data.red]);
      });
    });
  }, []);

  return (
    <>
      <Bar
        datasetIdKey="id"
        data={{
          labels: month,
          datasets: [
            {
              id: 1,
              label: "No Threat",
              data: green,
              backgroundColor: "rgb(0, 128, 0)",
            },
            {
              id: 2,
              label: "Warning",
              data: orange,
              backgroundColor: "rgb(255, 165, 0)",
            },
            {
              id: 3,
              label: "Danger",
              data: red,
              backgroundColor: "rgb(255, 0, 0)",
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "This Year Data (2022)",
            },
          },
          maintainAspectRatio: false,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        }}
        // width={150}
        height={400}
      />
    </>
  );
};
