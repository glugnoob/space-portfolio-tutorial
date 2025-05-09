import { useRef } from "react";
import { px, nx, py, ny, pz, nz } from "../assets/skybox/index";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { getRandomInt } from "../lib/math";

interface Props {
  rotationSpeed?: number;
}

const Skybox = ({ rotationSpeed = 1 }: Props) => {
  const skyboxRef = useRef<THREE.Mesh | null>(null);

  let speed = rotationSpeed * 0.0001;

  const direction = getRandomInt(2);
  if (direction === 1) {
    speed *= -1;
  }

  useFrame(() => {
    if (skyboxRef.current) {
      skyboxRef.current.rotation.x += speed;
      skyboxRef.current.rotation.y += speed;
      skyboxRef.current.rotation.z += speed;
    }
  });

  const skyboxTextures = [
    new THREE.TextureLoader().load(px),
    new THREE.TextureLoader().load(nx),
    new THREE.TextureLoader().load(py),
    new THREE.TextureLoader().load(ny),
    new THREE.TextureLoader().load(pz),
    new THREE.TextureLoader().load(nz),
  ];

  skyboxTextures[2].rotation = Math.PI;
  skyboxTextures[3].rotation = Math.PI;

  skyboxTextures[2].center.set(0.5, 0.5);
  skyboxTextures[3].center.set(0.5, 0.5);

  const materials = skyboxTextures.map((texture) => {
    return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
  });

  return (
    <mesh material={materials} ref={skyboxRef}>
      <boxGeometry args={[500, 500, 500]} />
    </mesh>
  );
};

export default Skybox;
