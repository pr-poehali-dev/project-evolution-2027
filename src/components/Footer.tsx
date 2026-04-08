import StarBackground from "./StarBackground";

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="relative py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between overflow-hidden bg-black">
            <StarBackground meteorCount={3} />

            <div className="relative z-10 flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-purple-400/60 text-xs sm:text-sm tracking-widest">Сервис</h3>
                <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  О нас
                </a>
                <a href="#how" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Как это работает
                </a>
                <a
                  href="https://www.donationalerts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Оплата
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-purple-400/60 text-xs sm:text-sm tracking-widest">Заказать</h3>
                <a
                  href="https://www.donationalerts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  5 отзывов
                </a>
                <a
                  href="https://www.donationalerts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  10 отзывов
                </a>
                <a
                  href="https://www.donationalerts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Пакет под ключ
                </a>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1
                className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 font-bold tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 60%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AURA
              </h1>
              <p className="text-white/40 text-sm sm:text-base">{new Date().getFullYear()} Aura</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
