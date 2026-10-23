"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import RollingTextButton from "@/components/ui/button-rolling-text";
import AddToBasketButton from "@/components/ui/button-add-to-basket";
import SocialLinks from "@/components/ui/social-links";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const portraitVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative flex w-full flex-col items-center gap-10 overflow-hidden px-6 pt-24 pb-12 sm:px-10 sm:pt-28 lg:gap-14 bg-hero"
    >
      {/* Architectural blueprint grid - Hero Section Only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:110px_110px] [mask-image:radial-gradient(ellipse_110%_90%_at_50%_35%,#000_75%,transparent_100%)]"
      />

      

      {/* Smooth transitional gradient fade at bottom into global solid dark background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-ink to-transparent z-0"
      />

      {/* Laser streak lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[150px] w-[840px] max-w-full -translate-x-1/2 overflow-hidden opacity-50 z-0"
      >
        <span className="absolute h-px w-[120px] top-[14px] left-[10px] bg-gradient-to-r from-transparent via-accent-2/60 to-transparent" />
        <span className="absolute h-px w-[140px] top-[52px] right-[40px] bg-gradient-to-r from-transparent via-accent-2/50 to-transparent" />
      </div>

      <div className="relative z-10 pointer-events-none grid w-full max-w-[1240px] items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        {/* Left: Main Heading, Intro & Social Connect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 border border-accent-2/30 dark:border-hairline bg-accent-2/10 dark:bg-surface/80 text-xs font-mono text-accent-soft font-medium pointer-events-auto"
          >
            <span className="size-1.5 rounded-full bg-accent-2 animate-pulse" />
            <span>FULL STACK DEVELOPER • MEKELLE, ETHIOPIA</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-balance font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-chalk tracking-tight leading-[1.1]"
          >
            Emandoyesus{" "}
            <span className="block sm:inline text-muted">Tesfaye</span>
            <span className="inline-block align-middle ml-2">
              <a
                href="#projects"
                aria-label="View Projects"
                className="inline-grid size-10 sm:size-12 place-items-center border border-hairline bg-surface text-muted transition-all duration-300 hover:border-accent hover:text-accent-soft hover:scale-105 pointer-events-auto"
              >
                <ArrowUpRight className="size-5" />
              </a>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-[50ch] font-sans text-base sm:text-lg text-muted leading-relaxed font-normal"
          >
            I&apos;m a <span className="text-chalk font-medium">full-stack developer</span> and a Software Engineering student at <span className="text-chalk font-medium">Mekelle University</span>. I build practical, fast web applications with React, Next.js, TypeScript, Node.js and Express, and develop mobile apps for Android &amp; iOS.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2 pointer-events-auto"
          >
            {/* Featured Projects Button with Rolling Text Motion */}
            <RollingTextButton href="#projects" text="Featured Projects" />

            {/* Contact Now Button & Hand-drawn Decorative Arrow */}
            <div className="relative inline-flex items-center">
              <AddToBasketButton href="#contact" label="Contact Now" />

              {/* Hand-drawn decorative arrow pointing to CTA */}
              <svg
                aria-hidden="true"
                viewBox="0 0 148 56"
                fill="none"
                className="pointer-events-none text-accent-2-soft hidden w-[90px] -translate-y-2 sm:block opacity-75 ml-3"
              >
                <path
                  d="M140 8 C 104 12, 58 26, 20 46"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M38 48 L18 45 L28 28"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Social Links: GitHub, LinkedIn, Telegram, Email */}
          <motion.div
            variants={itemVariants}
            className="pt-3 pointer-events-auto"
          >
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Right: Hero Portrait Illustration with Motion Entrance & Subtle Hover Tilt */}
        <motion.div
          variants={portraitVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ y: -4, transition: { duration: 0.3 } }}
          className="relative w-full z-10 flex items-center justify-center lg:justify-end pointer-events-auto"
        >
          <div className="relative w-full max-w-[480px] lg:max-w-[540px] flex items-center justify-center">
            <Image
              src="/emando-hero-figure.png"
              alt="Emandoyesus Tesfaye — Full Stack Developer"
              width={1024}
              height={1024}
              priority
              className="relative z-10 w-full h-auto object-contain select-none pointer-events-none"
            />
          </div>
        </motion.div>
      </div>

      {/* Down Chevron link to Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 pt-4 pointer-events-auto"
      >
        <a
          href="#projects"
          aria-label="Scroll to featured projects"
          className="grid size-10 place-items-center text-muted transition-colors hover:text-accent-soft"
        >
          <ChevronDown className="size-6 animate-bounce" />
        </a>
      </motion.div>

      {/* Smooth transitional hairline divider into Projects section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1050px] h-px bg-gradient-to-r from-transparent via-hairline-strong/35 to-transparent"
      />
    </section>
  );
}
