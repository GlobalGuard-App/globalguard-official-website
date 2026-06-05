import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/ai-guardian', label: 'AI Guardian' },
  { to: '/sos-protection', label: 'SOS' },
  { to: '/live-intel', label: 'Live Intel' },
  { to: '/cyber-safety', label: 'Cyber Safety' },
  { to: '/nearby-help', label: 'Nearby Help' },
  { to: '/about', label: 'About' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(6, 8, 16, 0.95)'
          : 'rgba(6, 8, 16, 0.65)',
        backdropFilter: 'blur(28px) saturate(160%)',
        WebkitBackdropFilter: 'blur(28px) saturate(160%)',
        borderBottom: scrolled
          ? '1px solid rgba(0, 212, 255, 0.14)'
          : '1px solid rgba(0, 212, 255, 0.06)',
        boxShadow: scrolled
          ? '0 4px 40px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(0,212,255,0.05)'
          : 'none',
      }}
    >
      {/* Desktop nav */}
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center h-[62px] gap-4">

          {/* Logo — fixed width so it never gets squeezed */}
          <div className="flex-shrink-0 w-44">
            <Link to="/" className="inline-flex">
              <Logo size="sm" />
            </Link>
          </div>

          {/* Nav links — centered, only visible on lg+ */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-0.5">
            {navLinks.map(({ to, label }) => {
              const active = isActive(to);
              return (
                <NavItem key={to} to={to} label={label} active={active} />
              );
            })}
          </div>

          {/* Right side — CTA + hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0 ml-auto lg:ml-0">
            <Link
              to="/pricing"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)',
                color: '#060810',
                boxShadow: '0 0 18px rgba(0,212,255,0.28), 0 0 36px rgba(0,255,136,0.12)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = '0 0 28px rgba(0,212,255,0.45), 0 0 56px rgba(0,255,136,0.22)';
                el.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = '0 0 18px rgba(0,212,255,0.28), 0 0 36px rgba(0,255,136,0.12)';
                el.style.transform = 'translateY(0)';
              }}
            >
              Get Started
            </Link>

            {/* Hamburger — mobile / below lg */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 flex-shrink-0"
              style={{
                background: isOpen ? 'rgba(0,212,255,0.1)' : 'rgba(0,212,255,0.05)',
                border: '1px solid rgba(0,212,255,0.15)',
                color: '#00d4ff',
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden"
            style={{
              background: 'rgba(6, 8, 16, 0.98)',
              borderTop: '1px solid rgba(0, 212, 255, 0.08)',
            }}
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3 flex flex-col gap-1">
              {navLinks.map(({ to, label }) => {
                const active = isActive(to);
                return (
                  <MobileNavItem key={to} to={to} label={label} active={active} />
                );
              })}
              <Link
                to="/pricing"
                className="mt-3 mb-1 flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)',
                  color: '#060810',
                  boxShadow: '0 0 20px rgba(0,212,255,0.2)',
                }}
              >
                Get Started Free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─── Desktop nav item ─── */
function NavItem({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className="group relative px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-250 overflow-hidden whitespace-nowrap"
      style={{
        color: active ? '#00d4ff' : 'rgba(200, 214, 229, 0.72)',
        background: active
          ? 'linear-gradient(135deg, rgba(0,212,255,0.13) 0%, rgba(0,240,255,0.07) 100%)'
          : 'transparent',
        border: active
          ? '1px solid rgba(0, 212, 255, 0.28)'
          : '1px solid transparent',
        boxShadow: active
          ? '0 0 14px rgba(0,212,255,0.18), inset 0 0 14px rgba(0,212,255,0.05)'
          : 'none',
        textShadow: active ? '0 0 14px rgba(0,212,255,0.55)' : 'none',
      }}
    >
      {/* Hover glass bg */}
      <span
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(0,212,255,0.09) 0%, rgba(0,240,255,0.04) 100%)',
          border: '1px solid rgba(0, 212, 255, 0.18)',
          boxShadow: '0 0 10px rgba(0,212,255,0.08)',
        }}
      />
      {/* Light sweep shimmer on hover */}
      <span
        className="absolute inset-0 rounded-lg pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <span
          className="absolute top-0 h-full w-1/3"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.18), transparent)',
            left: '-40%',
            transition: 'left 0.55s ease',
          }}
          ref={(el) => {
            if (!el) return;
            const parent = el.parentElement?.parentElement;
            if (!parent) return;
            const enter = () => { el.style.left = '130%'; };
            const leave = () => { el.style.left = '-40%'; };
            parent.addEventListener('mouseenter', enter);
            parent.addEventListener('mouseleave', leave);
          }}
        />
      </span>
      <span
        className="relative z-10 group-hover:text-[#00d4ff] transition-colors duration-200"
        style={{ color: active ? '#00d4ff' : undefined }}
      >
        {label}
      </span>
    </Link>
  );
}

/* ─── Mobile nav item ─── */
function MobileNavItem({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className="group relative flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 overflow-hidden"
      style={{
        color: active ? '#00d4ff' : 'rgba(200, 214, 229, 0.72)',
        background: active
          ? 'linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(0,240,255,0.05) 100%)'
          : 'transparent',
        border: active
          ? '1px solid rgba(0, 212, 255, 0.22)'
          : '1px solid transparent',
        textShadow: active ? '0 0 12px rgba(0,212,255,0.45)' : 'none',
      }}
    >
      <span
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          background: 'rgba(0, 212, 255, 0.05)',
          border: '1px solid rgba(0, 212, 255, 0.13)',
        }}
      />
      <span className="relative z-10">{label}</span>
      {active && (
        <span
          className="relative z-10 w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: '#00d4ff', boxShadow: '0 0 7px rgba(0,212,255,0.9)' }}
        />
      )}
    </Link>
  );
}
