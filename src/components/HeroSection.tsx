import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

export function HeroSection() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1070px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-[center_20%] md:bg-[center_30%] bg-no-repeat"
        style={{
          backgroundImage:
            'url("/https://www.dropbox.com/scl/fi/b04dngskpcb9a6wa5yq0w/wedding.jpg?rlkey=t9iqmk07rkyvbhtz917dng2g1&st=fc391uha&raw=1")',
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            'linear-gradient(0deg, rgba(26,23,20,0.84) 0%, rgba(26,23,20,0) 100%)',
        }}
      />

      {/* Language Switcher */}
      <div className="absolute top-8 right-8 md:top-14 md:right-14 z-10">
        <div className="flex items-center bg-white/15 backdrop-blur-md rounded-full p-1 border border-white/20">
          <button
            onClick={() => setLang('ua')}
            className={`font-body font-medium text-sm md:text-base px-4 py-1.5 rounded-full transition-colors ${
              lang === 'ua' ? 'text-white bg-white/25' : 'text-white/50 hover:text-white/80'
            }`}
          >
            UA
          </button>
          <button
            onClick={() => setLang('it')}
            className={`font-body font-medium text-sm md:text-base px-4 py-1.5 rounded-full transition-colors ${
              lang === 'it' ? 'text-white bg-white/25' : 'text-white/50 hover:text-white/80'
            }`}
          >
            IT
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center mt-auto mb-12 md:mb-20 px-4 text-center">
        <h1
          className="font-heading text-7xl md:text-[140px] text-white tracking-widest mb-4 md:mb-8 leading-tight"
          style={{ textShadow: '0px 2px 32px rgba(0,0,0,0.2)' }}
        >
          Wedding Day
        </h1>
        <h2 className="font-body text-2xl md:text-[30px] text-white mb-2 md:mb-4">
          {t.names}
        </h2>
        <p className="font-body text-lg md:text-[20px] text-white">06.06.2026</p>
      </div>
    </section>
  );
}