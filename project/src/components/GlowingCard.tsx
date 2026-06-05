import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlowingCardProps {
  children: ReactNode;
  color?: 'blue' | 'green' | 'cyan';
  className?: string;
  hover?: boolean;
}

const colorMap = {
  blue: {
    border: 'border-neon-blue/15',
    hoverBorder: 'hover:border-neon-blue/35',
    shadow: 'hover:shadow-[0_0_30px_rgba(0,212,255,0.1),0_8px_32px_rgba(0,0,0,0.3)]',
    glowBefore: 'rgba(0, 212, 255, 0.3)',
    glowAfter: 'rgba(0, 212, 255, 0.15)',
  },
  green: {
    border: 'border-neon-green/15',
    hoverBorder: 'hover:border-neon-green/35',
    shadow: 'hover:shadow-[0_0_30px_rgba(0,255,136,0.1),0_8px_32px_rgba(0,0,0,0.3)]',
    glowBefore: 'rgba(0, 255, 136, 0.3)',
    glowAfter: 'rgba(0, 255, 136, 0.15)',
  },
  cyan: {
    border: 'border-neon-cyan/15',
    hoverBorder: 'hover:border-neon-cyan/35',
    shadow: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.1),0_8px_32px_rgba(0,0,0,0.3)]',
    glowBefore: 'rgba(0, 240, 255, 0.3)',
    glowAfter: 'rgba(0, 240, 255, 0.15)',
  },
};

export default function GlowingCard({ children, color = 'blue', className = '', hover = true }: GlowingCardProps) {
  const c = colorMap[color];

  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
      className={`glass-panel-tactical border ${c.border} ${hover ? c.hoverBorder : ''} ${hover ? c.shadow : ''} transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}
