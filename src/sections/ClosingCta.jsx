import { motion } from "framer-motion";
import { chatLink } from "../lib/social";
import { fadeInUp } from "../lib/motion";

export function ClosingCta() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="pt-2 sm:pt-4"
      aria-label="Contact"
    >
      <motion.p
        variants={fadeInUp}
        className="max-w-xl font-sans text-sm font-normal italic leading-7 text-zinc-500 dark:text-neutral-500 sm:text-base"
      >
        Want to say hi? Need a dev for your company?{" "} <br/>
        <a
          href={chatLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline font-medium not-italic text-blue-600 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50 dark:text-blue-500 dark:focus-visible:ring-offset-slate-950"
        >
          Let's chat →
        </a>
      </motion.p>
    </motion.section>
  );
}
