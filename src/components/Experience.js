import React, { useEffect, useRef } from "react";
import "./Experience.css";

export default function Experience() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // ⭐ Background stars
    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      const size = `${Math.random() * 2 + 1}px`;
      star.style.width = size;
      star.style.height = size;
      container.appendChild(star);
    }

    // 💫 Card hover effect
    const cards = container.querySelectorAll(".section");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--mouse-x", `50%`);
        card.style.setProperty("--mouse-y", `50%`);
      });
    });
  }, []);

  return (
    <div id="education" className="experience-container" ref={containerRef}>
      <div className="content">
        {/* 🎓 Education Section */}
        <div className="section-wrapper">
          <h2 className="section-title">Education</h2>
          <div className="section">
            <div className="education-column">
              <div className="education-row">
                <div className="degree">MCA</div>
                <div className="college">MIT College, India — Pursuing</div>
              </div>
              <div className="education-row">
                <div className="degree">B.Sc. Computer Science</div>
                <div className="college">
                  MGM Dr. GYP College of CS & IT, India
                </div>
              </div>
              <div className="education-row">
                <div className="degree">HSC</div>
                <div className="college">S.B. College of Science, India</div>
              </div>
              <div className="education-row">
                <div className="degree">SSC</div>
                <div className="college">Sharda Mandir School, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* 💼 Experience Section */}
        <div className="section-wrapper">
          <h2 className="section-title">Experience</h2>
          <div className="section">
            <div className="section-content">
              <p>
                <strong>Full Stack Developer</strong> — Geneka Technologies
              </p>
              <ul>
                <li>Designed web pages using HTML5, CSS3, and Bootstrap.</li>
                <li>Built responsive websites compatible with all devices.</li>
                <li>Developed back-end functionality with PHP, MySQL, and JavaScript.</li>
                <li>Created secure login forms with validation.</li>
                <li>Implemented CRUD operations for database management.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}