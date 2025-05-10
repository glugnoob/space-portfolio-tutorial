import { pageVariants } from "@/lib/constants/page-transitions";
import { motion, useScroll, useTransform } from "framer-motion";
import SpaceBackground from "../assets/skybox/Spacebox_bottom.png";
import { useRef } from "react";

const SkillsPage = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.section
      ref={containerRef}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-screen pt-20 overflow-y-auto text-white px-10 overflow-x-hidden"
      style={{
        backgroundColor: "#180716",
        backgroundImage: `url(${SpaceBackground})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: yPos,
      }}
    >
      <h1 className="text-5xl">Skills:</h1>
      <div style={{ paddingBottom: 3000 }} />
    </motion.section>
  );
};

export default SkillsPage;
