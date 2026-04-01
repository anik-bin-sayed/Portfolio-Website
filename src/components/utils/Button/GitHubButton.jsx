import React from "react";
import "./GitHubButton.css";

const GitHubButton = () => {
  return (
    <div className="">
      <div className="text-center">
        <a
          href="https://github.com/anik-bin-sayed?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-crimson/5"
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Text + icon */}
          <span className="relative z-10 flex items-center gap-2">
            View All on GitHub
            <svg
              className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </span>

          {/* Draw Outline Effect */}
          <span className="draw-outline" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default GitHubButton;
