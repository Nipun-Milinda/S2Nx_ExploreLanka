"use client";

import React from "react";
import FullScreenImage from "@/components/fullScreenImage";
import { Button } from "@mui/material";
import "../onboardingStyles.css";
import Link from "next/link";

const page2 = () => {
  return (
    <FullScreenImage imageUrl="/Onboarding2.png">
      <div className="container">
        <div className="content">
          <h1 className="text-4xl font-Montserrat font-bold">
            Embark on a Quest
          </h1>
          <p className="mt-4 text-lg font-Poppins">
            Dive into a thrilling journey filled with hidden treasures,
            challenges, and unforgettable experiences.
          </p>
          <Link href="./3">
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

export default page2;
