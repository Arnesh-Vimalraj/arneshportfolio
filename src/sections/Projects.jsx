import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { fadeInUp } from "../lib/motion";

export function Projects() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="space-y-4 scroll-mt-20"
      aria-labelledby="projects-heading"
    >
      <motion.h2
        id="projects-heading"
        variants={fadeInUp}
        className="text-sm font-semibold tracking-[0.16em] text-slate-400 uppercase dark:text-slate-500"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group relative overflow-hidden rounded-2xl border border-dashed border-slate-300/80 bg-white/45 p-5 shadow-sm shadow-slate-950/[0.02] backdrop-blur transition-colors hover:border-indigo-300/70 hover:bg-white/70 dark:border-slate-700/80 dark:bg-slate-900/30 dark:hover:border-indigo-500/40 dark:hover:bg-slate-900/50 sm:p-6"
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute left-8 top-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl dark:bg-indigo-400/10" />
        </div>

        <div className="relative flex items-start gap-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
            <Code2 className="h-4 w-4" />
          </span>
          <div className="space-y-2">
            <p className="text-base font-medium text-slate-900 dark:text-slate-100">
              Building quietly. Projects coming soon.
            </p>
            <p className="max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">
              Currently crafting ideas into real products.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
