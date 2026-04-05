import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';
export function GreetingSection() {
  const { lang } = useLanguage();
  const t = translations[lang].greeting;
  const [copied, setCopied] = useState(false);
  const iban = 'IT44X0835870951000000771379';
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(iban);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  return (
    <section className="w-full px-2 md:px-[6px] py-16 md:py-24">
      <div className="bg-primary rounded-[14px] w-full max-w-[1908px] mx-auto py-16 md:py-24 flex flex-col items-center justify-center px-4">
        <h2 className="font-heading text-5xl md:text-[72px] text-white tracking-widest mb-12 text-center leading-[1.2]">
          {t.heading}
        </h2>

        <div className="flex flex-col items-center gap-8 max-w-[624px] w-full">
          <p className="font-body text-xl md:text-[24px] text-white text-center">
            {t.description}
          </p>

          <div className="w-full border border-white rounded-[14px] p-6 md:p-8 flex flex-col items-center gap-4">
            <span className="font-body text-base md:text-[18px] text-white text-center">
              Bukovskyi Oleh
            </span>

            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="font-body font-medium text-lg md:text-[24px] text-white text-center tracking-wider break-all">
                {iban}
              </span>
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 shrink-0"
                aria-label="Copy IBAN"
                title={copied ? 'Copied!' : 'Copy IBAN'}>
                
                {copied ?
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg> :

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  
                    <rect
                    x="9"
                    y="9"
                    width="13"
                    height="13"
                    rx="2"
                    ry="2">
                  </rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                }
              </button>
            </div>

            <span className="font-body text-base md:text-[18px] text-white text-center">
              {t.paymentNote}
            </span>
          </div>
        </div>
      </div>
    </section>);

}