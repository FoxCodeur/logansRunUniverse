import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./Links.scss";
import gsap from "gsap";

// Liste des éléments de navigation
const items = ["Homepage", "Competences", "Portfolio", "CV"];

const Links = ({ isOpen }) => {
  const linksRef = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    if (isOpen) {
      gsap.to(containerRef.current, { pointerEvents: "auto" });
      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(linksRef.current, {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power3.in",
      });
      gsap.to(containerRef.current, { pointerEvents: "none", delay: 0.3 });
    }
  }, [isOpen]);

  return (
    <div className="links" ref={containerRef}>
      {items.map((item, i) => (
        <a
          ref={(el) => (linksRef.current[i] = el)}
          href={`#${item}`}
          key={item}
          tabIndex={isOpen ? 0 : -1}
          style={{
            display: "block",
            opacity: 0,
            transform: "translateY(50px)",
          }}
          onMouseEnter={() =>
            gsap.to(linksRef.current[i], { scale: 1.1, duration: 0.15 })
          }
          onMouseLeave={() =>
            gsap.to(linksRef.current[i], { scale: 1, duration: 0.15 })
          }
          onMouseDown={() =>
            gsap.to(linksRef.current[i], { scale: 0.95, duration: 0.1 })
          }
          onMouseUp={() =>
            gsap.to(linksRef.current[i], { scale: 1.1, duration: 0.1 })
          }
        >
          {item}
        </a>
      ))}
    </div>
  );
};

Links.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Links;
