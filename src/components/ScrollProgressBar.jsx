import React from "react";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollWidth(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-crimson to-red-500 z-50 transition-all duration-150"
            style={{ width: `${scrollWidth}%` }}
        ></div>
    );
}
