import { Link } from 'react-router-dom';
import { Github, Mail } from 'lucide-react';
import Logo from './Logo';

const footerLinks = {
  Product: [
    { to: '/features', label: 'Features' },
    { to: '/ai-guardian', label: 'AI Guardian' },
    { to: '/sos-protection', label: 'SOS Protection' },
    { to: '/live-intel', label: 'Live Intel' },
    { to: '/cyber-safety', label: 'Cyber Safety' },
    { to: '/nearby-help', label: 'Nearby Help' },
  ],
  Company: [
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
    { to: '/pricing', label: 'Pricing' },
  ],
  Legal: [
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/terms', label: 'Terms of Service' },
  ],
};

const socials = [
  { icon: Github, href: 'https://github.com/GlobalGuard-App', label: 'GitHub' },
  { icon: Mail, href: 'mailto:contact@globalguard.app', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-neon-blue/08 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Logo size="md" />
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
              AI-powered personal safety for everyone, everywhere. Protection that never sleeps.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(0,212,255,0.05)',
                    border: '1px solid rgba(0,212,255,0.12)',
                    color: 'rgba(0,212,255,0.6)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.12)';
                    (e.currentTarget as HTMLElement).style.color = '#00d4ff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.05)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(0,212,255,0.6)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold tracking-widest uppercase text-neon-blue/60 mb-4 font-mono">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-neon-blue/06 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} GlobalGuard. All rights reserved.
          </p>
          <p className="text-xs font-mono" style={{ color: 'rgba(0,212,255,0.4)' }}>
            Privacy-first · AI-powered · Built for everyone
          </p>
        </div>

        {/* Developer credit */}
        <div className="mt-6 pt-5 border-t border-neon-blue/04 flex justify-center">
          <p
            className="text-[11px] font-mono tracking-widest"
            style={{ color: 'rgba(0,212,255,0.35)' }}
          >
            Developed by{' '}
            <span
              style={{
                color: 'rgba(0,212,255,0.65)',
                textShadow: '0 0 12px rgba(0,212,255,0.3)',
              }}
            >
              Praveen Agrawal
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}