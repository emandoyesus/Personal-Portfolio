"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#profile" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out ${
        scrolled
          ? "bg-ink/85 backdrop-blur-xl shadow-[0_16px_36px_-12px_rgba(0,0,0,0.85)]"
          : "bg-gradient-to-b from-ink/90 via-ink/50 to-transparent backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between px-6 sm:px-10">
        {/* Left: Minimal Editorial Logo */}
        <a
          href="#"
          aria-label="Emando Home"
          className="group inline-flex items-center gap-1.5 select-none"
        >
          <span className="font-display text-xl font-normal tracking-tight text-chalk transition-colors group-hover:text-black dark:group-hover:text-white">
            Emando
          </span>
          <span className="size-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
        </a>

        {/* Center / Desktop Links */}
        <nav aria-label="Desktop Navigation" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 font-mono text-[13px] tracking-wider uppercase text-muted transition-colors duration-200 hover:text-chalk group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-1 left-4 right-4 h-px bg-accent scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Right: Availability badge, CV Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Download CV Navbar Link */}
          <motion.a
            href="/cv.pdf"
            download="Emandoyesus_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Emandoyesus Tesfaye's CV"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 border border-hairline bg-surface/80 hover:border-hairline-strong hover:bg-card px-2.5 sm:px-3 py-1 font-mono text-[11px] text-chalk transition-all duration-200 hover:text-accent-soft group"
          >
            <Download size={12} className="text-accent-soft transition-transform duration-200 group-hover:-translate-y-0.5" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </motion.a>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Subtle Work Availability Status */}
          <div className="hidden sm:inline-flex items-center gap-2 border border-hairline bg-surface/70 px-3 py-1 font-mono text-[11px] text-muted select-none">
            <span className="size-1.5 rounded-full bg-positive animate-pulse" />
            <span className="text-chalk/90 font-mono">Available for projects</span>
          </div>

          {/* Mobile hamburger button */}
          <motion.button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.92 }}
            className="grid size-10 place-items-center border border-hairline bg-surface text-chalk transition-colors hover:border-hairline-strong hover:text-accent-soft md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-hero px-6 py-5 md:hidden shadow-2xl border-b border-hairline"
          >
            <motion.nav
              aria-label="Mobile Navigation"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                closed: {},
              }}
              className="flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -10 },
                  }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-between border-b border-hairline/30 py-3.5 font-mono text-sm tracking-wider uppercase text-muted transition-colors hover:text-accent-soft active:text-accent-soft last:border-none"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={14} className="text-muted/60" />
                </motion.a>
              ))}
              <motion.a
                href="/cv.pdf"
                download="Emandoyesus_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -10 },
                }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-between border-t border-hairline/30 pt-4 pb-1 font-mono text-sm tracking-wider uppercase text-accent-soft transition-colors active:opacity-80"
              >
                <span className="flex items-center gap-2">
                  <Download size={14} />
                  Download CV
                </span>
                <ArrowUpRight size={14} className="text-accent-soft/60" />
              </motion.a>

              {/* Theme switcher row in mobile menu */}
              <div className="flex items-center justify-between border-t border-hairline/30 pt-4 font-mono text-xs uppercase tracking-wider text-muted">
                <span>Theme Mode</span>
                <ThemeToggle />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
