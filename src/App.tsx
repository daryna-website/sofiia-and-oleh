import React from 'react';
import { LanguageProvider } from './lib/LanguageContext';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { CountdownSection } from './components/CountdownSection';
import { ProgramSection } from './components/ProgramSection';
import { DressCodeSection } from './components/DressCodeSection';
import { WishesSection } from './components/WishesSection';
import { GreetingSection } from './components/GreetingSection';
export function App() {
  return (
    <LanguageProvider>
      <main className="min-h-screen w-full bg-background flex flex-col overflow-x-hidden">
        <HeroSection />
        <IntroSection />
        <CountdownSection />
        <ProgramSection />
        <DressCodeSection />
        <WishesSection />
        <GreetingSection />
      </main>
    </LanguageProvider>);

}