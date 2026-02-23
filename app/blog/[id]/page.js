"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BLOGS } from "../../data/content";
import { FadeBlur } from "../../components/AnimatedSection";

const accent = "#64ffda";

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export default function BlogPostPage() {
  const { id } = useParams();
  const router = useRouter();
  const post = BLOGS.find((b) => b.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <p className="text-primary font-mono text-xs uppercase tracking-widest mb-3">404</p>
          <h1 className="text-3xl font-display font-bold text-white mb-4">Post not found</h1>
          <button
            onClick={() => router.push("/blog")}
            className="text-sm font-mono text-primary hover:underline"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-8 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => router.push("/blog")}
          className="flex items-center gap-1.5 text-xs font-mono mb-10 transition-colors hover:text-primary"
          style={{ color: `${accent}70` }}
        >
          <ChevronLeft />
          Back to Blog
        </motion.button>

        {/* Post header */}
        <FadeBlur className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: accent }}>
              {post.category}
            </span>
            <span className="text-text-muted/30 text-xs">·</span>
            <span className="text-xs font-mono text-text-muted/60">{post.date}</span>
            <span className="text-text-muted/30 text-xs">·</span>
            <span className="text-xs font-mono text-text-muted/60">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-white leading-snug mb-4">
            {post.title}
          </h1>

          <p className="text-sm text-text-muted leading-relaxed mb-5">{post.excerpt}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-0.5 rounded font-mono"
                style={{
                  background: `${accent}0d`,
                  color: accent,
                  border: `1px solid ${accent}22`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeBlur>

        {/* Divider */}
        <div
          className="mb-8 h-px origin-left animate-shimmer"
        />

        {/* Article body */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Sources */}
        {post.sources?.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-10 pt-6"
            style={{ borderTop: `1px solid ${accent}15` }}
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: `${accent}60` }}>
              Sources
            </p>
            <ul className="space-y-1">
              {post.sources.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-text-muted/60 font-mono">
                  <span style={{ color: `${accent}50` }}>—</span>
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Back footer */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          onClick={() => router.push("/blog")}
          className="mt-12 flex items-center gap-1.5 text-xs font-mono transition-colors hover:text-primary"
          style={{ color: `${accent}60` }}
        >
          <ChevronLeft />
          Back to Blog
        </motion.button>
      </div>
    </div>
  );
}
