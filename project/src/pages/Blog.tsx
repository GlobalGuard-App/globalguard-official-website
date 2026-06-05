import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';
import GlowingCard from '../components/GlowingCard';
import TacticalBackground from '../components/TacticalBackground';

const posts = [
  { title: 'How AI is Revolutionizing Personal Safety', excerpt: 'Explore how machine learning models are changing the way individuals protect themselves in an increasingly complex world.', date: 'May 28, 2026', readTime: '6 min read', tag: 'AI Safety', color: 'blue' as const },
  { title: 'The State of Cybersecurity for Individuals in 2026', excerpt: 'A comprehensive look at the most significant cyber threats facing ordinary people and how to defend against them.', date: 'May 20, 2026', readTime: '8 min read', tag: 'Cybersecurity', color: 'green' as const },
  { title: 'Traveling Safely: A Guide for Solo Travelers', excerpt: 'Expert tips and technology solutions for staying safe while exploring the world alone.', date: 'May 12, 2026', readTime: '5 min read', tag: 'Travel Safety', color: 'blue' as const },
  { title: 'Zero-Knowledge Architecture: Why Privacy Matters', excerpt: "An in-depth look at how zero-knowledge encryption works and why it's the gold standard for protecting sensitive data.", date: 'May 5, 2026', readTime: '7 min read', tag: 'Privacy', color: 'green' as const },
  { title: 'SOS Technology: How Emergency Alerts Have Evolved', excerpt: 'From basic distress signals to AI-powered emergency response systems — the evolution of SOS technology.', date: 'Apr 28, 2026', readTime: '5 min read', tag: 'Emergency Tech', color: 'blue' as const },
  { title: 'Building a Safety Network: Friends, Family, and AI', excerpt: 'How to create a comprehensive personal safety network that combines human relationships with intelligent technology.', date: 'Apr 20, 2026', readTime: '6 min read', tag: 'Personal Safety', color: 'green' as const },
];

export default function Blog() {
  return (
    <PageLayout>
      <SEO title="Blog — GlobalGuard Safety Intelligence" description="Insights on personal safety, cybersecurity, AI, and emergency preparedness from the GlobalGuard team." />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 opacity-40"><TacticalBackground variant="section" /></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader badge="Blog" title={<>Safety Intelligence & <span className="text-neon-blue">Insights</span></>} subtitle="Expert perspectives on personal safety, cybersecurity, and AI protection." />
        </div>
      </section>
      <section className="py-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <GlowingCard color={post.color} className="p-6 h-full flex flex-col group cursor-pointer">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)', color: '#00d4ff' }}>
                      <Tag size={9} />{post.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3 flex-1 leading-snug">{post.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[10px] text-gray-600">
                      <span className="flex items-center gap-1"><Calendar size={10} />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={10} />{post.readTime}</span>
                    </div>
                    <ArrowRight size={14} className="text-neon-blue/40 group-hover:text-neon-blue group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
