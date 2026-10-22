"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Download,
  Github,
  Linkedin,
  Send,
  MapPin,
  GraduationCap,
  Award,
  Globe2,
  Mail,
  Code2,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TelegramIcon } from "@/components/ui/social-links";
import { getTechIcon, getTechBrandColor } from "@/lib/tech-icons";
import { SiUdacity } from "react-icons/si";

export default function ProfileSection() {
  const [activeTab, setActiveTab] = useState<"about" | "stack" | "education">("about");

  const skillGroups = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Svelte", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "React Router"],
    },
    {
      category: "Backend & Systems",
      skills: ["Nest.js", "Node.js", "Express", "Python", "Java", "RESTful APIs", "Telegram bots"],
    },
    {
      category: "Mobile",
      skills: ["Flutter", "React Native", "Android Development", "iOS Development"],
    },
    {
      category: "Databases & BaaS",
      skills: ["MongoDB", "PostgreSQL", "Supabase", "Firebase", "SQL", "NoSQL", "Firestore"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Render", "Docker", "Linux", "Postman", "Git & GitHub", "Vercel", "Cloudinary", "EmailJS"],
    },
  ];

  const certificates = [
    {
      title: "Android Developer Fundamentals",
      issuer: "Udacity Nanodegree",
      description: "Native Android application architecture, UI layouts, local storage, and background processing.",
      date: "Feb 2026",
      url: "https://www.udacity.com/certificate/e/bb376752-dca7-11f0-a400-13b8367e7372",
    },
    {
      title: "Programming Fundamentals",
      issuer: "Udacity Nanodegree",
      description: "Core programming paradigms, problem-solving, modular code structures, and debugging.",
      date: "Dec 2025",
      url: "https://www.udacity.com/certificate/e/3c56be12-dca0-11f0-9964-1b6de304da39",
    },
  ];

  return (
    <section id="profile" className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 bg-surface/40 border-y border-hairline scroll-mt-16">
      <div id="about" className="absolute -top-20" />
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-[720px] mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-accent-soft mb-3 font-mono">
            Background &amp; Profile
          </p>
          <h2 className="font-display text-4xl sm:text-6xl text-chalk font-normal tracking-tight mb-4">
            Emandoyesus Tesfaye.
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted">
            Full Stack Developer &amp; Software Engineering student at Mekelle University.
          </p>
        </motion.div>

        {/* 2-Column Split */}
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] items-stretch">
          {/* Left Card: Developer ID Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col bg-card p-6 sm:p-8 border border-hairline"
          >
            {/* Visual Header / Photo with status indicator */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden border border-hairline/80 mb-6 group bg-surface">
              <Image
                src="/emando-about-cartoon.jpg"
                alt="Emandoyesus Tesfaye — Full Stack Developer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle gradient vignette at bottom */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/15 to-transparent"
              />

              {/* "Available for work" pulsing badge */}
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-ink/85 px-3 py-1.5 backdrop-blur-md border border-hairline z-10 select-none">
                <span className="relative flex size-2.5 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-positive opacity-75" />
                  <span className="relative size-2 rounded-full bg-positive" />
                </span>
                <span className="font-sans text-xs font-medium text-chalk tracking-wide">
                  Available for work
                </span>
              </span>

              {/* Location badge on bottom right of photo */}
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-ink/85 px-2.5 py-1 backdrop-blur-md border border-hairline font-mono text-[11px] text-chalk/90 z-10 select-none">
                <MapPin size={12} className="text-accent-soft" />
                <span>Mekelle, Ethiopia</span>
              </span>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col gap-2 mb-6">
              <h3 className="font-sans text-2xl font-bold text-chalk">
                Emandoyesus Tesfaye
              </h3>
              <p className="font-sans text-sm text-accent-soft font-mono">
                Full Stack Developer • Mobile App Developer
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mt-1">
                Building practical, fast web applications and native mobile apps with modern, reliable engineering.
              </p>
            </div>

            {/* Contact quick links */}
            <div className="space-y-2.5 mb-8 border-y border-hairline py-4 font-mono text-xs text-muted">
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-accent-soft shrink-0" />
                <span className="text-chalk/90">Mekelle, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-accent-soft shrink-0" />
                <a
                  href="mailto:emmandoyesus@gmail.com"
                  className="text-chalk/90 hover:text-accent-soft transition-colors"
                >
                  emmandoyesus@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Linkedin size={14} className="text-accent-soft shrink-0" />
                <a
                  href="https://www.linkedin.com/in/emandoyesus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-chalk/90 hover:text-accent-soft transition-colors flex items-center gap-1 truncate"
                >
                  <span className="truncate">@emandoyesus</span>
                  <ExternalLink size={10} className="text-muted shrink-0" />
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <TelegramIcon className="size-[14px] text-accent-soft shrink-0" />
                <a
                  href="https://t.me/vintage_01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-chalk/90 hover:text-accent-soft transition-colors flex items-center gap-1 truncate"
                >
                  <span className="truncate">@vintage_01</span>
                  <ExternalLink size={10} className="text-muted shrink-0" />
                </a>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <motion.a
                href="#contact"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-chalk border border-hairline bg-surface hover:border-accent/60 hover:text-accent-soft transition-all flex-1"
              >
                <Send size={14} />
                <span>Get in touch</span>
              </motion.a>
              <motion.a
                href="mailto:emmandoyesus@gmail.com"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-ink bg-chalk dark:hover:bg-white hover:bg-chalk/90 transition-all flex-1"
              >
                <Mail size={14} />
                <span>Email me</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Card: Interactive Tabs (About, Stack, Education & Certs) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex flex-col bg-card border border-hairline overflow-hidden"
          >
            {/* Tab navigation headers with sliding layoutId active underline */}
            <div className="flex border-b border-hairline bg-surface/60">
              <button
                type="button"
                onClick={() => setActiveTab("about")}
                className={`relative flex-1 py-3.5 sm:py-4 px-2 sm:px-4 text-center sm:text-left font-sans text-xs sm:text-sm font-medium transition-colors border-r border-hairline flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 ${
                  activeTab === "about"
                    ? "text-accent-soft bg-card"
                    : "text-muted hover:text-chalk"
                }`}
              >
                <span className="font-mono text-[11px] sm:text-xs opacity-60">01</span>
                <span>About</span>
                {activeTab === "about" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("stack")}
                className={`relative flex-1 py-3.5 sm:py-4 px-2 sm:px-4 text-center sm:text-left font-sans text-xs sm:text-sm font-medium transition-colors border-r border-hairline flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 ${
                  activeTab === "stack"
                    ? "text-accent-soft bg-card"
                    : "text-muted hover:text-chalk"
                }`}
              >
                <span className="font-mono text-[11px] sm:text-xs opacity-60">02</span>
                <span className="truncate">Skills<span className="hidden sm:inline"> &amp; Stack</span></span>
                {activeTab === "stack" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("education")}
                className={`relative flex-1 py-3.5 sm:py-4 px-2 sm:px-4 text-center sm:text-left font-sans text-xs sm:text-sm font-medium transition-colors flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 ${
                  activeTab === "education"
                    ? "text-accent-soft bg-card"
                    : "text-muted hover:text-chalk"
                }`}
              >
                <span className="font-mono text-[11px] sm:text-xs opacity-60">03</span>
                <span className="truncate">Education<span className="hidden sm:inline"> &amp; Certs</span></span>
                {activeTab === "education" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            </div>

            {/* Tab Content with AnimatePresence */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1"
                >
              {activeTab === "about" && (
                <div className="space-y-6">
                  {/* CV Brief */}
                  <div className="space-y-4">
                    <p className="font-sans text-base text-chalk/90 leading-relaxed">
                      I&apos;m a full-stack developer and a Software Engineering student at Mekelle University. I build practical, fast web applications with React, Next.js, TypeScript, Node.js and Express, and I also develop mobile apps for Android and iOS.
                    </p>
                    <p className="font-sans text-base text-muted leading-relaxed">
                      My work ranges from a movie-discovery app powered by the TMDB API to a production website with an admin console for a real organization in Dessie. I care about clean interfaces, reliable code and shipping work people actually use.
                    </p>
                  </div>

                  {/* Facts grid from CV */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-hairline bg-hairline mt-6">
                    <div className="p-4 bg-card flex items-center gap-3">
                      <MapPin size={16} className="text-accent-soft shrink-0" />
                      <div>
                        <span className="block text-xs uppercase text-muted font-mono">Location</span>
                        <span className="text-sm font-medium text-chalk">Mekelle, Ethiopia</span>
                      </div>
                    </div>
                    <div className="p-4 bg-card flex items-center gap-3">
                      <div className="relative size-6 rounded-full overflow-hidden border border-hairline bg-white/5 shrink-0">
                        <Image
                          src="/mekelle-university-logo.png"
                          alt="Mekelle University"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <span className="block text-xs uppercase text-muted font-mono">Education</span>
                        <span className="text-sm font-medium text-chalk">Mekelle University (2023–2027)</span>
                      </div>
                    </div>
                    <div className="p-4 bg-card flex items-center gap-3">
                      <Code2 size={16} className="text-accent-soft shrink-0" />
                      <div>
                        <span className="block text-xs uppercase text-muted font-mono">Primary Focus</span>
                        <span className="text-sm font-medium text-chalk">Web &amp; Mobile Engineering</span>
                      </div>
                    </div>
                    <div className="p-4 bg-card flex items-center gap-3">
                      <Globe2 size={16} className="text-accent-soft shrink-0" />
                      <div>
                        <span className="block text-xs uppercase text-muted font-mono">Languages</span>
                        <span className="text-sm font-medium text-chalk">English (Fluent) • Amharic (Native)</span>
                      </div>
                    </div>
                  </div>

                  {/* Competency badges from CV */}
                  <div className="pt-2">
                    <p className="text-xs uppercase font-mono text-muted mb-2.5">
                      Core Competencies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Fullstack Websites",
                        "Frontend Development",
                        "Admin Dashboards",
                        "Mobile Apps (Android & iOS)",
                        "Telegram Bots",
                        "API Integration",
                        "Web Deployment",
                      ].map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2.5 py-1 border border-hairline bg-surface text-chalk/90 font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "stack" && (
                <div className="space-y-6" id="stack">
                  <p className="font-sans text-sm text-muted">
                    Full technical competencies extracted directly from production projects and engineering coursework:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skillGroups.map((grp) => (
                      <div key={grp.category} className="p-4 bg-surface/60 border border-hairline">
                        <span className="block text-xs font-mono uppercase text-accent-soft mb-2.5">
                          {grp.category}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {grp.skills.map((skill) => {
                            const Icon = getTechIcon(skill);
                            const brandColor = getTechBrandColor(skill);
                            return (
                              <span
                                key={skill}
                                className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 bg-card border border-hairline text-chalk font-mono hover:border-hairline-strong transition-colors select-none group/skill"
                              >
                                <Icon
                                  style={{ color: brandColor }}
                                  className="size-3.5 shrink-0 transition-transform duration-200 group-hover/skill:scale-120"
                                />
                                <span>{skill}</span>
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "education" && (
                <div className="space-y-6">
                  {/* Degree Card */}
                  <div className="p-5 border border-hairline bg-surface/40">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3">
                        <div className="relative size-7 rounded-full overflow-hidden border border-hairline bg-white/10 shrink-0 shadow-sm">
                          <Image
                            src="/mekelle-university-logo.png"
                            alt="Mekelle University Emblem"
                            width={28}
                            height={28}
                            className="object-contain"
                          />
                        </div>
                        <h4 className="text-base font-semibold text-chalk">
                          Mekelle University
                        </h4>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 border border-accent/40 text-accent-soft">
                        2023 — 2027
                      </span>
                    </div>
                    <p className="text-sm font-medium text-chalk/90 mb-1">
                      BSc. Software Engineering
                    </p>
                    <p className="text-xs font-mono text-muted">
                      Mekelle, Ethiopia • Rigorous curriculum in algorithms, data structures, software architecture, and systems engineering.
                    </p>
                  </div>

                  {/* Nanodegree Certificates */}
                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-wider text-accent-soft mb-3 flex items-center gap-2">
                      <SiUdacity className="size-4 text-[#01B3E3]" />
                      <span>Certified Nanodegrees</span>
                    </h5>
                    <div className="space-y-3">
                      {certificates.map((cert) => (
                        <a
                          key={cert.title}
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative block p-4 border border-hairline bg-surface/30 hover:bg-surface/70 hover:border-accent/60 transition-all duration-300 overflow-hidden"
                        >
                          {/* Ambient top highlight on hover */}
                          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3">
                              <div className="size-8 rounded-lg bg-[#01B3E3]/10 border border-[#01B3E3]/25 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#01B3E3]/50 transition-colors">
                                <SiUdacity className="size-4 text-[#01B3E3]" />
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm font-semibold text-chalk group-hover:text-accent-soft transition-colors flex items-center gap-1.5">
                                  <span>{cert.title}</span>
                                  <ExternalLink size={13} className="text-muted group-hover:text-accent-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                                </p>
                                <p className="text-xs text-muted font-sans leading-relaxed">
                                  <span className="text-[#01B3E3] font-medium">{cert.issuer}</span> • {cert.description}
                                </p>
                                <div className="pt-1 flex items-center gap-2">
                                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-accent-soft/80 group-hover:text-accent-soft transition-colors">
                                    <span>Verify Certificate</span>
                                    <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <span className="text-xs font-mono text-accent-soft shrink-0 px-2 py-0.5 border border-accent/30 bg-accent/5">
                              {cert.date}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="p-4 border border-hairline bg-surface/20 flex items-center justify-between">
                    <span className="text-xs uppercase font-mono text-muted">Spoken Languages</span>
                    <div className="flex items-center gap-4 text-xs font-mono text-chalk">
                      <span>English: <strong className="text-accent-soft font-semibold">Fluent</strong></span>
                      <span>•</span>
                      <span>Amharic: <strong className="text-accent-soft font-semibold">Native</strong></span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Bottom tag line */}
          <div className="pt-6 mt-6 border-t border-hairline flex items-center justify-between text-xs text-muted font-mono">
            <span>Mekelle Univ • 2023-2027</span>
            <span className="text-accent-soft">CLEAN CODE • DISCIPLINE • REAL PRODUCTS</span>
          </div>
        </div>
      </motion.div>
    </div>
      </div>
    </section>
  );
}
