import React, { useEffect, useRef, useState } from "react";
import "./Project.css";

export default function CenterModeSlider() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Ultima Plastic Industries",
      desc: "Designed and developed a fully responsive corporate website using WordPress. Built custom layouts using Elementor & Ultimate Addons. Integrated SMTP-enabled contact forms and configured DNS records via Cloudflare.",
      bg:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?crop=entropy&cs=tinysrgb&fm=jpg&fit=max&w=1400&q=80",
      link: "https://ultimaplastics.in",
    },
    {
      title: "Maharashtra Tourism Development Corporation",
      desc: "Created a website to showcase 20 agro tourism centers in Marathwada with airport, railway, and bus info. Developed with HTML, CSS, JS and integrated Google Maps. Optimized for mobile and QR code scanning.",
      bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=srgb&fm=jpg&q=85",
      link: "https://mtdc-chh-sambhajinagar.netlify.app/",
    },
    {
      title: "Aadyatva Ayurveda",
      desc: "Created an e-commerce website for an Ayurvedic cosmetics brand using WordPress & WooCommerce. Integrated features: login, cart, wishlist, dashboard, and payment gateway. Plugins used: WooCommerce, Woosify, Elementor, Contact Form 7, Rank Math.",
      bg: "",
      link: "#",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;

    container.querySelectorAll(".star").forEach((s) => s.remove());

    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      const size = `${Math.random() * 2 + 1}px`;
      star.style.width = size;
      star.style.height = size;
      star.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(star);
    }
  }, []);

  // Fallback for broken images
  const handleImgError = (e) => {
    e.target.style.background = "linear-gradient(135deg, #667eea, #764ba2)";
    e.target.src = ""; // remove broken image
  };

  return (
    <section id="projects" ref={containerRef} className="slider-section">
      <div className="head">
       <h2 className="projects-heading">MY PROJECTS EXPERIENCE</h2>

      </div>

      <div className="slider">
        {projects.map((proj, i) => (
          <article
            key={i}
            className={`project-card ${activeIndex === i ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(0)}
            onClick={() =>
              setActiveIndex(activeIndex === i ? null : i)
            }
          >
            <img
              className="project-card__bg"
              src={proj.bg}
              alt={proj.title}
              onError={handleImgError}
            />
            <div className="project-card__content">
              <h3 className="project-card__title">{proj.title}</h3>
            </div>
            <div className="project-details">
              <p>{proj.desc}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__btn"
                >
                  Visit Site
                </a>
              )}
              <button
                className="project-card__btn close-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(null);
                }}
              >
                Close
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
