"use client";
import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

type DashboardCardProps = {
  title: string;
  value: string;
  change: string;
  changeType: string;
};

const DashboardCard = ({
  title,
  value,
  change,
  changeType,
}: DashboardCardProps) => (
  <Card className="flex justify-between items-center bg-black text-white p-4 shadow-lg rounded-lg">
    <div>
      <Typography variant="h5" className="font-bold text-white">
        {value}
      </Typography>
      <Typography variant="small" className="text-gray-400">
        {title}
      </Typography>
    </div>
    <div className="flex items-center">
      <Typography
        variant="small"
        className={`font-bold ${
          changeType === "increase" ? "text-green-500" : "text-red-500"
        }`}
      >
        {change}
      </Typography>
      <ArrowUpIcon className="h-6 w-6 ml-2 text-green-500" />
    </div>
  </Card>
);

const StatsCards = () => {
  const stats = [
    {
      title: "Total Applications",
      value: "$1200",
      change: "+5%",
      changeType: "increase",
    },
    {
      title: "Approved Applications",
      value: "$850",
      change: "+3%",
      changeType: "increase",
    },
    {
      title: "Pending Applications",
      value: "$250",
      change: "-2%",
      changeType: "decrease",
    },
    {
      title: "Rejected Applications",
      value: "$100",
      change: "+1%",
      changeType: "increase",
    },
  ];

  return (
    <div className="flex flex-wrap justify-between ">
      {stats.map((stat, index) => (
        <DashboardCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          changeType={stat.changeType}
        />
      ))}
    </div>
  );
};

export default StatsCards;
