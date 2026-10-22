"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`size-8 sm:size-9 border border-hairline bg-surface/80 opacity-0 pointer-events-none ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    setIsSwitching(true);
    document.documentElement.classList.add("theme-switching");
    setTheme(isDark ? "light" : "dark");
    setTimeout(() => {
      setIsSwitching(false);
      document.documentElement.classList.remove("theme-switching");
    }, 500);
  };

  return (
    <motion.button
      type="button"
      onClick={handleToggle}
      whileTap={{ scale: 0.88 }}
      whileHover={{ y: -1 }}
      className={`relative grid size-8 sm:size-9 place-items-center border border-hairline bg-surface/80 hover:bg-card hover:border-hairline-strong text-muted hover:text-accent-soft transition-colors duration-200 select-none cursor-pointer group ${className} ${isSwitching ? "ring-2 ring-accent/40" : ""}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center text-accent-soft"
          >
            <Moon size={15} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center text-amber-500"
          >
            <Sun size={15} />
          </motion.span>
        )}
      </AnimatePresence>
      
      {isSwitching && (
        <motion.span
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1.8 }}
          exit={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 rounded-[inherit] border-2 border-accent/50 pointer-events-none"
        />
      )}
    </motion.button>
  );
}
