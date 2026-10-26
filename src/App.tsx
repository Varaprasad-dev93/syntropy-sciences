import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { KyrosClinic } from './components/KyrosClinic';
import { WhatWeBuild } from './components/WhatWeBuild';

export function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <KyrosClinic />
        <WhatWeBuild />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
