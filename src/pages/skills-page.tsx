import { pageVariants } from "@/lib/constants/page-transitions";
import { motion, useScroll, useTransform } from "framer-motion";
import SpaceBackground from "../assets/skybox/Spacebox_bottom.png";
import { useRef } from "react";
import { WEB_STACK } from "@/lib/constants/skills-page-constants";

const STAGGER_TIME = 0.2;
const INITIAL_DELAY = 1;

const SKILLS_CONTAINER_VAR = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: STAGGER_TIME,
    },
  },
};

const SKILLS_CHILD = (direction: string) => ({
  initial: { x: direction === "left" ? "-100vw" : "100vw" },
  animate: { x: "0px", transition: { duration: 0.3, ease: "easeOut" } },
});

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
      <motion.div
        variants={SKILLS_CONTAINER_VAR}
        initial="initial"
        animate="animate"
        className="flex flex-wrap items-center gap-10 mt-14"
      >
        {WEB_STACK.map((item, itemI) => (
          <motion.div
            variants={SKILLS_CHILD(itemI % 2 === 0 ? "left" : "right")}
            key={`web-stack-${itemI}`}
            className="flex flex-col items-start gap-3 text-xl font-bold capitalize text-white"
          >
            <div className="flex flex-col p-2 rounded-lg hover-container bg-slate-500/5">
              <img src={item.image} className="object-contain mb-2 size-24" />
              <div>
                {item.name.split("").map((char, i) => (
                  <motion.span
                    key={`char-${char}-${i}`}
                    initial={{ color: "#FFF" }}
                    animate={{ color: ["#FFF", "#180716", "#FFF"] }}
                    transition={{
                      duration: 3,
                      delay: STAGGER_TIME * itemI + i * 0.01 + INITIAL_DELAY,
                    }}
                    className="mr-1"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <h3 className="mt-8 font-bold text-4xl">About Me:</h3>
      <p className="mt-4 text-2xl">
        I'm a self taught web/app developer with a passion for creating
        immersive apps with great UI/UX in both 3D and 2D space. I love learning
        new emerging technologies to make development more efficient whilst
        still maintaining a high quality product. I have a in depth
        understanding of all the parts that make an application functional from
        authentication, styling, responsiveness, database interaction / crud
        operations, global state management and animation. Be sure to get in
        touch if you would like to know more!
      </p>
      <div style={{ paddingBottom: 3000 }} />
    </motion.section>
  );
};

export default SkillsPage;
