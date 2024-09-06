"use client";

import React from "react";
import FullScreenImage from "@/components/fullScreenImage";
import { Button } from "@mui/material";
import "../onboardingStyles.css";
import Link from "next/link";
import MenuSimple from "./MenuSimple";

const page1 = () => {
  return (
    <FullScreenImage imageUrl="/Onboarding1.png" zoom={1.7}>
      <div className="container">
        <div className="content">
          <h1 className="text-4xl font-Montserrat font-bold">
            Welcome to ExploreLanka
          </h1>
          <p className="mt-4 text-lg font-Poppins">
            Explore a land rich in history, culture, and natural beauty. Your
            adventure through Sri Lanka begins here.
          </p>
          <MenuSimple />
          <Link href="./2">
            <Button
              variant="contained"
              size="large"
              className="font-poppins font-bold mt-5"
              style={{ backgroundColor: "#0C6478", width: "90%" }}
            >
              Begin the Adventure →
            </Button>
          </Link>
        </div>
      </div>
    </FullScreenImage>
  );
};

export default page1;
