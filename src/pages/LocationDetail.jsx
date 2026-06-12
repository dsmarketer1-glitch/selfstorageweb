import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  MapPin, Phone, Clock, Star, Shield, ThermometerSun, Truck, Building2,
  ThermometerSnowflake, Lock, Video, Lightbulb, CheckCircle,
} from 'lucide-react';
import { getLocation } from '../data/locations';
import CTA from '../components/CTA';
import './LocationDetail.css';

const sizeFilters = ['All', 'Small', 'Medium', 'Large', 'X-Large', 'Vehicle'];

function unitIcon(type) {
  if (type.includes('Climate')) return <ThermometerSun size={16} />;
  if (type.includes('Vehicle')) return <Truck size={16} />;
  return <Shield size={16} />;
}

export default function LocationDetail() {
  const { id } = useParams();
  const loc = getLocation(id);
  const [filter, setFilter] = useState('All');

  const units = filter === 'All' ? loc.units : loc.units.filter((u) => u.label === filter);

  return (
    <div className="detail-page bg-light">
      {/* Hero */}
      <section className="detail-hero">
        <div className="container detail-hero-inner">
          <div>
            <div className="detail-rating">
              <Star size={16} fill="currentColor" /> {loc.rating} · {loc.reviews} reviews
            </div>
            <h1>{loc.name}</h1>
            <p className="detail-address"><MapPin size={18} /> {loc.address}</p>
            <div className="detail-hero-actions">
              <a href="#units" className="btn-primary">View Available Units</a>
              <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="btn-outline">
                <Phone size={16} /> {loc.phone}
              </a>
            </div>
          </div>
          <div className="detail-hero-card">
            <Building2 size={48} color="var(--primary)" />
            <div className="detail-hero-stats">
              <div><strong>{loc.units.length}</strong><span>Unit Sizes</span></div>
              <div><strong>${loc.price}</strong><span>Starting/mo</span></div>
              <div><strong>{loc.region}</strong><span>Region</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium features */}
      <section className="section-sm features-band">
        <div className="container">
          <div className="section-title" style={{ marginBottom: '2rem' }}>
            <h2>Premium Facility Features</h2>
            <p>Everything you'd expect from a modern, secure storage facility — and more.</p>
          </div>
          <div className="amenity-grid">
            <div className="amenity"><ThermometerSnowflake size={24} /><span>Climate Control</span></div>
            <div className="amenity"><Clock size={24} /><span>24/7 Gate Access</span></div>
            <div className="amenity"><Lock size={24} /><span>Digital Locks</span></div>
            <div className="amenity"><Truck size={24} /><span>Drive-Up Access</span></div>
            <div className="amenity"><Video size={24} /><span>HD Surveillance</span></div>
            <div className="amenity"><Lightbulb size={24} /><span>Bright LED Lighting</span></div>
          </div>
        </div>
      </section>

      <div className="container detail-main" id="units">
        <div className="detail-grid">
          {/* Units */}
          <div>
            <div className="units-head">
              <h2>Available Units</h2>
              <div className="size-filters">
                {sizeFilters.map((s) => (
                  <button
                    key={s}
                    className={`size-filter ${filter === s ? 'active' : ''}`}
                    onClick={() => setFilter(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {units.length === 0 ? (
              <p className="text-muted">No {filter} units available at this facility right now.</p>
            ) : (
              <div className="units-list">
                {units.map((unit, idx) => (
                  <div key={idx} className="unit-card">
                    <div className="unit-info">
                      <div className="unit-size">
                        <h3>{unit.size}</h3>
                        <span className="badge">{unit.label}</span>
                      </div>
                      <div className="unit-type">{unitIcon(unit.type)} {unit.type}</div>
                      <div className="unit-sqft">{unit.sqft} sq ft</div>
                    </div>
                    <div className="unit-price-block">
                      {unit.promo && <div className="unit-promo">{unit.promo}</div>}
                      <div className="unit-price">${unit.price}<span>/mo</span></div>
                      <button className="btn-primary">Rent Now</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Why store here */}
            <div className="why-store">
              <h2>Why Store With Us in {loc.region}?</h2>
              <p className="text-muted">
                Our {loc.name} facility combines cutting-edge security with white-glove cleanliness and
                a professional on-site team. Whether you're between moves, decluttering, or storing
                business inventory, you'll get a spotless, climate-stable space and 24/7 peace of mind.
              </p>
              <ul className="checklist" style={{ marginTop: '1.5rem' }}>
                <li><CheckCircle size={18} /> Individually alarmed units &amp; gated entry</li>
                <li><CheckCircle size={18} /> Month-to-month leases with no deposit</li>
                <li><CheckCircle size={18} /> Free use of carts &amp; dollies on-site</li>
                <li><CheckCircle size={18} /> Moving &amp; packing supplies available</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="detail-sidebar">
            <div className="info-card">
              <h3 className="sidebar-title">Facility Info</h3>
              <div className="info-row">
                <Clock size={20} color="var(--primary)" />
                <div><div className="info-label">Access Hours</div><div className="info-value">{loc.accessHours}</div></div>
              </div>
              <div className="info-row">
                <Clock size={20} color="var(--primary)" />
                <div><div className="info-label">Office Hours</div><div className="info-value">{loc.officeHours}</div></div>
              </div>
              <div className="info-row">
                <Phone size={20} color="var(--primary)" />
                <div><div className="info-label">Contact</div><div className="info-value">{loc.phone}</div></div>
              </div>
              <div className="info-row">
                <MapPin size={20} color="var(--primary)" />
                <div><div className="info-label">Address</div><div className="info-value">{loc.address}</div></div>
              </div>
            </div>

            <div className="info-card">
              <h3 className="sidebar-title">Nearby Landmarks</h3>
              <ul className="landmark-list">
                {loc.landmarks.map((l) => (
                  <li key={l}><MapPin size={15} color="var(--primary)" /> {l}</li>
                ))}
              </ul>
              <div className="map-placeholder"><MapPin size={32} /> Map View</div>
            </div>

            <div className="info-card reviews-card">
              <h3 className="sidebar-title">Reviews</h3>
              <div className="reviews-score">
                <div className="reviews-num">{loc.rating}</div>
                <div className="reviews-stars">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
                </div>
              </div>
              <p className="text-muted">Based on {loc.reviews} customer reviews.</p>
            </div>
          </aside>
        </div>
      </div>

      <CTA
        title="Reserve your unit today"
        text="Lock in your move-in special — first month free at select facilities."
        primaryLabel="Rent Now"
        secondaryLabel="Browse Other Locations"
        secondaryTo="/locations"
      />
    </div>
  );
}
