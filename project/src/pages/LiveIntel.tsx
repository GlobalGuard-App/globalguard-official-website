import { motion } from 'framer-motion';
import { Globe, Radio, AlertTriangle, MapPin, Bell, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';
import GlowingCard from '../components/GlowingCard';
import TacticalBackground from '../components/TacticalBackground';

const intelFeatures = [
  { icon: Globe, title: 'Global Coverage', desc: 'Threat intelligence from 195+ countries, updated in real time from verified sources.' },
  { icon: Radio, title: 'Live Feeds', desc: 'Direct feeds from government agencies, security firms, and on-the-ground reporters.' },
  { icon: AlertTriangle, title: 'Threat Alerts', desc: 'Instant notifications when threats emerge in your current or saved locations.' },
  { icon: MapPin, title: 'Location-Based Intel', desc: 'Hyper-local security briefings for wherever you are or plan to travel.' },
  { icon: Bell, title: 'Smart Filtering', desc: 'AI removes noise and surfaces only the alerts that matter to you.' },
  { icon: Shield, title: 'Travel Advisories', desc: 'Official government travel advisories integrated with real-time threat data.' },
];

export default function LiveIntel() {
  return (
    <PageLayout>
      <SEO
        title="Live Security Intel — GlobalGuard Real-Time Threat Intelligence"
        description="Stay ahead of threats with GlobalGuard's live security intelligence covering 195+ countries."
      />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 opacity-40"><TacticalBackground variant="section" /></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader badge="Live Intel" title={<>Real-Time Global <span className="text-neon-blue">Threat Intelligence</span></>} subtitle="Stay ahead of any threat with live security intelligence from verified global sources." />
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {intelFeatures.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <GlowingCard color={i % 2 === 0 ? 'blue' : 'cyan'} className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                    <f.icon size={22} className="text-neon-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </GlowingCard>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/pricing" className="btn-primary inline-flex items-center gap-2">Unlock Live Intel <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
