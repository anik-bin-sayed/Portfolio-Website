import React from "react";
import "./style.css";
const Loader = () => {
  return (
    <div className="w-full h-screen flex min-h-[40vh] flex-col items-center justify-center gap-4">
      {/* Spinner */}
      <div className="spinner h-12 w-12 animate-spin rounded-full border-4"></div>

      {/* Text */}
      <p className="text-sm font-medium tracking-wide text-gray-600">
        Loading content...
      </p>
    </div>
  );
};

export default Loader;
