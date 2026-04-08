import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";

function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const STAR_COUNT = 180;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    const METEOR_COUNT = 4;
    const meteors = Array.from({ length: METEOR_COUNT }, () => createMeteor(canvas));

    function createMeteor(c: HTMLCanvasElement) {
      return {
        x: Math.random() * c.width * 1.5,
        y: Math.random() * c.height * 0.5 - c.height * 0.2,
        length: Math.random() * 140 + 80,
        speed: Math.random() * 6 + 4,
        opacity: 0,
        active: false,
        delay: Math.random() * 300,
        timer: 0,
        angle: Math.PI / 5,
      };
    }

    let frame = 0;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, "#000005");
      grad.addColorStop(0.5, "#03000f");
      grad.addColorStop(1, "#060010");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stars
      stars.forEach((s) => {
        const twinkle = Math.sin(frame * s.twinkleSpeed + s.twinkleOffset);
        const alpha = s.opacity * (0.6 + 0.4 * twinkle);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      // Meteors
      meteors.forEach((m, i) => {
        m.timer++;
        if (m.timer < m.delay) return;

        if (!m.active) {
          m.active = true;
          m.opacity = 1;
        }

        const dx = Math.cos(m.angle) * m.speed;
        const dy = Math.sin(m.angle) * m.speed;
        m.x += dx;
        m.y += dy;
        m.opacity -= 0.012;

        if (m.opacity > 0) {
          const tailX = m.x - Math.cos(m.angle) * m.length;
          const tailY = m.y - Math.sin(m.angle) * m.length;
          const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
          grad.addColorStop(0, `rgba(255, 255, 255, 0)`);
          grad.addColorStop(0.7, `rgba(200, 200, 255, ${m.opacity * 0.4})`);
          grad.addColorStop(1, `rgba(255, 255, 255, ${m.opacity})`);
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(m.x, m.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else {
          meteors[i] = { ...createMeteor(canvas), timer: 0 };
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-black"
    >
      <StarCanvas />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center text-white px-6"
      >
        <p className="text-xs md:text-sm uppercase tracking-widest mb-6 opacity-50">
          Управление репутацией
        </p>
        <h1
          className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tight mb-6 leading-none"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          AURA
        </h1>
        <p className="text-base md:text-xl max-w-xl mx-auto opacity-75 mb-10 leading-relaxed">
          Живые отзывы в Яндекс.Картах — чисто, быстро, безопасно.
          <br />Ваши клиенты видят лучшее о вас.
        </p>
        <a
          href="https://www.donationalerts.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white/40 text-white px-10 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
        >
          Заказать отзывы
        </a>
      </motion.div>
    </div>
  );
}
