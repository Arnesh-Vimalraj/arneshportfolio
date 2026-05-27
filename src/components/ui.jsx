import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { fadeInUp, sectionViewport, staggerContainer } from "../lib/motion";

export function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function MailIcon(props) {
  return <Mail aria-hidden="true" {...props} />;
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export function Section({ id, eyebrow, children, className = "" }) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      className={`scroll-mt-28 space-y-8 ${className}`}
    >
      <motion.div variants={fadeInUp} className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          {eyebrow}
        </p>
      </motion.div>
      {children}
    </motion.section>
  );
}

export function ExternalLink({ href, children, className = "", withIcon = true }) {
  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className={`group inline-flex min-w-0 max-w-full items-center gap-1.5 rounded-sm font-semibold text-slate-800 transition-colors duration-200 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50 dark:text-slate-200 dark:hover:text-indigo-300 dark:focus-visible:ring-offset-slate-950 ${className}`}
    >
      <span className="min-w-0 break-all border-b border-slate-300 transition-colors group-hover:border-indigo-400 dark:border-slate-700 dark:group-hover:border-indigo-400">
        {children}
      </span>
      {withIcon ? (
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      ) : null}
    </a>
  );
}

export function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-slate-200/70 bg-white/65 px-2.5 py-1 text-[11px] font-medium text-slate-500 shadow-sm shadow-slate-950/[0.02] backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-400 ${className}`}
    >
      {children}
    </span>
  );
}
