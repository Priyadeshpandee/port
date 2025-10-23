import React, { useEffect, useRef } from "react";
import "./StarsBackground.css";

const StarsBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Create 200 stars
    for (let i = 0; i < 200; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = star.style.width;
      container.appendChild(star);
    }
  }, []);

  return <div className="stars-container" ref={containerRef}></div>;
};

export default StarsBackground;
