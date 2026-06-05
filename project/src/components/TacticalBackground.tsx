import { useEffect, useRef } from 'react';

interface TacticalBackgroundProps {
  variant?: 'hero' | 'section' | 'subtle';
}

export default function TacticalBackground({ variant = 'hero' }: TacticalBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; alpha: number; life: number }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const initParticles = () => {
      const count = variant === 'hero' ? 40 : variant === 'section' ? 20 : 10;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3 - 0.1,
          size: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.4 + 0.1,
          life: Math.random() * 200,
        });
      }
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      if (variant === 'hero' || variant === 'section') {
        const gridSize = variant === 'hero' ? 60 : 80;
        const cols = Math.ceil(w / gridSize) + 1;
        const rows = Math.ceil(h / gridSize) + 1;

        for (let i = 0; i < cols; i++) {
          const x = i * gridSize;
          const wave = Math.sin(i * 0.08 + time * 0.008) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.strokeStyle = `rgba(0, 212, 255, ${wave * 0.025})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        for (let j = 0; j < rows; j++) {
          const y = j * gridSize;
          const wave = Math.sin(j * 0.08 + time * 0.008) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${wave * 0.025})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const x = i * gridSize;
            const y = j * gridSize;
            const dist = Math.sqrt((x - w / 2) ** 2 + (y - h / 2) ** 2);
            const wave = Math.sin(dist * 0.008 - time * 0.015) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 255, ${wave * 0.06})`;
            ctx.fill();
          }
        }
      }

      if (variant === 'hero') {
        const mapCx = w * 0.5;
        const mapCy = h * 0.5;
        const mapScaleX = w * 0.42;
        const mapScaleY = h * 0.35;
        const mapPulse = Math.sin(time * 0.008) * 0.5 + 0.5;

        const continents: Array<[number, number][]> = [
          [[-0.4, -0.35], [-0.35, -0.4], [-0.3, -0.42], [-0.25, -0.4], [-0.2, -0.35], [-0.18, -0.25], [-0.22, -0.2], [-0.25, -0.1], [-0.2, -0.05], [-0.18, -0.1], [-0.22, -0.15], [-0.28, -0.18], [-0.35, -0.22], [-0.4, -0.3]],
          [[-0.15, -0.05], [-0.12, 0.0], [-0.1, 0.1], [-0.08, 0.2], [-0.1, 0.3], [-0.13, 0.38], [-0.12, 0.35], [-0.15, 0.25], [-0.18, 0.15], [-0.17, 0.05]],
          [[0.05, -0.35], [0.1, -0.38], [0.15, -0.35], [0.18, -0.3], [0.15, -0.25], [0.1, -0.22], [0.05, -0.25], [0.03, -0.3]],
          [[0.05, -0.18], [0.1, -0.15], [0.15, -0.1], [0.18, 0.0], [0.15, 0.1], [0.12, 0.2], [0.08, 0.28], [0.05, 0.25], [0.02, 0.15], [0.0, 0.05], [0.02, -0.1]],
          [[0.2, -0.35], [0.3, -0.38], [0.4, -0.35], [0.45, -0.3], [0.42, -0.2], [0.38, -0.15], [0.35, -0.1], [0.3, -0.05], [0.25, -0.1], [0.22, -0.15], [0.2, -0.22], [0.18, -0.28]],
          [[0.35, 0.15], [0.42, 0.12], [0.45, 0.18], [0.42, 0.25], [0.38, 0.28], [0.35, 0.22]],
        ];

        continents.forEach((points) => {
          ctx.beginPath();
          points.forEach(([px, py], idx) => {
            const x = mapCx + px * mapScaleX;
            const y = mapCy + py * mapScaleY;
            if (idx === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          });
          ctx.closePath();
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.04 + mapPulse * 0.02})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
          ctx.fillStyle = `rgba(0, 212, 255, ${0.008 + mapPulse * 0.005})`;
          ctx.fill();

          points.forEach(([px, py]) => {
            const x = mapCx + px * mapScaleX;
            const y = mapCy + py * mapScaleY;
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 255, ${0.08 + mapPulse * 0.04})`;
            ctx.fill();
          });
        });

        const connections: Array<[[number, number], [number, number]]> = [
          [[-0.35, -0.35], [0.07, -0.3]],
          [[0.07, -0.3], [0.3, -0.35]],
          [[-0.15, 0], [0.1, -0.15]],
          [[0.1, 0], [0.35, 0.2]],
        ];

        connections.forEach(([from, to]) => {
          const x1 = mapCx + from[0] * mapScaleX;
          const y1 = mapCy + from[1] * mapScaleY;
          const x2 = mapCx + to[0] * mapScaleX;
          const y2 = mapCy + to[1] * mapScaleY;
          ctx.beginPath();
          ctx.setLineDash([4, 8]);
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.025 + mapPulse * 0.015})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.setLineDash([]);
          const progress = (time * 0.003) % 1;
          const px = x1 + (x2 - x1) * progress;
          const py = y1 + (y2 - y1) * progress;
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, 136, ${0.15 + mapPulse * 0.1})`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(px, py, 5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 255, 136, 0.03)';
          ctx.fill();
        });

        const hotspots = [
          { x: -0.28, y: -0.28 },
          { x: 0.1, y: -0.28 },
          { x: 0.35, y: -0.2 },
          { x: -0.12, y: 0.1 },
          { x: 0.12, y: 0.05 },
          { x: 0.38, y: 0.2 },
        ];

        hotspots.forEach((spot) => {
          const x = mapCx + spot.x * mapScaleX;
          const y = mapCy + spot.y * mapScaleY;
          const pulsePhase = (time * 0.02 + spot.x * 10) % (Math.PI * 2);
          const pulseAlpha = Math.sin(pulsePhase) * 0.5 + 0.5;
          const ringRadius = 3 + pulseAlpha * 8;
          ctx.beginPath();
          ctx.arc(x, y, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 255, 136, ${pulseAlpha * 0.08})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, 136, ${0.12 + pulseAlpha * 0.08})`;
          ctx.fill();
        });

        const cx = w * 0.5;
        const cy = h * 0.5;
        const radius = Math.max(w, h) * 0.4;
        const angle = (time * 0.01) % (Math.PI * 2);
        const gradient = ctx.createConicGradient(angle, cx, cy);
        gradient.addColorStop(0, 'rgba(0, 212, 255, 0.03)');
        gradient.addColorStop(0.1, 'rgba(0, 212, 255, 0.0)');
        gradient.addColorStop(1, 'rgba(0, 212, 255, 0.0)');
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        for (let r = 80; r < radius; r += 120) {
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.015 * (1 - r / radius)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life += 0.5;
        const pulse = Math.sin(p.life * 0.05) * 0.5 + 0.5;
        const alpha = p.alpha * pulse;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.fill();
        if (p.size > 1) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 212, 255, ${alpha * 0.15})`;
          ctx.fill();
        }
        if (p.x < -10) p.x = canvas.offsetWidth + 10;
        if (p.x > canvas.offsetWidth + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.offsetHeight + 10;
        if (p.y > canvas.offsetHeight + 10) p.y = -10;
      });

      if (variant === 'hero') {
        const scanY = (time * 0.5) % h;
        const scanGrad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
        scanGrad.addColorStop(0, 'rgba(0, 212, 255, 0)');
        scanGrad.addColorStop(0.5, 'rgba(0, 212, 255, 0.02)');
        scanGrad.addColorStop(1, 'rgba(0, 212, 255, 0)');
        ctx.fillStyle = scanGrad;
        ctx.fillRect(0, scanY - 30, w, 60);
      }

      time++;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
