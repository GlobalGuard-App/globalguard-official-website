import { motion } from 'framer-motion';
import { AlertTriangle, MapPin, Phone, Users, Clock, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';
import GlowingCard from '../components/GlowingCard';
import TacticalBackground from '../components/TacticalBackground';

const sosFeatures = [
  { icon: AlertTriangle, title: 'One-Tap SOS', desc: 'Instantly broadcast emergency alerts to all trusted contacts and local services.' },
  { icon: MapPin, title: 'Live Location Sharing', desc: 'Real-time GPS tracking shared with emergency responders and your safety network.' },
  { icon: Phone, title: 'Auto-Call Emergency', desc: 'Automatically connects to local emergency numbers based on your current country.' },
  { icon: Users, title: 'Safety Network', desc: 'Alerts cascade through your trusted contact hierarchy until acknowledged.' },
  { icon: Clock, title: 'Check-In Timers', desc: 'Automated SOS triggers if you miss a scheduled check-in.' },
  { icon: Shield, title: 'Offline SOS', desc: 'Emergency features work without internet using SMS and cached contacts.' },
];

const timeline = [
  { step: 'Tap', desc: 'One button press activates the SOS sequence' },
  { step: 'Alert', desc: 'Trusted contacts receive immediate notification with your location' },
  { step: 'Track', desc: 'Live GPS location streams to all notified contacts' },
  { step: 'Respond', desc: 'Local emergency services are automatically connected' },
  { step: 'Resolve', desc: 'Safety network coordinates response until situation is resolved' },
  { step: 'Report', desc: 'Post-incident report generated for your records' },
];

export default function SOSProtection() {
  return (
    <PageLayout>
      <SEO
        title="SOS Protection — GlobalGuard Emergency Response"
        description="GlobalGuard's SOS Protection gives you instant emergency response with live location sharing and automatic emergency service connection."
      />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 opacity-40">
          <TacticalBackground variant="section" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="SOS Protection"
            title={<>Emergency Response in <span className="text-neon-green">Under 1 Second</span></>}
            subtitle="One tap. Your entire safety network activated. Emergency services connected. All in under a second."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {sosFeatures.map((f, i) => (
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

          <SectionHeader badge="How SOS Works" title={<>The <span className="text-neon-green">Response Timeline</span></>} subtitle="Six steps from alert to resolution." />
          <div className="relative max-w-2xl mx-auto">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 mb-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono flex-shrink-0" style={{ background: 'rgba(0,255,136,0.15)', border: '1px solid rgba(0,255,136,0.3)', color: '#00ff88' }}>
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 mt-1" style={{ background: 'rgba(0,255,136,0.1)' }} />}
                </div>
                <div className="pb-4">
                  <p className="text-sm font-semibold text-white mb-0.5">{t.step}</p>
                  <p className="text-xs text-gray-500">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 mb-12">
            {[
              { value: '<1s', label: 'Alert Delivery' },
              { value: '195+', label: 'Countries Covered' },
              { value: '5', label: 'Alert Levels' },
              { value: '24/7', label: 'Active Monitoring' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-5 text-center" style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.1)' }}>
                <p className="text-2xl font-bold text-neon-green mb-1">{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/pricing" className="btn-primary inline-flex items-center gap-2">
              Enable SOS Protection <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
