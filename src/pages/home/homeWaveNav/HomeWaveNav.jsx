import React from "react";
import "./HomeWaveNav.scss";
import loganSphere from "../../../assets/images/images-générales/logans_run sphere.png";
const HomeWaveNav = () => {
  return (
    <>
      <div className="logansphere_container">
        <img
          className="logansphere"
          src={loganSphere}
          alt="sphere avec inscription Logan run"
        />
      </div>

      <div className="home-wave-nav">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="wave-svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "darkred", stopOpacity: 0.8 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "black", stopOpacity: 0.8 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
            fill="url(#grad1)"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default HomeWaveNav;
