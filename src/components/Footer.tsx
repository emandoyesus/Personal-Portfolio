"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="footer-reveal-container" className="dark relative w-full">
      <footer
        ref={contentRef}
        className="relative w-full border-t border-hairline bg-black pt-12 md:pt-16 pb-12 px-6 sm:px-10 overflow-hidden shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.95)]"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-hairline/40 items-start">
            <div className="col-span-2 md:col-span-1 lg:col-span-1 flex flex-col">
              <div className="flex items-center gap-3">
                <span className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden border border-hairline bg-surface/50">
                  <Image
                    src="/emando-avatar.webp"
                    alt="Emandoyesus Tesfaye"
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
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
                  <MapPin size={12} className="text-accent-soft shrink-0" />
                  <span>Mekelle, Ethiopia (UTC+3)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-soft font-semibold mb-4">
                NAVIGATION
              </p>

              <ul className="flex flex-col gap-3 text-xs font-sans text-muted">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-chalk transition-colors inline-block py-0.5">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-soft font-semibold mb-4">
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

            <div className="col-span-2 md:col-span-1 lg:col-span-1 flex flex-col">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-soft font-semibold mb-4">
                ACTIONS
              </p>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                <a
                  href="/cv.pdf"
                  download="Emandoyesus_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl border border-accent/40 hover:border-accent bg-card hover:bg-wash text-accent-soft font-sans font-medium text-xs tracking-tight shadow-[0_0_15px_-3px_var(--shadow-accent)] hover:shadow-[0_0_20px_-2px_var(--shadow-accent-strong)] transition-all w-full select-none cursor-pointer"
                >
                  <BsFiletypePdf className="size-4 text-accent-soft transition-colors" />
                  <span>Download Resume</span>
                </a>

                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-hairline hover:border-black dark:hover:border-hairline-strong bg-transparent hover:bg-black dark:hover:bg-white/10 text-muted hover:text-white dark:hover:text-chalk font-mono text-xs transition-all w-full select-none cursor-pointer"
                >
                  <span>↑</span>
                  <span>Back to Top</span>
                  <span>↑</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
            <span>&copy; {currentYear} Emandoyesus Tesfaye.</span>
            <span className="text-center sm:text-right">Built with Next.js</span>
          </div>
        </div>
      </footer>
    </div>
  );
}