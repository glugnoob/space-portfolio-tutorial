import { motion, useScroll, useTransform } from "framer-motion";
import SpaceBackground from "../assets/skybox/Spacebox_top.png";
import { Suspense, useRef, useState } from "react";
import ContactForm from "../components/contact-form";
import { Canvas } from "@react-three/fiber";
import HtmlLoader from "@/components/html-loader";
import { Spaceman } from "@/models/spaceman";
import { pageVariants } from "@/lib/constants/page-transitions";

const ContactPage = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [activeAction, setActiveAction] = useState<
    "cheering" | "idle" | "talk on phone"
  >("idle");

  const handleFocus = () => {
    setActiveAction("talk on phone");
  };
  const handleBlur = () => {
    setActiveAction("idle");
  };

  const handleSend = (callback?: () => void) => {
    setActiveAction("cheering");
    window.setTimeout(() => {
      setActiveAction("idle");
      if (callback) callback();
    }, 4000);
  };

  return (
    <motion.section
      ref={containerRef}
      className="h-screen pt-20 overflow-y-auto text-white px-10"
      style={{
        backgroundColor: "#180716",
        backgroundImage: `url(${SpaceBackground})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: yPos,
      }}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="text-5xl mt-5">Contact Me:</h1>
      <div className="flex items-center">
        <ContactForm
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          handleSend={handleSend}
        />
        <div className="w-1/3 h-[600px]">
          <Canvas
            camera={{
              near: 0.1,
              far: 1000,
              fov: 75,
              position: [0, 1, 0],
              rotation: [0, 0, 0],
            }}
          >
            <Suspense fallback={<HtmlLoader />}>
              <ambientLight intensity={20} />
              <Spaceman
                props={{
                  scale: 0.01,
                  position: [0, 0, -2],
                  rotation: [Math.PI / 2, 0, 0],
                }}
                activeAction={activeAction}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div style={{ paddingBottom: 3000 }} />
    </motion.section>
  );
};

export default ContactPage;
