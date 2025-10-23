import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import StarsBackground from "./components/StarsBackground";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Cursor from "./components/Cursor";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.set(".panel", { clearProps: "all" });

    if (!isMobile && containerRef.current) {
      const sections = gsap.utils.toArray(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + containerRef.current.offsetWidth
        }
      });
    }
  }, [isMobile]);

  return (
    <>
      <Cursor /> {/* ✅ Custom cursor always on top */}
      <div 
        className={`container ${isMobile ? 'mobile' : 'desktop'}`} 
        ref={containerRef}
      >
        {/* <div className="panel"><StarsBackground /></div> */}
        <div className="panel"><Intro /></div>
        <div className="panel"><Skills /></div>
        <div className="panel"><Experience /></div>
        <div className="panel"><Projects /></div>
        <div className="panel"><Contact /></div>
      </div>
    </>
  );
}

export default App;
