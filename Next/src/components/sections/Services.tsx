import { Icon } from '../ui/Icon';
import { SectionHeader } from '../ui/SectionHeader';
import { SERVICES } from '../../data/content';

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="What We Do"
          title="Services built around your business"
          lead="Everything you need to build, promote and automate, under one roof."
        />
        <div className="grid services-grid">
          {SERVICES.map((svc) => (
            <article className="card service" key={svc.title}>
              <div className="svc-icon">
                <Icon name={svc.icon} />
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

