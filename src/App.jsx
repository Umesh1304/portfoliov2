import { useState } from "react"
import { motion } from 'framer-motion'

import ParticleBackground from './components/ParticleBackground'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import XPBar from './components/XPBar'
import Skills from './components/Skills'
import About from './components/About'

// ✅ NEW IMPORTS
import StartScreen from './components/StartScreen'
import BootScreen from './components/BootScreen'

export default function App() {
  // ✅ NEW STATE (controls flow)
  const [stage, setStage] = useState("start")
  // stages: start → boot → main

  // ✅ START SCREEN
  if (stage === "start") {
    return <StartScreen onStart={() => setStage("boot")} />
  }

  // ✅ BOOT SCREEN
  if (stage === "boot") {
    return <BootScreen onFinish={() => setStage("main")} />
  }

  // ✅ YOUR ORIGINAL UI (UNCHANGED)
  return (
    <div className="relative min-h-screen overflow-x-hidden font-mono-custom">
      {/* Fixed layered background */}
      <ParticleBackground />

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10"
      >
        {/* Sticky header */}
        <Header />

        {/* Main content */}
        <main>
          <Hero />
          <Stats />
          <XPBar />
          <Skills />
          <About />
        </main>

        {/* Footer */}
        <footer className="relative px-4 py-8 max-w-5xl mx-auto">
          <div
            className="h-px mb-8"
            style={{ background: 'linear-gradient(90deg, transparent, #FF2020, transparent)' }}
          />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono-custom text-ash/30 tracking-widest">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blood-glow animate-pulse" />
              <span>WARRIOR.EXE — ALL RIGHTS RESERVED</span>
            </div>
            <div className="flex items-center gap-4">
              <span>BUILD: PRODUCTION</span>
              <span className="text-blood/30">|</span>
              <span>REALM: Nilgiris</span>
              <span className="text-blood/30">|</span>
              <span className="text-blood/50">UMESH KUMAR © 2026</span>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  )

  // deploy test
}