import BarChart from "./components/BarChart.jsx";
import data from "../data.json";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { useState } from "react";

Chart.register(CategoryScale);

function App() {
  const [chartData, setChartData] = useState({
    labels: data.map((data) => data.day),
    datasets: [
      {
        data: data.map((data) => data.amount),
        backgroundColor: ["#EF4444"],
        borderWidth: 2,
        hoverBackgroundColor: ["#ADD8E6"],
      },
    ],
  });

  return (
    <>
      <BarChart data={chartData} />
    </>
  );
}

export default App;
