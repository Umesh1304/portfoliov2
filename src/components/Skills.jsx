import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'Java', level: 92, tag: 'CORE_WEAPON', color: '#FF2020' },
  { name: 'Spring Boot', level: 85, tag: 'FRAMEWORK', color: '#FF4500' },
  { name: 'REST APIs', level: 88, tag: 'INTERFACE', color: '#FF6B35' },
  { name: 'SQL', level: 80, tag: 'DATA_FORGE', color: '#FF8C00' },
  { name: 'Troubleshooting', level: 95, tag: 'MASTER_SKILL', color: '#FFB347' },
]

function SkillBar({ skill, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  const getLevelLabel = (level) => {
    if (level >= 90) return 'LEGENDARY'
    if (level >= 80) return 'EXPERT'
    if (level >= 70) return 'ADVANCED'
    return 'SKILLED'
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="group"
    >
      {/* Skill header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          {/* Rune indicator */}
          <div
            className="w-2 h-2 rounded-sm rotate-45 flex-shrink-0"
            style={{ background: skill.color, boxShadow: `0 0 8px ${skill.color}` }}
          />
          <span className="font-display font-bold text-sm tracking-wider text-ash-bright group-hover:text-white transition-colors">
            {skill.name}
          </span>
          <span
            className="hidden md:inline text-[9px] font-mono-custom tracking-[0.2em] px-2 py-0.5 rounded-sm border"
            style={{
              color: skill.color,
              borderColor: `${skill.color}40`,
              background: `${skill.color}15`,
            }}
          >
            {skill.tag}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span
            className="text-[10px] font-mono-custom tracking-widest"
            style={{ color: skill.color }}
          >
            {getLevelLabel(skill.level)}
          </span>
          <span
            className="font-display font-black text-lg md:text-xl"
            style={{
              color: skill.color,
              textShadow: `0 0 10px ${skill.color}80`,
            }}
          >
            {skill.level}
            <span className="text-xs text-ash font-mono-custom font-normal">%</span>
          </span>
        </div>
      </div>

      {/* Bar track */}
      <div
        className="h-4 md:h-5 rounded-sm relative overflow-hidden"
        style={{
          background: 'rgba(10,2,15,0.8)',
          border: `1px solid ${skill.color}30`,
          boxShadow: `inset 0 0 10px rgba(0,0,0,0.5)`,
        }}
      >
        {/* Segment lines */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 9%, rgba(0,0,0,0.3) 9%, rgba(0,0,0,0.3) 10%)',
          }}
        />

        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.4, delay: 0.3 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full relative rounded-sm"
          style={{
            background: `linear-gradient(90deg, ${skill.color}80 0%, ${skill.color} 70%, ${skill.color}DD 100%)`,
            boxShadow: `0 0 12px ${skill.color}60, 0 0 30px ${skill.color}30`,
          }}
        >
          {/* Shimmer */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
            }}
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Level tick */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 + index * 0.1 }}
          className="absolute top-0 bottom-0 w-0.5"
          style={{
            left: `${skill.level}%`,
            background: skill.color,
            boxShadow: `0 0 8px ${skill.color}`,
          }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative px-4 pb-16 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="glass-card glow-border rounded-sm p-6 md:p-10 relative overflow-hidden"
      >
        {/* BG grid */}
        <div className="absolute inset-0 grid-bg opacity-20" />

        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-blood-glow"
          style={{ boxShadow: '-2px -2px 8px rgba(255,32,32,0.4)' }} />
        <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-blood-glow"
          style={{ boxShadow: '2px -2px 8px rgba(255,32,32,0.4)' }} />

        <div className="relative z-10">
          {/* Section title */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blood font-mono-custom">{'>'}</span>
                <span className="text-[10px] font-mono-custom tracking-[0.3em] text-ash/60">ARSENAL.SCAN</span>
              </div>
              <h2
                className="font-display font-black text-2xl md:text-3xl tracking-wider"
                style={{
                  background: 'linear-gradient(90deg, #FFFFFF 0%, #FFAAAA 40%, #FF2020 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 10px rgba(255,32,32,0.4))',
                }}
              >
                SKILL MATRIX
              </h2>
            </div>

            <div className="text-right hidden md:block">
              <div className="text-[10px] font-mono-custom text-ash/50 tracking-widest">SPECIALIZATION</div>
              <div className="text-xs font-display font-bold text-blood-bright">BACKEND SYSTEMS</div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px mb-8"
            style={{ background: 'linear-gradient(90deg, #FF2020, rgba(139,0,0,0.3), transparent)' }}
          />

          {/* Skill bars */}
          <div className="flex flex-col gap-6 md:gap-7">
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="mt-8 pt-4 border-t border-blood/20 flex items-center justify-between text-[10px] font-mono-custom text-ash/40 tracking-widest"
          >
            <span>SCAN_COMPLETE: {skills.length} WEAPONS DETECTED</span>
            <span className="text-blood/60">AVG_PWR: {Math.round(skills.reduce((a, s) => a + s.level, 0) / skills.length)}%</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
