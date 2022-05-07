import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Chart from "react-apexcharts";

const socket = io("http://localhost:3030", {
  transports: ["websocket", "polling"],
});

// export const ClassChartLine = () => {

//   const [vibrationData, setVibrationData] = useState([]);

//   const [state, setState] = useState({
//     options: {
//       chart: {
//         id: "rt-line-chart",
//       },
//       xaxis: {
//         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//       },
//     },
//     series: [
//       {
//         name: "series-1",
//         data: vibrationData,
//       },
//     ],
//   })

//   useEffect(() => {
//     socket.on("sensorData", (sensorData) => {
//       console.log(sensorData);
//       // setVibrationData((currentData) => [...currentData, sensorData.value]);
//       setVibrationData([...sensorData.value]);
//       // console.log(vibrationData);

//       exec('mychart', 'updateSeries', [{
//         data: [32, 44, 31, 41, 22]
//       }], true);
//     });
//   }, []);

//   return (
//     <Chart
//         options={state.options}
//         series={state.series}
//         type="line"
//         width="500"
//       />
//   );
// }

class ClassChartLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        data: [32, 44, 31, 41, 22]
      }],
      options: {
        chart: {
          id: 'realtime',
          height: 350,
          type: 'line',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Dynamic Updating Chart',
          align: 'left'
        },
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
        yaxis: {
          max: 100
        },
        legend: {
          show: false
        },
      },
    
    
    };
  }


  componentDidMount() {
    window.setInterval(() => {
      // getNewSeries(lastDate, {
      //   min: 10,
      //   max: 90
      // })
      
      ClassChartLine.exec('realtime', 'updateSeries', [{
        data: [32, 44, 31, 41, 22]
      }])
    }, 1000)
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width="500"
      />
    );
  }
}