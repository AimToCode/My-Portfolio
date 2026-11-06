import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import Computer from "./Computer";

const ContactExperience = ({ isInView = true }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas
      shadows={!isMobile}
      dpr={isMobile ? [1, 1.25] : [1, 1.5]}
      frameloop={isInView ? "always" : "never"}
      gl={{
        powerPreference: "high-performance",
        antialias: true,
        stencil: false,
        alpha: true,
      }}
      camera={{ position: [0, 3, 7], fov: 45 }}
    >
      <ambientLight intensity={0.6} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow={!isMobile}
        intensity={2.5}
        color="#ffd9b3"
      />

      <OrbitControls
        enableZoom={false}
        enableRotate={!isMobile}
        autoRotate={isMobile}
        autoRotateSpeed={0.8}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow={!isMobile}
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>

      <group scale={0.03} position={[0, -1.49, -2]} castShadow={!isMobile}>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
