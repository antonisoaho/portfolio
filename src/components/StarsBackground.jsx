"use client";
import React, { useEffect, useMemo, useState } from "react";

const STAR_COUNT_DESKTOP = 44;
const STAR_COUNT_MOBILE = 24;

const createStars = (count) =>
  Array.from({ length: count }, (_, id) => ({
    id,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 2.8 + 2.2}s`,
    animationDelay: `${Math.random() * 6}s`,
    opacity: 0.25 + Math.random() * 0.55,
    size: 6 + Math.floor(Math.random() * 5),
  }));

const StarsBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const update = () => {
      setIsMobile(window.innerWidth < 768);
      setReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    };

    update();
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  const stars = useMemo(
    () => createStars(isMobile ? STAR_COUNT_MOBILE : STAR_COUNT_DESKTOP),
    [isMobile]
  );

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-star-radial"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animation: reducedMotion
              ? "none"
              : `star-tingle ${star.animationDuration} ease-in-out infinite`,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
