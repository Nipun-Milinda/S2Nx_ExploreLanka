import React from "react";

interface glassCardProps {
  heading: string;
  para: string;
}

const GlassCard: React.FC<glassCardProps> = ({ heading, para }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center mt-3 mb-3">
      <div className="relative z-10 bg-white/15 backdrop-blur-md p-4 rounded-lg shadow-lg max-w-lg text-center text-white">
        <h6 className="text-lg font-bold mb-2">{heading}</h6>
        <p className="text-base">{para}</p>
      </div>
    </div>
  );
};

export default GlassCard;
