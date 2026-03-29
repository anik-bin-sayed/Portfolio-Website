import React from "react";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const SocialIcons = () => {
  const iconStyle =
    "w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-red-500 hover:shadow-[0_0_10px_rgba(239,68,68,0.6)] transition-all duration-300 hover:scale-110 active:scale-95";

  return (
    <>
      <a
        href="https://github.com/anik-bin-sayed"
        target="_blank"
        className={iconStyle}
      >
        <FaGithub />
      </a>

      <a href="#" target="_blank" className={iconStyle}>
        <FaLinkedinIn />
      </a>

      <a href="#" target="_blank" className={iconStyle}>
        <FaFacebookF />
      </a>
    </>
  );
};

export default SocialIcons;
