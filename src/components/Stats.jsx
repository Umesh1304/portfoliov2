import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  {
    value: '2+',
    label: 'YRS EXP',
    sub: 'BATTLE-HARDENED',
    icon: '⚔',
    desc: 'Years forging enterprise systems in production environments',
  },
  {
    value: '10+',
    label: 'PROJECTS',
    sub: 'COMPLETED',
    icon: '🔱',
    desc: 'Scalable backend systems delivered across multiple domains',
  },
  {
    value: '99%',
    label: 'UPTIME',
    sub: 'MAINTAINED',
    icon: '🛡',
    desc: 'Near-perfect system reliability across all maintained services',
  },
]

function StatCard({ stat, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 0 30px rgba(255,32,32,0.4), 0 0 80px rgba(139,0,0,0.3)',
        borderColor: 'rgba(255,32,32,0.9)',
      }}
      className="relative glass-card glow-border rounded-sm p-6 md:p-8 flex flex-col items-center text-center group cursor-default overflow-hidden"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 grid-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Scan line on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(139,0,0,0.08) 50%, transparent 100%)',
        }}
        animate={{ y: [-200, 400] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
      />

      {/* Top accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4"
        style={{
          background: 'linear-gradient(90deg, transparent, #FF2020, transparent)',
          boxShadow: '0 0 10px #FF2020',
        }}
      />

      {/* Icon */}
      <div className="relative mb-4">
        <div
          className="w-14 h-14 flex items-center justify-center rounded-sm border border-blood/40 glass-card text-2xl"
          style={{ boxShadow: '0 0 15px rgba(139,0,0,0.3)' }}
        >
          {stat.icon}
        </div>
      </div>

      {/* Value */}
      <div
        className="font-display font-black text-5xl md:text-6xl leading-none mb-1"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FF6B35 60%, #FF2020 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 0 15px rgba(255,32,32,0.6))',
        }}
      >
        {stat.value}
      </div>

      {/* Label */}
      <div className="font-display font-bold text-sm tracking-[0.25em] text-ash-bright mb-1">
        {stat.label}
      </div>

      {/* Sub label */}
      <div className="text-[10px] tracking-[0.2em] text-blood mb-4 font-mono-custom">
        {stat.sub}
      </div>

      {/* Divider */}
      <div className="w-full h-px mb-4" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,0,0,0.5), transparent)' }} />

      {/* Description */}
      <p className="text-xs text-ash font-mono-custom leading-relaxed">
        {stat.desc}
      </p>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-1/2"
        style={{
          background: 'linear-gradient(90deg, transparent, #8B0000, transparent)',
        }}
      />
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative px-4 pb-16 max-w-5xl mx-auto">
      {/* Section header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="h-px flex-1 max-w-8"
          style={{ background: 'linear-gradient(90deg, transparent, #FF2020)' }}
        />
        <div className="flex items-center gap-3">
          <span className="text-blood font-mono-custom text-sm">{'>'}</span>
          <span className="font-display text-xs font-bold tracking-[0.3em] text-ash-bright">
            COMBAT_STATS
          </span>
          <span className="text-[10px] font-mono-custom text-ash/50 tracking-widest">// VERIFIED</span>
        </div>
        <div className="h-px flex-1"
          style={{ background: 'linear-gradient(90deg, #FF2020, transparent)' }}
        />
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  )
}