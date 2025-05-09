import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { ActivePlanet, usePlanetStore } from "../stores/planet-store";
import { useEffect, useRef } from "react";

const DEFAULT_CAMERA_POSITION = new THREE.Vector3(0, 0, 0);

const CameraController = () => {
  const { camera } = useThree();

  const activePlanet = usePlanetStore((state) => state.activePlanet);
  const activeLocation = usePlanetStore((state) => state.activeLocation);

  const targetPosition = useRef(DEFAULT_CAMERA_POSITION);

  useEffect(() => {
    if (activePlanet === ActivePlanet.NONE) {
      targetPosition.current = DEFAULT_CAMERA_POSITION;
    } else {
      if (!activeLocation) return;
      targetPosition.current = activeLocation;
    }
  }, [activePlanet]);

  useFrame(() => {
    const target = targetPosition.current;

    const currentLocation = camera.position.clone();

    currentLocation.lerp(target, 0.02);

    camera.position.set(
      currentLocation.x,
      currentLocation.y,
      currentLocation.z
    );
  });

  return null;
};

export default CameraController;
