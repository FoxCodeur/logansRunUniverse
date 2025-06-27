import React, { useState, useRef, useEffect } from "react";
import "./SidebarPortfolio.scss";
import ToggleButton from "../toggleButton/ToggleButton";
import Links from "../links/Links";
import gsap from "gsap";

const SidebarPortfolio = () => {
  const [open, setOpen] = useState(false);
  const bgRef = useRef();

  // Affiche le bg *seulement* si ouvert
  useEffect(() => {
    if (open && bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        { clipPath: "circle(28px at 50px 50px)" },
        {
          clipPath: "circle(800px at 50px 50px)",
          duration: 0.8,
          ease: "power2.out",
        }
      );
    }
  }, [open]);

  return (
    <div className="sidebarPortfolio">
      {/* Le fond mauve n’apparait QUE si open */}
      {open && (
        <div className="bg" ref={bgRef}>
          <Links isOpen={open} />
        </div>
      )}
      {/* Le bouton hamburger a toujours son contour mauve */}
      <ToggleButton setOpen={setOpen} isOpen={open} />
    </div>
  );
};

export default SidebarPortfolio;
