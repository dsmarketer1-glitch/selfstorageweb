import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, CheckCircle, ArrowRight } from 'lucide-react';
import Faq from '../components/Faq';
import CTA from '../components/CTA';
import './SizeGuide.css';

const sizes = [
  {
    id: '5x5', dims: "5' × 5'", sqft: 25, price: 49, tag: 'Closet',
    desc: 'About the size of a small walk-in closet.',
    holds: ['Boxes & files', 'Seasonal décor', 'Small furniture', 'Sports gear'],
    fits: 'Half a room of belongings',
  },
  {
    id: '5x10', dims: "5' × 10'", sqft: 50, price: 89, tag: 'Studio',
    desc: 'Roughly the size of a large walk-in closet.',
    holds: ['Studio / 1-bed apartment', 'Mattress set', 'Dresser & boxes', 'Bicycle'],
    fits: 'A studio apartment',
  },
  {
    id: '10x10', dims: "10' × 10'", sqft: 100, price: 139, tag: '1-Bedroom', popular: true,
    desc: 'Comparable to a standard bedroom.',
    holds: ['1–2 bedroom apartment', 'Appliances', 'Sofas & tables', 'Many boxes'],
    fits: 'A 1–2 bedroom home',
  },
  {
    id: '10x15', dims: "10' × 15'", sqft: 150, price: 179, tag: '2-Bedroom',
    desc: 'Fits the contents of a small house.',
    holds: ['2–3 bedroom home', 'Major appliances', 'Patio furniture', 'Bedroom sets'],
    fits: 'A 2–3 bedroom home',
  },
  {
    id: '10x20', dims: "10' × 20'", sqft: 200, price: 219, tag: 'House',
    desc: 'About the size of a one-car garage.',
    holds: ['3–4 bedroom house', 'Vehicle storage', 'Business inventory', 'Large appliances'],
    fits: 'A 3–4 bedroom house',
  },
  {
    id: '10x30', dims: "10' × 30'", sqft: 300, price: 299, tag: 'X-Large',
    desc: 'Comparable to a large two-car garage.',
    holds: ['4–5 bedroom house', 'Commercial inventory', 'Vehicle + belongings', 'Construction equipment'],
    fits: 'A 4–5 bedroom house',
  },
];

export default function SizeGuide() {
  const [selected, setSelected] = useState(sizes[2]);

  return (
    <div className="page">
      <section className="subhero hero-dark">
        <div className="container">
          <span className="badge badge-primary">Size Guide</span>
          <h1>Find Your Perfect Storage Size</h1>
          <p>Not sure how much space you need? Select a unit size below to see what it holds — and pay only for the space you'll actually use.</p>
        </div>
      </section>

      {/* Interactive selector */}
      <section className="section">
        <div className="container">
          <div className="size-selector">
            <div className="size-tabs">
              {sizes.map((s) => (
                <button
                  key={s.id}
                  className={`size-tab ${selected.id === s.id ? 'active' : ''}`}
                  onClick={() => setSelected(s)}
                >
                  <Box size={22} />
                  <strong>{s.dims}</strong>
                  <span>{s.tag}</span>
                  {s.popular && <em className="popular-flag">Popular</em>}
                </button>
              ))}
            </div>

            <div className="size-detail">
              <div className="size-visual-box">
                <div className="size-box-graphic" aria-hidden>
                  <Box size={90} strokeWidth={1} />
                  <span>{selected.dims}</span>
                </div>
              </div>
              <div className="size-detail-info">
                <div className="size-detail-head">
                  <div>
                    <h2>{selected.dims} Unit</h2>
                    <p className="text-muted">{selected.desc} · {selected.sqft} sq ft</p>
                  </div>
                  <div className="size-detail-price">
                    <span>from</span>
                    <strong>${selected.price}<small>/mo</small></strong>
                  </div>
                </div>
                <p className="size-fits"><strong>Best for:</strong> {selected.fits}</p>
                <h4 style={{ margin: '1.25rem 0 0.75rem' }}>What it typically holds</h4>
                <ul className="checklist size-holds">
                  {selected.holds.map((h) => (
                    <li key={h}><CheckCircle size={18} /> {h}</li>
                  ))}
                </ul>
                <Link to="/locations" className="btn-primary" style={{ marginTop: '1.75rem' }}>
                  Find {selected.dims} Units <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title"><h2>Compare All Sizes</h2></div>
          <div className="size-table-wrap">
            <table className="size-table">
              <thead>
                <tr><th>Unit Size</th><th>Area</th><th>Comparable To</th><th>Ideal For</th><th>From</th><th></th></tr>
              </thead>
              <tbody>
                {sizes.map((s) => (
                  <tr key={s.id}>
                    <td><strong>{s.dims}</strong></td>
                    <td>{s.sqft} sq ft</td>
                    <td>{s.tag}</td>
                    <td>{s.fits}</td>
                    <td className="size-table-price">${s.price}/mo</td>
                    <td><Link to="/locations" className="btn-ghost">Rent <ArrowRight size={14} /></Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Pro Tips</span>
            <h2>Packing Like a Pro</h2>
          </div>
          <div className="grid-3">
            <div className="feature-card"><h3>Stack Strategically</h3><p>Heaviest boxes on the bottom, lightest on top. Disassemble furniture to save floor space and stack vertically.</p></div>
            <div className="feature-card"><h3>Leave a Walkway</h3><p>Keep a center aisle so you can reach items at the back without unloading everything.</p></div>
            <div className="feature-card"><h3>Label Everything</h3><p>Mark boxes on multiple sides and keep an inventory list so you always know what's where.</p></div>
          </div>
        </div>
      </section>

      <Faq
        title="Size Guide FAQs"
        items={[
          { q: 'What if I choose the wrong size?', a: 'No problem — our month-to-month leases let you transfer to a larger or smaller unit anytime, subject to availability. Our on-site team is happy to help you right-size.' },
          { q: 'How tall are the units?', a: 'Most units have approximately 8-foot ceilings, giving you plenty of vertical space to stack boxes and tall furniture safely.' },
          { q: 'Can the team help me estimate my size?', a: 'Yes. Use the selector above, or call any facility and describe your items — our managers estimate the right size every day.' },
        ]}
      />

      <CTA
        title="Found your size? Lock it in."
        text="Reserve your unit online in minutes with first month free at select facilities."
        primaryLabel="Find Storage"
        secondaryLabel="Ask an Expert"
        secondaryTo="/contact"
      />
    </div>
  );
}
