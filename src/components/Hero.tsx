import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import StarBackground from "./StarBackground";

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
      <StarBackground meteorCount={4} />

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
