"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeBlur, ScaleReveal } from "../components/AnimatedSection";

// ─── Chevron icons ────────────────────────────────────────────────────────────
function ChevronLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const projects = [
  {
    id: "techeventx",
    number: "01",
    title: "TechEventX",
    type: "SaaS Platform",
    tagline: "Full-stack event management connecting attendees, organizers & admins in one ecosystem.",
    problem: "Tech event spaces lacked a unified platform — attendees had no reliable way to discover and book events, while organizers juggled fragmented tools for ticketing, team management, and payments.",
    solution: "A multi-role SaaS platform with QR digital tickets, organizer analytics dashboard, subscription-based tiers, and dual Stripe/PayMongo payment integration.",
    highlights: [
      "Multi-role RBAC — Users, Organizers, and Admin",
      "QR-code digital tickets with event discovery & booking",
      "Organizer analytics, team & subscription management",
      "Stripe + PayMongo dual payment gateway",
    ],
    stack: {
      Frontend: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Radix UI", "Recharts", "Zustand"],
      "Data & API": ["TanStack Query", "TanStack Table"],
      Backend: ["MongoDB", "Mongoose", "JWT", "bcryptjs"],
      Payments: ["Stripe", "PayMongo"],
      Integrations: ["Cloudinary", "SendGrid", "Mailgun", "qrcode", "Sharp", "jsPDF", "PDFKit"],
    },
    images: [
      "/assets/projects/techeventx/1.png",
      "/assets/projects/techeventx/2.png",
      "/assets/projects/techeventx/3.png",
      "/assets/projects/techeventx/4.png",
      "/assets/projects/techeventx/5.png",
      "/assets/projects/techeventx/6.png",
    ],
    accent: "#64ffda",
  },
  {
    id: "resumeiqhub",
    number: "02",
    title: "ResumeIQHub",
    type: "SaaS Platform",
    tagline: "AI-powered recruitment platform unifying job seekers and recruiters in one space.",
    problem: "Job seekers had no AI feedback loop on their resumes, and recruiters spent hours manual screening — with no shared space to communicate or track progress efficiently.",
    solution: "A full-stack recruitment SaaS with AI-enhanced resume building, real-time job matching, live application tracking via Socket.io, and recruiter direct messaging.",
    highlights: [
      "AI resume builder — 16+ templates, 20+ Gemini features",
      "Personalized job matching & real-time recommendations",
      "Live Socket.io messaging between recruiters & job seekers",
      "Resume analytics — views and downloads per document",
    ],
    stack: {
      Frontend: ["React 19", "Redux Toolkit", "React Router", "Vite", "Tailwind CSS", "Recharts"],
      "Real-time": ["Socket.io"],
      Backend: ["Node.js", "Express.js 5", "MongoDB", "Mongoose", "JWT", "bcrypt"],
      AI: ["Google Gemini AI"],
      Integrations: ["Cloudinary", "SendGrid", "jsPDF", "html2canvas", "node-cron"],
    },
    images: [
      "/assets/projects/resumeiqhub/1.png",
      "/assets/projects/resumeiqhub/2.png",
      "/assets/projects/resumeiqhub/3.png",
      "/assets/projects/resumeiqhub/4.png",
      "/assets/projects/resumeiqhub/5.png",
    ],
    accent: "#64ffda",
  },
  {
    id: "zmcollection",
    number: "03",
    title: "ZM Collection",
    type: "E-Commerce",
    tagline: "Modern beauty & fashion storefront with a comprehensive admin dashboard.",
    problem: "A beauty and fashion brand needed a premium custom storefront with a smooth shopping experience and full inventory control — without depending on third-party commerce tools.",
    solution: "A fully responsive Next.js e-commerce platform with persistent cart, organized product collections, and an admin dashboard for orders, customers, and low-stock alerts.",
    highlights: [
      "Fully responsive storefront with localStorage cart",
      "Product catalog with collections & detailed pages",
      "Admin dashboard — sales metrics, orders, customers",
      "Built with Next.js 16 & TypeScript, no external commerce engine",
    ],
    stack: {
      Frontend: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Radix UI", "Lucide React"],
      "State & Styling": ["React Context API", "PostCSS", "Google Fonts"],
      Assets: ["Unsplash"],
    },
    images: [
      "/assets/projects/zmcollection/1.png",
      "/assets/projects/zmcollection/2.png",
      "/assets/projects/zmcollection/3.png",
      "/assets/projects/zmcollection/4.png",
      "/assets/projects/zmcollection/5.png",
      "/assets/projects/zmcollection/6.png",
      "/assets/projects/zmcollection/7.png",
    ],
    accent: "#64ffda",
  },
  {
    id: "oldportfolio",
    number: "04",
    title: "V1 Portfolio",
    type: "Personal Website",
    tagline: "A modern, interactive 3D portfolio website showcasing my early work and experience.",
    problem: "I needed a creative and immersive way to showcase my skills as a Full Stack Developer, specializing in React, Node.js, and Web 3D technologies, while providing a memorable user experience.",
    solution: "Designed and developed an interactive portfolio featuring 3D black hole animations using Three.js, dynamic particle effects, and smooth page transitions powered by Framer Motion within a modern dark UI.",
    highlights: [
      "Interactive 3D animations using Three.js and React Three Fiber",
      "Dynamic star background with particle effects",
      "Smooth page transitions and interactions with Framer Motion",
      "Performance optimized builds with Vite"
    ],
    stack: {
      Frontend: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
      "3D & Graphics": ["Three.js", "@react-three/fiber", "@react-three/drei"],
      "UI & Effects": ["tsparticles", "react-type-animation", "Heroicons"]
    },
    images: [
      "/assets/projects/oldportfolio/1.png",
      "/assets/projects/oldportfolio/2.png",
      "/assets/projects/oldportfolio/3.png",
      "/assets/projects/oldportfolio/4.png",
      "/assets/projects/oldportfolio/5.png",
      "/assets/projects/oldportfolio/6.png",
      "/assets/projects/oldportfolio/7.png"
    ],
    accent: "#64ffda",
  },
];

// ─── Carousel ─────────────────────────────────────────────────────────────────
function Carousel({ images, title, accent }) {
  const [active, setActive] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const prev = useCallback(() => setActive((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setActive((i) => (i + 1) % images.length), [images.length]);

  // Handle keyboard events for modal
  useCallback(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") setIsModalOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, prev, next]);

  // Handle body scroll locking
  useCallback(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isModalOpen]);

  return (
    <>
      <div className="space-y-2">
        {/* Main image */}
        <div
          className="relative w-full rounded-lg group bg-black/20 overflow-hidden cursor-pointer"
          style={{ paddingBottom: "56.25%" }}
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            key={active}
            src={images[active]}
            alt={`${title} screenshot ${active + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

          {/* Hover Overlay Icon */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6" /><path d="Msubtitle 9l12 -12" /><path d="M14 15l7 7" /><path d="M21 21v-6h-6" /><path d="M3 9V3h6" /><path d="M3 3l7 7" /><path d="M9 21H3v-6" /><path d="M3 21l7-7" />
              </svg>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white bg-black/50 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white bg-black/50 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronRight />
          </button>

          {/* Slide counter */}
          <span className="absolute bottom-2.5 right-3 text-xs font-mono text-white/60 bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded">
            {active + 1}/{images.length}
          </span>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-1.5 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex-shrink-0 relative rounded overflow-hidden transition-all duration-200"
              style={{
                width: 60, height: 38,
                outline: i === active ? `2px solid ${accent}` : "2px solid transparent",
                outlineOffset: 1,
                opacity: i === active ? 1 : 0.38,
              }}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="60px" />
            </button>
          ))}
        </div>
      </div>

      {/* Full-screen Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-[101]"
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal Image Container */}
            <div
              className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={images[active]}
                    alt={`${title} fullscreen ${active + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Prev Button */}
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white bg-black/50 backdrop-blur-md border border-white/10 hover:bg-black/80 hover:scale-110 transition-all z-[101]"
              >
                <ChevronLeft />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white bg-black/50 backdrop-blur-md border border-white/10 hover:bg-black/80 hover:scale-110 transition-all z-[101]"
              >
                <ChevronRight />
              </button>

              {/* Slide Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 z-[101]">
                <span className="text-white/80 font-mono text-sm">
                  {active + 1} / {images.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Project detail panel ──────────────────────────────────────────────────────
function ProjectDetail({ project }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Project title row */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-display text-3xl font-bold text-white">{project.title}</span>
              <span
                className="text-xs font-mono px-2 py-0.5 rounded-full mt-0.5"
                style={{ background: `${project.accent}15`, color: project.accent, border: `1px solid ${project.accent}28` }}
              >
                {project.type}
              </span>
            </div>
            <p className="text-sm text-text-muted">{project.tagline}</p>
          </div>
          {/* Status badge */}
          <span
            className="flex-shrink-0 flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full mt-1"
            style={{ background: `${project.accent}12`, color: project.accent, border: `1px solid ${project.accent}25` }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.accent }} />
            Production
          </span>
        </div>

        {/* Image carousel — full width */}
        <Carousel images={project.images} title={project.title} accent={project.accent} />

        {/* Info grid — 2 columns below image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 items-start">
          {/* Left — Problem + Solution + Highlights */}
          <div
            className="rounded-lg p-4 space-y-4"
            style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${project.accent}12` }}
          >
            <div>
              <p className="text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: `${project.accent}70` }}>
                Problem
              </p>
              <p className="text-xs text-text-muted leading-relaxed">{project.problem}</p>
            </div>
            <div style={{ borderTop: `1px solid ${project.accent}10`, paddingTop: "1rem" }}>
              <p className="text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: `${project.accent}70` }}>
                Solution
              </p>
              <p className="text-xs text-text-muted leading-relaxed">{project.solution}</p>
            </div>
            <div style={{ borderTop: `1px solid ${project.accent}10`, paddingTop: "1rem" }}>
              <p className="text-xs font-mono uppercase tracking-widest mb-2.5" style={{ color: `${project.accent}70` }}>
                Highlights
              </p>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accent }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Tech Stack */}
          <div className="space-y-4">
            {/* Tech Stack */}
            <div
              className="rounded-lg p-4"
              style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${project.accent}12` }}
            >
              <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: `${project.accent}70` }}>
                Tech Stack
              </p>
              <div className="space-y-2.5">
                {Object.entries(project.stack).map(([cat, techs]) => (
                  <div key={cat}>
                    <p className="text-xs font-mono mb-1" style={{ color: `${project.accent}45` }}>{cat}</p>
                    <div className="flex flex-wrap gap-1">
                      {techs.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded font-mono"
                          style={{
                            background: `${project.accent}0a`,
                            color: project.accent,
                            border: `1px solid ${project.accent}1e`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId);

  return (
    <div className="min-h-screen px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Page heading */}
        <FadeBlur className="mb-8">
          <p className="text-primary font-mono text-xs uppercase tracking-widest mb-1.5">Selected Work</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white">
            <span className="text-primary">05.</span> Projects
          </h1>
        </FadeBlur>

        {/* Project tab bar */}
        <FadeBlur
          delay={0.1}
          className="flex gap-2 mb-6 flex-wrap"
        >
          {projects.map((p) => {
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background: isActive ? `${p.accent}14` : "rgba(255,255,255,0.03)",
                  color: isActive ? p.accent : "rgba(255,255,255,0.45)",
                  border: isActive ? `1px solid ${p.accent}35` : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: isActive ? `0 0 16px ${p.accent}12` : "none",
                }}
              >
                <span className="font-mono text-xs opacity-60">{p.number}</span>
                <span className="font-display font-semibold">{p.title}</span>
                <span
                  className="hidden sm:inline text-xs font-mono px-1.5 py-0.5 rounded"
                  style={{ background: isActive ? `${p.accent}20` : "rgba(255,255,255,0.05)", opacity: 0.7 }}
                >
                  {p.type}
                </span>
              </button>
            );
          })}
        </FadeBlur>

        {/* Active project content */}
        <ScaleReveal
          delay={0.15}
        >
          <ProjectDetail project={active} />
        </ScaleReveal>
      </div>
    </div>
  );
}
