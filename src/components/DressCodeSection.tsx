import React, { useState, useRef } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';
const galleryImages = [
{
  id: 1,
  url: "/__(11).jpg"
},
{
  id: 2,
  url: "/IMG_1475.jpg"
},
{
  id: 3,
  url: "/IMG_1478.jpg"
},
{
  id: 4,
  url: "/IMG_1477.jpg"
},
{
  id: 5,
  url: "/IMG_1480.jpg"
}];

const colorHexes = [
'#F3E6D6',
'#F7C4D3',
'#C8D8EF',
'#CCD4AB',
'#F8F6C3',
'#FFFDF5',
'#1E1A17'];

export function DressCodeSection() {
  const { lang } = useLanguage();
  const t = translations[lang].dressCode;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  };
  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth =
    el.querySelector<HTMLElement>('.gallery-card')?.offsetWidth || 300;
    const scrollAmount = cardWidth + 16;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
    setTimeout(checkScroll, 350);
  };
  return (
    <section className="w-full py-16 md:py-24 flex flex-col items-center px-4">
      <div className="max-w-[1100px] w-full flex flex-col items-center gap-8 md:gap-12">
        <h2 className="font-heading text-5xl md:text-[72px] text-primary tracking-widest text-center leading-[1.2]">
          {t.heading}
        </h2>

        <p className="font-body font-light text-xl md:text-[24px] text-textDark text-center max-w-[524px]">
          {t.description} <span className="font-bold">{t.style}</span>
        </p>

        <div className="w-full border border-[#E3E3E3] rounded-[12px] p-6 md:p-8 flex flex-col items-center gap-8">
          <h3 className="font-body text-base md:text-[18px] text-textDark text-center">
            {t.colorsHeading}
          </h3>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {t.colors.map((color, index) =>
            <div key={index} className="flex flex-col items-center gap-3">
                <div
                className="w-[60px] h-[60px] md:w-[82px] md:h-[82px] rounded-full border border-[#E3E3E3]"
                style={{
                  backgroundColor: colorHexes[index]
                }} />
              
                <div className="flex flex-col items-center gap-1">
                  <span className="font-body text-sm md:text-[18px] text-textDark text-center">
                    {color.name}
                  </span>
                  {color.subtitle &&
                <span className="font-body text-xs md:text-sm text-textDark text-center opacity-70">
                      {color.subtitle}
                    </span>
                }
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Photo Slider */}
      <div className="w-full max-w-[1908px] mt-12 md:mt-16 px-2 md:px-[6px]">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
          
          {galleryImages.map((img) =>
          <div
            key={img.id}
            className="gallery-card shrink-0 w-[200px] md:w-[280px] rounded-[14px] overflow-hidden"
            style={{
              aspectRatio: '9 / 16'
            }}>
            
              <img
              src={img.url}
              alt={`Gallery ${img.id}`}
              className="w-full h-full object-cover" />
            
            </div>
          )}
        </div>

        {/* Arrows */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-12 h-12 rounded-full border border-primary flex items-center justify-center transition-all duration-200 ${canScrollLeft ? 'text-primary hover:bg-primary hover:text-white cursor-pointer' : 'text-primary/30 border-primary/30 cursor-default'}`}
            aria-label="Previous">
            
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round">
              
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-12 h-12 rounded-full border border-primary flex items-center justify-center transition-all duration-200 ${canScrollRight ? 'text-primary hover:bg-primary hover:text-white cursor-pointer' : 'text-primary/30 border-primary/30 cursor-default'}`}
            aria-label="Next">
            
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round">
              
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>);

}