"use client";

import React from "react";
import FullScreenImage from "@/components/fullScreenImage";
import { Button } from "@mui/material";
import "../onboardingStyles.css";
import Link from "next/link";

const page3 = () => {
  return (
    <FullScreenImage imageUrl="/Onboarding3.png">
      <div className="container">
        <div className="content">
          <h1 className="text-4xl font-Montserrat font-bold">
            Let the Journey Guide You
          </h1>
          <p className="mt-4 text-lg font-Poppins">
            Your perfect adventure is already planned—just follow the quest and
            enjoy the ride.
          </p>
          <Link href="./4">
            <Button
              variant="contained"
              size="large"
              className="font-poppins font-bold mt-5"
              style={{ backgroundColor: "#0C6478", width: "90%" }}
            >
              Next →
            </Button>
          </Link>
        </div>
      </div>
    </FullScreenImage>
  );
};

export default page3;
