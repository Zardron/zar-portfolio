'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiMenu, HiX, HiDownload } from 'react-icons/hi'

const navItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 + i * 0.04, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export const menuItems = [
  { name: 'Home', href: '/', sequence: "01" },
  { name: 'About', href: '/about', sequence: "02" },
  { name: 'Services', href: '/services', sequence: "03" },
  { name: 'Resume', href: '/resume', sequence: "04" },
  { name: 'Projects', href: '/projects', sequence: "05" },
  { name: 'Blog', href: '/blog', sequence: "06" },
  { name: 'Contact', href: '/contacts', sequence: "07" }
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Zardron', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/zardron-angelo-pesquera-89b8961ba/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/itsmezardron/', label: 'Instagram' },
  { icon: FaFacebook, href: 'https://www.facebook.com/zardron.pesquera', label: 'Facebook' },
]

function SidebarContent({ pathname, onNavClick }) {
  return (
    <>
      {/* Profile Section */}
      <motion.div
        className='flex flex-col items-center pt-10 pb-8 px-6'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        {/* Avatar with gradient border */}
        <div className='relative mb-5'>
          <div className='absolute inset-0 rounded-2xl bg-primary/40 animate-glow-pulse' />
          <div className='gradient-border relative z-10'>
            <div className='gradient-border-inner p-1'>
              <Image
                src='/avatar.jpg'
                alt='Zardron'
                width={120}
                height={120}
                className='w-28 h-28 object-cover rounded-[calc(1rem-6px)]'
              />
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className='font-display text-2xl font-bold tracking-tight mb-1'>
          <span className='bg-linear-to-r from-primary to-emerald-300 bg-clip-text text-transparent'>
            ZARDRON <span className='text-white'>PESQUERA</span>
          </span>
          <span className='text-white/80'>.</span>
        </h1>
        <p className='text-text-muted text-sm font-medium tracking-wide mb-1'>
          Full Stack Developer
        </p>
        <div className='flex items-center gap-1 text-text-muted/70 text-xs'>
          <HiOutlineLocationMarker className='w-3 h-3' />
          <span>Cebu, Philippines</span>
        </div>

        {/* Social Links */}
        <div className='flex items-center gap-2 mt-5'>
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className='w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-colors duration-300'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className='w-4 h-4' />
            </motion.a>
          ))}
        </div>

        {/* Download Resume Button */}
        <motion.a
          href='/PESQUERA - CV.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-6 flex items-center justify-center gap-2 w-full max-w-[200px] px-4 py-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-background transition-all duration-300 text-sm font-semibold tracking-wide'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <HiDownload className='w-5 h-5' />
          Download Resume
        </motion.a>
      </motion.div>

      {/* Divider */}
      <div className='mx-6 h-px bg-linear-to-r from-transparent via-white/10 to-transparent' />

      {/* Navigation */}
      <nav className='flex-1 px-5 py-8 overflow-y-auto'>
        <ul className='flex flex-col gap-1'>
          {menuItems.map((item, i) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <motion.li
                key={item.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link
                  href={item.href}
                  onClick={onNavClick}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative ${isActive
                    ? 'text-white'
                    : 'text-text-muted hover:text-white hover:bg-white/5'
                    }`}
                >
                  {isActive && (
                    <motion.span
                      className='absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full'
                      layoutId="nav-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`font-display text-xs transition-colors ${isActive ? 'text-primary font-semibold' : 'text-primary/50 group-hover:text-primary'
                    }`}>
                    {item.sequence}
                  </span>
                  <span className={`font-medium text-[15px] tracking-wide ${isActive ? 'font-semibold' : ''
                    }`}>
                    {item.name}
                  </span>
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </nav>

      {/* Footer */}
      <motion.div
        className='px-6 py-5 border-t border-white/5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <p className='text-[10px] text-text-muted/50 text-center tracking-wider uppercase'>
          &copy; 2026 Zardron
        </p>
      </motion.div>
    </>
  )
}

const LeftPanel = () => {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── Desktop sidebar (hidden on mobile) ── */}
      <motion.div
        className='glass fixed top-0 left-0 flex-col h-screen w-72 border-r border-white/5 hidden lg:flex'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <SidebarContent pathname={pathname} onNavClick={undefined} />
      </motion.div>

      {/* ── Mobile top bar ── */}
      <div className='lg:hidden fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-4 h-14 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-8 h-8 rounded-lg overflow-hidden border border-primary/30'>
            <Image src='/avatar.jpg' alt='Zardron' width={32} height={32} className='object-cover w-full h-full' />
          </div>
          <span className='font-display font-bold text-white text-sm tracking-tight'>ZARDRON<span className='text-primary'>.</span></span>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          className='w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-colors'
          aria-label='Open menu'
        >
          <HiMenu className='w-5 h-5' />
        </button>
      </div>

      {/* ── Mobile drawer overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className='lg:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className='lg:hidden fixed top-0 left-0 h-full w-72 z-[70] glass border-r border-white/5 flex flex-col overflow-y-auto'
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Close button */}
              <button
                onClick={() => setMobileOpen(false)}
                className='absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-colors'
                aria-label='Close menu'
              >
                <HiX className='w-4 h-4' />
              </button>

              <SidebarContent pathname={pathname} onNavClick={() => setMobileOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default LeftPanel
