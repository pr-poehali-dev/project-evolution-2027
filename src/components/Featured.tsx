import StarBackground from "./StarBackground";

export default function Featured() {
  return (
    <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 overflow-hidden bg-black">
      <StarBackground meteorCount={2} />

      <div className="relative z-10 flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <div
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"
              style={{
                background: "radial-gradient(circle at 30% 30%, #a78bfa33 0%, #7c3aed22 40%, transparent 70%)",
                boxShadow: "0 0 80px 20px #a78bfa22, inset 0 0 60px #7c3aed11",
                border: "1px solid rgba(167,139,250,0.15)",
              }}
            />
            <div
              className="absolute w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full"
              style={{
                background: "radial-gradient(circle at 60% 40%, #ffffff08 0%, #a78bfa11 50%, transparent 70%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            <div className="absolute text-center">
              <p className="text-5xl md:text-6xl font-black text-white/10 select-none">★★★★★</p>
              <p
                className="text-2xl md:text-3xl font-black mt-2"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                4.9 / 5.0
              </p>
              <p className="text-white/40 text-sm mt-1 uppercase tracking-widest">рейтинг</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-purple-400/70">Почему выбирают Aura</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-white leading-tight">
          Только живые аккаунты с историей — никакого спама и ботов. Отзывы появляются постепенно и выглядят естественно, чтобы Яндекс не удалял их.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-3 text-white/70">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#a78bfa" }}></span>
            <span>Живые аккаунты с реальной историей активности</span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#a78bfa" }}></span>
            <span>Постепенное добавление — без резких скачков</span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#a78bfa" }}></span>
            <span>Быстрый результат — заметно уже через 24 часа</span>
          </div>
        </div>
        <a
          href="https://www.donationalerts.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/30 text-white px-6 py-2.5 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Заказать
        </a>
      </div>
    </div>
  );
}
