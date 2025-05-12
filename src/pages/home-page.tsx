import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import HtmlLoader from "../components/html-loader";
import Skybox from "../models/skybox";
import { Sun } from "../models/sun";
import { EarthPlanet } from "../models/earth-planet";
import * as THREE from "three";
import { usePlanetStore } from "../stores/planet-store";
import CameraController from "../components/camera-controller";
import { RedPlanet } from "@/models/red-planet";
import { motion } from "framer-motion";
import { pageVariants } from "@/lib/constants/page-transitions";
import { IcePlanet } from "@/models/ice-planet";
import { toast } from "sonner";

const HomePage = () => {
  const resetActivePlanet = usePlanetStore((state) => state.resetActivePlanet);

  useEffect(() => {
    resetActivePlanet();
  }, []);

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex items-center justify-center h-screen overflow-hidden"
    >
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
        onCreated={() => {
          const hasSessionStorage = !!sessionStorage.getItem("IsSet");

          if (hasSessionStorage) return;

          toast(
            "Welcome to my solar system! Click on any of the planets to get started.",
            {
              duration: 8000,
              onAutoClose: () => {
                sessionStorage.setItem("IsSet", "Set");
              },
              style: {
                background: "black",
                color: "white",
                padding: 30,
                fontSize: 22,
                textTransform: "capitalize",
              },
            }
          );
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
          <RedPlanet
            initial={{
              rotation: [-Math.PI / 6, 0, 0],
            }}
            rotationSpeed={0.007}
            position={new THREE.Vector3(6, -12, -20)}
            orbitRadius={15}
            orbitSpeed={-0.003}
            tiltAngle={3}
            defaultScale={1.4}
          />
          <IcePlanet
            initial={{
              rotation: [-Math.PI / 6, 0, 0],
            }}
            rotationSpeed={0.004}
            position={new THREE.Vector3(10, -10, -55)}
            orbitRadius={80}
            orbitSpeed={0.001}
            tiltAngle={7}
            defaultScale={4}
          />
        </Suspense>
      </Canvas>
    </motion.section>
  );
};

export default HomePage;
