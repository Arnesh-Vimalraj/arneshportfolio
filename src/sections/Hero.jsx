import { motion } from "framer-motion";
// Replace with your own avatar image
import avatarImg from "../assets/avatar.png";
import { fadeInUp, staggerContainer } from "../lib/motion";
import { socialLinks } from "../lib/social";

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="space-y-6"
      aria-labelledby="intro-heading"
    >
      
      <motion.div variants={fadeInUp} className="space-y-3">
        <h1
          id="intro-heading"
          className="flex flex-wrap items-center gap-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white"
        >
          <span className="whitespace-nowrap">Hi, I'm</span>
          <img
            src={avatarImg}
            alt="Arnesh"
            className="h-12 w-12 rounded-full border border-slate-200 bg-white object-cover shadow-sm shadow-slate-950/5 ring-1 ring-white/80 transition duration-200 hover:scale-[1.03] align-middle dark:border-slate-800 dark:bg-slate-900 dark:ring-slate-700/70"
          />
          <span className="whitespace-nowrap">Arnesh.</span>
        </h1>
        <div className="max-w-xl space-y-2 text-base leading-8 text-slate-600 dark:text-slate-400">
          <p className="text-lg leading-8 text-slate-800 dark:text-slate-200">
           I’m a CS student @ RVSCET and a Full Stack trainee @ NxtWave.

          </p>
          <p>
           I love building software that solves real-world problems.
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-2">
        {socialLinks.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="group inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-slate-500 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50 dark:text-slate-400 dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
          >
            <Icon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
            {label}
          </a>
        ))}
      </motion.div>

    </motion.section>
  );
}
