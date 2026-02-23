"use client";

import { motion } from "framer-motion";
import AnimatedSection, { ScaleReveal } from "../components/AnimatedSection";
import ScrollIndicator from "../components/ScrollIndicator";

const techTagVariants = {
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

export default function AboutContent() {
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

  return (
    <>
      <ScrollIndicator />
      <div className="flex items-center justify-center min-h-screen px-8 py-16">
        <div className="max-w-7xl w-full">
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-white mb-8">
              <span className="text-primary">02.</span> About Me
            </h1>
          </AnimatedSection>

          {/* Introduction */}
          <div className="mb-12">
            <AnimatedSection delay={0.1}>
              <p className="text-text-muted text-lg leading-relaxed mb-4">
                Since 2017, I started making websites. Since then, I&apos;ve
                been working on diverse projects that have shaped my expertise
                in full-stack development. My passion lies in crafting websites
                that are not only visually stunning but also intuitive and
                user-friendly.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-text-muted text-lg leading-relaxed mb-4">
                As a competitive coder, I bring a unique blend of technical
                excellence and creative design to every project. I have a strong
                understanding of web standards and best practices, ensuring that
                the solutions I build are both functional and aesthetically
                pleasing. My approach combines clean code architecture with
                attention to user experience.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-text-muted text-lg leading-relaxed">
                I&apos;m an ambitious developer driven by the belief that if I
                can envision it, I can bring it to life through code. This
                philosophy pushes me to continuously learn, innovate, and
                deliver exceptional digital experiences.
              </p>
            </AnimatedSection>
          </div>

          {/* Tech Stacks */}
          <AnimatedSection delay={0.1}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                <span className="text-primary">Tech</span> Stacks
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ScaleReveal>
                  <motion.div
                    className="glass rounded-lg p-6"
                    whileHover={{ y: -2 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">
                      <span className="text-primary">Frontend Technologies</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {frontendTech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          custom={i}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={techTagVariants}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm border border-primary/20 cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </ScaleReveal>

                <ScaleReveal delay={0.05}>
                  <motion.div
                    className="glass rounded-lg p-6"
                    whileHover={{ y: -2 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">
                      <span className="text-primary">Backend Technologies</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {backendTech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          custom={i}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={techTagVariants}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm border border-primary/20 cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </ScaleReveal>

                <ScaleReveal delay={0.1} className="md:col-span-2">
                  <motion.div
                    className="glass rounded-lg p-6"
                    whileHover={{ y: -2 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">
                      <span className="text-primary">Tools & Others</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool, i) => (
                        <motion.span
                          key={tool}
                          custom={i}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={techTagVariants}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm border border-primary/20 cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </ScaleReveal>
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <ScaleReveal delay={0.15}>
            <motion.div
              className="glass rounded-lg p-6"
              whileHover={{ y: -2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                <span className="text-primary">Education</span>
              </h2>
              <p className="text-text-muted text-lg">
                Bachelor of Science in Information Technology Graduate at{" "}
                <span className="text-primary">
                  University of Cebu Lapu-Lapu and Mandaue (UCLM)
                </span>
              </p>
            </motion.div>
          </ScaleReveal>
        </div>
      </div>
    </>
  );
}
