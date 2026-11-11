import { SectionHeader } from '../ui/SectionHeader';
import { PROCESS_STEPS } from '../../data/content';

export function Process() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="How We Work"
          title="A clear path from idea to launch"
          lead="Every project follows a proven four-step process so you always know what comes next."
        />
        <div className="process-grid">
          {PROCESS_STEPS.map((step) => (
            <div className="process-step" key={step.num}>
              <div className="process-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

