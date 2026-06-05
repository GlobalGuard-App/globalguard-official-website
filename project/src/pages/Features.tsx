import { motion } from 'framer-motion';
import { Brain, AlertTriangle, Globe, Wifi, MapPin, Lock, Shield, Cpu, Eye, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';
import GlowingCard from '../components/GlowingCard';
import TacticalBackground from '../components/TacticalBackground';

const features = [
  {
    icon: Brain,
    title: 'AI Guardian',
    description: 'AI-powered threat detection and real-time safety recommendations tailored to your environment.',
    details: ['Machine learning threat analysis', 'Behavioral pattern recognition', 'Predictive safety alerts', 'Real-time risk scoring'],
    color: 'blue' as const,
  },
  {
    icon: AlertTriangle,
    title: 'SOS Protection',
    description: 'One-tap emergency alerts with live location sharing to trusted contacts and emergency services.',
    details: ['Instant alert broadcast', 'Live GPS tracking', 'Medical profile sharing', 'Multi-channel notifications'],
    color: 'green' as const,
  },
  {
    icon: Globe,
    title: 'Live Security Intel',
    description: 'Real-time global security news, threat feeds, and regional risk assessments from verified sources.',
    details: ['195+ country coverage', 'Verified threat sources', 'Personalized alerts', 'Offline cache support'],
    color: 'blue' as const,
  },
  {
    icon: Wifi,
    title: 'Cyber Safety',
    description: 'VPN, dark web monitoring, and phishing protection for comprehensive digital security.',
    details: ['Military-grade VPN', 'Dark web breach alerts', 'Phishing link scanner', 'Password vault'],
    color: 'green' as const,
  },
  {
    icon: MapPin,
    title: 'Nearby Help',
    description: 'Find police stations, hospitals, pharmacies, and safe zones near you in seconds.',
    details: ['Real-time location data', 'Safe route navigation', 'Emergency contacts list', 'Offline map support'],
    color: 'blue' as const,
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'End-to-end encrypted personal data vault with zero-knowledge architecture.',
    details: ['256-bit AES encryption', 'Zero-knowledge design', 'Biometric access', 'Secure cloud backup'],
    color: 'green' as const,
  },
  {
    icon: Shield,
    title: 'Family Safety',
    description: 'Share your location and safety status with trusted family members in real time.',
    details: ['Family location sharing', 'Check-in alerts', 'SOS chain notifications', 'Child safety zones'],
    color: 'blue' as const,
  },
  {
    icon: Cpu,
    title: 'AI Threat Analysis',
    description: 'Deep learning models continuously analyze millions of data points to predict emerging threats.',
    details: ['Global threat modeling', 'Anomaly detection', 'Trend forecasting', 'Risk scoring engine'],
    color: 'green' as const,
  },
  {
    icon: Eye,
    title: 'Privacy Mode',
    description: 'Temporarily hide your location and activity without disrupting your safety coverage.',
    details: ['Stealth location mode', 'Activity masking', 'Trusted circle override', 'Timed privacy windows'],
    color: 'blue' as const,
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <PageLayout>
      <SEO
        title="Features — GlobalGuard AI Safety Platform"
        description="Explore GlobalGuard's comprehensive safety features: AI Guardian, SOS Protection, Live Security Intel, Cyber Safety, Nearby Help, and more."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 opacity-40">
          <TacticalBackground variant="section" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionHeader
              badge="Platform Features"
              title={<>Comprehensive Safety <span className="text-neon-blue">Features</span></>}
              subtitle="GlobalGuard combines cutting-edge AI technology with intuitive design to provide unparalleled personal and family safety."
            />
          </motion.div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={item}>
                <GlowingCard color={f.color} className="p-6 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: f.color === 'blue' ? 'rgba(0,212,255,0.1)' : 'rgba(0,255,136,0.1)',
                      border: `1px solid ${f.color === 'blue' ? 'rgba(0,212,255,0.2)' : 'rgba(0,255,136,0.2)'}`,
                    }}
                  >
                    <f.icon size={22} className={f.color === 'blue' ? 'text-neon-blue' : 'text-neon-green'} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{f.description}</p>
                  <ul className="space-y-1.5">
                    {f.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 size={11} className={f.color === 'blue' ? 'text-neon-blue' : 'text-neon-green'} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience Next-Generation Safety?</h2>
          <p className="text-gray-500 mb-8">Choose the GlobalGuard plan that fits your needs.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/pricing" className="btn-primary">View Pricing</Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">Contact Us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
