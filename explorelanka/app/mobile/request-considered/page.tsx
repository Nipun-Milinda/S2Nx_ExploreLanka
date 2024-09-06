"use client";

import { Button } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-3 my-6">
      <div className="text-center">
        <p className="text-3xl font-semibold font-poppins mb-4">
          Your Request was considered
        </p>
        <img
          src="/request-considered.png"
          alt="Request Sent"
          className="h-auto max-w-xs mx-auto my-10"
        />
        <p>
          Please check your <span className="font-bold">Mail Inbox</span>
          <br /> for further details.
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
