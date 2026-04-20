import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Header() {
  const [time, setTime] = useState('')
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const h = String(now.getHours()).padStart(2, '0')
      const m = String(now.getMinutes()).padStart(2, '0')
      const s = String(now.getSeconds()).padStart(2, '0')
      setTime(`${h}:${m}:${s}`)
    }
    update()
    const t = setInterval(update, 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const b = setInterval(() => setBlink(p => !p), 500)
    return () => clearInterval(b)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-blood/30"
      style={{ boxShadow: '0 0 20px rgba(139,0,0,0.3), 0 2px 0 rgba(255,32,32,0.2)' }}
    >
      {/* Top row */}
      <div className="px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Left: System label */}
        <div className="flex items-center gap-3">
          {/* Status dot */}
          <div className="relative flex items-center">
            <div className="w-2 h-2 rounded-full bg-blood-glow animate-ping absolute" />
            <div className="w-2 h-2 rounded-full bg-blood-glow relative" />
          </div>
          <span className="font-display text-xs md:text-sm font-bold tracking-[0.2em] text-blood-glow text-glow-red uppercase">
            Dev<span className="text-ash-light">.EXE</span>
          </span>
          <span className="hidden md:inline text-ash text-xs tracking-widest">—</span>
          <span className="hidden md:inline text-blood-bright text-xs tracking-[0.15em] font-mono-custom">
            <span className="text-ash-light">STATUS:</span>{' '}
            <span className="text-blood-bright text-glow-red">ONLINE</span>
            <span className={`ml-1 ${blink ? 'opacity-100' : 'opacity-0'} text-blood-glow`}>█</span>
          </span>
        </div>

        {/* Center: time */}
        <div className="hidden md:flex items-center gap-2 text-ash text-xs font-mono-custom tracking-widest">
          <span className="text-ash">SYS_CLOCK:</span>
          <span className="text-blood-bright font-bold">{time}</span>
        </div>

        {/* Right: Location */}
        <div className="flex items-center gap-2">
          <div className="w-px h-4 bg-blood/50" />
          <span className="text-xs tracking-[0.25em] font-display text-ash-bright">
            LOC:{' '}
            <span className="text-blood-light text-glow-red">Nilgiris</span>
          </span>
        </div>
      </div>

      {/* Glow divider line */}
      <div
        className="h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #8B0000 20%, #FF2020 50%, #8B0000 80%, transparent 100%)',
          boxShadow: '0 0 8px #FF2020, 0 0 20px #8B000080',
        }}
      />

      {/* Sub-bar */}
      <div className="px-4 md:px-8 py-1 flex items-center gap-4 text-[10px] text-ash/60 font-mono-custom tracking-widest">
        <span>REALM: BACKEND</span>
        <span className="text-blood/40">|</span>
        <span>WEAPON: JAVA</span>
        <span className="text-blood/40">|</span>
        <span>BUILD: STABLE</span>
        <span className="text-blood/40">|</span>
        <span className="ml-auto">v2.0.0-RELEASE</span>
      </div>
    </motion.header>
  )
}
