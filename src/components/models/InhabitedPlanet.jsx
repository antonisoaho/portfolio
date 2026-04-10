"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const InhabitedPlanet = React.memo(function InhabitedPlanet(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/inhabited-transformed.glb");
  useFrame((_, delta) => {
    group.current.rotation.y += 0.06 * delta;
    group.current.rotation.x += 0.06 * delta;
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
        material={materials["Scene_-_Root"]}
        scale={[1.5, 1.5, 1.5]}
      />
    </group>
  );
});
export default InhabitedPlanet;
useGLTF.preload("/models/inhabited-transformed.glb");
