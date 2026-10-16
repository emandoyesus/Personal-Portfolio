"use client";

import { ArrowUpRight, ExternalLink, CheckCircle2, Lock, Eye } from "lucide-react";
import { motion } from "framer-motion";

interface RealProject {
  title: string;
  year: string;
  category: string;
  url: string;
  displayUrl: string;
  badge: string;
  accentGradient: string;
  thumbnail: string;
  tags: string[];
  highlights: string[];
}

const projects: RealProject[] = [
  {
    title: "Addisalem Film Academy",
    year: "2026",
    category: "Fullstack Web & Admin Portal",
    url: "https://addisalemfilms.com",
    displayUrl: "addisalemfilms.com",
    badge: "Live Production in Dessie",
    accentGradient: "from-indigo-950/70 via-stone-900 to-black",
    thumbnail: "/projects/addisalem-screen.png",
    tags: [
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind CSS 4",
      "Firebase Auth",
      "Firestore",
      "Cloudinary",
      "EmailJS",
      "Vercel",
    ],
    highlights: [
      "Built and shipped a full production website for a film training academy in Dessie: programs, facilities, awards gallery, student portfolio, and online enrollment.",
      "Engineered a protected admin console using Firebase Auth and Firestore to manage site content dynamically, with images served via Cloudinary.",
      "Implemented prerendered routes and SEO / social-sharing metadata for blazing fast loads and clean link previews.",
    ],
  },
  {
    title: "Axora Movies",
    year: "2025",
    category: "Streaming & Discovery Web App",
    url: "https://axora-movies.vercel.app",
    displayUrl: "axora-movies.vercel.app",
    badge: "Deployed on Vercel",
    accentGradient: "from-blue-950/70 via-slate-900 to-black",
    thumbnail: "/projects/axora-movies.webp",
    tags: [
      "React",
      "Tailwind CSS",
      "React Router",
      "TMDB API",
      "Render Backend",
      "Vercel",
    ],
    highlights: [
      "Built a modern cinematic web application to browse movies and series with detailed info pages, real-time search, and similar-title recommendation algorithms.",
      "Engineered an interactive modal video trailer player and a client-side watchlist management system to save and track favorites.",
      "Deployed with high-availability CDN on Vercel with responsive mobile and desktop viewing experiences.",
    ],
  },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 overflow-hidden">
      {/* Soft atmospheric ambient transition glow from hero #181c66 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[300px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(24,28,102,0.18)_0%,transparent_70%)] blur-2xl -z-10"
      />
      <div className="max-w-[1250px] mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-[720px] mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3 font-mono">
            Featured Projects
          </p>
          <h2 className="font-display text-4xl sm:text-6xl text-chalk font-normal tracking-tight mb-4">
            Production &amp; Shipped Work.
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted">
            Real applications built and shipped to production for real users and organizations.
          </p>
          <div className="inline-flex lg:hidden items-center gap-1.5 text-xs font-mono text-accent/80 mt-4 select-none">
            <span>Swipe projects to explore</span>
            <span className="animate-pulse">→</span>
          </div>
        </motion.div>

        {/* 1-Row Swipe on Mobile / 2-Column Grid on Desktop */}
        <div id="projects-cards-container" className="flex flex-row overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch -mx-6 px-6 sm:-mx-10 sm:px-10 lg:mx-0 lg:px-0 pt-2.5 pb-6 lg:pt-1 lg:pb-0 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:shrink-0 after:w-6 sm:after:w-10 lg:after:hidden">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.15,
              }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              className="group/card flex flex-col justify-between bg-card p-6 sm:p-7 border border-hairline relative transition-colors duration-300 hover:border-accent/40 dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] w-[86vw] sm:w-[500px] lg:w-auto shrink-0 snap-start"
            >
              <div>
                {/* Browser Window Mockup Frame with Real Thumbnail */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live website`}
                  className="group/thumb block relative w-full aspect-[16/9.5] overflow-hidden border border-hairline bg-ink mb-6 rounded shadow-2xl"
                >
                  {/* Browser Chrome Title Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-surface/95 border-b border-hairline backdrop-blur-md z-20 relative select-none">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-red-500/80" />
                      <span className="size-2.5 rounded-full bg-amber-500/80" />
                      <span className="size-2.5 rounded-full bg-emerald-500/80" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-ink/70 border border-hairline text-[11px] font-mono text-chalk/90 max-w-[220px] sm:max-w-xs truncate">
                      <Lock size={10} className="text-accent shrink-0" />
                      <span className="truncate">{project.displayUrl}</span>
                    </div>

                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider hidden sm:inline-block">
                      {project.year}
                    </span>
                  </div>

                  {/* High Quality Rendered Thumbnail Image */}
                  <div className="relative w-full h-[calc(100%-37px)] overflow-hidden bg-black">
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} live website preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/card:scale-[1.03] group-hover/thumb:scale-[1.03]"
                      loading="lazy"
                    />

                    {/* Floating Visit badge pill */}
                    <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-ink/90 border border-hairline text-chalk text-xs font-mono backdrop-blur-md shadow-lg transition-all duration-300 group-hover/card:border-accent group-hover/card:text-accent">
                      <Eye size={12} className="text-accent" />
                      <span>Preview Live</span>
                      <ArrowUpRight size={13} className="text-accent ml-0.5 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform" />
                    </div>

                    {/* Left corner tag badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-ink/80 border border-hairline/80 text-[10px] font-mono text-chalk/90 backdrop-blur-md">
                      {project.badge}
                    </div>
                  </div>
                </a>

                {/* Project Title and Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-sans text-2xl font-bold text-chalk group-hover/card:text-accent transition-colors inline-flex items-center gap-2"
                    >
                      <span>{project.title}</span>
                      <ExternalLink size={16} className="text-muted" />
                    </a>
                    <p className="font-mono text-xs text-accent mt-0.5">
                      {project.displayUrl} • {project.year}
                    </p>
                  </div>
                </div>

                {/* Bullet Points from CV */}
                <div className="space-y-2.5 mb-6">
                  {project.highlights.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-chalk/80 leading-relaxed font-sans">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags Footer */}
              <div className="pt-5 border-t border-hairline">
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted mb-2.5">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 border border-hairline bg-surface/80 text-muted font-mono transition-colors hover:text-chalk hover:border-accent/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
