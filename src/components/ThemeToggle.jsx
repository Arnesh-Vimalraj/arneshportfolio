import { Sun, Moon } from "lucide-react";
import { useDarkTheme } from "../hooks/useDarkTheme";

export function ThemeToggle() {
  const [theme, toggleTheme] = useDarkTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative rounded-full border border-slate-200/80 bg-white/70 p-2 text-slate-700 shadow-sm shadow-slate-950/[0.03] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50 active:translate-y-0 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:bg-slate-900 dark:focus-visible:ring-offset-slate-950"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
    >
      <div className="relative h-5 w-5 overflow-hidden">
        <span
          className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-500 ${
            theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        >
          <Sun className="w-5 h-5 text-amber-500 fill-amber-500/20" />
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-500 ${
            theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          }`}
        >
          <Moon className="w-5 h-5 text-indigo-400 fill-indigo-400/20" />
        </span>
      </div>
    </button>
  );
}
