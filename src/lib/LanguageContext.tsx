import React, { useState, createContext, useContext } from 'react';
type Language = 'ua' | 'it';
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}
const LanguageContext = createContext<LanguageContextType>({
  lang: 'ua',
  setLang: () => {}
});
export function LanguageProvider({ children }: {children: React.ReactNode;}) {
  const [lang, setLang] = useState<Language>('ua');
  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang
      }}>
      
      {children}
    </LanguageContext.Provider>);

}
export function useLanguage() {
  return useContext(LanguageContext);
}