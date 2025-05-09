export const pageTransitionTime = 0.7;
export const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: pageTransitionTime * 2,
      ease: "anticipate",
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: pageTransitionTime,
      ease: "anticipate",
      type: "tween",
    },
  },
};
