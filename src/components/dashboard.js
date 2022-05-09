import "../css/dashboard.css";
import { ChartBar } from "./charts/chartBar";
import { ChartLine } from "./charts/chartLine";
import { ChartNumber } from "./charts/chartNumber";
import { ChartPie } from "./charts/chartPie";

export const Dashboard = () => {

  return (
    <div className="dashboard">
      <div className="title">Dashboard</div>
      <div className="chart1">
        <div className="line-chart-title">Seismic Graph</div>
        <ChartLine/>
      </div>
      <div className='chart2'>
      <div className="number-chart-title">Seismic Reading</div>
        <ChartNumber/>
      </div>
      <div className='chart3'>
        <ChartBar/>
      </div>
      <div className='chart4'>
        <ChartPie/>
      </div>
    </div>
  );
};
