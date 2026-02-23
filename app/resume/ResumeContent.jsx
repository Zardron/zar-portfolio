"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import ScrollIndicator from "../components/ScrollIndicator";
import { EXPERIENCE } from "../data/content";

const barVariants = {
  hidden: { width: 0 },
  visible: (percent) => ({
    width: `${percent}%`,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.05 + i * 0.02,
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const timelineItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 + i * 0.05,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const skillAreas = [
  {
    id: "frontend",
    title: "Frontend Development",
    summary:
      "Building responsive, accessible, and interactive interfaces with a focus on performance and UX.",
    progress: 85,
    keywords: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Animations"],
  },
  {
    id: "backend",
    title: "Backend Development",
    summary:
      "Designing and implementing secure, scalable APIs and data layers that power modern applications.",
    progress: 85,
    keywords: ["Node.js", "Laravel", "C#", "MongoDB", "PostgreSQL"],
  },
  {
    id: "ux",
    title: "UX & Product Thinking",
    summary:
      "Translating ideas into intuitive flows, wireframes, and polished experiences aligned with user needs.",
    progress: 75,
    keywords: ["User flows", "Wireframes", "Prototyping", "Accessibility"],
  },
  {
    id: "apps",
    title: "App & Multi‑platform Development",
    summary:
      "Shipping cross‑platform experiences across web and desktop, with a focus on reliability and maintainability.",
    progress: 75,
    keywords: ["PWAs", "Next.js", "Electron", "React Native"],
  },
];

const frontendTech = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "ReactJs",
  "NextJS",
  "ThreeJS",
  "8thwall",
  "Unreal Engine",
  "Tailwind CSS",
  "Bootstrap",
  "TanStack Query",
  "Redux",
  "Shadcn/ui",
  "Radix UI",
];

const backendTech = [
  "NodeJs",
  "ExpressJs",
  "PHP",
  "Laravel",
  "C#",
  "Asp.Net",
  "MySQL",
  "MongoDB",
  "GraphQL",
  "Supabase",
  "PostgreSQL",
];

const tools = [
  "Docker",
  "GitHub",
  "GitLab",
  "JIRA",
  "Cisco",
  "Figma",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "Adobe Flash",
];

export default function ResumeContent() {
  const [activeSlug, setActiveSlug] = useState(
    EXPERIENCE[0]?.slug ?? null
  );

  return (
    <>
      <ScrollIndicator />
      <div className="flex items-center justify-center min-h-screen px-6 py-6 md:px-8 md:py-8">
        <div className="max-w-7xl w-full space-y-8">
          {/* Header */}
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold text-white mb-1">
                  <span className="text-primary">04.</span> Resume
                </h1>
                <p className="text-text-muted text-base md:text-lg max-w-3xl">
                  Full‑Stack Developer focused on building modern, performant,
                  and visually polished web experiences — from product idea to
                  production and beyond.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/30">
                  Available for remote &amp; hybrid
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-text-muted text-xs border border-white/10">
                  Web development since 2017
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Experience accordion timeline */}
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-lg p-4 border border-white/5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h2 className="text-xl font-semibold text-white">
                  <span className="text-primary">Experience</span> Timeline
                </h2>
                <p className="text-xs md:text-sm text-text-muted max-w-xl">
                  Scroll through my journey and tap each role to expand the
                  details — animated along a vertical timeline.
                </p>
              </div>

              <div className="relative mt-2">
                {/* animated vertical line */}
                <motion.div
                  className="absolute left-4 top-3 bottom-4 w-px bg-linear-to-b from-primary/70 via-primary/20 to-transparent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ originY: 0 }}
                />

                <div className="space-y-2 pl-10">
                  {EXPERIENCE.map((item, index) => {
                    const isOpen = activeSlug === item.slug;

                    return (
                      <motion.div
                        key={item.slug}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        variants={timelineItemVariants}
                        className="relative border border-white/5 rounded-lg bg-black/30 overflow-hidden hover:border-white/10 transition-colors duration-300"
                      >
                        {/* animated dot */}
                        <motion.span
                          className="absolute -left-[9px] top-4 w-3 h-3 rounded-full bg-primary shadow-[0_0_0_4px_rgba(59,130,246,0.25)]"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 0.3, delay: 0.05 * index }}
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setActiveSlug((prev) =>
                              prev === item.slug ? null : item.slug
                            )
                          }
                          className="w-full flex items-start justify-between gap-3 px-3 py-2 text-left hover:bg-white/5 transition-colors"
                        >
                          <div>
                            <h3 className="text-sm md:text-base font-semibold text-white">
                              {item.position}
                            </h3>
                            <p className="text-xs md:text-sm text-primary">
                              {item.companyName}
                            </p>
                            <p className="text-[11px] md:text-xs text-text-muted/80">
                              {item.address}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1 shrink-0">
                            <span className="text-[11px] md:text-xs text-text-muted text-right">
                              {item.duration}
                            </span>
                            <motion.span
                              className="text-[10px] uppercase tracking-wide text-primary border border-primary/50 rounded-full px-2 py-0.5"
                              animate={{
                                backgroundColor: isOpen
                                  ? "rgba(59,130,246,0.1)"
                                  : "rgba(15,23,42,0.6)",
                                color: isOpen ? "#ffffff" : "rgb(59,130,246)",
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {isOpen ? "Open" : "Details"}
                            </motion.span>
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.25,
                                ease: [0.25, 0.1, 0.25, 1],
                              }}
                              style={{ overflow: "hidden" }}
                              className="px-3 pb-3 pt-1 border-t border-white/5"
                            >
                              <ul className="mt-1.5 space-y-1">
                                {item.responsibilities.map((r, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-1.5 text-[11px] md:text-xs text-text-muted"
                                  >
                                    <span className="mt-[6px] w-1 h-1 rounded-full bg-primary shrink-0" />
                                    <span>{r.desc}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Skills & tech stack */}
          <AnimatedSection delay={0.14}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Core skills with progress bars */}
              <motion.div
                className="glass rounded-lg p-4 border border-white/5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -2 }}
              >
                <h2 className="text-lg font-semibold text-white mb-2">
                  <span className="text-primary">Core Skills</span> &amp;
                  Proficiency
                </h2>
                <p className="text-xs md:text-sm text-text-muted mb-3">
                  Self‑assessed levels based on production work, freelance
                  projects, and ongoing learning.
                </p>
                <div className="space-y-3">
                  {skillAreas.map((skill) => (
                    <div
                      key={skill.id}
                      className="border border-white/5 rounded-lg p-3 bg-black/25"
                    >
                      <div className="flex items-center justify-between gap-3 mb-1.5">
                        <h3 className="text-sm md:text-base font-semibold text-white">
                          {skill.title}
                        </h3>
                        <span className="text-sm text-white font-medium">
                          {skill.progress}%
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-text-muted mb-2">
                        {skill.summary}
                      </p>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden mb-2 relative">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          custom={skill.progress}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-20px" }}
                          variants={barVariants}
                        />
                        <div className="absolute inset-0 rounded-full animate-shimmer" />
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.keywords.map((tag, i) => (
                          <motion.span
                            key={tag}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={tagVariants}
                            className="px-2 py-0.5 bg-primary/10 text-primary rounded text-[11px] border border-primary/20"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tech & tools */}
              <motion.div
                className="glass rounded-lg p-4 border border-white/5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -2 }}
              >
                <h2 className="text-lg font-semibold text-white mb-2">
                  <span className="text-primary">Tech Stack</span> &amp; Tools
                </h2>
                <p className="text-xs md:text-sm text-text-muted mb-3">
                  The main technologies I use to design, build, and ship modern
                  applications.
                </p>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {frontendTech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          custom={i}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={tagVariants}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs md:text-sm border border-primary/20 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      Backend &amp; Databases
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {backendTech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          custom={i}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={tagVariants}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs md:text-sm border border-primary/20 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      Tools &amp; Others
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool, i) => (
                        <motion.span
                          key={tool}
                          custom={i}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={tagVariants}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs md:text-sm border border-primary/20 cursor-default"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Education & CTA */}
          <AnimatedSection delay={0.18}>
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6">
              <motion.div
                className="glass rounded-lg p-4 border border-white/5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -2 }}
              >
                <h2 className="text-lg font-semibold text-white mb-3">
                  <span className="text-primary">Education</span>
                </h2>
                <div className="border border-white/5 rounded-lg p-3 bg-black/25">
                  <h3 className="text-sm md:text-base font-semibold text-white mb-0.5">
                    Bachelor of Science in Information Technology
                  </h3>
                  <p className="text-xs md:text-sm text-text-muted mb-1">
                    University of Cebu Lapu-Lapu and Mandaue (UCLM)
                  </p>
                  <p className="text-xs text-text-muted/80">Graduate</p>
                </div>
              </motion.div>

              <motion.div
                className="glass rounded-lg p-4 border border-primary/20 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -2 }}
              >
                <p className="text-white font-semibold text-base mb-1">
                  Let&apos;s work together
                </p>
                <p className="text-text-muted text-sm max-w-xl mx-auto mb-3">
                  Need help with a new product, refactor, or full‑stack
                  platform? I can help scope, design, and build it with a modern
                  stack that matches your goals.
                </p>
                <motion.a
                  href="/contact"
                  className="inline-block px-6 py-2.5 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-medium text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get in touch
                </motion.a>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}

