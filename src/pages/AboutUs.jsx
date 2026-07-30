import { Link } from 'react-router-dom';
import { Shield, Sparkles, Heart, Users, Building2, Award, Leaf } from 'lucide-react';
import CTA from '../components/CTA';

const team = [
  { name: 'Marcus Reed', role: 'Founder & CEO', initials: 'MR' },
  { name: 'Elena Rodriguez', role: 'Chief Operating Officer', initials: 'ER' },
  { name: 'James Carter', role: 'VP of Security', initials: 'JC' },
  { name: 'Aisha Patel', role: 'Head of Customer Experience', initials: 'AP' },
];

export default function AboutUs() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="subhero hero-dark">
        <div className="container">
          <span className="badge badge-primary">Our Story</span>
          <h1>More Than Just Space — It's Peace of Mind.</h1>
          <p>Self Storage 214 is a locally owned facility in Crowley, TX, dedicated to providing clean, secure, affordable storage that prioritizes your valuables' safety and your convenience.</p>
          <div className="subhero-actions">
            <Link to="/locations" className="btn-primary">Find Your Unit</Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Proudly Serving Crowley</span>
            <h2>Your Neighborhood Storage in Crowley, TX</h2>
            <p>Self Storage 214 recently took over the storage facility at 1520 Bean Dr, bringing fresh management, upgraded security, and honest, affordable rates to the Crowley community.</p>
            <p>Whether you're moving, decluttering, running a business, or need a safe spot for your boat or RV, we combine modern technology — online rental, 24-hour gated access, and digital gate codes — with genuine hometown hospitality. More space, made simple.</p>
          </div>
          <div className="media-block" style={{ background: 'linear-gradient(135deg, #f59e0b, #1c2331)' }}>
            <Building2 size={110} strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm bg-light">
        <div className="container">
          <div className="grid-4 text-center">
            <div><div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)' }}>24/7</div><div className="text-muted">Gated Access</div></div>
            <div><div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)' }}>5</div><div className="text-muted">Unit Sizes</div></div>
            <div><div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)' }}>Local</div><div className="text-muted">Owned &amp; Operated</div></div>
            <div><div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)' }}>4.9★</div><div className="text-muted">Customer Rating</div></div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-secondary text-center">
        <div className="container">
          <span className="eyebrow">Our Mission</span>
          <h2 style={{ fontSize: '2.25rem', fontStyle: 'italic', maxWidth: 820, margin: '1rem auto 0', lineHeight: 1.4, color: 'var(--white)' }}>
            "To provide the most secure, accessible, and customer-centric storage experience in the industry."
          </h2>
          <div style={{ width: 60, height: 4, backgroundColor: 'var(--primary)', margin: '2rem auto 0' }} />
        </div>
      </section>

      {/* Standards */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">What Sets Us Apart</span>
            <h2>Unmatched Operational Standards</h2>
            <p>We don't just rent space; we maintain a sanctuary for your possessions.</p>
          </div>
          <div className="grid-3">
            <div className="feature-card">
              <div className="feature-icon"><Shield size={26} /></div>
              <h3>Uncompromising Security</h3>
              <ul className="checklist" style={{ marginTop: '1rem' }}>
                <li>24/7 high-definition surveillance</li>
                <li>Individually alarmed units</li>
                <li>Secure electronic gate access</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Sparkles size={26} /></div>
              <h3>White-Glove Cleanliness</h3>
              <ul className="checklist" style={{ marginTop: '1rem' }}>
                <li>Daily professional facility sweeps</li>
                <li>Pest-controlled environments</li>
                <li>Brightly lit hallway networks</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Heart size={26} /></div>
              <h3>Customer-First Service</h3>
              <ul className="checklist" style={{ marginTop: '1rem' }}>
                <li>Professional on-site managers</li>
                <li>Award-winning support team</li>
                <li>Seamless mobile management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">The People Behind Self Storage 214</span>
            <h2>Meet Our Leadership Team</h2>
          </div>
          <div className="grid-4">
            {team.map((m) => (
              <div key={m.name} className="feature-card text-center">
                <div style={{
                  width: 88, height: 88, borderRadius: '50%', margin: '0 auto 1rem',
                  background: 'linear-gradient(135deg, #f59e0b, #1c2331)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', fontWeight: 800,
                }}>{m.initials}</div>
                <h3 style={{ fontSize: '1.2rem' }}>{m.name}</h3>
                <p className="text-muted">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values / community */}
      <section className="section bg-light">
        <div className="container split">
          <div className="media-block" style={{ background: 'linear-gradient(135deg, #1c2331, #b45309)' }}>
            <Users size={110} strokeWidth={1} />
          </div>
          <div>
            <span className="eyebrow">Our Values</span>
            <h2>Our Community &amp; Planet</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We believe a great storage company is also a good neighbor. From hiring locally to
              running energy-efficient facilities, we're committed to doing right by the communities we serve.
            </p>
            <div className="grid-2" style={{ gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Award size={22} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div><strong>Locally Hired Teams</strong><p className="text-muted" style={{ fontSize: '0.9rem' }}>Every facility staffed by your neighbors.</p></div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Leaf size={22} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div><strong>Solar-Powered Sites</strong><p className="text-muted" style={{ fontSize: '0.9rem' }}>Renewable energy across our network.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to start storing?"
        text="Join your Crowley neighbors who trust Self Storage 214 with what matters most."
        primaryLabel="Find Your Unit"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </div>
  );
}
