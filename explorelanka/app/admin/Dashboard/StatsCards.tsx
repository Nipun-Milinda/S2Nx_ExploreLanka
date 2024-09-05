"use client";
import React from "react";
import { Card, Typography } from "@material-tailwind/react";

type DashboardCardProps = {
  title: string;
  value: string;
};

const DashboardCard = ({ title, value }: DashboardCardProps) => (
  <Card className="bg-black text-white p-6 shadow-lg rounded-lg  sm:w-1/2 lg:w-1/5 h-auto">
    <div className="flex flex-col items-center justify-center h-full">
      <Typography variant="h5" className="text-white text-center mb-4">
        {title}
      </Typography>
      <Typography
        variant="h1"
        className="font-bold text-white text-center mt- text-4xl sm:text-5xl lg:text-6xl"
      >
        {value}
      </Typography>
    </div>
  </Card>
);

const StatsCards = () => {
  const stats = [
    {
      title: "Total Applications",
      value: "1200",
      changeType: "increase",
    },
    {
      title: "Approved Applications",
      value: "850",
      changeType: "increase",
    },
    {
      title: "Pending Applications",
      value: "250",
      changeType: "decrease",
    },
    {
      title: "Rejected Applications",
      value: "100",
      changeType: "increase",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {stats.map((stat, index) => (
        <DashboardCard key={index} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
};

export default StatsCards;
