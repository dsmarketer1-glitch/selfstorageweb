import { Link } from 'react-router-dom';
import { Briefcase, Package, FileText, Boxes, Clock, Truck, TrendingDown, CheckCircle } from 'lucide-react';
import Faq from '../components/Faq';
import CTA from '../components/CTA';

export default function BusinessStorage() {
  return (
    <div className="page">
      <section className="subhero hero-dark">
        <div className="container">
          <span className="badge badge-primary">Business Storage</span>
          <h1>Smart Storage for Growing Businesses</h1>
          <p>Cut overhead and reclaim your workspace. Store inventory, documents, equipment, and seasonal stock in flexible, secure commercial units.</p>
          <div className="subhero-actions">
            <Link to="/locations" className="btn-primary">Find Business Storage</Link>
            <Link to="/contact" className="btn-outline">Request a Quote</Link>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Who It's For</span>
            <h2>One Space, Endless Uses</h2>
            <p>From e-commerce sellers to contractors, businesses of every size store smarter with us.</p>
          </div>
          <div className="grid-4">
            {[
              [Package, 'Inventory & Stock', 'Overflow product storage with easy drive-up loading.'],
              [FileText, 'Document Archiving', 'Climate-controlled units keep records safe and compliant.'],
              [Boxes, 'E-Commerce Fulfillment', 'A low-cost base for online sellers and pop-up shops.'],
              [Briefcase, 'Equipment & Tools', 'Secure space for contractors, trades, and field teams.'],
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

      {/* Benefits split */}
      <section className="section bg-light">
        <div className="container split">
          <div>
            <span className="eyebrow">Why Businesses Choose Us</span>
            <h2>Lower Costs, Maximum Flexibility</h2>
            <p style={{ marginBottom: '1.5rem' }}>A fraction of the cost of commercial real estate, with none of the long-term lease commitment.</p>
            <ul className="checklist">
              <li><CheckCircle size={18} /> Month-to-month terms — scale up or down anytime</li>
              <li><CheckCircle size={18} /> Consolidated invoicing for multiple units</li>
              <li><CheckCircle size={18} /> Accept &amp; ship deliveries with manager assistance</li>
              <li><CheckCircle size={18} /> Climate-controlled options for sensitive stock</li>
              <li><CheckCircle size={18} /> Dedicated account support for business clients</li>
            </ul>
          </div>
          <div className="media-block" style={{ background: 'linear-gradient(135deg, #1c2331, #3b82f6)' }}>
            <Boxes size={120} strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section">
        <div className="container">
          <div className="section-title"><h2>Business-Grade Advantages</h2></div>
          <div className="grid-3">
            <div className="feature-card"><div className="feature-icon soft"><Clock size={26} /></div><h3>Extended Access Hours</h3><p>Get to your inventory early and late to match your operating schedule.</p></div>
            <div className="feature-card"><div className="feature-icon soft"><Truck size={26} /></div><h3>Loading Docks &amp; Bays</h3><p>Drive-up units and loading areas make moving freight effortless.</p></div>
            <div className="feature-card"><div className="feature-icon soft"><TrendingDown size={26} /></div><h3>Cost Savings</h3><p>Save up to 60% versus traditional warehouse or office leases.</p></div>
          </div>
        </div>
      </section>

      <Faq
        title="Business Storage FAQs"
        items={[
          { q: 'Can I receive deliveries at my storage unit?', a: 'Yes. At most facilities our on-site managers can accept and sign for business deliveries during office hours. Ask your local facility about package handling.' },
          { q: 'Do you offer discounts for renting multiple units?', a: 'We offer custom pricing and consolidated billing for businesses renting multiple units. Contact our team for a tailored quote.' },
          { q: 'Are units suitable for storing sensitive documents?', a: 'Absolutely. Our climate-controlled units maintain stable temperature and humidity, ideal for paper records, electronics, and archives.' },
          { q: 'Is there a long-term contract?', a: 'No. All business storage is month-to-month, so you can scale your space as your business grows or contracts.' },
        ]}
      />

      <CTA
        title="Give your business room to grow"
        text="Find flexible, secure commercial storage near your operation today."
        primaryLabel="Find Business Storage"
        secondaryLabel="Request a Quote"
        secondaryTo="/contact"
      />
    </div>
  );
}
