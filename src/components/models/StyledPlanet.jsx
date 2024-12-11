"use client";

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const StyledPlanet = React.memo(function StyledPlanet(props) {
  const group = useRef();
  const planetRef = useRef();
  const cloudRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/styledPlanet-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.001;
    }

    if (cloudRef.current) {
      cloudRef.current.rotation.y -= 0.0003;
    }
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group
          name="GLTF_SceneRootNode"
          rotation={[0.031, 0, 0.064]}
        >
          <group
            name="Clouds_1"
            ref={cloudRef}
          >
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Clouds}
            />
          </group>
          <group
            name="Planet_2"
            ref={planetRef}
          >
            <mesh
              name="Object_6"
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.Planet}
            />
          </group>
        </group>
      </group>
    </group>
  );
});
export default StyledPlanet;
useGLTF.preload("/models/styledPlanet-transformed.glb");
