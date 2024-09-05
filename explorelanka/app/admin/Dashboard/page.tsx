"use client";
import React from "react";
import VisaApplicationsOverTime from "./HistoricalDataCharts";
import StatsCards from "./StatsCards";
import ApplicationsByCountry from "./ApplicationsByCountry";

const Dashboard = () => (
  <div className="p-4">
    <div>
      <StatsCards />
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "50px",
      }}
    >
      <VisaApplicationsOverTime />
      <ApplicationsByCountry />
    </div>
  </div>
);

export default Dashboard;
