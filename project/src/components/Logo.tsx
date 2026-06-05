import { Shield } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const iconSize = size === 'sm' ? 20 : size === 'lg' ? 32 : 24;
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-lg bg-neon-blue/20 blur-md" />
        <div
          className="relative rounded-lg p-1.5"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(0,255,136,0.1) 100%)',
            border: '1px solid rgba(0,212,255,0.3)',
          }}
        >
          <Shield
            size={iconSize}
            className="text-neon-blue"
            style={{ filter: 'drop-shadow(0 0 6px rgba(0,212,255,0.6))' }}
          />
        </div>
      </div>
      {showText && (
        <span
          className={`${textSize} font-bold tracking-tight`}
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          GlobalGuard
        </span>
      )}
    </div>
  );
}
