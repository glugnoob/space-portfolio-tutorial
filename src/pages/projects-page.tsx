import { pageVariants } from "@/lib/constants/page-transitions";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SpaceBackground from "../assets/skybox/Spacebox_left.png";
import ProjectsTimeline from "@/components/projects-timeline";

const ProjectsPage = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      ref={containerRef}
      className="h-screen pt-20 overflow-y-auto text-white px-10"
      style={{
        backgroundColor: "#180716",
        backgroundImage: `url(${SpaceBackground})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: yPos,
      }}
      exit="exit"
    >
      <h1 className="text-5xl mt-5">Projects:</h1>
      <ProjectsTimeline />
      <div style={{ paddingBottom: 3000 }} />
    </motion.section>
  );
};

export default ProjectsPage;
