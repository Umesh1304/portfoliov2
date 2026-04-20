import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import avatarImg from '../assets/avatar.jpeg'

const TAGLINES = [
  'Debugging reality. Building scalable solutions.',
  'Forging enterprise systems in the fires of Java.',
  'No bug survives. No system falls.',
  'Backend warrior. Uptime guardian.',
]

function useTypingAnimation(lines, speed = 55, pause = 2200) {
  const [display, setDisplay] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = lines[lineIndex]

    if (!deleting && charIndex <= current.length) {
      const t = setTimeout(() => setCharIndex(c => c + 1), speed)
      return () => clearTimeout(t)
    }

    if (!deleting && charIndex > current.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex(c => c - 1), speed / 2)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setLineIndex(i => (i + 1) % lines.length)
    }
  }, [charIndex, deleting, lineIndex, lines, speed, pause])

  useEffect(() => {
    setDisplay(lines[lineIndex].slice(0, charIndex))
  }, [charIndex, lineIndex, lines])

  return display
}

export default function Hero() {
  const tagline = useTypingAnimation(TAGLINES)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-28 pb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl"
      >
        {/* System header tag */}
        <motion.div
          variants={itemVariants}
          className="mb-4 flex items-center gap-2 text-xs font-mono-custom text-blood/70 tracking-widest"
        >
          <span className="text-blood">{'>'}</span>
          <span>INITIALIZING_PROFILE.SH</span>
          <span className="text-blood-bright animate-pulse">...</span>
        </motion.div>

        {/* Main glass card */}
        <motion.div
          variants={itemVariants}
          className="glass-card glow-border rounded-sm p-6 md:p-10 relative overflow-hidden"
          whileHover={{ boxShadow: '0 0 30px rgba(255,32,32,0.4), 0 0 80px rgba(139,0,0,0.3)' }}
          transition={{ duration: 0.3 }}
        >
          {/* Corner decorations */}
          <CornerDecor />

          {/* Inner content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            {/* Avatar */}
            <motion.div
              variants={itemVariants}
              className="flex-shrink-0"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div
                  className="absolute -inset-1 rounded-sm"
                  style={{
                    background: 'linear-gradient(135deg, #FF2020 0%, #FF4500 50%, #8B0000 100%)',
                    boxShadow: '0 0 20px #FF2020, 0 0 50px #8B000080',
                  }}
                />
                {/* Avatar box with real photo */}
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-sm overflow-hidden">
                  <img
                    src={avatarImg}
                    alt="Umesh Kumar"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Red cinematic tint overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, transparent 40%, rgba(139,0,0,0.4) 100%)',
                    }}
                  />
                  {/* CRT scanline overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)',
                    }}
                  />
                </div>

                {/* Status badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-0.5 glass-card border border-blood/50 rounded-sm text-[9px] font-mono-custom tracking-widest whitespace-nowrap">
                  <div className="w-1.5 h-1.5 rounded-full bg-blood-glow animate-pulse" />
                  <span className="text-blood-bright">ACTIVE</span>
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              {/* Rank label */}
              <motion.div variants={itemVariants} className="flex items-center gap-2 justify-center md:justify-start">
                <div className="h-px w-6 bg-blood" />
                <span className="text-[10px] tracking-[0.3em] text-blood font-mono-custom uppercase">
                  Profile: Active Warrior
                </span>
                <div className="h-px w-6 bg-blood" />
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="font-display font-black text-3xl md:text-5xl lg:text-6xl tracking-wider leading-none"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FFAAAA 40%, #FF2020 70%, #FF4500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none',
                  filter: 'drop-shadow(0 0 20px rgba(255,32,32,0.5))',
                }}
              >
                UMESH
                <br />
                KUMAR
              </motion.h1>

              {/* Subtitle tags */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center md:justify-start">
                {['JAVA DEV', 'TECH SUPPORT ENG', 'BACKEND FORGE'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-mono-custom tracking-[0.2em] border border-blood/50 text-blood-light rounded-sm"
                    style={{ background: 'rgba(139,0,0,0.15)', boxShadow: '0 0 8px rgba(139,0,0,0.2)' }}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Typing tagline */}
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-2 text-sm md:text-base font-mono-custom text-ash-bright min-h-[2rem]"
              >
                <span className="text-blood mt-0.5 flex-shrink-0">{'>'}</span>
                <span>
                  {tagline}
                  <span className="cursor-blink text-blood-glow">█</span>
                </span>
              </motion.div>

              {/* Divider */}
              <motion.div
                variants={itemVariants}
                className="h-px w-full"
                style={{
                  background: 'linear-gradient(90deg, #FF2020 0%, #FF450060 60%, transparent 100%)',
                }}
              />

              {/* Quick stats row */}
              <motion.div variants={itemVariants} className="flex gap-6 justify-center md:justify-start">
                {[
                  { label: 'LOCATION', value: 'INDIA' },
                  { label: 'STATUS', value: 'AVAILABLE' },
                  { label: 'FOCUS', value: 'BACKEND' },
                ].map((item) => (
                  <div key={item.label} className="text-center md:text-left">
                    <div className="text-[9px] text-ash tracking-widest">{item.label}</div>
                    <div className="text-xs font-display font-bold text-blood-bright">{item.value}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom system text */}
        <motion.div
          variants={itemVariants}
          className="mt-4 flex items-center gap-2 text-[10px] font-mono-custom text-ash/40 tracking-widest"
        >
          <span className="text-blood/50">{'>'}</span>
          <span>PROFILE_LOAD: 100% | THREAT_LEVEL: EXTREME | READY_FOR_COMBAT</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

function CornerDecor() {
  const corner = 'absolute w-6 h-6 border-blood-glow'
  return (
    <>
      <div className={`${corner} top-2 left-2 border-t-2 border-l-2`} style={{ boxShadow: '-2px -2px 8px rgba(255,32,32,0.5)' }} />
      <div className={`${corner} top-2 right-2 border-t-2 border-r-2`} style={{ boxShadow: '2px -2px 8px rgba(255,32,32,0.5)' }} />
      <div className={`${corner} bottom-2 left-2 border-b-2 border-l-2`} style={{ boxShadow: '-2px 2px 8px rgba(255,32,32,0.5)' }} />
      <div className={`${corner} bottom-2 right-2 border-b-2 border-r-2`} style={{ boxShadow: '2px 2px 8px rgba(255,32,32,0.5)' }} />
    </>
  )
}
