"use client";

import { Button } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-3 my-6">
      <div className="text-center">
        <p className="text-3xl font-semibold font-poppins mb-4">
          Your Request has been Sent for the Approval
        </p>
        <img
          src="/request-sent.png"
          alt="Request Sent"
          className="h-auto max-w-xs mx-auto my-10"
        />
        <p>
          It may take few days.
          <br /> Please <span className="font-bold">Wait</span>.
        </p>
        <Button
          style={{ backgroundColor: "#213A57", color: "white" }}
          fullWidth
          className="font-poppins font-bold my-5"
        >
          Ok
        </Button>
      </div>
    </div>
  );
};

export default Page;
