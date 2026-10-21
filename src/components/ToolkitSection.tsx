"use client";

import { motion } from "framer-motion";
import { getTechIcon, getTechBrandColor } from "@/lib/tech-icons";

const toolsBand1 = [
  "React",
  "Next.js",
  "TypeScript",
  "Svelte",
  "Nest.js",
  "Python",
  "Java",
  "Node.js",
  "Express",
  "Flutter",
  "Tailwind CSS",
];

const toolsBand2 = [
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Firebase",
  "Render",
  "Docker",
  "Linux",
  "Postman",
  "React Native",
  "Git",
  "REST APIs",
];

// Duplicate lists to guarantee seamless coverage across wide desktop displays
const band1Items = [...toolsBand1, ...toolsBand1];
const band2Items = [...toolsBand2, ...toolsBand2];

export default function ToolkitSection() {
  return (
    <section
      id="toolkit"
      className="stack relative z-10 py-16 sm:py-28 overflow-hidden border-t border-hairline bg-surface/20"
      aria-labelledby="stack-h"
    >
      {/* Centered subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#181c66]/20 blur-[120px] rounded-full -z-10"
      />

      <div className="shell max-w-[1240px] mx-auto px-6 sm:px-10 mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="stack__head flex flex-col items-center text-center max-w-[700px] mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3 font-mono">
            The Toolkit
          </p>
          <h2
            id="stack-h"
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-chalk font-normal tracking-tight mb-4"
          >
            The toolkit.
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted leading-relaxed max-w-[62ch]">
            What I reach for. None of it is evidence on its own — the records above are the evidence, and this is only the shelf they came off.
          </p>
        </motion.div>
      </div>

      {/* Dual Infinite Marquee Bands with Gradient Edge Fades */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="stack__bands relative w-full flex flex-col gap-3 sm:gap-4 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
      >
        {/* Band 1: Forward Marquee */}
        <div className="marquee overflow-hidden w-full">
          <div className="marquee__inner overflow-hidden w-full">
            <div className="marquee__track flex w-max py-1">
              {/* Primary set */}
              <ul className="marquee__set flex items-center gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0">
                {band1Items.map((tool, idx) => {
                  const Icon = getTechIcon(tool);
                  const brandColor = getTechBrandColor(tool);
                  return (
                    <li
                      key={`b1-${tool}-${idx}`}
                      className="marquee__item px-4 py-2.5 sm:px-5 sm:py-3 border border-hairline bg-card/90 hover:bg-surface hover:border-hairline-strong transition-all duration-300 text-sm sm:text-[14.5px] font-mono text-chalk/90 shrink-0 select-none shadow-[0_4px_16px_rgba(0,0,0,0.5)] flex items-center gap-2.5 rounded-sm group cursor-default"
                    >
                      <Icon
                        style={{ color: brandColor }}
                        className="size-4 shrink-0 transition-transform duration-200 group-hover:scale-125"
                      />
                      <span>{tool}</span>
                    </li>
                  );
                })}
              </ul>
              {/* Cloned set for seamless infinite loop */}
              <ul className="marquee__set flex items-center gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0" aria-hidden="true">
                {band1Items.map((tool, idx) => {
                  const Icon = getTechIcon(tool);
                  const brandColor = getTechBrandColor(tool);
                  return (
                    <li
                      key={`b1-clone-${tool}-${idx}`}
                      className="marquee__item px-4 py-2.5 sm:px-5 sm:py-3 border border-hairline bg-card/90 hover:bg-surface hover:border-hairline-strong transition-all duration-300 text-sm sm:text-[14.5px] font-mono text-chalk/90 shrink-0 select-none shadow-[0_4px_16px_rgba(0,0,0,0.5)] flex items-center gap-2.5 rounded-sm group cursor-default"
                    >
                      <Icon
                        style={{ color: brandColor }}
                        className="size-4 shrink-0 transition-transform duration-200 group-hover:scale-125"
                      />
                      <span>{tool}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Band 2: Reverse Marquee */}
        <div className="marquee overflow-hidden w-full">
          <div className="marquee__inner overflow-hidden w-full">
            <div
              className="marquee__track flex w-max py-1"
              data-reverse="true"
            >
              {/* Primary set */}
              <ul className="marquee__set flex items-center gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0">
                {band2Items.map((tool, idx) => {
                  const Icon = getTechIcon(tool);
                  const brandColor = getTechBrandColor(tool);
                  return (
                    <li
                      key={`b2-${tool}-${idx}`}
                      className="marquee__item px-4 py-2.5 sm:px-5 sm:py-3 border border-hairline bg-card/90 hover:bg-surface hover:border-hairline-strong transition-all duration-300 text-sm sm:text-[14.5px] font-mono text-chalk/90 shrink-0 select-none shadow-[0_4px_16px_rgba(0,0,0,0.5)] flex items-center gap-2.5 rounded-sm group cursor-default"
                    >
                      <Icon
                        style={{ color: brandColor }}
                        className="size-4 shrink-0 transition-transform duration-200 group-hover:scale-125"
                      />
                      <span>{tool}</span>
                    </li>
                  );
                })}
              </ul>
              {/* Cloned set for seamless infinite loop */}
              <ul className="marquee__set flex items-center gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0" aria-hidden="true">
                {band2Items.map((tool, idx) => {
                  const Icon = getTechIcon(tool);
                  const brandColor = getTechBrandColor(tool);
                  return (
                    <li
                      key={`b2-clone-${tool}-${idx}`}
                      className="marquee__item px-4 py-2.5 sm:px-5 sm:py-3 border border-hairline bg-card/90 hover:bg-surface hover:border-hairline-strong transition-all duration-300 text-sm sm:text-[14.5px] font-mono text-chalk/90 shrink-0 select-none shadow-[0_4px_16px_rgba(0,0,0,0.5)] flex items-center gap-2.5 rounded-sm group cursor-default"
                    >
                      <Icon
                        style={{ color: brandColor }}
                        className="size-4 shrink-0 transition-transform duration-200 group-hover:scale-125"
                      />
                      <span>{tool}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
