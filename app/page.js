"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

function TypingEffect({ phrases, typingSpeed = 100, deletingSpeed = 60, pauseTime = 1500 }) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentPhrase = phrases[phraseIndex % phrases.length]
  const fullText = currentPhrase.text

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing characters
        if (text.length < fullText.length) {
          setText(fullText.slice(0, text.length + 1))
        } else {
          // Pause at full phrase
          setTimeout(() => setIsDeleting(true), pauseTime)
          return
        }
      } else {
        // Deleting characters
        if (text.length > 0) {
          setText(fullText.slice(0, text.length - 1))
        } else {
          // Move to next phrase
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime, fullText])

  return (
    <span className="border-r-2 border-primary pr-1 animate-pulse">
      {currentPhrase.prefix}
      {text}
    </span>
  )
}

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl w-full">
        {/* Left Column - Details */}
        <div className="order-2 lg:order-1">
          <motion.p
            className="text-primary font-display text-lg mb-4"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Zardron<span className="text-primary">.</span>
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text-muted mb-6 whitespace-nowrap"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <TypingEffect
              phrases={[
                { prefix: '', text: "I'm a Full Stack Developer." },
                { prefix: 'I can do ', text: 'Frontend Development.' },
                { prefix: 'I can do ', text: 'Backend Development.' },
                { prefix: 'I can do ', text: 'UI/UX Design.' },
                { prefix: 'I can do ', text: 'App Development.' },
              ]}
            />
          </motion.h2>
          <motion.p
            className="text-text-muted text-lg max-w-2xl text-justify mb-8"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            I specialize in modern web development and building scalable applications across web and mobile. I focus on clean, maintainable code, smooth user experiences, and shipping reliable products quickly.
          </motion.p>
          <motion.a
            href="/portfolio"
            className="inline-block px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-medium"
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Check out my work
          </motion.a>
        </div>

        {/* Right Column - Picture */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative">
            {/* Gradient border effect */}
            <motion.div
              className="absolute -inset-1 bg-linear-to-r from-primary to-emerald-300 rounded-2xl blur-sm opacity-50"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative">
              <Image
                src="/avatar.jpg"
                alt="Zardron"
                width={400}
                height={400}
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl border-2 border-primary/20"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
