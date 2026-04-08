export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают Aura</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Только живые аккаунты с историей — никакого спама и ботов. Отзывы появляются постепенно и выглядят естественно, чтобы Яндекс не удалял их.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
            <span>Живые аккаунты с реальной историей активности</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
            <span>Постепенное добавление — без резких скачков</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
            <span>Быстрый результат — заметно уже через 24 часа</span>
          </div>
        </div>
        <a
          href="https://www.donationalerts.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Заказать
        </a>
      </div>
    </div>
  );
}