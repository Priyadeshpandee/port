// src/Cursor.js
import React, { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    const hoverables = document.querySelectorAll("a, button, input, textarea, .hoverable");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? "hovered" : ""}`}
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
    />
  );
};

export default Cursor;
