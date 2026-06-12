import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Faq.css';

export default function Faq({ items, title = 'Frequently Asked Questions', subtitle }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Got Questions?</span>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className={`faq-item ${open === i ? 'is-open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <ChevronDown className="faq-chevron" size={20} />
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
