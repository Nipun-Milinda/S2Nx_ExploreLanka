"use client";

import React from "react";
import FullScreenImage from "./fullScreenImage";
import { Button } from "@mui/material";
import GlassCard from "./glassCard";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <FullScreenImage imageUrl="/Onboarding4.png">
      <div className="container">
        <div className="content">
          <h1 className="text-4xl font-Montserrat font-bold">HOW IT WORKS?</h1>
          <GlassCard
            heading="1. Shape Your Journey"
            para="Answer a few questions, and we’ll transform your preferences into a tailor-made adventure."
          />
          <GlassCard
            heading="2. Leave the Planning to Us"
            para="From booking to planning, we’ve got everything covered—just focus on the thrill ahead."
          />
          <GlassCard
            heading="3. Get Your e-Visa in a Snap"
            para="Apply for and receive your e-visa directly through our app, hassle-free."
          />
          <GlassCard
            heading="4. Arrive and Embark"
            para="Arrive in Sri Lanka, and let your epic quest begin—your path is ready, just follow the adventure!"
          />
          <Link href="/mobile">
            <Button
              variant="contained"
              size="large"
              className="font-poppins font-bold mt-5"
              style={{ backgroundColor: "#0C6478", width: "90%" }}
            >
              Take the questioner
            </Button>
          </Link>
          <Link href="/mobile">
            <Button
              variant="outlined"
              size="large"
              className="font-poppins font-bold mt-5"
              style={{ color: "#0C6478", width: "90%" }}
            >
              I will take the questioner later
            </Button>
          </Link>
        </div>
      </div>
    </FullScreenImage>
  );
};

export default HowItWorks;
