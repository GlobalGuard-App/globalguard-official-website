import { motion } from 'framer-motion';
import { Brain, Cpu, Eye, Shield, Radio, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';
import GlowingCard from '../components/GlowingCard';
import TacticalBackground from '../components/TacticalBackground';

const capabilities = [
  { icon: Brain, title: 'Predictive Threat Analysis', desc: 'ML models trained on billions of threat signals predict risks before they materialize.' },
  { icon: Eye, title: 'Environmental Awareness', desc: 'Real-time analysis of your surroundings to identify potential danger zones.' },
  { icon: Cpu, title: 'Behavioral Learning', desc: 'Learns your daily patterns to detect anomalies that could indicate threats.' },
  { icon: Shield, title: 'Proactive Protection', desc: 'Automatic safety recommendations before you enter high-risk areas.' },
  { icon: Radio, title: 'Continuous Monitoring', desc: '24/7 background intelligence gathering with zero battery drain optimization.' },
  { icon: Lock, title: 'Privacy-First AI', desc: 'All AI processing happens on-device — your data never trains external models.' },
];

const pipeline = [
  { step: '01', title: 'Data Ingestion', desc: 'Global threat feeds, local sensors, and your environment are continuously ingested.' },
  { step: '02', title: 'Pattern Recognition', desc: 'Neural networks identify emerging threat patterns across millions of data points.' },
  { step: '03', title: 'Risk Scoring', desc: 'Each signal receives a contextual risk score based on your profile and location.' },
  { step: '04', title: 'Alert Generation', desc: 'Only actionable, high-confidence alerts reach you — no alert fatigue.' },
  { step: '05', title: 'Adaptive Learning', desc: 'Your responses improve the model over time for increasingly personalized protection.' },
];

export default function AIGuardian() {
  return (
    <PageLayout>
      <SEO
        title="AI Guardian — GlobalGuard Intelligent Threat Detection"
        description="GlobalGuard's AI Guardian uses machine learning to predict, detect, and neutralise threats before they reach you. 24/7 real-time protection powered by AI."
        keywords="AI threat detection, personal safety AI, AI guardian app, intelligent security, GlobalGuard AI"
        canonical="/ai-guardian"
      />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 opacity-40">
          <TacticalBackground variant="section" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionHeader
              as="h1"
              badge="AI Guardian"
              title={<>Intelligent Protection That <span className="text-neon-blue">Never Sleeps</span></>}
              subtitle="Our AI guardian uses machine learning, behavioral analysis, and global threat intelligence to keep you safe 24/7."
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <GlowingCard color={i % 2 === 0 ? 'blue' : 'green'} className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                    <c.icon size={22} className="text-neon-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                </GlowingCard>
              </motion.div>
            ))}
          </div>

          <SectionHeader badge="Intelligence Pipeline" title={<>How the AI <span className="text-neon-green">Works</span></>} subtitle="Five stages of intelligent threat processing." />
          <div className="space-y-4 max-w-2xl mx-auto">
            {pipeline.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 p-5 rounded-xl"
                style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.08)' }}
              >
                <span className="text-2xl font-bold font-mono text-neon-blue/30 flex-shrink-0">{p.step}</span>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">{p.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: 'AES-256', label: 'Encryption Standard' },
              { value: 'Zero-K', label: 'Privacy Architecture' },
              { value: '195+', label: 'Countries Supported' },
              { value: '24/7', label: 'AI Monitoring' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl p-5" style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.1)' }}>
                <p className="text-2xl font-bold text-neon-blue mb-1">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
          <Link to="/pricing" className="btn-primary inline-flex items-center gap-2">
            Activate AI Guardian <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}