import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield, Brain, AlertTriangle, Globe, Wifi, MapPin,
  ChevronRight, Lock, Radio, Eye, Heart,
  ArrowRight, CheckCircle2, Star, Cpu,
  Smartphone, QrCode, Download, Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import PageLayout from '../components/PageLayout';
import HeroBackground from '../components/HeroBackground';
import SectionHeader from '../components/SectionHeader';
import GlowingCard from '../components/GlowingCard';

const features = [
  { icon: Brain, title: 'AI Guardian', desc: 'AI-powered threat detection and real-time safety recommendations', to: '/ai-guardian', iconColor: 'text-neon-blue', bgColor: 'bg-neon-blue/10', borderColor: 'border-neon-blue/20', color: 'blue' as const },
  { icon: AlertTriangle, title: 'SOS Protection', desc: 'One-tap emergency alerts with location sharing and live tracking', to: '/sos-protection', iconColor: 'text-neon-green', bgColor: 'bg-neon-green/10', borderColor: 'border-neon-green/20', color: 'green' as const },
  { icon: Globe, title: 'Live Security Intel', desc: 'Real-time global security news and threat intelligence feeds', to: '/live-intel', iconColor: 'text-neon-blue', bgColor: 'bg-neon-blue/10', borderColor: 'border-neon-blue/20', color: 'blue' as const },
  { icon: Wifi, title: 'Cyber Safety', desc: 'VPN, dark web monitoring, and phishing protection for digital safety', to: '/cyber-safety', iconColor: 'text-neon-green', bgColor: 'bg-neon-green/10', borderColor: 'border-neon-green/20', color: 'green' as const },
  { icon: MapPin, title: 'Nearby Help', desc: 'Find police, hospitals, and pharmacies near you instantly', to: '/nearby-help', iconColor: 'text-neon-blue', bgColor: 'bg-neon-blue/10', borderColor: 'border-neon-blue/20', color: 'blue' as const },
  { icon: Lock, title: 'Data Protection', desc: 'End-to-end encrypted personal data vault with zero-knowledge architecture', to: '/features', iconColor: 'text-neon-green', bgColor: 'bg-neon-green/10', borderColor: 'border-neon-green/20', color: 'green' as const },
];

const howItWorks = [
  { step: '01', title: 'Download & Set Up', desc: 'Install GlobalGuard and complete your safety profile in under 2 minutes.', icon: Cpu },
  { step: '02', title: 'AI Activates', desc: 'Our AI guardian begins monitoring your environment and online presence 24/7.', icon: Brain },
  { step: '03', title: 'Stay Protected', desc: 'Receive real-time alerts, SOS coverage, and emergency help — anywhere, anytime.', icon: Shield },
];

const whyGlobalGuard = [
  'Military-grade encryption for all personal data',
  'AI learns your patterns to predict threats',
  'Works offline in emergency situations',
  'Trusted by security professionals worldwide',
  'Zero-knowledge architecture — your data stays yours',
  'Sub-second SOS alert delivery',
];

const faqs = [
  { q: 'What makes GlobalGuard different from other safety apps?', a: 'GlobalGuard combines AI-powered threat detection, real-time security intelligence, SOS protection, cyber safety, and emergency help location in one unified platform — the first truly comprehensive personal safety app.' },
  { q: 'Is my data safe with GlobalGuard?', a: 'Absolutely. We use end-to-end encryption with zero-knowledge architecture. Your data is encrypted before it leaves your device, and we cannot access it even if compelled to.' },
  { q: 'Does GlobalGuard work internationally?', a: 'Yes. GlobalGuard operates in 195+ countries with local emergency number detection, multi-language support, and region-specific security intelligence.' },
  { q: 'How does the SOS feature work?', a: 'One tap activates your SOS alert, instantly sharing your live location with your trusted contacts and local emergency services. The alert includes your medical profile and real-time tracking.' },
  { q: 'Is GlobalGuard free?', a: 'GlobalGuard offers a free tier with core safety features. Premium plans unlock AI Guardian, live security intel, cyber safety tools, and advanced SOS capabilities.' },
  { q: 'Can I use GlobalGuard offline?', a: 'Yes. Core SOS features work offline using pre-configured emergency contacts. Location data is cached and transmitted once connectivity is restored.' },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <PageLayout>
      <SEO
        title="GlobalGuard — AI-Powered Personal Safety Guardian"
        description="Your AI Safety Guardian, Anywhere in the World. Personal safety, SOS alerts, live security intelligence, cyber safety, and emergency help in one AI-powered app."
        keywords="personal safety app, AI guardian, SOS protection, emergency alerts, cyber safety, live security intelligence"
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden" style={{ minHeight: '100svh' }}>
        {/* Premium animated background — all layers in one component */}
        <HeroBackground />

        {/* Content — pt-[86px] clears the 62px fixed navbar + 24px breathing room */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[100px] pb-20 lg:pt-[120px] lg:pb-28">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 xl:gap-16 items-center">

            {/* ── Left: Text column ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start max-w-xl"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-5"
              >
                <span
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase font-mono"
                  style={{
                    background: 'rgba(0, 212, 255, 0.08)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    color: '#00d4ff',
                  }}
                >
                  <Sparkles size={10} />
                  AI-Powered Safety System
                </span>
              </motion.div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-5">
                Your AI Safety{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Guardian
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-400 font-light">
                  Anywhere in the World
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-7 max-w-lg">
                Personal safety, SOS alerts, live security intelligence, cyber safety, and emergency help — all in one AI-powered operating system that watches over you 24/7.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Link to="/pricing" className="btn-primary">
                  Get Early Access
                </Link>
                <Link to="/features" className="btn-secondary inline-flex items-center gap-2">
                  Explore Features <ArrowRight size={16} />
                </Link>
              </div>

              {/* App Download */}
              <div className="mb-7 w-full">
                <p className="text-xs text-gray-600 uppercase tracking-widest font-mono mb-3">Download GlobalGuard</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 hover:border-neon-blue/30"
                    style={{
                      background: 'rgba(0,212,255,0.05)',
                      border: '1px solid rgba(0,212,255,0.15)',
                    }}
                  >
                    <Smartphone size={18} className="text-neon-blue flex-shrink-0" />
                    <div>
                      <p className="text-[9px] text-gray-500 uppercase tracking-wider leading-none">Download on the</p>
                      <p className="text-xs font-semibold text-white leading-tight">App Store</p>
                    </div>
                    <span className="text-[9px] text-neon-blue/60 font-mono ml-1 flex-shrink-0">Soon</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 hover:border-neon-blue/30"
                    style={{
                      background: 'rgba(0,212,255,0.05)',
                      border: '1px solid rgba(0,212,255,0.15)',
                    }}
                  >
                    <Download size={18} className="text-neon-green flex-shrink-0" />
                    <div>
                      <p className="text-[9px] text-gray-500 uppercase tracking-wider leading-none">GET IT ON</p>
                      <p className="text-xs font-semibold text-white leading-tight">Google Play</p>
                    </div>
                    <span className="text-[9px] text-neon-blue/60 font-mono ml-1 flex-shrink-0">Soon</span>
                  </a>
                  <div
                    className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-xl"
                    style={{
                      background: 'rgba(0,212,255,0.03)',
                      border: '1px solid rgba(0,212,255,0.1)',
                    }}
                  >
                    <QrCode size={28} className="text-neon-blue/40" />
                    <div>
                      <p className="text-[9px] text-gray-600 leading-none">Scan to</p>
                      <p className="text-[9px] text-gray-600 leading-none">download</p>
                      <p className="text-[9px] text-neon-blue/40 mt-0.5">iOS & Android</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-5">
                {['Free to start', '195+ countries', 'Works offline'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-neon-green flex-shrink-0" />
                    <span className="text-xs text-gray-500">{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Right: Phone Mockup ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center relative"
              style={{ width: '420px', minWidth: '420px' }}
            >
              {/* Ambient glow behind the cluster */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,212,255,0.09) 0%, transparent 70%)',
                }}
              />

              {/* Left secondary phone — kept inset so it stays in-bounds */}
              <div
                className="absolute left-0 top-12 w-[130px] h-[260px] rounded-[22px] overflow-hidden opacity-55 z-0 animate-float"
                style={{
                  animationDelay: '1s',
                  background: 'linear-gradient(145deg, #1a2438 0%, #0a0e17 100%)',
                  border: '1px solid rgba(0,212,255,0.12)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                }}
              >
                <div className="p-3 space-y-2">
                  <p className="text-[8px] font-bold text-white">Cyber Shield</p>
                  <div className="rounded-lg p-2" style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.12)' }}>
                    <p className="text-[7px] text-gray-500">VPN STATUS</p>
                    <p className="text-[9px] font-bold text-neon-green">SECURE</p>
                    <p className="text-[7px] text-gray-500">Encrypted</p>
                  </div>
                  <div className="rounded-lg p-2" style={{ background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.12)' }}>
                    <p className="text-[7px] text-gray-500">DARK WEB</p>
                    <p className="text-[9px] font-bold text-neon-green">No Threats</p>
                    <p className="text-[7px] text-gray-500">All clear</p>
                  </div>
                </div>
              </div>

              {/* Right secondary phone — kept inset */}
              <div
                className="absolute right-0 top-12 w-[130px] h-[260px] rounded-[22px] overflow-hidden opacity-55 z-0 animate-float"
                style={{
                  animationDelay: '2s',
                  background: 'linear-gradient(145deg, #1a2438 0%, #0a0e17 100%)',
                  border: '1px solid rgba(0,212,255,0.12)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                }}
              >
                <div className="p-3 space-y-2">
                  <p className="text-[8px] font-bold text-white">Nearby Help</p>
                  {[
                    { label: 'Police Station', dist: '0.3 mi', icon: Shield, color: 'text-neon-blue' },
                    { label: 'Hospital', dist: '0.8 mi', icon: Heart, color: 'text-red-400' },
                    { label: 'Pharmacy', dist: '0.5 mi', icon: Lock, color: 'text-neon-green' },
                  ].map((place) => (
                    <div key={place.label} className="flex items-center gap-2 p-1.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)' }}>
                      <place.icon size={10} className={place.color} />
                      <div>
                        <p className="text-[7px] text-white">{place.label}</p>
                        <p className="text-[6px] text-gray-500">{place.dist} away</p>
                      </div>
                    </div>
                  ))}
                  <p className="text-[7px] text-neon-green font-mono">3 safe routes found</p>
                </div>
              </div>

              {/* Primary phone — centered in the 420px column */}
              <div className="relative z-10 animate-float mx-auto">
                <div
                  className="relative w-[210px] h-[430px] rounded-[34px] overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, #1a2438 0%, #0a0e17 100%)',
                    border: '2px solid rgba(0,212,255,0.22)',
                    boxShadow: '0 0 60px rgba(0,212,255,0.12), 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
                  }}
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 rounded-b-2xl z-20" style={{ background: '#060810' }} />
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 pt-2 pb-1">
                    <span className="text-[9px] text-gray-400 font-mono">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 rounded-sm bg-neon-green/60" />
                      <div className="w-1 h-1.5 rounded-sm bg-gray-600" />
                    </div>
                  </div>
                  {/* Screen */}
                  <div className="px-4 py-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">GlobalGuard</span>
                      <span className="text-[8px] text-neon-green font-mono px-1.5 py-0.5 rounded" style={{ background: 'rgba(0,255,136,0.12)', border: '1px solid rgba(0,255,136,0.2)' }}>ACTIVE</span>
                    </div>
                    {/* Safety Score */}
                    <div className="rounded-xl p-3" style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.12)' }}>
                      <p className="text-[8px] text-gray-500 uppercase tracking-widest font-mono mb-0.5">SAFETY SCORE</p>
                      <p className="text-2xl font-bold" style={{ background: 'linear-gradient(135deg, #00d4ff, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>98/100</p>
                    </div>
                    {/* Mini cards */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-lg p-2" style={{ background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.12)' }}>
                        <p className="text-[7px] text-neon-green font-mono">ONLINE</p>
                        <p className="text-[9px] font-semibold text-white">AI Guardian</p>
                      </div>
                      <div className="rounded-lg p-2" style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.12)' }}>
                        <p className="text-[7px] text-neon-blue font-mono">SOS</p>
                        <p className="text-[9px] font-semibold text-white">Emergency</p>
                      </div>
                    </div>
                    {/* SOS levels */}
                    <div className="space-y-1">
                      {['Level 1: Family', 'Level 2: Emergency', 'Level 3: Extraction'].map((level, i) => (
                        <div key={i} className="flex items-center gap-2 px-2 py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)' }}>
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: i === 0 ? '#00ff88' : i === 1 ? '#00d4ff' : '#8b5cf6' }} />
                          <span className="text-[8px] text-gray-400">{level}</span>
                        </div>
                      ))}
                    </div>
                    {/* AI chat */}
                    <div className="rounded-xl p-2.5" style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.1)' }}>
                      <p className="text-[8px] font-semibold text-neon-blue">AI Guardian Chat</p>
                      <p className="text-[7px] text-gray-500">Ask for help 24/7</p>
                    </div>
                    {/* Shortcuts */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.1)' }}>
                        <Radio size={12} className="text-neon-blue mx-auto mb-0.5" />
                        <p className="text-[7px] text-gray-400">Live Intel</p>
                      </div>
                      <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.1)' }}>
                        <Shield size={12} className="text-neon-green mx-auto mb-0.5" />
                        <p className="text-[7px] text-gray-400">Cyber Safe</p>
                      </div>
                    </div>
                    {/* Map */}
                    <div className="rounded-xl h-12 flex items-center justify-center" style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.08)' }}>
                      <span className="text-[8px] text-neon-green font-mono animate-pulse">LIVE</span>
                    </div>
                    {/* Bottom nav */}
                    <div className="flex justify-around pt-1">
                      {[Shield, Eye, Radio, MapPin].map((Icon, i) => (
                        <div key={i} className={`p-1.5 rounded-lg ${i === 0 ? 'bg-neon-blue/10' : ''}`}>
                          <Icon size={14} className={i === 0 ? 'text-neon-blue' : 'text-gray-600'} />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Inner glow overlay */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,212,255,0.03) 0%, transparent 50%)' }} />
                </div>
              </div>

              {/* Floating badges — positioned within the 420px container */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-2 right-8 px-3 py-1.5 rounded-full z-20"
                style={{
                  background: 'rgba(0,255,136,0.1)',
                  border: '1px solid rgba(0,255,136,0.25)',
                  boxShadow: '0 0 12px rgba(0,255,136,0.15)',
                }}
              >
                <span className="text-[9px] font-semibold text-neon-green font-mono">PROTECTED</span>
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-6 left-8 px-3 py-1.5 rounded-full z-20"
                style={{
                  background: 'rgba(0,212,255,0.1)',
                  border: '1px solid rgba(0,212,255,0.25)',
                  boxShadow: '0 0 12px rgba(0,212,255,0.15)',
                }}
              >
                <span className="text-[9px] font-semibold text-neon-blue font-mono">AI ACTIVE</span>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== FEATURE CARDS ===== */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Features"
            title={<>Everything You Need to <span className="text-neon-blue">Stay Safe</span></>}
            subtitle="Six powerful protection layers working together to keep you safe anywhere in the world."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={staggerItem}>
                <GlowingCard color={feature.color} className="p-6 h-full group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.bgColor} ${feature.borderColor} border`}>
                    <feature.icon size={22} className={feature.iconColor} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{feature.desc}</p>
                  <Link to={feature.to} className="inline-flex items-center gap-1.5 text-xs font-semibold text-neon-blue group-hover:gap-2.5 transition-all duration-300">
                    Learn more <ChevronRight size={12} />
                  </Link>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-dark-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="How It Works"
            title={<>Up and Running in <span className="text-neon-green">Minutes</span></>}
            subtitle="Three simple steps to comprehensive AI-powered protection."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center relative"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 relative">
                  <div className="absolute inset-0 rounded-2xl" style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }} />
                  <step.icon size={28} className="text-neon-blue relative z-10" />
                </div>
                <div
                  className="text-xs font-bold font-mono mb-3 tracking-widest"
                  style={{ color: 'rgba(0,212,255,0.4)' }}
                >
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 z-10">
                    <ArrowRight size={20} className="text-neon-blue/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY GLOBALGUARD ===== */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeader
                badge="Why GlobalGuard"
                title={<>Built for the <span className="text-neon-blue">Real World</span></>}
                subtitle="Every feature is engineered for maximum protection with zero compromise."
                center={false}
              />
              <div className="space-y-3">
                {whyGlobalGuard.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={16} className="text-neon-green flex-shrink-0" />
                    <span className="text-sm text-gray-400">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link to="/about" className="btn-secondary inline-flex items-center gap-2 mt-8">
                About Our Mission <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="rounded-2xl p-8 mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(0,255,136,0.04) 100%)',
                  border: '1px solid rgba(0,212,255,0.15)',
                }}
              >
                <p className="text-sm text-gray-500 font-mono mb-1">24/7</p>
                <p className="text-2xl font-bold text-white">AI Guardian Protection</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '195+', label: 'Countries' },
                  { value: '<1s', label: 'SOS Response' },
                  { value: '256-bit', label: 'Encryption' },
                  { value: '99.9%', label: 'Uptime' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-5 text-center"
                    style={{
                      background: 'rgba(0,212,255,0.04)',
                      border: '1px solid rgba(0,212,255,0.1)',
                    }}
                  >
                    <p className="text-3xl font-bold text-neon-blue mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-dark-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Testimonials"
            title={<>Trusted by <span className="text-neon-blue">Thousands</span></>}
            subtitle="Real people, real protection, real peace of mind."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah K.', role: 'Travel Journalist', text: 'GlobalGuard gave me confidence to travel solo through 30+ countries. The SOS feature is a lifesaver — literally.', color: 'blue' as const },
              { name: 'Marcus R.', role: 'Cybersecurity Analyst', text: "As a security professional, I can say GlobalGuard's encryption and threat detection rival enterprise solutions.", color: 'green' as const },
              { name: 'Priya M.', role: 'Working Parent', text: 'The nearby help feature helped me find a hospital at 2 AM when my child had an emergency. I will never be without it.', color: 'blue' as const },
            ].map((t) => (
              <GlowingCard key={t.name} color={t.color} className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-600">{t.role}</p>
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Common Questions"
            subtitle="Everything you need to know about GlobalGuard."
          />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-xl overflow-hidden"
                style={{
                  background: 'rgba(10,14,23,0.6)',
                  border: '1px solid rgba(0,212,255,0.08)',
                }}
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium text-white list-none">
                  {faq.q}
                  <ChevronRight size={16} className="text-gray-500 group-open:rotate-90 transition-transform duration-200 flex-shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="rounded-3xl p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(0,255,136,0.04) 50%, rgba(0,212,255,0.06) 100%)',
              border: '1px solid rgba(0,212,255,0.15)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 70%)' }}
            />
            <h2 className="text-4xl font-bold text-white mb-4 relative z-10">
              Ready to Feel Safe Everywhere?
            </h2>
            <p className="text-gray-500 mb-8 relative z-10">
              Join thousands who trust GlobalGuard as their AI safety guardian. Early access is free.
            </p>
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              <Link to="/pricing" className="btn-primary">Get Early Access</Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
