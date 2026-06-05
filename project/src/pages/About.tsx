import { motion } from 'framer-motion';
import { Shield, Heart, Lock, Users, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';
import GlowingCard from '../components/GlowingCard';
import TacticalBackground from '../components/TacticalBackground';

const values = [
  { icon: Shield, title: 'Protection First', description: 'Every decision we make is guided by how it improves user safety — never compromised for growth.' },
  { icon: Lock, title: 'Absolute Privacy', description: 'Zero-knowledge architecture is non-negotiable. Your data is yours alone, always.' },
  { icon: Heart, title: 'Human-Centered', description: 'Technology should serve people, not the other way around. We build for humans first.' },
  { icon: Globe, title: 'Global Accessibility', description: 'Safety is a universal right. GlobalGuard works for everyone, everywhere.' },
];

const team = [
  { name: 'A. Chen', role: 'CEO & Co-Founder', bio: 'Security researcher and former threat intelligence analyst with deep expertise in AI-driven safety systems.' },
  { name: 'M. Webb', role: 'CTO & Co-Founder', bio: 'Software architect specialising in privacy-first mobile platforms and real-time distributed safety infrastructure.' },
  { name: 'Dr. P. Sharma', role: 'Chief AI Officer', bio: 'Machine learning researcher focused on predictive threat modelling and anomaly detection for consumer safety.' },
  { name: 'J. Okafor', role: 'Head of Security', bio: 'Veteran security operations professional with expertise in emergency response protocols and global threat landscapes.' },
];

const achievements = [
  { value: '195+', label: 'Countries Supported' },
  { value: 'AES-256', label: 'Encryption Standard' },
  { value: 'Zero-K', label: 'Privacy Architecture' },
  { value: '24/7', label: 'AI Monitoring' },
];

export default function About() {
  return (
    <PageLayout>
      <SEO title="About GlobalGuard — AI Safety Company" description="Learn about GlobalGuard's mission: making AI-powered personal safety accessible to everyone, everywhere." keywords="GlobalGuard company, AI safety technology, personal protection platform" canonical="/about" />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 opacity-40"><TacticalBackground variant="section" /></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader as="h1" badge="About Us" title={<>Built by Security Experts, <span className="text-neon-blue">For Everyone</span></>} subtitle="We're on a mission to democratize access to world-class personal safety technology." />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <GlowingCard color="blue" className="p-8">
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">To empower every individual with intelligent, accessible, and privacy-respecting safety technology that works seamlessly across 195+ countries. We're building the AI safety guardian that anticipates threats, protects your privacy absolutely, and responds to emergencies faster than humanly possible.</p>
            </GlowingCard>
            <GlowingCard color="green" className="p-8">
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">A world where personal safety is no longer a privilege but a fundamental right. Where AI works for you, not against you. Where cutting-edge technology and unwavering commitment to privacy coexist. Where anyone, anywhere can travel, work, and live with confidence.</p>
            </GlowingCard>
          </div>

          {/* Story */}
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionHeader badge="Our Story" title={<>Founded on <span className="text-neon-blue">Principle</span></>} />
            <p className="text-gray-500 leading-relaxed mb-4">GlobalGuard was born from a simple but powerful belief: everyone deserves AI-powered protection that puts their privacy first.</p>
            <p className="text-gray-500 leading-relaxed">Our founders — security experts, AI researchers, and privacy advocates — saw a gap in the market. Existing safety apps were fragmented, invasive, or relied on outdated technology. In 2023, we assembled a world-class team to build something different.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {achievements.map((a) => (
              <motion.div key={a.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl p-6 text-center" style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.1)' }}>
                <p className="text-3xl font-bold text-neon-blue mb-1">{a.value}</p>
                <p className="text-xs text-gray-500">{a.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <SectionHeader badge="Core Values" title={<>What We <span className="text-neon-green">Stand For</span></>} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <GlowingCard color={i % 2 === 0 ? 'blue' : 'green'} className="p-6 h-full text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                    <v.icon size={22} className="text-neon-blue" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.description}</p>
                </GlowingCard>
              </motion.div>
            ))}
          </div>

          {/* Team */}
          <SectionHeader badge="Leadership" title={<>The Team Behind <span className="text-neon-blue">GlobalGuard</span></>} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <GlowingCard color="blue" className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)' }}>
                    <Users size={28} className="text-neon-blue/60" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">{m.name}</h3>
                  <p className="text-xs text-neon-blue mb-3">{m.role}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{m.bio}</p>
                </GlowingCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">Join Our Mission <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}