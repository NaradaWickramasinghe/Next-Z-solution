import { useState, useCallback } from 'react';
import { Icon } from '../ui/Icon';
import { SectionHeader } from '../ui/SectionHeader';
import { FAQ_ITEMS } from '../../data/content';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          lead="Quick answers to the things people ask us most."
        />
        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={i}>
              <button
                className="faq-question"
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                {item.question}
                <Icon name="i-chevron" className="faq-chevron" />
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

