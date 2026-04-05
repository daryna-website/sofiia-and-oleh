import React from 'react';
export function VenueSection() {
  return (
    <section className="w-full px-2 md:px-[6px] my-4">
      <div className="bg-primary rounded-[14px] w-full max-w-[1908px] mx-auto py-16 md:py-24 flex flex-col items-center justify-center px-4">
        <h2 className="font-heading text-5xl md:text-[72px] text-white tracking-widest mb-12 text-center leading-none">
          Місце збору
        </h2>

        <div className="flex flex-col items-center gap-8 max-w-[624px] w-full">
          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className="font-body font-bold text-xl md:text-[24px] text-white">
              Villa Romanica
            </h3>
            <p className="font-body text-base md:text-[18px] text-white">
              Via Appia Antica, 18 00179 Roma RM, Italia
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 rounded-[40px] border border-white hover:bg-white/10 transition-colors duration-300">
            
            <span className="font-body font-bold text-base md:text-[18px] text-white">
              Відкрити на карті
            </span>
          </a>
        </div>
      </div>
    </section>);

}