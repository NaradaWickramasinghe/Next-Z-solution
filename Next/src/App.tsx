import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Process } from './components/new/Process';
import { WhyUs } from './components/sections/WhyUs';
import { TechStack } from './components/new/TechStack';
import { About } from './components/sections/About';
import { CtaBand } from './components/sections/CtaBand';
import { FAQ } from './components/new/FAQ';
import { Contact } from './components/sections/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal(
    '.section-head, .service, .why, .pillar, .about-copy, .info-row, .contact-form, .cta-inner, .process-step, .faq-item',
  );

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <Header />

      <main id="main">
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <TechStack />
        <About />
        <CtaBand />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
