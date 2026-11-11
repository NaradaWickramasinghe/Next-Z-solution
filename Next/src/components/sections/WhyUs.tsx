import { Icon } from '../ui/Icon';
import { SectionHeader } from '../ui/SectionHeader';
import { WHY_US } from '../../data/content';

export function WhyUs() {
  return (
    <section className="section section-alt" id="why-us">
      <div className="container">
        <SectionHeader
          eyebrow="Why Next Z Solutions"
          title="What you can count on"
          lead="Four commitments that guide every project we take on."
        />
        <div className="grid why-grid">
          {WHY_US.map((item) => (
            <div className="why" key={item.title}>
              <div className="why-icon">
                <Icon name={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
