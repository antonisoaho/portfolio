"use client";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const GlobeHologram = React.memo(function GlobeHologram(props) {
  const group = useRef();
  const planetRef = useRef();
  const raysRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/earth_globe_hologram.glb"
  );
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.002;
    }
    if (raysRef.current) {
      raysRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
    >
      <group name="Scene">
        <mesh
          name="Earth_2"
          ref={planetRef}
          castShadow
          receiveShadow
          geometry={nodes.Earth_2.geometry}
          material={materials["Earth Surface.006"]}
          rotation={[0, 1, 0]}
        />
        <mesh
          name="Earth_rays_2"
          ref={raysRef}
          k
          castShadow
          receiveShadow
          geometry={nodes.Earth_rays_2.geometry}
          material={materials.transparent}
        />
      </group>
    </group>
  );
});

export default GlobeHologram;
useGLTF.preload("/models/earth_globe_hologram.glb");
