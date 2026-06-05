/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'text-neon-blue', 'text-neon-green', 'text-neon-cyan', 'text-neon-purple',
    'bg-neon-blue/10', 'bg-neon-green/10', 'bg-neon-cyan/10', 'bg-neon-purple/10',
    'bg-neon-blue/20', 'bg-neon-green/20', 'bg-neon-cyan/20', 'bg-neon-purple/20',
    'border-neon-blue/20', 'border-neon-green/20', 'border-neon-cyan/20', 'border-neon-purple/20',
    'border-neon-blue/30', 'border-neon-green/30', 'border-neon-cyan/30', 'border-neon-purple/30',
    'group-hover:bg-neon-blue/20', 'group-hover:bg-neon-green/20', 'group-hover:bg-neon-cyan/20', 'group-hover:bg-neon-purple/20',
    'bg-neon-blue/5', 'border-neon-blue/50',
    'bg-neon-green/5', 'border-neon-green/50',
    'border-neon-blue/40', 'border-neon-green/40', 'border-neon-cyan/40',
    'bg-neon-blue/15', 'bg-neon-green/15',
    'shadow-neon-blue/20', 'shadow-neon-green/20',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060810',
          900: '#0a0e17',
          850: '#0c1120',
          800: '#0f1623',
          700: '#151d2e',
          600: '#1a2438',
          500: '#1f2d45',
        },
        neon: {
          blue: '#00d4ff',
          cyan: '#00f0ff',
          green: '#00ff88',
          purple: '#8b5cf6',
        },
        tactical: {
          navy: '#0d1b2a',
          slate: '#1b2838',
          steel: '#2a3f5f',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.03)',
          medium: 'rgba(255, 255, 255, 0.06)',
          heavy: 'rgba(255, 255, 255, 0.10)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan-line': 'scanLine 4s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'border-glow': 'borderGlow 3s linear infinite',
        'radar-sweep': 'radarSweep 4s linear infinite',
        'particle-drift': 'particleDrift 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in-up': 'fadeInUpCSS 0.6s ease-out forwards',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', boxShadow: '0 0 20px rgba(0,212,255,0.1)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(0,212,255,0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(0,212,255,0.2)' },
          '50%': { borderColor: 'rgba(0,212,255,0.6)' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        particleDrift: {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(100px, -200px)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeInUpCSS: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0,212,255,0.15), 0 0 60px rgba(0,212,255,0.05)',
        'neon-green': '0 0 20px rgba(0,255,136,0.15), 0 0 60px rgba(0,255,136,0.05)',
        'glow-lg': '0 0 40px rgba(0,212,255,0.2), 0 0 80px rgba(0,255,136,0.1)',
      },
    },
  },
  plugins: [],
};
