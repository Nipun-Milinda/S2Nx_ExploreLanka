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
        data: [200, 150, 300, 250, 180, 220],
        backgroundColor: [
          "#1a1a1a",
          "#2e2e2e",
          "#404040",
          "#5c5c5c",
          "#737373",
          "#8c8c8c",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // To customize the chart size
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
          height: "300px",
          padding: 10,  
        }}
      >
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ApplicationsByCountry;
