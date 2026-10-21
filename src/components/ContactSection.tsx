"use client";

import { useState } from "react";
import { Copy, Check, ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import {
  CatGithubIcon,
  LinkedinBoxIcon,
  TelegramIcon,
  EmailEnvelopeIcon,
} from "@/components/ui/social-links";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const email = "emmandoyesus@gmail.com";
  const telegramUrl = "https://t.me/vintage_01";
  const linkedinUrl = "https://www.linkedin.com/in/emandoyesus/";
  const githubUrl = "https://github.com/emandoyesus";

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3500);
  };

  return (
    <section
      id="contact"
      className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 border-t border-hairline bg-surface/30"
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card border border-hairline p-6 sm:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle navy ambient glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#181c66]/30 rounded-full blur-[100px] pointer-events-none"
          />

          {/* Content (Elevated above background canvas) */}
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <p className="text-xs uppercase tracking-[0.25em] text-accent font-mono mb-3">
                Get in touch
              </p>
              <h2 className="font-display text-4xl sm:text-6xl text-chalk font-normal tracking-tight mb-4">
                Contact.
              </h2>
              <p className="font-sans text-base sm:text-lg text-muted leading-relaxed">
                Open for freelance projects, contract roles, and full-time engineering opportunities.
              </p>
            </div>

            {/* 2-Column Grid matching requested layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-6 sm:gap-8 items-stretch mb-10">
              {/* Left Column: DIRECT CONTACT */}
              <div className="bg-surface/85 backdrop-blur-md border border-hairline p-6 sm:p-7 flex flex-col justify-between shadow-lg">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent font-mono mb-4">
                    DIRECT CONTACT
                  </p>

                  <div className="space-y-3">
                    {/* 1. Email with copy icon */}
                    <div
                      onClick={copyEmail}
                      className="group flex items-center justify-between p-3.5 border border-hairline bg-card/80 hover:border-accent/50 hover:bg-card transition-all cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-3 text-sm text-chalk/90 group-hover:text-chalk min-w-0 pr-2">
                        <EmailEnvelopeIcon className="size-4 text-[#8fa0b5] group-hover:text-accent transition-colors shrink-0" />
                        <span className="truncate font-mono text-xs sm:text-sm">{email}</span>
                      </div>
                      <button
                        type="button"
                        onClick={copyEmail}
                        aria-label="Copy email address"
                        className="text-muted group-hover:text-accent hover:text-chalk transition-colors p-1 shrink-0"
                      >
                        {copiedEmail ? (
                          <Check size={15} className="text-positive" />
                        ) : (
                          <Copy size={15} />
                        )}
                      </button>
                    </div>

                    {/* 2. Telegram */}
                    <a
                      href={telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 border border-hairline bg-card/80 hover:border-accent/50 hover:bg-card transition-all select-none"
                    >
                      <div className="flex items-center gap-3 text-sm text-chalk/90 group-hover:text-chalk">
                        <TelegramIcon className="size-4 text-[#8fa0b5] group-hover:text-accent transition-colors shrink-0" />
                        <span className="font-mono text-xs sm:text-sm">@vintage_01</span>
                      </div>
                      <ArrowUpRight
                        size={15}
                        className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                      />
                    </a>

                    {/* 3. LinkedIn Profile */}
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 border border-hairline bg-card/80 hover:border-accent/50 hover:bg-card transition-all select-none"
                    >
                      <div className="flex items-center gap-3 text-sm text-chalk/90 group-hover:text-chalk">
                        <LinkedinBoxIcon className="size-4 text-[#8fa0b5] group-hover:text-accent transition-colors shrink-0" />
                        <span className="font-mono text-xs sm:text-sm">LinkedIn Profile</span>
                      </div>
                      <ArrowUpRight
                        size={15}
                        className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                      />
                    </a>

                    {/* 4. GitHub Repositories */}
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 border border-hairline bg-card/80 hover:border-accent/50 hover:bg-card transition-all select-none"
                    >
                      <div className="flex items-center gap-3 text-sm text-chalk/90 group-hover:text-chalk">
                        <CatGithubIcon className="size-4 text-[#8fa0b5] group-hover:text-accent transition-colors shrink-0" />
                        <span className="font-mono text-xs sm:text-sm">GitHub Repositories</span>
                      </div>
                      <ArrowUpRight
                        size={15}
                        className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                      />
                    </a>
                  </div>
                </div>

                <p className="text-xs font-mono text-muted leading-relaxed pt-5 mt-6 border-t border-hairline">
                  Based in Mekelle, Ethiopia (UTC+3). I reply to all inquiries within 24 hours.
                </p>
              </div>

              {/* Right Column: SEND A MESSAGE */}
              <div className="bg-surface/85 backdrop-blur-md border border-hairline p-6 sm:p-8 flex flex-col justify-between shadow-lg">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent font-mono mb-5">
                    SEND A MESSAGE
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs uppercase tracking-wider text-muted font-mono mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Smith"
                        className="w-full bg-card border border-hairline focus:border-accent/70 focus:outline-none px-4 py-3 text-base sm:text-sm font-sans text-chalk placeholder:text-dim transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs uppercase tracking-wider text-muted font-mono mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-card border border-hairline focus:border-accent/70 focus:outline-none px-4 py-3 text-base sm:text-sm font-sans text-chalk placeholder:text-dim transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs uppercase tracking-wider text-muted font-mono mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Emandoyesus, I'd like to discuss a project..."
                        className="w-full bg-card border border-hairline focus:border-accent/70 focus:outline-none p-4 text-base sm:text-sm font-sans text-chalk placeholder:text-dim resize-none transition-all"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-chalk text-ink dark:hover:bg-white hover:bg-chalk/90 hover:shadow-[0_0_24px_rgba(46,55,148,0.4)] py-3.5 px-6 font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all mt-2 cursor-pointer"
                    >
                      {sent ? (
                        <span className="inline-flex items-center gap-2 text-ink font-semibold">
                          <Check size={16} className="text-positive" />
                          Opening email client...
                        </span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowUpRight size={16} />
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>

            {/* Location and status info footer */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-hairline text-xs font-mono text-muted">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-hairline bg-surface/60">
                <MapPin size={13} className="text-accent" />
                <span>Mekelle, Ethiopia</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-hairline bg-surface/60">
                <span className="size-2 rounded-full bg-positive animate-pulse" />
                <span>Available for Web &amp; Mobile Projects</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
