import React, { useEffect, useRef } from "react";
import "./Project.css";

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Create stars dynamically
    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = star.style.width;
      container.appendChild(star);
    }
  }, []);

  return (
    <div className="projects-container" ref={containerRef}>
      <div className="projects">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">
          A showcase of the ideas and experiences I’ve built through code.
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Attendance Management System</h3>
            <p>
              Built using PHP, MySQL, and Bootstrap — enables teachers to take
              and manage student attendance easily.
            </p>
          </div>

          <div className="project-card">
            <h3>Agro Tourism Portal</h3>
            <p>
              An interactive web app listing 100+ agro-tourism centers with
              filtering, search, and Google Maps integration.
            </p>
          </div>

          <div className="project-card">
            <h3>Weather Dashboard</h3>
            <p>
              A Python-based web dashboard using OpenWeatherMap API to display
              real-time weather updates for multiple cities.
            </p>
          </div>

          <div className="project-card">
            <h3>Blog System (ASP.NET MVC)</h3>
            <p>
              Full-featured blog with authentication, post creation, editing,
              and comments built as a college project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
