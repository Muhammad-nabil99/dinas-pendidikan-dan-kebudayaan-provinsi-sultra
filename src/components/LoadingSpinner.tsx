import { useState, CSSProperties } from "react";
import { GridLoader } from "react-spinners";
const GRADIENT_COLOR = "linear-gradient(45deg, #3b82f6, #60a5fa)";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  filter: "drop-shadow(0 0 5px rgba(59, 130, 246, 0.7))",
};

function LoadingSpinner({ loading }) {
  const primaryColor = "#3b82f6";

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white/50 backdrop-invert backdrop-opacity-10">
      <GridLoader
        color={primaryColor}
        loading={loading}
        cssOverride={override}
        size={15}
        speedMultiplier={1.5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadingSpinner;
