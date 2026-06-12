import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CTA.css';

export default function CTA({
  title = 'Find a Secure Location Near You',
  text = 'Reserve your unit online in minutes. First month free at select facilities.',
  primaryLabel = 'Find Storage',
  primaryTo = '/locations',
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link to={primaryTo} className="btn-primary btn-lg">
            {primaryLabel} <ArrowRight size={18} />
          </Link>
          {secondaryLabel && (
            <Link to={secondaryTo} className="btn-outline">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
