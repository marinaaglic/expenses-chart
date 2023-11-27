import { Bar } from "react-chartjs-2";
import Header from "./Header.jsx";

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
        <div className="w-1/4 h-fit bg-white p-4 rounded-xl">
          <h2 className="font-bold text-brown ml-2">Spending - Last 7 days</h2>
          <Bar
            data={data}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
                title: "",
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
        </div>
      </div>
    </>
  );
}

export default BarChart;
