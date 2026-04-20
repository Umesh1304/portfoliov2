/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Share Tech Mono"', '"Courier New"', 'monospace'],
        display: ['"Orbitron"', 'monospace'],
      },
      colors: {
        blood: {
          DEFAULT: '#8B0000',
          light: '#C0392B',
          bright: '#E74C3C',
          glow: '#FF2020',
        },
        ember: {
          DEFAULT: '#FF4500',
          light: '#FF6B35',
          bright: '#FF8C00',
        },
        void: {
          DEFAULT: '#020205',
          dark: '#010103',
          mid: '#0A0A0F',
          surface: '#0D0D15',
        },
        ash: {
          DEFAULT: '#4A4A5A',
          light: '#7A7A8A',
          bright: '#AAAABC',
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scan-line': 'scanLine 4s linear infinite',
        'flicker': 'flicker 8s ease-in-out infinite',
        'ember-drift': 'emberDrift 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 8px #FF2020, 0 0 20px #8B000060' },
          '50%': { boxShadow: '0 0 20px #FF2020, 0 0 50px #8B000099, 0 0 80px #FF202030' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 95%, 100%': { opacity: 1 },
          '96%': { opacity: 0.85 },
          '97%': { opacity: 1 },
          '98%': { opacity: 0.9 },
          '99%': { opacity: 1 },
        },
        emberDrift: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: 0.7 },
          '33%': { transform: 'translateY(-15px) translateX(8px)', opacity: 1 },
          '66%': { transform: 'translateY(-8px) translateX(-5px)', opacity: 0.85 },
        },
      },
      backgroundImage: {
        'warrior-gradient': 'linear-gradient(135deg, #020205 0%, #08010A 40%, #120008 70%, #020205 100%)',
        'card-glass': 'linear-gradient(135deg, rgba(20,5,5,0.8) 0%, rgba(10,2,15,0.6) 100%)',
        'bar-gradient': 'linear-gradient(90deg, #8B0000 0%, #C0392B 40%, #FF4500 70%, #FF8C00 100%)',
        'header-gradient': 'linear-gradient(180deg, rgba(139,0,0,0.15) 0%, transparent 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 8px #FF202060, 0 0 20px #8B000040',
        'glow-md': '0 0 15px #FF202080, 0 0 40px #8B000060',
        'glow-lg': '0 0 25px #FF2020, 0 0 60px #8B000099, 0 0 100px #FF202020',
        'glow-inner': 'inset 0 0 30px rgba(139,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
