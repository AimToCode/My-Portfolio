import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";

const TechIconCardExperience = ({ model, isInView = true }) => {
  const scene = useGLTF(model.modelPath);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Canvas
      dpr={isMobile ? [1, 1.2] : [1, 1.5]}
      frameloop={isInView ? "always" : "never"}
      gl={{
        powerPreference: "high-performance",
        antialias: true,
        stencil: false,
        alpha: true,
      }}
    >
      {/* Lightweight multi-directional lighting replacing expensive HDR downloads */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.8} />
      <directionalLight position={[-5, -5, -3]} intensity={0.6} color="#60a5fa" />

      <Float
        speed={isMobile ? 2.5 : 4}
        rotationIntensity={isMobile ? 0.3 : 0.5}
        floatIntensity={isMobile ? 0.5 : 0.8}
      >
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} enableRotate={!isMobile} />
    </Canvas>
  );
};

export default TechIconCardExperience;
