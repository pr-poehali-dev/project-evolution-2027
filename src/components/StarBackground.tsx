import { useEffect, useRef } from "react";

interface StarBackgroundProps {
  className?: string;
  meteorCount?: number;
}

export default function StarBackground({ className = "", meteorCount = 3 }: StarBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const STAR_COUNT = 160;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.4 + 0.3,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    function createMeteor() {
      return {
        x: Math.random() * 1.5,
        y: Math.random() * 0.5 - 0.2,
        length: Math.random() * 140 + 80,
        speed: Math.random() * 5 + 3,
        opacity: 1,
        delay: Math.random() * 400 + 50,
        timer: 0,
        angle: Math.PI / 5,
        active: false,
      };
    }

    const meteors = Array.from({ length: meteorCount }, createMeteor);

    let frame = 0;

    const draw = () => {
      frame++;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "#000005");
      grad.addColorStop(0.5, "#03000f");
      grad.addColorStop(1, "#060010");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      stars.forEach((s) => {
        const twinkle = Math.sin(frame * s.twinkleSpeed + s.twinkleOffset);
        const alpha = s.opacity * (0.6 + 0.4 * twinkle);
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      meteors.forEach((m, i) => {
        m.timer++;
        if (m.timer < m.delay) return;
        if (!m.active) m.active = true;

        const dx = Math.cos(m.angle) * m.speed;
        const dy = Math.sin(m.angle) * m.speed;
        m.x += dx / w;
        m.y += dy / h;
        m.opacity -= 0.012;

        if (m.opacity > 0) {
          const mx = m.x * w;
          const my = m.y * h;
          const tailX = mx - Math.cos(m.angle) * m.length;
          const tailY = my - Math.sin(m.angle) * m.length;
          const mg = ctx.createLinearGradient(tailX, tailY, mx, my);
          mg.addColorStop(0, `rgba(255,255,255,0)`);
          mg.addColorStop(0.7, `rgba(200,200,255,${m.opacity * 0.4})`);
          mg.addColorStop(1, `rgba(255,255,255,${m.opacity})`);
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = mg;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else {
          meteors[i] = createMeteor();
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [meteorCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
}
