import React,{useState} from 'react';
import './Popularstategies.css';
import ReactApexChart from "react-apexcharts";


const Popularstategies = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    title: {
      text: "Product Trends by Month",
      align: "left"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    }
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
  ]);

  return (
    <>
    
  <div className="mainConatiner">
    <div className="left">
      <div className="leftDivHeader">
        <span>BULLISH</span>
        <span>BEARISH</span>
        <span>NEUTRAL</span>
      </div>
      <div id="myChart">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={180}
        width={170}
      />
    </div>

    <div id="myChart">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={180}
        width={170}
      />
    </div>

    <div id="myChart">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={180}
        width={170}
      />
    </div>


    <div id="myChart">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={180}
        width={170}
      />
    </div>


    <div id="myChart">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={180}
        width={170}
      />
    </div>
    

    </div>
    <div className="centerDiv">
    <div id="chart">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={600}
        width={570}
      />
    </div>
    </div>
    <div className="rightDiv">
      <p>Positions</p>
      <input type='checkbox' />  &nbsp;&nbsp;25 BANKNIFTY 04MAY23 43300CE178.45
      <br/>
      <input type='checkbox' /> &nbsp;&nbsp;-25 BANKNIFTY 04MAY23 43700CE 54.10 <br/>
      <p>Date</p>
      <input type='range'id='myRange' />

      <p>IV Change(%)</p>
      <input type='range'id='myRange' />

    <div className="divBasics">
    <p>The Basics</p>
    <div className="basics"><p>Max Profits</p><p>6891.25</p></div>
    <div className="basics"><p>Max Loss</p> <p>-317875</p></div>
    <div className="basics"><p>Break Even</p> <p>43425</p></div>
    </div>

    </div>
    </div>  
  
    
    
    
    </>
  )
}

export default Popularstategies
