"use client";
import React from "react";
import HistoricalDataCharts from "./HistoricalDataCharts";
import StatsCards from "./StatsCards";

const Dashboard = () => (
  <div className="p-8">
    <StatsCards />
    <HistoricalDataCharts />
    
  </div>
);

export default Dashboard;
