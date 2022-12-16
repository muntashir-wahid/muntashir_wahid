import React from "react";
import { RotatingLines } from "react-loader-spinner";

const LoadingSpinner = ({ className, message }) => {
  return (
    <div
      className={`flex flex-col gap-2 justify-center items-center ${className}`}
    >
      <RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      <p className="text-white">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
