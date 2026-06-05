import { motion } from 'framer-motion';
import { MapPin, Shield, Heart, Lock, Navigation, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';
import GlowingCard from '../components/GlowingCard';
import TacticalBackground from '../components/TacticalBackground';

const helpTypes = [
  { icon: Shield, title: 'Police Stations', desc: 'Nearest police stations with contact numbers and estimated response times.' },
  { icon: Heart, title: 'Hospitals & Clinics', desc: 'Emergency rooms, clinics, and specialty care sorted by distance.' },
  { icon: Lock, title: 'Pharmacies', desc: '24-hour pharmacies and drugstores near your current location.' },
  { icon: Navigation, title: 'Safe Routes', desc: 'AI-calculated safe routes to your destination avoiding high-risk areas.' },
  { icon: MapPin, title: 'Safe Zones', desc: 'Designated safe havens including embassies and public safety buildings.' },
  { icon: Clock, title: 'Real-Time Availability', desc: 'Live status updates on hospital capacity and service availability.' },
];

export default function NearbyHelp() {
  return (
    <PageLayout>
      <SEO title="Nearby Help — GlobalGuard Emergency Services Locator" description="Find police, hospitals, pharmacies, and safe zones near you instantly." />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 opacity-40"><TacticalBackground variant="section" /></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader badge="Nearby Help" title={<>Emergency Services <span className="text-neon-blue">Near You</span></>} subtitle="Instantly locate police, hospitals, pharmacies, and safe zones wherever you are in the world." />
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {helpTypes.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <GlowingCard color={i % 2 === 0 ? 'blue' : 'green'} className="p-6 h-full">
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
            <Link to="/pricing" className="btn-primary inline-flex items-center gap-2">Get Nearby Help <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
