import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  /** Render the title as h1 for page heroes, h2 for sections (default: h2) */
  as?: 'h1' | 'h2';
}

export default function SectionHeader({ badge, title, subtitle, center = true, as: Tag = 'h2' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-4 ${center ? 'justify-center' : ''}`}>
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase font-mono"
            style={{
              background: 'rgba(0, 212, 255, 0.08)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              color: '#00d4ff',
            }}
          >
            {badge}
          </span>
        </div>
      )}
      <Tag className="section-title mb-4">{title}</Tag>
      {subtitle && (
        <p className={`section-subtitle ${center ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}