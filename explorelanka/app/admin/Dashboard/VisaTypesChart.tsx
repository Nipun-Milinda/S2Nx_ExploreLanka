import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "16px",
          fontFamily: "inherit",
          fontWeight: 600,
        },
      },
      categories: ["Tourist", "Residential", "Other"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "16px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
  },
};
export default function Example() {
  return (
    <Card style={{ width: "48%" }}>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <h2 className="text-xl font-bold mb-4 text-black">
          Visa Types of Applicants
        </h2>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <div style={{ width: "100%", margin: "0 auto" }}>
          <Chart {...chartConfig} />
        </div>
      </CardBody>
    </Card>
  );
}
