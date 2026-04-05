import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';
const mapLinks = [
'https://maps.app.goo.gl/7qpXDzuav9kZMtB17',
'https://maps.app.goo.gl/7qpXDzuav9kZMtB17',
'https://maps.app.goo.gl/HA5agJbK1dZx7aFJ6'];

export function ProgramSection() {
  const { lang } = useLanguage();
  const t = translations[lang].program;
  return (
    <section className="w-full py-16 md:py-24 flex flex-col items-center px-4">
      <h2 className="font-heading text-5xl md:text-[72px] text-primary tracking-widest mb-16 md:mb-24 text-center leading-[1.2]">
        {t.heading}
      </h2>

      <div className="relative w-full max-w-[500px] mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-[4.5px] top-4 bottom-4 w-[1px] bg-primary z-0" />

        <div className="flex flex-col gap-8 md:gap-12 relative z-10">
          {t.items.map((item, index) =>
          <div key={index} className="flex items-start gap-8">
              {/* Dot indicator */}
              <div className="w-[10px] h-[10px] rounded-full bg-primary mt-3 shrink-0 relative z-10" />

              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">
                <div className="bg-primary rounded-[20px] px-4 py-1 inline-flex items-center justify-center w-fit">
                  <span className="font-body text-white text-sm md:text-base">
                    {item.time}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-body font-bold text-lg md:text-xl text-textDark">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-textDark opacity-80">
                    {item.location}
                  </p>
                  <a
                  href={mapLinks[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-4 py-2 mt-1 rounded-[40px] border border-primary hover:bg-primary transition-colors duration-300 w-fit">
                  
                    <span className="font-body font-medium text-sm md:text-base text-primary group-hover:text-white transition-colors">
                      {t.mapButton}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}