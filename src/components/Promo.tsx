import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import StarBackground from "./StarBackground";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5vh", "5vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-black"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <StarBackground meteorCount={5} />

      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
      >
        <div
          className="w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, #4c1d95 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      <h3 className="absolute top-12 right-6 text-white/50 uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Репутация решает всё
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl z-10 leading-tight">
        93% покупателей читают отзывы перед выбором. Бизнес с высоким рейтингом получает в&nbsp;3&nbsp;раза больше клиентов.{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #a78bfa, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Aura делает это возможным.
        </span>
      </p>
    </div>
  );
}
