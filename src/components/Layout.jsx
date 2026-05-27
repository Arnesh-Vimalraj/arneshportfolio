import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export function Layout({ children }) {
  return (
    <motion.div
      initial={{ y: 8 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex min-h-screen flex-col overflow-x-clip"
    >
      <div className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <main className="mx-auto flex w-full min-w-0 max-w-2xl flex-1 flex-col gap-16 px-5 pb-16 pt-24 sm:gap-20 sm:px-6 sm:pb-20 sm:pt-28 md:gap-24 lg:px-0">
        {children}
      </main>
    </motion.div>
  );
}
