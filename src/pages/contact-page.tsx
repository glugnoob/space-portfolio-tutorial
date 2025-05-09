import { motion, useScroll, useTransform } from "framer-motion";
import SpaceBackground from "../assets/skybox/Spacebox_top.png";
import { useRef } from "react";
import ContactForm from "../components/contact-form";

const ContactPage = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.section
      ref={containerRef}
      className="h-screen pt-20 overflow-y-auto text-white"
      style={{
        backgroundColor: "#180716",
        backgroundImage: `url(${SpaceBackground})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: yPos,
      }}
    >
      <div className="mt-5">
        <h1 className="text-5xl">Contact Me:</h1>
        <ContactForm />
      </div>

      <div style={{ paddingBottom: 3000 }} />
    </motion.section>
  );
};

export default ContactPage;
