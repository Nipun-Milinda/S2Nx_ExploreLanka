import React from "react";
import FullScreenImage from "@/components/fullScreenImage";
import { Button } from "@mui/material";
import "../onboardingStyles.css";

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
          <Button
            variant="contained"
            size="large"
            className="font-poppins font-bold mt-5"
            style={{ backgroundColor: "#0C6478" }}
          >
            Begin the Adventure →
          </Button>
        </div>
      </div>
    </FullScreenImage>
  );
};

export default page1;
