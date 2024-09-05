import React from "react";
import FullScreenImage from "@/components/fullScreenImage";
import { Button } from "@mui/material";
import "../onboardingStyles.css";
import Link from "next/link";

const page4 = () => {
  return (
    <FullScreenImage imageUrl="/Onboarding4.png">
      <div className="container">
        <div className="content">
          <h1 className="text-4xl font-Montserrat font-bold">
            Every Journey is One of a Kind
          </h1>
          <p className="mt-4 text-lg font-Poppins">
            No two paths are the same. Your Sri Lankan adventure will be as
            unique as you are.
          </p>
          <Link href="./how-it-works">
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

export default page4;
