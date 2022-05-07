import "../css/dashboard.css";
import { ChartLine } from "./charts/chartLine";
import  ClassChartLine  from "./charts/classChartLine";


export const Dashboard = () => {
  // const labels = ["january"];
  // const data = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: "My First Dataset",
  //       data: vibrationData,
  //       // backgroundColor: [
  //       //   'rgba(255, 99, 132, 0.2)',
  //       //   'rgba(255, 159, 64, 0.2)',
  //       //   'rgba(255, 205, 86, 0.2)',
  //       //   'rgba(75, 192, 192, 0.2)',
  //       //   'rgba(54, 162, 235, 0.2)',
  //       //   'rgba(153, 102, 255, 0.2)',
  //       //   'rgba(201, 203, 207, 0.2)'
  //       // ],
  //       // borderColor: [
  //       //   'rgb(255, 99, 132)',
  //       //   'rgb(255, 159, 64)',
  //       //   'rgb(255, 205, 86)',
  //       //   'rgb(75, 192, 192)',
  //       //   'rgb(54, 162, 235)',
  //       //   'rgb(153, 102, 255)',
  //       //   'rgb(201, 203, 207)'
  //       // ],
  //       tension: 0.2,
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return (
    <div className="dashboard">
      <div className="title">Dashboard</div>
      <div className="chart1">
        <ChartLine/>
        {/* <ClassChartLine/> */}
      </div>
      {/* <div className='chart2'>
        <Chart/>
      </div>
      <div className='chart3'>
        <Chart/>
      </div> */}
    </div>
  );
};
