import { Link } from 'react-router-dom';
import { Truck, Car, Ship, Caravan, Video, KeyRound, Ruler, CheckCircle } from 'lucide-react';
import Faq from '../components/Faq';
import CTA from '../components/CTA';

export default function VehicleStorage() {
  return (
    <div className="page">
      <section className="subhero hero-amber">
        <div className="container">
          <span className="badge badge-primary">Vehicle &amp; RV Storage</span>
          <h1>Secure Storage for Cars, RVs &amp; Boats</h1>
          <p>Free up your driveway. Store your vehicle, RV, boat, or trailer in a monitored, gated facility with easy in-and-out access.</p>
          <div className="subhero-actions">
            <Link to="/locations" className="btn-primary">Find Vehicle Storage</Link>
            <Link to="/size-guide" className="btn-outline">View Sizes</Link>
          </div>
        </div>
      </section>

      {/* Vehicle types */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">What Can You Store?</span>
            <h2>Room for Every Ride</h2>
            <p>From compact cars to 40-foot motorhomes, we have a space that fits.</p>
          </div>
          <div className="grid-4">
            {[
              [Car, 'Cars & Trucks', 'Covered and uncovered spaces for daily drivers and classics.'],
              [Caravan, 'RVs & Motorhomes', 'Extra-long spaces with high-clearance access.'],
              [Ship, 'Boats & Jet Skis', 'Trailer-friendly spots near the gate for easy launch days.'],
              [Truck, 'Trailers & Equipment', 'Utility, cargo, and work trailers welcome.'],
            ].map(([Icon, title, desc]) => (
              <div key={title} className="feature-card text-center">
                <div className="feature-icon" style={{ margin: '0 auto 1.25rem' }}><Icon size={28} /></div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options split */}
      <section className="section bg-light">
        <div className="container split">
          <div>
            <span className="eyebrow">Storage Options</span>
            <h2>Outdoor, Covered &amp; Enclosed</h2>
            <p style={{ marginBottom: '1.5rem' }}>Choose the level of protection that fits your vehicle and budget.</p>
            <ul className="checklist">
              <li><CheckCircle size={18} /> <strong style={{ marginRight: 6 }}>Outdoor:</strong> Affordable open-air paved spaces</li>
              <li><CheckCircle size={18} /> <strong style={{ marginRight: 6 }}>Covered:</strong> Canopy protection from sun &amp; hail</li>
              <li><CheckCircle size={18} /> <strong style={{ marginRight: 6 }}>Enclosed:</strong> Fully enclosed drive-up garages</li>
              <li><CheckCircle size={18} /> <strong style={{ marginRight: 6 }}>Power access:</strong> Trickle-charge hookups at select sites</li>
            </ul>
          </div>
          <div className="media-block" style={{ background: 'linear-gradient(135deg, #b45309, #1c2331)' }}>
            <Caravan size={120} strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section">
        <div className="container">
          <div className="section-title"><h2>Built for Vehicle Owners</h2></div>
          <div className="grid-3">
            <div className="feature-card"><div className="feature-icon soft"><Video size={26} /></div><h3>24/7 Surveillance</h3><p>Wide-angle cameras cover every parking space, day and night.</p></div>
            <div className="feature-card"><div className="feature-icon soft"><KeyRound size={26} /></div><h3>Gated Access</h3><p>Personalized codes and wide drive lanes for big rigs and trailers.</p></div>
            <div className="feature-card"><div className="feature-icon soft"><Ruler size={26} /></div><h3>Generous Spaces</h3><p>Spaces up to 40+ feet with high clearance for tall RVs.</p></div>
          </div>
        </div>
      </section>

      <Faq
        title="Vehicle Storage FAQs"
        items={[
          { q: 'What size vehicles can you accommodate?', a: 'We offer spaces from compact 10×20 spots up to 12×45 for large motorhomes and trailer combos. Check the size guide or call a facility for specifics.' },
          { q: 'Can I access my vehicle anytime?', a: 'Most facilities offer access from early morning to late evening, with several providing 24/7 app-based gate access for vehicle owners.' },
          { q: 'Is covered or enclosed vehicle storage available?', a: 'Yes. Depending on the location we offer open-air, covered canopy, and fully enclosed drive-up options.' },
          { q: 'Do I need insurance to store my vehicle?', a: 'We require proof of current registration and insurance for stored vehicles. Affordable storage protection plans are also available.' },
        ]}
      />

      <CTA
        title="Park it with SecureSpace"
        text="Reserve a vehicle, RV, or boat space near you in minutes."
        primaryLabel="Find Vehicle Storage"
        secondaryLabel="Talk to an Expert"
        secondaryTo="/contact"
      />
    </div>
  );
}
