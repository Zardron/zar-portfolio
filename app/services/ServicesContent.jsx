"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import ScrollIndicator from "../components/ScrollIndicator";
import { FiCode, FiServer, FiLayout, FiSmartphone } from "react-icons/fi";

const services = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "I build the layout, visuals, and interactivity of websites and web apps that users see and use directly. From responsive UIs to complex single-page applications, I focus on performance, accessibility, and a smooth experience across devices.",
    highlights: [
      "Responsive & mobile-first layouts",
      "SPAs with React / Next.js",
      "Animations & micro-interactions",
      "Cross-browser compatibility",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "Three.js"],
    icon: FiCode,
    progress: 85,
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "I handle server-side logic, APIs, databases, and authentication so your app is secure, scalable, and fast. Whether it's REST, GraphQL, or real-time features, I design backends that integrate cleanly with your frontend.",
    highlights: [
      "REST & GraphQL APIs",
      "Database design & optimization",
      "Auth & authorization",
      "Deployment & DevOps basics",
    ],
    tech: ["Node.js", "Laravel", "C#", "MongoDB", "PostgreSQL"],
    icon: FiServer,
    progress: 85,
  },
  {
    id: "ux",
    title: "UX Design",
    description:
      "I create clear, useful, and enjoyable experiences for people using digital products. From user flows and wireframes to usability testing, I bridge design and development so the final product feels intuitive and purposeful.",
    highlights: [
      "User research & personas",
      "Wireframes & prototypes",
      "Usability testing",
      "Design systems",
    ],
    tech: ["Figma", "User flows", "Prototyping", "Accessibility"],
    icon: FiLayout,
    progress: 75,
  },
  {
    id: "app",
    title: "App Development",
    description:
      "I design, build, and ship software for web, desktop, and mobile. From PWAs and Electron apps to cross-platform solutions, I deliver apps that are maintainable, performant, and aligned with your product goals.",
    highlights: [
      "Progressive Web Apps (PWA)",
      "Cross-platform strategies",
      "Performance & optimization",
      "App store readiness",
    ],
    tech: ["Next.js", "PWA", "Electron", "React Native"],
    icon: FiSmartphone,
    progress: 75,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 + i * 0.06,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const barVariants = {
  hidden: { width: 0 },
  visible: (percent) => ({
    width: `${percent}%`,
    transition: {
      delay: 0.4,
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
      delay: 0.15 + i * 0.02,
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function ServicesContent() {
  return (
    <>
      <ScrollIndicator />
      <div className="flex items-center justify-center min-h-screen px-6 py-6 md:px-8 md:py-8">
        <div className="max-w-7xl w-full">
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-white mb-1">
              <span className="text-primary">03.</span> Services
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <p className="text-text-muted text-base leading-relaxed max-w-3xl mb-4">
              I offer end-to-end support for web and app projects—from frontend
              and backend development to UX design and full-stack delivery. Each
              service is tailored to your goals, with a focus on clean code,
              clear communication, and on-time delivery.
            </p>
          </AnimatedSection>

          {/* Service cards - 2x2 grid, equal height */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={cardVariants}
                className="glass rounded-lg p-3 flex flex-col h-full min-h-[220px] group"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center gap-2 shrink-0 mb-1.5 ">
                  <div className="shrink-0 w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-[0_0_12px_rgba(100,255,218,0.15)] transition-all duration-300">
                    <service.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0 ">
                    <h3 className="text-base font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between border-t border-white/5">
                  <p className="text-text-muted text-sm leading-relaxed line-clamp-3 mt-0.5">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-0.5 pl-0.5 shrink-0 mt-1.5 mb-1.5">
                  {service.highlights.map((item, j) => (
                    <li
                      key={j}
                      className="text-text-muted text-sm flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1 pt-2.5 border-t border-white/5 mt-auto shrink-0">
                  {service.tech.map((tag, j) => (
                    <motion.span
                      key={tag}
                      custom={j}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={tagVariants}
                      className="px-1.5 py-0.5 bg-primary/10 text-primary rounded text-sm border border-primary/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills with progress bars */}
          <AnimatedSection delay={0.1}>
            <h2 className="text-xl font-bold text-white mb-0.5">
              <span className="text-primary">Skills</span> & Proficiency
            </h2>
            <p className="text-text-muted text-md max-w-2xl mb-3">
              Self-assessed proficiency in each area, based on real project
              experience and continuous learning.
            </p>
          </AnimatedSection>

          <div className="space-y-2 mb-6">
            {services.map((service, i) => (
              <motion.div
                key={`skill-${service.id}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  delay: 0.1 + i * 0.05,
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="glass rounded-lg p-2.5 md:p-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
              >
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <service.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white font-semibold">
                    {service.title}
                  </span>
                </div>
                <div className="flex-1 flex items-center gap-3 min-w-0">
                  <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden relative">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      custom={service.progress}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-20px" }}
                      variants={barVariants}
                    />
                    <div className="absolute inset-0 rounded-full animate-shimmer" />
                  </div>
                  <span className="text-white font-medium w-10 text-right shrink-0">
                    {service.progress}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={0.15}>
            <div className="glass rounded-lg p-3 md:p-4 text-center border border-primary/10">
              <p className="text-white font-semibold text-base mb-0.5">
                Have a project in mind?
              </p>
              <p className="text-text-muted text-sm max-w-xl mx-auto mb-3">
                Whether you need a new site, an API, UX improvements, or a
                full-stack app, I can help scope it, build it, and ship it.
                Let&apos;s talk.
              </p>
              <motion.a
                href="/projects"
                className="inline-block px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-medium text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View my work
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
