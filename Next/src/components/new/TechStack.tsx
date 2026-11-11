import { TECH_STACK } from '../../data/content';

export function TechStack() {
  /* Duplicate the list for seamless infinite scroll */
  const doubled = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="tech-section section-alt">
      <div className="container">
        <p className="eyebrow" style={{ textAlign: 'center', marginBottom: 32 }}>
          Technologies &amp; Tools We Use
        </p>
      </div>
      <div className="marquee-track">
        {doubled.map((tech, i) => (
          <span className="tech-tag" key={`${tech}-${i}`}>
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

