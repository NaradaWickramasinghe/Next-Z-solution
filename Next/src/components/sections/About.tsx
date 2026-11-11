import { Icon } from '../ui/Icon';
import { PILLARS } from '../../data/content';

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about-copy">
          <p className="eyebrow">About Us</p>
          <h2>Your vision, our solution</h2>
          <p>
            Next Z Solutions is a technology and creative partner that helps businesses innovate,
            automate and grow. We combine software engineering with creative design and marketing, so
            you do not need to juggle several vendors.
          </p>
          <p>
            Whether you need a custom system, a mobile app, a chatbot, a stronger search presence or
            a polished brand identity, we bring your ideas to life with solutions that are reliable
            and built around you.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Create Something Great Together
            <Icon name="i-arrow" />
          </a>
        </div>
        <div className="about-panel">
          {PILLARS.map((p) => (
            <div className="pillar" key={p.num}>
              <span className="num">{p.num}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

