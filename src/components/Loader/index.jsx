import React from "react";
import "./style.css";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative flex flex-col items-center justify-center gap-6 p-8 rounded-2xl">
        {/* Main Spinner Ring with Gradient */}
        <div className="relative">
          <div className="spinner-ring w-16 h-16 rounded-full border-4 border-t-transparent border-b-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Bouncing Dots */}
        <div className="flex gap-2">
          <div className="dot dot1 w-2 h-2 rounded-full bg-purple-500"></div>
          <div className="dot dot2 w-2 h-2 rounded-full bg-pink-500"></div>
          <div className="dot dot3 w-2 h-2 rounded-full bg-blue-500"></div>
        </div>

        {/* Loading Text with Gradient */}
        <p className="text-sm font-medium tracking-wider bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-400 bg-clip-text text-transparent animate-pulse">
          Loading content...
        </p>
      </div>
    </div>
  );
};

export default Loader;
