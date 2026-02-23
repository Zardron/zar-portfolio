"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BLOGS } from "../data/content";
import { FadeBlur } from "../components/AnimatedSection";

const accent = "#64ffda";

function BlogCard({ post, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      className="h-full"
    >
      <Link
        href={`/blog/${post.id}`}
        className="flex flex-col h-full rounded-xl p-5 transition-all duration-200 group"
        style={{
          background: "rgba(17, 25, 40, 0.55)",
          border: "1px solid rgba(100,255,218,0.1)",
          boxShadow: "0 0 0 0 rgba(100,255,218,0)",
          transition: "border 0.2s, box-shadow 0.3s",
          backdropFilter: "blur(10px)",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.border = `1px solid ${accent}30`; e.currentTarget.style.boxShadow = `0 0 20px rgba(100,255,218,0.08)`; }}
        onMouseLeave={(e) => { e.currentTarget.style.border = "1px solid rgba(100,255,218,0.1)"; e.currentTarget.style.boxShadow = "0 0 0 0 rgba(100,255,218,0)"; }}
      >
        {/* Category + meta */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: accent }}>
            {post.category}
          </span>
          <span className="text-xs font-mono text-text-muted/60">
            {post.date} · {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-base font-display font-semibold leading-snug mb-2 transition-colors group-hover:text-primary"
          style={{ color: "white" }}
        >
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-xs text-text-muted leading-relaxed line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div
          className="mt-auto flex items-center justify-between gap-2 pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded font-mono"
                style={{
                  background: `${accent}0d`,
                  color: accent,
                  border: `1px solid ${accent}22`,
                }}
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-[11px] px-2 py-0.5 rounded font-mono bg-white/5 text-text-muted/60">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
          <span
            className="text-xs font-mono flex-shrink-0 transition-colors group-hover:text-primary"
            style={{ color: `${accent}70` }}
          >
            Read →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogsContent() {
  return (
    <div className="min-h-screen px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeBlur className="mb-10">
          <p className="text-primary font-mono text-xs uppercase tracking-widest mb-1.5">Writing</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-3">
            <span className="text-primary">06.</span> Blog
          </h1>
          <p className="text-text-muted text-sm leading-relaxed max-w-lg">
            Long-form notes on full-stack development, modern tooling, and the things I&apos;m actively learning and shipping.
          </p>
        </FadeBlur>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {BLOGS.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-12 text-center text-xs font-mono text-text-muted"
        >
          More posts coming soon<span className="text-primary animate-pulse ml-1">_</span>
        </motion.p>
      </div>
    </div>
  );
}
