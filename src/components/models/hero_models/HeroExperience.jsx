import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = ({ isInView = true }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      dpr={isMobile ? [1, 1.25] : [1, 1.5]}
      frameloop={isInView ? "always" : "never"}
      gl={{
        powerPreference: "high-performance",
        antialias: true,
        stencil: false,
        alpha: true,
      }}
      camera={{ position: [0, 0, 15], fov: 45 }}
    >
      <ambientLight intensity={0.2} color="#1a1a40" />

      {/* OrbitControls: auto-rotates smoothly on mobile without trapping scroll; interactive on desktop */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        enableRotate={!isMobile}
        autoRotate={isMobile}
        autoRotateSpeed={0.8}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}>
        <HeroLights isMobile={isMobile} />
        {!isMobile && <Particles count={40} />}
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room isMobile={isMobile} />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
