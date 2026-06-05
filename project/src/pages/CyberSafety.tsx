import { motion } from 'framer-motion';
import { Wifi, Lock, Eye, Shield, AlertTriangle, Key, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';
import GlowingCard from '../components/GlowingCard';
import TacticalBackground from '../components/TacticalBackground';

const cyberFeatures = [
  { icon: Wifi, title: 'VPN Protection', desc: 'Military-grade VPN that encrypts all traffic and masks your IP address globally.' },
  { icon: Eye, title: 'Dark Web Monitor', desc: 'Continuous scanning of dark web marketplaces for your personal data.' },
  { icon: Shield, title: 'Phishing Detection', desc: 'AI-powered link scanner blocks malicious URLs before you click them.' },
  { icon: Key, title: 'Password Vault', desc: 'Zero-knowledge encrypted vault for all your credentials with auto-fill.' },
  { icon: AlertTriangle, title: 'Breach Alerts', desc: 'Instant notification when your accounts appear in data breaches.' },
  { icon: Lock, title: 'App Privacy Scanner', desc: 'Identifies which apps are accessing sensitive data without your knowledge.' },
];

export default function CyberSafety() {
  return (
    <PageLayout>
      <SEO title="Cyber Safety — GlobalGuard Digital Security" description="Comprehensive digital security including VPN, dark web monitoring, and phishing protection." />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 opacity-40"><TacticalBackground variant="section" /></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader badge="Cyber Safety" title={<>Complete Digital <span className="text-neon-green">Security Suite</span></>} subtitle="Protect your digital life with enterprise-grade cyber security tools designed for individuals." />
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cyberFeatures.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <GlowingCard color={i % 2 === 0 ? 'green' : 'blue'} className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.2)' }}>
                    <f.icon size={22} className="text-neon-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </GlowingCard>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/pricing" className="btn-primary inline-flex items-center gap-2">Enable Cyber Safety <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
