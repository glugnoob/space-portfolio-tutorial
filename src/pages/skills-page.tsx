import { pageVariants } from "@/lib/constants/page-transitions";
import { motion } from "framer-motion";

const SkillsPage = () => {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className=""
    >
      SkillsPage
    </motion.section>
  );
};

export default SkillsPage;
