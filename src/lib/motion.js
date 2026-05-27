export const easeOutExpo = [0.16, 1, 0.3, 1];

export const fadeInUp = {
  hidden: { y: 18 },
  visible: {
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};

export const sectionViewport = { once: true, margin: "-80px" };
