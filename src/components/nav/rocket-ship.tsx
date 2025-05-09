import Rocket from "@/assets/icons/rocket-ship.svg";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const RocketShip = () => {
  const [isHovered, setIsHovered] = useState(false);

  const rocketRef = useRef<HTMLImageElement | null>(null);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleBlur = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative flex justify-center"
      onMouseEnter={handleHover}
      onMouseLeave={handleBlur}
    >
      <motion.img
        src={Rocket}
        alt="Home"
        className="z-50 size-14"
        initial={{ y: 0, x: 0 }}
        animate={{
          y: isHovered ? -12 : 0,
          x: isHovered ? [-2, 2] : 0,
          filter: isHovered
            ? "brightness(0.9) sepia(0.8) hue-rotate(-47deg) saturate(4)"
            : "brightness(1) sepia(0) hue-rotate(0deg) saturate(1)",
        }}
        transition={{
          y: { duration: 0.6 },
          x: {
            duration: 0.5,
            repeat: isHovered ? Infinity : 0,
            repeatType: "mirror",
          },
          filter: { duration: 1.2 },
        }}
        ref={rocketRef}
      />
    </div>
  );
};

export default RocketShip;
