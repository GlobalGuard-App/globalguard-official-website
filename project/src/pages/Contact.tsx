import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';
import GlowingCard from '../components/GlowingCard';
import TacticalBackground from '../components/TacticalBackground';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <SEO title="Contact GlobalGuard — Support & Partnerships" description="Get in touch with the GlobalGuard team for support, partnerships, or general inquiries about our AI safety platform." canonical="/contact" />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 opacity-40"><TacticalBackground variant="section" /></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader as="h1" badge="Contact" title={<>Get in <span className="text-neon-blue">Touch</span></>} subtitle="Have a question or want to partner with us? We'd love to hear from you." />
        </div>
      </section>
      <section className="py-8 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { icon: Mail, title: 'Email', value: 'contact@globalguard.app' },
                { icon: MessageSquare, title: 'Support', value: 'help@globalguard.app' },
                { icon: MapPin, title: 'Platform', value: 'Global digital safety platform' },
                { icon: Phone, title: 'Response', value: 'Within 24 hours' },
              ].map((c) => (
                <GlowingCard key={c.title} color="blue" className="p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                    <c.icon size={18} className="text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">{c.title}</p>
                    <p className="text-sm text-gray-300">{c.value}</p>
                  </div>
                </GlowingCard>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <GlowingCard color="blue" className="p-8">
                {submitted ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.3)' }}>
                      <Send size={28} className="text-neon-green" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {['First Name', 'Last Name'].map((label) => (
                        <div key={label}>
                          <label className="block text-xs text-gray-500 mb-1.5">{label}</label>
                          <input required className="w-full px-4 py-2.5 rounded-lg text-sm text-white bg-transparent outline-none transition-all duration-200" style={{ background: 'rgba(0,212,255,0.03)', border: '1px solid rgba(0,212,255,0.1)' }} placeholder={label} />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Email</label>
                      <input required type="email" className="w-full px-4 py-2.5 rounded-lg text-sm text-white bg-transparent outline-none" style={{ background: 'rgba(0,212,255,0.03)', border: '1px solid rgba(0,212,255,0.1)' }} placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Subject</label>
                      <input required className="w-full px-4 py-2.5 rounded-lg text-sm text-white bg-transparent outline-none" style={{ background: 'rgba(0,212,255,0.03)', border: '1px solid rgba(0,212,255,0.1)' }} placeholder="How can we help?" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Message</label>
                      <textarea required rows={5} className="w-full px-4 py-2.5 rounded-lg text-sm text-white bg-transparent outline-none resize-none" style={{ background: 'rgba(0,212,255,0.03)', border: '1px solid rgba(0,212,255,0.1)' }} placeholder="Tell us more..." />
                    </div>
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                      Send Message <Send size={14} />
                    </button>
                  </form>
                )}
              </GlowingCard>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}