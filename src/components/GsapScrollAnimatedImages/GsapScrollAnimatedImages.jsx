import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Composant d'affichage et animation d'images GSAP+ScrollTrigger
 * @param {Object[]} images - { refName, src, alt, className }
 * @param {Function} buildTimeline - (refs, sectionRef) => void
 * @param {string} wrapperClass
 * @param {string} sectionClass
 */
const GsapScrollAnimatedImages = ({
  images,
  buildTimeline,
  wrapperClass = "",
  sectionClass = "",
}) => {
  const sectionRef = useRef(null);
  const refs = useRef(
    images.reduce((acc, img) => {
      acc[img.refName] = React.createRef();
      return acc;
    }, {})
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      buildTimeline(refs.current, sectionRef);
    }, sectionRef);
    return () => ctx.revert();
  }, [buildTimeline]);

  return (
    <div className={wrapperClass}>
      <section className={sectionClass} ref={sectionRef}>
        {images.map((img) => (
          <img
            key={img.refName}
            ref={refs.current[img.refName]}
            src={img.src}
            alt={img.alt}
            className={img.className}
            draggable="false"
          />
        ))}
      </section>
    </div>
  );
};

GsapScrollAnimatedImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      refName: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      className: PropTypes.string,
    })
  ).isRequired,
  buildTimeline: PropTypes.func.isRequired,
  wrapperClass: PropTypes.string,
  sectionClass: PropTypes.string,
};

export default GsapScrollAnimatedImages;
