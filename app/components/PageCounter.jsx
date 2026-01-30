'use client'

import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { menuItems } from './LeftPanel'

export default function PageCounter() {
  const pathname = usePathname()
  
  const currentItem = menuItems.find(item => item.href === pathname)
  const currentSequence = currentItem?.sequence || "01"
  const totalPages = String(menuItems.length).padStart(2, '0')

  return (
    <motion.div
      className='fixed top-8 right-8 z-50'
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className='flex items-baseline gap-2'>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentSequence}
            className='font-display text-5xl font-bold text-white block'
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
          >
            {currentSequence}
          </motion.span>
        </AnimatePresence>
        <span className='text-text-muted text-lg font-light'>
          / {totalPages}
        </span>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={currentItem?.name || 'Home'}
          className='text-text-muted/60 text-xs tracking-widest uppercase mt-1'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {currentItem?.name || 'Home'}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  )
}
