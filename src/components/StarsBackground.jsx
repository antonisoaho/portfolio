"use client";
import React, { useMemo } from "react";

const STAR_COUNT = 56;

const createStars = () =>
  Array.from({ length: STAR_COUNT }, (_, id) => ({
    id,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 2.8 + 2.2}s`,
    animationDelay: `${Math.random() * 6}s`,
    opacity: 0.25 + Math.random() * 0.55,
    size: 6 + Math.floor(Math.random() * 5),
  }));

const StarsBackground = () => {
  const stars = useMemo(createStars, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
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
            animation: `star-tingle ${star.animationDuration} ease-in-out infinite`,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
