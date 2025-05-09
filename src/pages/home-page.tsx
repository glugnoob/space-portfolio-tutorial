import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import HtmlLoader from "../components/html-loader";
import Skybox from "../models/skybox";
import { Sun } from "../models/sun";
import { EarthPlanet } from "../models/earth-planet";
import * as THREE from "three";
import { usePlanetStore } from "../stores/planet-store";
import CameraController from "../components/camera-controller";

const HomePage = () => {
  const resetActivePlanet = usePlanetStore((state) => state.resetActivePlanet);

  useEffect(() => {
    resetActivePlanet();
  }, []);

  return (
    <section className="flex items-center justify-center h-screen overflow-hidden">
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          fov: 75,
          rotation: [0, 0, 0],
        }}
        className="w-full h-full bg-transparent"
        onPointerMissed={(e) => {
          e.stopPropagation();
          resetActivePlanet();
        }}
      >
        <Suspense fallback={<HtmlLoader />}>
          <CameraController />
          <ambientLight intensity={3} />
          <Skybox />
          <Sun
            position={[0, 0, -20]}
            scale={[0.2, 0.2, 0.2]}
            rotation={[0, 0, 0]}
          />
          <EarthPlanet
            initial={{
              rotation: [-Math.PI / 6, 0, 0],
            }}
            rotationSpeed={0.005}
            position={new THREE.Vector3(5, -8, -17)}
            orbitRadius={10}
            orbitSpeed={0.005}
            tiltAngle={4}
            defaultScale={0.02}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default HomePage;
