import { motion } from 'framer-motion';
import { CheckCircle2, X, ArrowRight, Shield, Brain, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/SEO';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';
import GlowingCard from '../components/GlowingCard';
import TacticalBackground from '../components/TacticalBackground';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Essential protection for individuals',
    icon: Shield,
    color: 'blue' as const,
    features: ['SOS Alerts', 'Nearby Help', '1 Emergency Contact', 'Basic Threat Alerts'],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Guardian',
    price: '$9.99',
    description: 'Full AI protection for individuals',
    icon: Brain,
    color: 'green' as const,
    features: ['Everything in Free', 'AI Guardian Protection', 'Live Security Intel', 'Cyber Safety Tools', '5 Emergency Contacts', 'Priority Support'],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Family',
    price: '$19.99',
    description: 'Complete protection for the whole family',
    icon: Globe,
    color: 'blue' as const,
    features: ['Everything in Guardian', 'Up to 5 Family Members', 'Family Location Sharing', 'Advanced Monitoring', 'Unlimited Contacts', 'Dedicated Support'],
    cta: 'Protect Your Family',
    popular: false,
  },
];

const comparisonRows = [
  { feature: 'SOS Alerts', free: true, guardian: true, family: true },
  { feature: 'Nearby Help', free: true, guardian: true, family: true },
  { feature: 'Emergency Contacts', free: '1', guardian: '5', family: 'Unlimited' },
  { feature: 'AI Guardian Protection', free: false, guardian: true, family: true },
  { feature: 'Live Security Intel', free: false, guardian: true, family: true },
  { feature: 'Cyber Safety Tools', free: false, guardian: true, family: true },
  { feature: 'Priority Support', free: false, guardian: true, family: true },
  { feature: 'Family Members', free: false, guardian: false, family: '5' },
  { feature: 'Family Location Sharing', free: false, guardian: false, family: true },
  { feature: 'Advanced Monitoring', free: false, guardian: false, family: true },
];

const faqs = [
  { q: 'Is there a free trial?', a: 'Yes, all premium plans include a 30-day free trial. No credit card required to get started.' },
  { q: 'Can I cancel anytime?', a: 'Absolutely. Cancel anytime with no questions asked. Your data is deleted immediately.' },
  { q: 'How does family sharing work?', a: 'Add up to 5 family members who each get their own full GlobalGuard account linked to your family plan.' },
  { q: 'When will the app launch?', a: 'GlobalGuard is currently in active development. Sign up now to be notified at launch and receive priority access.' },
];

function Check() {
  return <CheckCircle2 size={16} className="text-neon-green mx-auto" />;
}
function Cross() {
  return <X size={14} className="text-gray-700 mx-auto" />;
}

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageLayout>
      <SEO title="Pricing — GlobalGuard Safety Plans" description="Choose the GlobalGuard plan that fits your needs. Free tier available with essential safety features. Premium AI protection from $9.99/month." keywords="GlobalGuard pricing, safety app pricing, personal safety plan, AI security subscription" canonical="/pricing" />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 opacity-40"><TacticalBackground variant="section" /></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader as="h1" badge="Pricing" title={<>Protection for <span className="text-neon-blue">Every Budget</span></>} subtitle="Start free. Upgrade when you need more. Cancel anytime." />
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {tiers.map((tier, i) => (
              <motion.div key={tier.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase z-10" style={{ background: 'linear-gradient(135deg, #00d4ff, #00ff88)', color: '#060810' }}>
                    Most Popular
                  </div>
                )}
                <GlowingCard
                  color={tier.color}
                  className={`p-6 h-full flex flex-col ${tier.popular ? 'ring-1 ring-neon-blue/30' : ''}`}
                >
                  <div className="mb-6">
                    <tier.icon size={28} className={tier.color === 'blue' ? 'text-neon-blue mb-3' : 'text-neon-green mb-3'} />
                    <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                    <p className="text-xs text-gray-500 mb-4">{tier.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      {tier.price !== '$0' && <span className="text-sm text-gray-500">/mo</span>}
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle2 size={14} className="text-neon-green flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={tier.popular ? 'btn-primary text-center block' : 'btn-secondary text-center block'}
                  >
                    {tier.cta}
                  </Link>
                </GlowingCard>
              </motion.div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="mb-20 overflow-x-auto">
            <SectionHeader badge="Compare Plans" title={<>Detailed <span className="text-neon-blue">Feature Comparison</span></>} />
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neon-blue/10">
                  <th className="text-left py-3 text-gray-500 font-normal">Feature</th>
                  <th className="py-3 text-center text-gray-400">Free</th>
                  <th className="py-3 text-center text-neon-blue">Guardian</th>
                  <th className="py-3 text-center text-gray-400">Family</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-neon-blue/05">
                    <td className="py-3 text-gray-500">{row.feature}</td>
                    <td className="py-3 text-center text-gray-400">
                      {typeof row.free === 'boolean' ? (row.free ? <Check /> : <Cross />) : row.free}
                    </td>
                    <td className="py-3 text-center text-gray-400">
                      {typeof row.guardian === 'boolean' ? (row.guardian ? <Check /> : <Cross />) : row.guardian}
                    </td>
                    <td className="py-3 text-center text-gray-400">
                      {typeof row.family === 'boolean' ? (row.family ? <Check /> : <Cross />) : row.family}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <SectionHeader badge="FAQ" title="Pricing Questions" />
          <div className="space-y-3 mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ background: 'rgba(10,14,23,0.6)', border: '1px solid rgba(0,212,255,0.08)' }}>
                <button
                  className="w-full flex items-center justify-between p-5 text-sm font-medium text-white text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <ArrowRight size={14} className={`text-gray-500 flex-shrink-0 ml-4 transition-transform duration-200 ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Custom Pricing?</h2>
            <p className="text-gray-500 mb-6">For teams, organizations, or volume licensing.</p>
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">Contact Sales <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}