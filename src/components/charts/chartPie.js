import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

export const ChartPie = () => {

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const [green, setGreen] = useState([0])
  const [orange, setOrange] = useState([0])
  const [red, setRed] = useState([0])

  useEffect(() => {
    // console.log(currentMonth);
    axios.get('http://127.0.0.1:8000/api/reports/search/'+currentMonth)
  .then(function (response) {
    // handle success
    console.log(response.data);
    response.data.forEach((data) => {
      setGreen(data.green)
      setOrange(data.orange)
      setRed(data.red)
    })
  })
  }, [])

  return (
    <Pie
  datasetIdKey='id'
  data={{
    labels: ['No Threat', 'Warning', 'Danger'],
    datasets: [
      {
        id: 1,
        label: 'No Threat',
        data: [green, orange, red],
        backgroundColor: [
          'rgb(0, 128, 0)',
          'rgb(255, 165, 0)',
          'rgb(255, 0, 0)'
        ],
      },
    ],
  }}
  options={{
    plugins: {
      title: {
          display: true,
          text: 'This Month Data (May)'
      }
  },
    maintainAspectRatio: false,
  }}
  width={90}
  height={400}
/>
  );
}