import React, { useEffect, useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';
export function CountdownSection() {
  const { lang } = useLanguage();
  const t = translations[lang].countdown;
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const targetDate = new Date('2026-06-06T11:00:00+02:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }
      const calculatedHours = Math.floor(
        distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
      );
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: calculatedHours + 1,
        minutes: Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
        seconds: Math.floor(distance % (1000 * 60) / 1000)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const formatNumber = (num: number) => num.toString().padStart(2, '0');
  const cells = [
  {
    value: formatNumber(timeLeft.days),
    label: t.days
  },
  {
    value: formatNumber(timeLeft.hours),
    label: t.hours
  },
  {
    value: formatNumber(timeLeft.minutes),
    label: t.minutes
  },
  {
    value: formatNumber(timeLeft.seconds),
    label: t.seconds
  }];

  return (
    <section className="w-full px-2 md:px-[6px] py-16 md:py-24">
      <div className="bg-primary rounded-[14px] w-full max-w-[1908px] mx-auto py-12 md:py-20 flex flex-col items-center justify-center px-4">
        <h2 className="font-heading text-5xl md:text-[72px] text-white tracking-widest mb-12 text-center leading-[1.2]">
          {t.heading}
        </h2>

        <div className="border border-white rounded-[14px] flex w-full max-w-[540px] overflow-hidden">
          {cells.map((cell, index) =>
          <div
            key={index}
            className={`flex-1 py-6 px-2 md:p-6 flex flex-col items-center justify-center ${index < cells.length - 1 ? 'border-r border-white' : ''}`}>
            
              <span className="font-body font-thin italic text-4xl md:text-[60px] text-white leading-none mb-4">
                {cell.value}
              </span>
              <span className="font-body text-xs md:text-base text-white">
                {cell.label}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>);

}