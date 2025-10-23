import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Skills.css";

const skills = [
  { name: "HTML5", color: "#ff5733" },
  { name: "CSS3", color: "#2965f1" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "React.js", color: "#61dafb" },
  { name: "Core PHP", color: "#8892bf" },
  { name: "MySQL", color: "#00758f" },
  { name: "Bootstrap", color: "#7952b3" },
  { name: "Figma", color: "#a259ff" },
  { name: "CorelDraw", color: "#1abc9c" },
  { name: "Laravel", color: "#ff2d20" },
  { name: "WordPress", color: "#21759b" },
  { name: "ASP.NET", color: "#512bd4" },
  { name: "GSAP", color: "#f7df1e" },
];

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // ⭐ Background stars
    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = star.style.width;
      container.appendChild(star);
    }

    // 🎨 Hex hover animation
    const hexes = container.querySelectorAll(".hex-shape");
    hexes.forEach((hex) => {
      const length = 400; // approximate perimeter
      hex.style.strokeDasharray = length;
      hex.style.strokeDashoffset = length;

      hex.addEventListener("mouseenter", () => {
        gsap.fromTo(
          hex,
          { strokeDashoffset: length },
          { strokeDashoffset: 0, duration: 1, ease: "power2.out" }
        );
      });

      hex.addEventListener("mouseleave", () => {
        gsap.to(hex, {
          strokeDashoffset: length,
          duration: 1,
          ease: "power2.inOut",
        });
      });
    });
  }, []);

  return (
    <div className="skills-section" ref={containerRef}>
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <svg viewBox="0 0 120 120" className="hex-border">
              <polygon
                points="60,5 110,32 110,88 60,115 10,88 10,32"
                stroke={skill.color}
                fill="#111"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeLinecap="round"
                className="hex-shape"
              />
            </svg>
            <span style={{ color: skill.color }}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
