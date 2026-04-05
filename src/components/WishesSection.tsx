import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';
export function WishesSection() {
  const { lang } = useLanguage();
  const t = translations[lang].wishes;
  return (
    <section className="w-full py-16 md:py-24 flex flex-col items-center px-4">
      <div className="max-w-[700px] w-full text-center flex flex-col items-center gap-8">
        <h2 className="font-heading text-5xl md:text-[72px] text-primary tracking-widest leading-[1.2]">
          {t.heading}
        </h2>
        <p className="font-body text-xl md:text-2xl text-textDark leading-relaxed">
          {t.text}
        </p>
      </div>
    </section>);

}