"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ApplicationsByCountry = () => {
  const data = {
    labels: ["USA", "Canada", "India", "China", "Australia", "UK"],
    datasets: [
      {
        label: "Applications by Country",
        data: [500, 150, 200, 100, 180, 220],
        backgroundColor: [
          "#FF3B30",
          "#007AFF",
          "#FFCC00",
          "#34C759",
          "#AF52DE",
          "#24C4",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          color: "#333",
        },
      },
    },
  };

  return (
    <div
      style={{
        padding: 4,
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: 8,
        width: "48%",
        paddingBlock: "5px",
      }}
    >
      <h2 className="text-xl font-bold mb-5 text-black">
        Visa Applications by Country
      </h2>
      <div
        style={{
          width: "100%",
          height: "500px",
          padding: 10,
        }}
      >
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ApplicationsByCountry;
