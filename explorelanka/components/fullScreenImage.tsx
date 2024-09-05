import React from "react";

interface FullScreenImageProps {
  imageUrl: string;
  zoom?: number;
  children?: React.ReactNode;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({
  imageUrl,
  zoom = 1.7,
  children,
}) => {
  return (
    <div
      className="relative w-screen h-screen justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${imageUrl})`,
        backgroundSize: `${zoom * 100}%`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 text-white text-center px-4">
        {children}
      </div>
    </div>
  );
};

export default FullScreenImage;
