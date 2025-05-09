import { pageVariants } from "@/lib/constants/page-transitions";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className=""
    >
      ProjectsPage
    </motion.section>
  );
};

export default ProjectsPage;
