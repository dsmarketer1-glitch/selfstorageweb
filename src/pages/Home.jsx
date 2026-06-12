import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  MapPin, Shield, Star, Award, Smartphone, CheckCircle, ArrowRight, Search,
  ThermometerSun, Truck, Briefcase, Gift, Box, Package, Scissors, Lock, Users,
} from 'lucide-react';
import Faq from '../components/Faq';
import CTA from '../components/CTA';
import './Home.css';

export default function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/locations${query ? `?q=${encodeURIComponent(query)}` : ''}`);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content fade-up">
            <span className="badge badge-primary">⭐ Rated 4.9/5 by 10,000+ renters</span>
            <h1>Rent Self-Storage in Minutes</h1>
            <p className="hero-subtitle">1st Month Free &amp; Up to 40% Off Select Units. Reserve online — no credit card required.</p>
            <form className="search-bar" onSubmit={handleSearch}>
              <div className="search-field">
                <Search size={20} color="var(--text-muted)" />
                <input
                  type="text"
                  placeholder="Enter Zip, City or State"
                  className="search-input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-primary">Find Storage</button>
            </form>
            <div className="hero-perks">
              <span><CheckCircle size={16} /> No deposit</span>
              <span><CheckCircle size={16} /> Month-to-month</span>
              <span><CheckCircle size={16} /> Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar bg-light">
        <div className="container trust-items">
          <div className="trust-item">
            <Shield size={32} color="var(--primary)" />
            <div>
              <div>Better Business Bureau</div>
              <div className="trust-sub">A+ RATED FACILITY</div>
            </div>
          </div>
          <div className="trust-item">
            <Star size={32} color="var(--primary)" />
            <div>
              <div>Newsweek Best Service</div>
              <div className="trust-sub">#1 INDUSTRY RANKING</div>
            </div>
          </div>
          <div className="trust-item">
            <Award size={32} color="var(--primary)" />
            <div>
              <div>SecureSpace Certified</div>
              <div className="trust-sub">24/7 MONITORED ACCESS</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Simple &amp; Fast</span>
            <h2>How It Works</h2>
            <p>From search to move-in, the whole process takes less than 10 minutes.</p>
          </div>
          <div className="how-it-works-grid">
            <div className="step-card">
              <div className="step-icon"><MapPin size={28} /></div>
              <h3>1. Find a Location</h3>
              <p>Enter your location to see all available storage facilities near you with real-time inventory.</p>
            </div>
            <div className="step-card">
              <div className="step-icon"><Smartphone size={28} /></div>
              <h3>2. Rent Online</h3>
              <p>Select your unit size, sign your lease agreement, and pay securely—all in just a few clicks.</p>
            </div>
            <div className="step-card">
              <div className="step-icon"><CheckCircle size={28} /></div>
              <h3>3. Move In Today</h3>
              <p>Get your personalized gate code instantly and head to the facility to start storing your items.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions */}
      <section className="section solutions bg-light">
        <div className="container">
          <div className="solutions-header">
            <div>
              <span className="eyebrow">Storage Types</span>
              <h2>Tailored Storage Solutions</h2>
              <p className="text-muted">Professional storage options for every need.</p>
            </div>
            <Link to="/locations" className="btn-ghost">View All Services <ArrowRight size={16} /></Link>
          </div>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-img grad-orange"><ThermometerSun size={48} /></div>
              <div className="solution-content">
                <h3>Climate Controlled</h3>
                <p>Protect sensitive items from extreme temperatures and humidity fluctuations year-round.</p>
                <Link to="/climate-controlled" className="btn-ghost">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="solution-card">
              <div className="solution-img grad-dark"><Truck size={48} /></div>
              <div className="solution-content">
                <h3>Vehicle &amp; RV Storage</h3>
                <p>Secure parking for cars, boats, and RVs with 24/7 video monitoring and easy facility access.</p>
                <Link to="/vehicle-storage" className="btn-ghost">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="solution-card">
              <div className="solution-img grad-blue"><Briefcase size={48} /></div>
              <div className="solution-content">
                <h3>Business Storage</h3>
                <p>Commercial-grade units for inventory, document archiving, and professional equipment management.</p>
                <Link to="/business-storage" className="btn-ghost">Learn More <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="stats-strip bg-secondary">
        <div className="container stats-grid">
          <div className="stat"><div className="stat-num">150+</div><div className="stat-label">Locations Nationwide</div></div>
          <div className="stat"><div className="stat-num">1M+</div><div className="stat-label">Units Rented</div></div>
          <div className="stat"><div className="stat-num">4.9★</div><div className="stat-label">Average Rating</div></div>
          <div className="stat"><div className="stat-num">24/7</div><div className="stat-label">Monitored Security</div></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials bg-secondary">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Reviews</span>
            <h2 style={{ color: 'var(--white)' }}>What Our Customers Are Saying</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"The online rental process was seamless. I had my gate code within 5 minutes and was able to move in the same afternoon. High-tech and very clean!"</p>
              <p className="testimonial-author">— Sarah J., Houston, TX</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"Incredible customer service. The staff helped me determine exactly what size I needed, saving me money in the long run. Highly recommend!"</p>
              <p className="testimonial-author">— Marcus B., Phoenix, AZ</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"Cleanest facility I've ever used. The temperature control is spot on, and I feel totally safe accessing my unit even late at night."</p>
              <p className="testimonial-author">— Elena R., Seattle, WA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Size estimator */}
      <section className="section size-estimator">
        <div className="container size-grid">
          <div>
            <span className="eyebrow">Size Guide</span>
            <h2>Not sure what size you need?</h2>
            <p className="text-muted" style={{ margin: '1rem 0 2rem' }}>
              Use our quick size guide to find the perfect unit. From a small closet's worth of items
              to the contents of a 4-bedroom house, we have a space that fits.
            </p>
            <div className="size-options">
              <div className="size-chip"><strong>5×5</strong><span>Closet</span></div>
              <div className="size-chip"><strong>5×10</strong><span>Studio</span></div>
              <div className="size-chip"><strong>10×10</strong><span>1-Bed Apt</span></div>
              <div className="size-chip"><strong>10×20</strong><span>House</span></div>
            </div>
            <Link to="/size-guide" className="btn-secondary" style={{ marginTop: '2rem' }}>
              View Full Size Guide <ArrowRight size={16} />
            </Link>
          </div>
          <div className="size-visual">
            <Box size={120} strokeWidth={1} />
            <p>Interactive Size Estimator</p>
          </div>
        </div>
      </section>

      {/* Mobile app */}
      <section className="app-section bg-secondary">
        <div className="container app-grid">
          <div className="app-content">
            <span className="eyebrow">SecureSpace App</span>
            <h2 style={{ color: 'var(--white)' }}>Manage your space with your phone</h2>
            <p>Open the gate, pay your bill, manage notifications, and access your account 24/7 — all from the palm of your hand.</p>
            <ul className="app-features">
              <li><Lock size={18} /> Keyless gate &amp; door access</li>
              <li><Smartphone size={18} /> Auto-pay &amp; paperless billing</li>
              <li><Shield size={18} /> Real-time security alerts</li>
            </ul>
            <div className="app-badges">
              <span className="store-badge"> App Store</span>
              <span className="store-badge">▶ Google Play</span>
            </div>
          </div>
          <div className="app-visual">
            <div className="phone-mock">
              <Smartphone size={150} strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Referral */}
      <section className="section referral">
        <div className="container referral-card">
          <Gift size={48} color="var(--primary)" />
          <div className="referral-text">
            <h2>Share the Space, Earn $50</h2>
            <p>Refer a friend to SecureSpace. When they rent their first unit, you both get a $50 account credit.</p>
          </div>
          <Link to="/account" className="btn-primary btn-lg">Refer a Friend</Link>
        </div>
      </section>

      {/* Packing supplies */}
      <section className="section supplies bg-light">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Move-In Ready</span>
            <h2>Packing &amp; Moving Supplies</h2>
            <p>Everything you need to pack, protect, and move — available at every facility.</p>
          </div>
          <div className="supplies-grid">
            <div className="supply-card"><Box size={36} /><h4>Moving Boxes</h4><p>Small to wardrobe sizes</p></div>
            <div className="supply-card"><Scissors size={36} /><h4>Packing Tape</h4><p>Heavy-duty &amp; dispensers</p></div>
            <div className="supply-card"><Package size={36} /><h4>Bubble Wrap</h4><p>Protect fragile items</p></div>
            <div className="supply-card"><Lock size={36} /><h4>Disc Locks</h4><p>Maximum security</p></div>
          </div>
        </div>
      </section>

      {/* More than storage / hospitality */}
      <section className="section more-than">
        <div className="container more-grid">
          <div className="more-visual grad-people"><Users size={90} strokeWidth={1} /></div>
          <div>
            <span className="eyebrow">Our People</span>
            <h2>More Than Just a Storage Space</h2>
            <p className="text-muted" style={{ margin: '1rem 0 1.5rem' }}>
              Behind every SecureSpace facility is a team of professional, on-site managers dedicated
              to making your storage experience effortless. We combine cutting-edge technology with
              genuine, human-centric hospitality.
            </p>
            <ul className="more-list">
              <li><CheckCircle size={18} color="var(--primary)" /> Friendly, professional on-site staff</li>
              <li><CheckCircle size={18} color="var(--primary)" /> Award-winning customer support</li>
              <li><CheckCircle size={18} color="var(--primary)" /> Spotless, well-lit facilities</li>
            </ul>
            <Link to="/about" className="btn-secondary" style={{ marginTop: '1.5rem' }}>About SecureSpace</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq
        items={[
          { q: 'How do I rent the cheapest facility to me?', a: 'Use our interactive map or enter your zip code in the search bar above to see real-time distance and pricing from your nearest facilities. Filter and sort to find the best value.' },
          { q: 'Can I rent a unit at any location online?', a: 'Yes! All SecureSpace facilities offer 100% online rental and digital gate access for your convenience. Just pick a unit, sign, and pay.' },
          { q: 'Do all locations offer climate control?', a: 'Most of our facilities feature climate-controlled units. Check the specific location page for availability in your area.' },
          { q: 'Is there a long-term contract or deposit?', a: 'No. All rentals are month-to-month with no deposit and no long-term commitment. Cancel anytime with proper notice.' },
        ]}
      />

      <CTA
        title="Ready to reserve your unit?"
        text="Find a facility near you and lock in your move-in special today."
        primaryLabel="Find Storage Near Me"
        secondaryLabel="Talk to an Expert"
        secondaryTo="/contact"
      />
    </div>
  );
}
