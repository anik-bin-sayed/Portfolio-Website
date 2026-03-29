import React from "react";
import "./LinkTag.css";

const LinkTag = ({ children, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="btn inline-block relative overflow-hidden px-6 py-2 font-semibold rounded-lg"
    >
      {children}
    </a>
  );
};

export default LinkTag;
