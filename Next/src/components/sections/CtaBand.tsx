import { WA_LINK, PHONE_DISPLAY } from '../../data/content';

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <h2>Let's Create Something Great Together!</h2>
        <p>Tell us about your idea and we will help you take the next step.</p>
        <div className="hero-actions">
          <a href={WA_LINK} className="btn btn-light" target="_blank" rel="noopener">
            Chat on WhatsApp
          </a>
          <a href="tel:+94764893143" className="btn btn-outline-light">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

