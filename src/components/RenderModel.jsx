"use client";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense, useEffect, useState } from "react";

function useCapDpr() {
  const [settings, setSettings] = useState({ dpr: 1, reducedMotion: false });

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const raw = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const isSmallScreen =
      typeof window !== "undefined" && window.innerWidth < 768;
    const dprCap = isSmallScreen ? 1.35 : 1.6;
    setSettings({
      dpr: reduced ? 1 : Math.min(raw, dprCap),
      reducedMotion: reduced,
    });
  }, []);

  return settings;
}

const RenderModel = ({ children, className }) => {
  const { dpr, reducedMotion } = useCapDpr();

  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={dpr}
      frameloop={reducedMotion ? "demand" : "always"}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[6, 8, 5]}
          intensity={1.15}
        />
        <directionalLight
          position={[-5, 3, -4]}
          intensity={0.4}
        />
        {children}
      </Suspense>
    </Canvas>
  );
};

export default RenderModel;
