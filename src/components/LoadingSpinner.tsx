import { useState, CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  
};
function LoadingSpinner({ loading }) {
  const color = "#3b82f6";
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={75}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
export default LoadingSpinner;
