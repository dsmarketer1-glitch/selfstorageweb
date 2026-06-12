import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: 'General Inquiry', message: '' });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page">
      <section className="subhero hero-dark">
        <div className="container">
          <span className="badge badge-primary">Contact Us</span>
          <h1>We're Here to Help</h1>
          <p>Questions about renting, sizing, billing, or your account? Reach out and our team will get back to you within one business day.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {/* Info column */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="text-muted" style={{ margin: '0.75rem 0 2rem' }}>
              Prefer to talk? Our support team is available 7 days a week.
            </p>
            <div className="contact-method">
              <div className="feature-icon soft"><Phone size={22} /></div>
              <div><strong>Call Us</strong><a href="tel:18001234567">(800) 123-4567</a></div>
            </div>
            <div className="contact-method">
              <div className="feature-icon soft"><Mail size={22} /></div>
              <div><strong>Email Us</strong><a href="mailto:hello@securespace.com">hello@securespace.com</a></div>
            </div>
            <div className="contact-method">
              <div className="feature-icon soft"><MessageSquare size={22} /></div>
              <div><strong>Live Chat</strong><span className="text-muted">Available 8 AM – 8 PM CT</span></div>
            </div>
            <div className="contact-method">
              <div className="feature-icon soft"><MapPin size={22} /></div>
              <div><strong>Headquarters</strong><span className="text-muted">1200 Storage Way, Dallas, TX 75201</span></div>
            </div>
            <div className="contact-method">
              <div className="feature-icon soft"><Clock size={22} /></div>
              <div><strong>Support Hours</strong><span className="text-muted">Mon–Sat 8 AM–8 PM · Sun 10 AM–6 PM</span></div>
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <CheckCircle size={56} color="var(--success)" />
                <h2>Message Sent!</h2>
                <p className="text-muted">Thanks, {form.name || 'there'}. A member of our team will reach out within one business day.</p>
                <button className="btn-secondary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', topic: 'General Inquiry', message: '' }); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h2>Send Us a Message</h2>
                <div className="form-row">
                  <div>
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input id="name" name="name" className="field" required value={form.name} onChange={update} placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" className="field" value={form.phone} onChange={update} placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div>
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" className="field" required value={form.email} onChange={update} placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="form-label" htmlFor="topic">Topic</label>
                  <select id="topic" name="topic" className="field" value={form.topic} onChange={update}>
                    <option>General Inquiry</option>
                    <option>Renting a Unit</option>
                    <option>Billing & Payments</option>
                    <option>Existing Reservation</option>
                    <option>Business Storage Quote</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="field" rows={5} required value={form.message} onChange={update} placeholder="How can we help?" />
                </div>
                <button type="submit" className="btn-primary btn-block btn-lg">
                  Send Message <Send size={16} />
                </button>
                <p className="form-note">By submitting, you agree to be contacted about your inquiry. We never sell your data.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map band */}
      <section className="section-sm bg-light">
        <div className="container">
          <div className="contact-map"><MapPin size={40} /> Interactive Facility Map</div>
        </div>
      </section>
    </div>
  );
}
