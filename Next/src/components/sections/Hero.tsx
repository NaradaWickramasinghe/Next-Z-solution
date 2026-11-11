import { Icon } from '../ui/Icon';

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Innovate &bull; Automate &bull; Grow</p>
          <h1>
            Your One-Stop <span className="grad">Tech &amp; Creative</span> Partner
          </h1>
          <p className="lead">
            From smart systems to stunning visuals, Next Z Solutions brings your ideas to life with
            innovative and reliable solutions.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get in Touch Today
              <Icon name="i-arrow" />
            </a>
            <a href="#services" className="btn btn-ghost">
              Explore Services
            </a>
          </div>
          <ul className="hero-points">
            <li>Custom software</li>
            <li>Marketing &amp; SEO</li>
            <li>Apps &amp; automation</li>
          </ul>
        </div>

        {/* Decorative CSS illustration: no stock images, no AI art */}
        <div className="hero-visual" aria-hidden="true">
          <div className="mock">
            <div className="mock-bar">
              <span /><span /><span />
            </div>
            <div className="mock-body">
              <div className="mock-side">
                <i /><i /><i /><i />
              </div>
              <div className="mock-main">
                <div className="mock-cards"><b /><b /><b /></div>
                <div className="mock-chart">
                  <span style={{ '--h': '35%' } as React.CSSProperties} />
                  <span style={{ '--h': '55%' } as React.CSSProperties} />
                  <span style={{ '--h': '42%' } as React.CSSProperties} />
                  <span style={{ '--h': '70%' } as React.CSSProperties} />
                  <span style={{ '--h': '60%' } as React.CSSProperties} />
                  <span style={{ '--h': '88%' } as React.CSSProperties} />
                </div>
              </div>
            </div>
          </div>
          <div className="float f1"><Icon name="i-code" /></div>
          <div className="float f2"><Icon name="i-search" /></div>
          <div className="float f3"><Icon name="i-phone" /></div>
        </div>
      </div>
    </section>
  );
}

