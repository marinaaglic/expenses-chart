import { Bar } from "react-chartjs-2";
import Header from "./Header.jsx";
import Divider from "./reusable/Divider.jsx";

function BarChart({ data }) {
  const tooltip = {
    yAlign: "bottom",
    displayColors: false,
    callbacks: {
      title: function () {
        return "";
      },
      label: function (context) {
        const value = context.parsed.y;
        return `$${value.toFixed(2)}`;
      },
    },
  };
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <Header />
        <div className="w-1/7 h-fit bg-white p-4 rounded-xl">
          <h2 className="font-bold text-brown ml-2 pb-5">
            Spending - Last 7 days
          </h2>
          <Bar
            data={data}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
                tooltip,
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },

                y: {
                  display: false,
                  grid: {
                    drawOnChartArea: false,
                  },
                },
              },
              elements: {
                bar: {
                  borderRadius: 5,
                  borderColor: "transparent",
                },
              },
            }}
          />
          <Divider />
          <div className="flex flex-row gap-x-28 p-1">
            <div>
              <p className="text-xs pb-2 whitespace-nowrap text-gray-500">
                Total this month
              </p>
              <h2 className="font-bold text-xl">$478.33</h2>
            </div>
            <div className="mt-4">
              <p className="text-xs font-bold">+2.4%</p>
              <p className="text-xs whitespace-nowrap text-gray-500">
                from last month
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BarChart;
