"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";
import {
  CatGithubIcon,
  LinkedinBoxIcon,
  TelegramIcon,
  EmailEnvelopeIcon,
} from "@/components/ui/social-links";
import { BsFiletypePdf } from "react-icons/bs";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#profile" },
  { name: "Toolkit", href: "#toolkit" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/emandoyesus",
    icon: CatGithubIcon,
    handle: "@emandoyesus",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/emandoyesus/",
    icon: LinkedinBoxIcon,
    handle: "in/emandoyesus",
  },
  {
    name: "Telegram",
    href: "https://t.me/vintage_01",
    icon: TelegramIcon,
    handle: "@vintage_01",
  },
  {
    name: "Email",
    href: "mailto:emmandoyesus@gmail.com",
    icon: EmailEnvelopeIcon,
    handle: "emmandoyesus@gmail.com",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState<number | null>(null);

  // Measure exact footer content height responsively
  useEffect(() => {
    if (!contentRef.current) return;
    const updateHeight = () => {
      if (contentRef.current) {
        setFooterHeight(contentRef.current.offsetHeight);
      }
    };
    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    ro.observe(contentRef.current);
    window.addEventListener("resize", updateHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const isInView = useInView(containerRef, { margin: "0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Pronounced cinematic parallax sticky reveal transforms
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [0.2, 0.8, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      id="footer-reveal-container"
      className="relative w-full min-h-[620px] md:min-h-[420px]"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        ...(footerHeight ? { height: `${footerHeight}px` } : {}),
      }}
    >
      <div
        className={`fixed bottom-0 left-0 right-0 w-full z-0 overflow-hidden ${
          isInView ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          height: footerHeight ? `${footerHeight}px` : "auto",
        }}
      >
        <motion.footer
          ref={contentRef}
          style={{ y, opacity, scale }}
          className="relative w-full border-t border-hairline dark:bg-black bg-surface/95 pt-16 pb-12 px-6 sm:px-10 overflow-hidden shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.95)]"
        >
          {/* Top Curtain Shadow: soft physical depth illusion as page slides off */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 right-0 h-10 bg-gradient-to-b dark:from-black/60 from-black/[0.04] to-transparent z-10"
          />

          <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
            {/* Top Grid: Symmetrically spaced columns matching reference image */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-hairline/40 items-start">
              {/* Column 1: Identity & Bio */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center border border-hairline bg-surface/50 text-accent font-serif font-bold text-sm">
                    ET
                  </span>
                  <div>
                    <span className="font-sans font-semibold text-chalk text-sm tracking-tight block">
                      Emandoyesus Tesfaye
                    </span>
                    <span className="text-[11px] text-muted font-mono">
                      Full Stack Developer
                    </span>
                  </div>
                </div>

                <p className="font-sans text-xs text-muted leading-relaxed mt-4 max-w-[260px]">
                  Building practical, fast web applications and native mobile apps with modern, reliable engineering.
                </p>

                <div className="flex flex-col gap-2 pt-4 text-[11px] font-mono text-muted">
                  <div className="inline-flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>Available for new projects</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5">
                    <MapPin size={12} className="text-accent shrink-0" />
                    <span>Mekelle, Ethiopia (UTC+3)</span>
                  </div>
                </div>
              </div>

              {/* Column 2: Navigation */}
              <div className="flex flex-col">
                <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-4">
                  NAVIGATION
                </p>

                <ul className="flex flex-col gap-3 text-xs font-sans text-muted">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="hover:text-chalk transition-colors inline-block py-0.5"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Connect & Socials */}
              <div className="flex flex-col">
                <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-4">
                  CONNECT
                </p>

                <ul className="flex flex-col gap-3 text-xs font-sans text-muted">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="hover:text-chalk transition-colors inline-flex items-center gap-2.5 py-0.5 group"
                        >
                          <Icon className="size-3.5 text-muted group-hover:text-chalk transition-colors shrink-0" />
                          <span>{item.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Column 4: Actions */}
              <div className="flex flex-col">
                <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-4">
                  ACTIONS
                </p>

                <div className="flex flex-col gap-3">
                  <motion.a
                    href="/cv.pdf"
                    download="Emandoyesus_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl border border-accent/40 hover:border-accent dark:bg-[#14192b] dark:hover:bg-[#1a2139] bg-accent/10 hover:bg-accent/20 text-accent font-sans font-medium text-xs tracking-tight shadow-[0_0_15px_-3px_rgba(112,126,255,0.15)] hover:shadow-[0_0_20px_-2px_rgba(112,126,255,0.3)] transition-all w-full select-none cursor-pointer"
                  >
                    <BsFiletypePdf className="size-4 text-accent transition-colors" />
                    <span>Download Resume</span>
                  </motion.a>

                  <motion.button
                    type="button"
                    onClick={scrollToTop}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-hairline hover:border-black dark:hover:border-hairline-strong bg-transparent hover:bg-black dark:hover:bg-white/10 text-muted hover:text-white dark:hover:text-chalk font-mono text-xs transition-all w-full select-none cursor-pointer"
                  >
                    <span>↑</span>
                    <span>Back to Top</span>
                    <span>↑</span>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Bottom Credits & Legal */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
              <span>&copy; {currentYear} Emandoyesus Tesfaye.</span>
              <span className="text-center sm:text-right">Built with Next.js</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
