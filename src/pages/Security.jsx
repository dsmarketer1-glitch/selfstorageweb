import { Link } from 'react-router-dom';
import {
  Shield, Eye, Lock, Smartphone, Video, Users, KeyRound, Bell,
  Lightbulb, Fingerprint, CheckCircle,
} from 'lucide-react';
import Faq from '../components/Faq';
import CTA from '../components/CTA';

export default function Security() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="subhero hero-dark">
        <div className="container">
          <Shield size={56} color="var(--primary)" style={{ margin: '0 auto 1.25rem' }} />
          <h1>Your Peace of Mind is Our Priority</h1>
          <p>We employ multi-layered security protocols and professional monitoring technology to ensure your belongings are protected 24 hours a day, 365 days a year.</p>
          <div className="subhero-actions">
            <Link to="/locations" className="btn-primary">Find a Secure Facility</Link>
            <Link to="/contact" className="btn-outline">Take a Tour</Link>
          </div>
        </div>
      </section>

      {/* Five pillars */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Defense in Depth</span>
            <h2>Five Pillars of Protection</h2>
            <p>Our facilities are built around a layered security model where each system reinforces the next.</p>
          </div>
          <div className="pillars">
            <div className="pillar">
              <div className="feature-icon soft"><Video size={24} /></div>
              <h4>24/7 Surveillance</h4>
              <p>HD cameras record around the clock, inside and out.</p>
            </div>
            <div className="pillar">
              <div className="feature-icon soft"><KeyRound size={24} /></div>
              <h4>Secure Gate Access</h4>
              <p>Personalized codes log every entry and exit.</p>
            </div>
            <div className="pillar">
              <div className="feature-icon soft"><Bell size={24} /></div>
              <h4>Individual Alarms</h4>
              <p>Each unit is independently alarmed and monitored.</p>
            </div>
            <div className="pillar">
              <div className="feature-icon soft"><Lightbulb size={24} /></div>
              <h4>Bright LED Lighting</h4>
              <p>Motion-sensor lighting throughout the facility.</p>
            </div>
            <div className="pillar">
              <div className="feature-icon soft"><Users size={24} /></div>
              <h4>On-Site Staff</h4>
              <p>Professional managers patrol and assist daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App-based access */}
      <section className="section bg-secondary">
        <div className="container split">
          <div className="media-block" style={{ background: 'linear-gradient(135deg, #2a3441, #0f172a)', minHeight: 360 }}>
            <Fingerprint size={120} strokeWidth={1} color="var(--primary)" />
          </div>
          <div>
            <span className="eyebrow">Smart Security</span>
            <h2 style={{ color: 'var(--white)' }}>Next-Gen Security at Your Fingertips</h2>
            <p style={{ color: '#cbd5e1', margin: '1rem 0 1.5rem' }}>
              Our SecureSpace app integrates the gap between physical security and digital convenience.
              Manage your unit from anywhere in the world with encrypted, tamper-proof access controls.
            </p>
            <ul className="checklist">
              <li style={{ color: '#e5e7eb' }}><CheckCircle size={18} color="var(--primary)" /> Instant keyless gate &amp; door entry</li>
              <li style={{ color: '#e5e7eb' }}><CheckCircle size={18} color="var(--primary)" /> Real-time intrusion &amp; access alerts</li>
              <li style={{ color: '#e5e7eb' }}><CheckCircle size={18} color="var(--primary)" /> End-to-end encrypted activity log</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hardened infrastructure */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Built to Last</span>
            <h2>Hardened Infrastructure</h2>
            <p>Security starts with the foundation of our buildings.</p>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="media-block" style={{ minHeight: 180, background: 'linear-gradient(135deg, #374151, #111827)' }}><Shield size={60} strokeWidth={1} color="#9ca3af" /></div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Reinforced Construction</h3>
                <p className="text-muted">Steel-frame buildings with anti-pry roll doors and tamper-resistant fixtures.</p>
              </div>
            </div>
            <div className="card">
              <div className="media-block" style={{ minHeight: 180, background: 'linear-gradient(135deg, #1f2937, #0f172a)' }}><Lock size={60} strokeWidth={1} color="#9ca3af" /></div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Perimeter Fencing</h3>
                <p className="text-muted">Fully fenced grounds with a single, monitored point of entry and exit.</p>
              </div>
            </div>
            <div className="card">
              <div className="media-block" style={{ minHeight: 180, background: 'linear-gradient(135deg, #b45309, #7c2d12)' }}><Eye size={60} strokeWidth={1} color="#fde68a" /></div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>High-Resolution Imaging</h3>
                <p className="text-muted">4K cameras with night vision capture clear footage in any condition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed features */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Security, Feature by Feature</h2>
          </div>
          <div className="grid-2" style={{ maxWidth: 980, margin: '0 auto' }}>
            {[
              [Video, '24/7 HD Video Surveillance', 'Dozens of high-definition cameras monitor the facility inside and out, recording 24 hours a day, 7 days a week.'],
              [Bell, 'Individually Alarmed Units', 'Every unit has its own electronic alarm that triggers instantly if opened without your personal code.'],
              [Smartphone, 'Mobile App Gate Access', 'Open the main gate securely from your smartphone — no need to roll down your window or remember PINs.'],
              [Lightbulb, 'Bright LED Lighting', 'Motion-sensor LED lighting illuminates the entire facility, so you feel safe even at night.'],
            ].map(([Icon, title, desc]) => (
              <div key={title} style={{ display: 'flex', gap: '1.25rem' }}>
                <div className="feature-icon soft round" style={{ flexShrink: 0 }}><Icon size={26} /></div>
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>{title}</h3>
                  <p className="text-muted" style={{ marginTop: '0.4rem' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Trusted by Thousands</span>
            <h2>What Renters Say About Our Security</h2>
          </div>
          <div className="grid-3">
            {[
              ['"I\'ve used several storage companies, but the security here is on another level. The app gate access is a game-changer for my peace of mind."', '— David M.'],
              ['"The gated yard and personal access codes make me feel completely safe storing my business inventory, even valuable equipment."', '— Priya K.'],
              ['"Cameras everywhere, bright lighting, and friendly staff who actually know who I am. Exactly what I wanted."', '— Tom R.'],
            ].map(([quote, name]) => (
              <div key={name} className="feature-card">
                <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>★★★★★</div>
                <p style={{ fontStyle: 'italic', color: 'var(--text-main)', marginBottom: '1rem' }}>{quote}</p>
                <strong>{name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq
        title="Security Frequently Asked Questions"
        items={[
          { q: 'What are the gate hours and how is access controlled?', a: 'Gate hours vary by facility (typically 6 AM–10 PM, with some offering 24/7 app access). Entry requires your personal access code or the SecureSpace app, and every entry/exit is logged.' },
          { q: 'Are individual units alarmed?', a: 'Yes. Each unit is fitted with its own electronic alarm that activates the moment it is opened without your authorized code.' },
          { q: 'What happens if my unit is triggered or tampered with?', a: 'Our monitoring system immediately alerts on-site staff and our security team, who review camera footage and respond right away. You receive a real-time notification through the app.' },
          { q: 'Is insurance available for my stored items?', a: 'Yes. We offer affordable protection plans at checkout, and you can also use your own homeowner\'s or renter\'s policy if it covers off-site storage.' },
        ]}
      />

      <CTA
        title="Find a Secure Location Near You"
        text="Experience next-generation storage security firsthand. Reserve your unit today."
        primaryLabel="Find Storage"
        secondaryLabel="Contact Security Team"
        secondaryTo="/contact"
      />
    </div>
  );
}
