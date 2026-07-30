import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, Star, ShieldCheck, Award, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import { locations, regions } from '../data/locations';
import Faq from '../components/Faq';
import CTA from '../components/CTA';
import './Locations.css';

export default function Locations() {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All');

  const filtered = useMemo(() => {
    return locations.filter((l) => {
      const matchesRegion = region === 'All' || l.region === region;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        l.name.toLowerCase().includes(q) ||
        l.address.toLowerCase().includes(q) ||
        l.region.toLowerCase().includes(q);
      return matchesRegion && matchesQuery;
    });
  }, [query, region]);

  return (
    <div className="locations-page">
      {/* Hero with search */}
      <section className="locations-hero bg-secondary">
        <div className="container text-center">
          <h1 style={{ color: 'var(--white)' }}>Storage Units in Crowley, TX</h1>
          <p style={{ color: '#cbd5e1', maxWidth: 640, margin: '1rem auto 2rem' }}>
            Self Storage 214 offers gated, 24-hour access units with boat &amp; RV parking — conveniently located on Bean Dr in Crowley.
          </p>
          <form className="loc-search" onSubmit={(e) => e.preventDefault()}>
            <div className="loc-search-field">
              <Search size={20} color="var(--text-muted)" />
              <input
                type="text"
                placeholder="Enter City, Zip, or Address"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-primary">Search</button>
          </form>
        </div>
      </section>

      {/* Map + region directory */}
      <section className="section-sm">
        <div className="container">
          <div className="map-grid">
            <div className="map-visual">
              <MapPin size={56} />
              <div>
                <strong>Crowley, TX</strong>
                <p>1520 Bean Dr — units of every size currently available for immediate, same-day move-in.</p>
                <span className="badge badge-success"><CheckCircle size={14} /> Secure Access Guaranteed</span>
              </div>
            </div>
            <div className="region-filters">
              <button
                className={`region-chip ${region === 'All' ? 'active' : ''}`}
                onClick={() => setRegion('All')}
              >
                All Regions
              </button>
              {regions.map((r) => (
                <button
                  key={r}
                  className={`region-chip ${region === r ? 'active' : ''}`}
                  onClick={() => setRegion(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility cards */}
      <section className="section-sm bg-light">
        <div className="container">
          <div className="results-head">
            <h2>{filtered.length} Facilit{filtered.length === 1 ? 'y' : 'ies'} Available</h2>
            <span className="text-muted">{region === 'All' ? 'Showing all regions' : `Showing ${region}`}</span>
          </div>
          {filtered.length === 0 ? (
            <div className="no-results">
              <p>No facilities match your search. Try a different city or region.</p>
              <button className="btn-secondary" onClick={() => { setQuery(''); setRegion('All'); }}>
                Reset Search
              </button>
            </div>
          ) : (
            <div className="loc-grid">
              {filtered.map((loc) => (
                <div key={loc.id} className="loc-card">
                  <div className="loc-card-img grad-orange">
                    <Building2 size={44} />
                    {loc.units.some((u) => u.promo) && <span className="loc-promo">Move-In Special</span>}
                  </div>
                  <div className="loc-card-body">
                    <div className="loc-rating">
                      <Star size={15} fill="currentColor" /> {loc.rating}
                      <span className="text-muted">({loc.reviews} reviews)</span>
                    </div>
                    <h3>{loc.name}</h3>
                    <p className="loc-address"><MapPin size={15} /> {loc.address}</p>
                    <div className="loc-tags">
                      {loc.features.slice(0, 3).map((f) => (
                        <span key={f} className="badge">{f}</span>
                      ))}
                    </div>
                    <div className="loc-card-foot">
                      <div>
                        <span className="text-muted" style={{ fontSize: '0.8rem' }}>Starting at</span>
                        <div className="loc-price">${loc.price}<span>/mo</span></div>
                      </div>
                      <Link to={`/locations/${loc.id}`} className="btn-primary">View Units</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust strip */}
      <section className="section-sm">
        <div className="container loc-trust">
          <div><ShieldCheck size={28} color="var(--primary)" /><div><strong>24-Hour Access</strong><span>Gated &amp; Secure</span></div></div>
          <div><Star size={28} color="var(--primary)" /><div><strong>Top Rated</strong><span>Trusted Locally</span></div></div>
          <div><Award size={28} color="var(--primary)" /><div><strong>Boat &amp; RV</strong><span>Extra-Large Spaces</span></div></div>
        </div>
      </section>

      {/* Move-in specials */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Limited Time</span>
            <h2>Current Move-In Specials</h2>
          </div>
          <div className="specials-grid">
            <div className="special-card">
              <span className="badge badge-primary">Most Popular</span>
              <h3>1st Month Free</h3>
              <p>On select units at our Crowley facility. Limited time offer for new renters.</p>
              <Link to="/locations" className="btn-primary">Claim Offer</Link>
            </div>
            <div className="special-card">
              <span className="badge badge-success">Best Value</span>
              <h3>Up to 20% Off</h3>
              <p>New customers on 10×10 units. Save big on long-term storage in Crowley.</p>
              <Link to="/locations" className="btn-primary">Claim Offer</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Make your move easier */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Resources</span>
            <h2>Make Your Move Easier</h2>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon soft"><Building2 size={26} /></div>
              <h3>Packing Guide</h3>
              <p>Learn how to pack like a pro to maximize your space and protect your belongings.</p>
              <Link to="/size-guide" className="btn-ghost">Read More <ArrowRight size={16} /></Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon blue"><Star size={26} /></div>
              <h3>Climate Control Benefits</h3>
              <p>Protect sensitive items from North Texas heat and humidity with our specialized units.</p>
              <Link to="/climate-controlled" className="btn-ghost">Read More <ArrowRight size={16} /></Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><ShieldCheck size={26} /></div>
              <h3>Security Features</h3>
              <p>24/7 monitoring and personal gate codes for peace of mind at every location.</p>
              <Link to="/security" className="btn-ghost">Read More <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <Faq
        items={[
          { q: 'Where are you located?', a: 'Self Storage 214 is located at 1520 Bean Dr, Crowley, TX 76036 — just off Chisholm Trail Parkway, minutes from downtown Crowley and convenient to Burleson and south Fort Worth.' },
          { q: 'Can I rent a unit online?', a: 'Yes. Self Storage 214 offers 100% online rental and digital gate access. Pick a unit, e-sign your lease, and pay in minutes.' },
          { q: 'Do you offer boat and RV storage?', a: 'Yes. Our extra-large 10×20 and 20×20 spaces are perfect for boats, RVs, trailers, and vehicles, with easy drive-up access through the gated entry.' },
          { q: 'What are the access hours?', a: 'Our Crowley facility offers 24-hour gated access so you can reach your unit whenever it is convenient. The office is open 9:00 AM – 5:00 PM daily.' },
        ]}
      />

      <CTA secondaryLabel="Contact Sales" secondaryTo="/contact" />
    </div>
  );
}
