import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ABOUT_TEXT =
  'Battle-hardened Tech Support Engineer with 2+ years forging scalable backend systems, resolving critical production issues, and optimizing performance across enterprise platforms.'

const highlights = [
  { label: 'DOMAIN', value: 'Tech Support' },
  { label: 'LANGUAGE', value: 'Java / SQL' },
  { label: 'FRAMEWORK', value: 'Spring Boot' },
  { label: 'SPECIALTY', value: 'System Optimization' },
]

const timeline = [
  { year: '2021', event: 'Began Java mastery. First production system deployed.', status: 'COMPLETE' },
  { year: '2022', event: 'Enterprise backend systems. REST API architecture.', status: 'COMPLETE' },
  { year: '2024', event: 'Tech Support Engineering. Critical issue resolution.', status: 'COMPLETE' },
  { year: '2026+', event: 'Scaling systems. Optimizing performance across platforms.', status: 'ACTIVE' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative px-4 pb-16 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 max-w-8"
            style={{ background: 'linear-gradient(90deg, transparent, #FF2020)' }}
          />
          <div className="flex items-center gap-2">
            <span className="text-blood">{'>'}</span>
            <span className="font-display text-xs font-bold tracking-[0.3em] text-ash-bright">WARRIOR_LORE</span>
            <span className="text-[10px] font-mono-custom text-ash/40">// BIO.TXT</span>
          </div>
          <div className="h-px flex-1"
            style={{ background: 'linear-gradient(90deg, #FF2020, transparent)' }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Main bio card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3 glass-card glow-border rounded-sm p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 grid-bg opacity-20" />

            {/* Top label */}
            <div className="relative z-10 mb-6 flex items-center gap-2">
              <div className="w-px h-12 bg-gradient-to-b from-blood to-transparent" />
              <div>
                <div className="text-[10px] font-mono-custom text-ash/50 tracking-widest">CLASSIFIED_DOSSIER</div>
                <div className="font-display font-bold text-sm tracking-wider text-blood-bright">ABOUT THE WARRIOR</div>
              </div>
            </div>

            {/* Bio text */}
            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-mono-custom text-sm md:text-base text-ash-bright leading-relaxed md:leading-loose"
                style={{ lineHeight: '1.9' }}
              >
                {ABOUT_TEXT.split('. ').map((sentence, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.2 }}
                  >
                    {sentence}{i < ABOUT_TEXT.split('. ').length - 1 ? '. ' : ''}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            {/* Highlight grid */}
            <div className="relative z-10 mt-6 pt-4 border-t border-blood/20 grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex flex-col gap-0.5"
                >
                  <span className="text-[9px] font-mono-custom text-ash/50 tracking-widest">{h.label}</span>
                  <span className="text-xs font-display font-bold text-blood-bright">{h.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2 glass-card glow-border rounded-sm p-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 grid-bg opacity-20" />

            <div className="relative z-10">
              <div className="mb-5">
                <div className="text-[10px] font-mono-custom text-ash/50 tracking-widest mb-1">WAR_CHRONICLE</div>
                <div className="font-display font-bold text-sm tracking-wider text-blood-bright">BATTLE TIMELINE</div>
              </div>

              <div className="flex flex-col gap-0">
                {timeline.map((entry, i) => (
                  <motion.div
                    key={entry.year}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    className="flex gap-3 relative"
                  >
                    {/* Line connector */}
                    {i < timeline.length - 1 && (
                      <div className="absolute left-[11px] top-6 w-px h-full"
                        style={{ background: 'linear-gradient(180deg, rgba(139,0,0,0.6), transparent)' }}
                      />
                    )}

                    {/* Dot */}
                    <div className="flex-shrink-0 mt-1.5">
                      <div
                        className={`w-[10px] h-[10px] rounded-sm rotate-45 ${
                          entry.status === 'ACTIVE'
                            ? 'bg-blood-glow animate-pulse'
                            : 'bg-blood/60'
                        }`}
                        style={{
                          boxShadow: entry.status === 'ACTIVE'
                            ? '0 0 10px rgba(255,32,32,0.8)'
                            : '0 0 5px rgba(139,0,0,0.3)',
                        }}
                      />
                    </div>

                    <div className="pb-5">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-display font-bold text-sm text-blood-bright">{entry.year}</span>
                        {entry.status === 'ACTIVE' && (
                          <span className="text-[8px] px-1.5 py-0.5 border border-blood-glow/60 text-blood-glow font-mono-custom tracking-widest"
                            style={{ background: 'rgba(255,32,32,0.1)' }}>
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] font-mono-custom text-ash leading-relaxed">{entry.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom system footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-6 flex items-center justify-between text-[10px] font-mono-custom text-ash/30 tracking-widest px-1"
        >
          <span>{'>'} END_OF_DOSSIER.TXT</span>
          <span className="text-blood/40">CLASSIFIED: Tech Support Engineer</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
