import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CURRENT_XP = 8420
const MAX_XP = 10000
const XP_PERCENT = (CURRENT_XP / MAX_XP) * 100

const milestones = [
  { xp: 2000, label: 'LV1' },
  { xp: 5000, label: 'LV2' },
  { xp: 8000, label: 'LV3' },
  { xp: 10000, label: 'MAX' },
]

export default function XPBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative px-4 pb-16 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="glass-card glow-border rounded-sm p-6 md:p-10 relative overflow-hidden"
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-blood-glow"
          style={{ boxShadow: '-2px -2px 8px rgba(255,32,32,0.4)' }} />
        <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-blood-glow"
          style={{ boxShadow: '2px 2px 8px rgba(255,32,32,0.4)' }} />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blood font-mono-custom">{'>'}</span>
                <span className="text-[10px] font-mono-custom tracking-[0.3em] text-ash/60">XP_SYSTEM.DAT</span>
              </div>
              <h2
                className="font-display font-black text-2xl md:text-3xl tracking-wider"
                style={{
                  background: 'linear-gradient(90deg, #FFFFFF 0%, #FF6B35 50%, #FF2020 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 10px rgba(255,32,32,0.4))',
                }}
              >
                LEVEL 02 WARRIOR
              </h2>
            </div>

            {/* XP counter */}
            <div className="flex items-end gap-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="font-display font-black text-3xl md:text-4xl text-blood-glow"
                style={{ textShadow: '0 0 20px rgba(255,32,32,0.6)' }}
              >
                {CURRENT_XP.toLocaleString()}
              </motion.span>
              <span className="text-ash font-mono-custom mb-1">
                / {MAX_XP.toLocaleString()} XP
              </span>
            </div>
          </div>

          {/* Progress bar container */}
          <div className="relative mb-4">
            {/* Background track */}
            <div
              className="h-6 md:h-8 rounded-sm relative overflow-hidden"
              style={{
                background: 'rgba(10,2,15,0.8)',
                border: '1px solid rgba(139,0,0,0.4)',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
              }}
            >
              {/* Track grid */}
              <div className="absolute inset-0"
                style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(139,0,0,0.2) 39px, rgba(139,0,0,0.2) 40px)',
                }}
              />

              {/* Progress fill */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${XP_PERCENT}%` } : {}}
                transition={{ duration: 1.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-full relative rounded-sm"
                style={{
                  background: 'linear-gradient(90deg, #4A0000 0%, #8B0000 25%, #C0392B 55%, #FF4500 80%, #FF8C00 100%)',
                  boxShadow: '0 0 20px rgba(255,32,32,0.6), 0 0 40px rgba(255,69,0,0.3)',
                }}
              >
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 rounded-sm"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                  }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
                />

                {/* Edge glow */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-2"
                  style={{ background: 'linear-gradient(90deg, transparent, #FF8C00)', boxShadow: '4px 0 12px #FF8C00' }}
                />
              </motion.div>

              {/* Percentage label inside */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.5 }}
                  className="font-display font-bold text-xs tracking-widest text-white/90 mix-blend-difference"
                  style={{ textShadow: '0 0 10px rgba(0,0,0,0.8)' }}
                >
                  {XP_PERCENT.toFixed(1)}% TO NEXT LEVEL
                </motion.span>
              </div>
            </div>

            {/* Milestone markers */}
            <div className="relative mt-2 flex justify-between px-0">
              {milestones.map((m) => {
                const pct = (m.xp / MAX_XP) * 100
                return (
                  <div
                    key={m.label}
                    className="flex flex-col items-center"
                    style={{ position: 'absolute', left: `${pct}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="w-px h-2 bg-blood/60" />
                    <span className="text-[9px] font-mono-custom text-blood/60 tracking-widest">{m.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Footer stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-8 grid grid-cols-3 gap-4 border-t border-blood/20 pt-4"
          >
            {[
              { label: 'REMAINING XP', value: `${(MAX_XP - CURRENT_XP).toLocaleString()}` },
              { label: 'NEXT LEVEL', value: 'LV 03' },
              { label: 'RANK', value: 'DRAUGR SLAYER' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-[9px] font-mono-custom text-ash/50 tracking-widest mb-1">{item.label}</div>
                <div className="font-display font-bold text-sm text-blood-bright">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
