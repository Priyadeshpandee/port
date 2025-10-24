import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Intro.css";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const aboutRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  const name = "Priya Deshpande.";

  useEffect(() => {
    const container = containerRef.current;

    // ⭐ Stars background
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

    // ✍️ Name animation
    const words = name.split(" ");
    nameRef.current.innerHTML = words
      .map((word) => `<span class="word">${word}&nbsp;</span>`)
      .join("");

    gsap.from(nameRef.current.querySelectorAll(".word"), {
      opacity: 0,
      y: 20,
      stagger: 0.3,
      ease: "power2.out",
      duration: 0.8,
    });

    // 🌟 Scroll animations
    gsap.from(aboutRef.current.querySelectorAll("h3"), {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(paragraphRef.current, {
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.to(buttonsRef.current, {
      scrollTrigger: {
        trigger: buttonsRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    // 🧠 Refresh ScrollTrigger after stars are added
    ScrollTrigger.refresh();
  }, []);

  // 🍔 Toggle mobile menu
  const toggleMenu = () => {
    document.querySelector(".navbar ul").classList.toggle("open");
  };

  return (
    <div className="introcontainer" ref={containerRef}>
      {/* 🟢 Left Navbar */}
      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#education">EDUCATION</a></li>
          <li><a href="#education">EXPERIENCE</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONATACT</a></li>
        </ul>
      </nav>

      <div className="intro">
        <div className="intro-left"></div>

        <div className="intro-right">
          <h1 className="name" ref={nameRef}></h1>

          <div className="aboutmyself" ref={aboutRef}>
            <h3>Front-End Developer</h3>
            <h3 className="inde">India</h3>
          </div>

          <p ref={paragraphRef}>
            Hii I am Priya Deshpande based in Chh.Sambhajinagar, India. I love
            creating simple, powerful, and user-friendly digital experiences.
            A developer who loves solving problems through code — from design
            to deployment. "Take a look at my resume and the projects that
            define my journey."
          </p>

         <div className="btncontainer" ref={buttonsRef}>
            <a href="https://www.linkedin.com/in/priya-deshpande-3a4204215" target="_blank" rel="noopener noreferrer">
              <button className="linkedin">in</button>
            </a>
            <button className="resume">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
