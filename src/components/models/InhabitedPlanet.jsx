"use client";

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";

const InhabitedPlanet = React.memo(function InhabitedPlanet(props) {
  const group = useRef();
  const materialRef = useRef(null);
  const { nodes, materials } = useGLTF("/models/inhabited-transformed.glb");

  useEffect(() => {
    const baseMaterial = materials["Scene_-_Root"];
    if (!baseMaterial) {
      return;
    }

    const material = baseMaterial.clone();
    material.color = new Color("#79ccff");
    material.emissive = new Color("#261f54");
    material.emissiveIntensity = 0.34;
    material.roughness = 0.3;
    material.metalness = 0.22;
    materialRef.current = material;
    material.needsUpdate = true;

    return () => {
      material.dispose();
    };
  }, [materials]);

  useFrame(({ clock }, delta) => {
    group.current.rotation.y += 0.06 * delta;
    group.current.rotation.x += 0.06 * delta;
    if (materialRef.current) {
      const pulse = 0.3 + Math.sin(clock.elapsedTime * 0.75) * 0.07;
      materialRef.current.emissiveIntensity = pulse;
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={group}
    >
      <mesh
        name="Object_4"
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materialRef.current || materials["Scene_-_Root"]}
        scale={[1.5, 1.5, 1.5]}
      />
    </group>
  );
});
export default InhabitedPlanet;
useGLTF.preload("/models/inhabited-transformed.glb");
