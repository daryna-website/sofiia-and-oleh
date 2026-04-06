import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type Language = 'ua' | 'it';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ua',
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { lang: paramLang } = useParams<{ lang: Language }>();
  const navigate = useNavigate();
  const [lang, setLangState] = useState<Language>('ua');

  useEffect(() => {
    let initialLang: Language = 'ua';

    if (paramLang === 'ua' || paramLang === 'it') initialLang = paramLang;
    else {
      const savedLang = localStorage.getItem('lang') as Language;
      if (savedLang === 'ua' || savedLang === 'it') initialLang = savedLang;
    }

    setLangState(initialLang);
    localStorage.setItem('lang', initialLang);

    // Якщо URL не відповідає мові, замінюємо його
    if (paramLang !== initialLang) navigate(`/${initialLang}`, { replace: true });
  }, [paramLang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
    navigate(`/${newLang}`);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}