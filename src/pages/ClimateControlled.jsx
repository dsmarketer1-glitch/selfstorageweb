import { Link } from 'react-router-dom';
import {
  ThermometerSun, Snowflake, Droplets, Wind, ShieldCheck, CheckCircle,
  Building2, ArrowRight, Star,
} from 'lucide-react';
import { locations } from '../data/locations';
import Faq from '../components/Faq';
import CTA from '../components/CTA';

export default function ClimateControlled() {
  const climateLocations = locations.slice(0, 3);

  return (
    <div className="page">
      {/* Hero */}
      <section className="subhero hero-blue">
        <div className="container">
          <span className="badge badge-primary">Climate Controlled</span>
          <h1>Premium Climate-Controlled Storage</h1>
          <p>Protect your most sensitive belongings from extreme temperatures and humidity year-round, with units held between 55°F and 85°F.</p>
          <div className="subhero-actions">
            <Link to="/locations" className="btn-primary">Find a Location</Link>
            <Link to="/size-guide" className="btn-outline">View Size Guide</Link>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Climate Control?</span>
            <h2>Why Choose Climate Control?</h2>
            <p>Texas heat and humidity can damage your valuables. Our climate-controlled units keep them safe.</p>
          </div>
          <div className="grid-4">
            <div className="feature-card text-center">
              <div className="feature-icon blue round" style={{ margin: '0 auto 1.25rem' }}><ThermometerSun size={28} /></div>
              <h4>Temperature Regulated</h4>
              <p>Maintained between 55°F and 85°F so items are never exposed to extreme heat or freezing cold.</p>
            </div>
            <div className="feature-card text-center">
              <div className="feature-icon blue round" style={{ margin: '0 auto 1.25rem' }}><Droplets size={28} /></div>
              <h4>Humidity Managed</h4>
              <p>Advanced HVAC systems actively manage moisture to prevent mold, mildew, and warping.</p>
            </div>
            <div className="feature-card text-center">
              <div className="feature-icon blue round" style={{ margin: '0 auto 1.25rem' }}><Wind size={28} /></div>
              <h4>Dust Control</h4>
              <p>Indoor units with insulated roofing and sealed walls mean significantly less dust accumulation.</p>
            </div>
            <div className="feature-card text-center">
              <div className="feature-icon blue round" style={{ margin: '0 auto 1.25rem' }}><Snowflake size={28} /></div>
              <h4>Year-Round Comfort</h4>
              <p>Indoor hallways keep you comfortable while loading and unloading in any season.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Protection standards */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: 'var(--white)' }}>Superior Protection Standards</h2>
            <p>Every climate-controlled unit is engineered to museum-grade preservation standards.</p>
          </div>
          <div className="split">
            <div className="checklist" style={{ gap: '1.25rem' }}>
              {[
                ['24/7 Temperature Monitoring', 'Sensors track conditions around the clock with automatic alerts.'],
                ['Sealed, Insulated Construction', 'Vapor barriers and insulated panels lock out heat and moisture.'],
                ['HEPA-Filtered Air Circulation', 'Clean, filtered air keeps dust and allergens away from your items.'],
                ['Pest-Controlled Environment', 'Routine professional treatments protect against infestations.'],
              ].map(([t, d]) => (
                <div key={t} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <ShieldCheck size={24} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong style={{ color: 'var(--white)', display: 'block', marginBottom: 4 }}>{t}</strong>
                    <span style={{ color: '#cbd5e1' }}>{d}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="media-block" style={{ background: 'linear-gradient(135deg, #3b82f6, #1e3a8a)' }}>
              <ThermometerSun size={110} strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* What needs climate control */}
      <section className="section bg-light">
        <div className="container split">
          <div>
            <span className="eyebrow">Is It Right For You?</span>
            <h2>What Needs Climate Control?</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              While standard drive-up units are perfect for patio furniture and yard equipment,
              certain valuables require extra care to stay in pristine condition.
            </p>
            <ul className="checklist">
              <li><CheckCircle size={18} /> Wooden &amp; leather furniture</li>
              <li><CheckCircle size={18} /> Electronics &amp; appliances</li>
              <li><CheckCircle size={18} /> Artwork &amp; collectibles</li>
              <li><CheckCircle size={18} /> Important documents &amp; photographs</li>
              <li><CheckCircle size={18} /> Musical instruments</li>
              <li><CheckCircle size={18} /> Wine &amp; vinyl records</li>
            </ul>
          </div>
          <div className="media-block" style={{ background: 'linear-gradient(135deg, #1e3a8a, #0f172a)' }}>
            <Droplets size={110} strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* Nearby facilities */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Available Now</span>
            <h2>Nearby Climate-Controlled Facilities</h2>
          </div>
          <div className="grid-3">
            {climateLocations.map((loc) => (
              <div key={loc.id} className="card">
                <div className="solution-img grad-blue" style={{ height: 160 }}><Building2 size={40} /></div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <Star size={14} fill="currentColor" /> {loc.rating}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{loc.name}</h3>
                  <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>{loc.address}</p>
                  <Link to={`/locations/${loc.id}`} className="btn-ghost">View Units <ArrowRight size={16} /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq
        title="Climate Control FAQs"
        items={[
          { q: 'What temperature are climate-controlled units kept at?', a: 'Our units are maintained between 55°F and 85°F year-round, with active humidity management to protect sensitive belongings.' },
          { q: 'Is climate control worth the extra cost?', a: 'For furniture, electronics, documents, artwork, and anything sensitive to heat or moisture, yes. It prevents warping, mold, and cracking that can cost far more than the price difference.' },
          { q: 'Are climate-controlled units indoors?', a: 'Yes. They are located inside the building with insulated walls and roofing, accessible via well-lit interior hallways.' },
          { q: 'Do you manage humidity as well as temperature?', a: 'Absolutely. Our HVAC systems actively regulate humidity to prevent mold, mildew, and moisture damage.' },
        ]}
      />

      <CTA
        title="Reserve Your Climate-Controlled Unit Today"
        text="Protect what matters most. Find a climate-controlled facility near you."
        primaryLabel="Find a Location"
        secondaryLabel="Compare Sizes"
        secondaryTo="/size-guide"
      />
    </div>
  );
}
