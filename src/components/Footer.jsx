import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, AtSign, MessageCircle, Share2, ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-secondary">
      {/* Newsletter */}
      <div className="footer-newsletter">
        <div className="container footer-newsletter-inner">
          <div>
            <h3>Get exclusive storage deals</h3>
            <p>Join our newsletter for move-in specials and packing tips. No spam, ever.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required className="field" />
            <button type="submit" className="btn-primary">
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="container grid footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/logo.png" alt="Self Storage 214" />
          </Link>
          <p>Locally owned self-storage in Crowley, TX. Gated, 24-hour access units with boat &amp; RV parking. More space, made simple.</p>
          <div className="footer-contact">
            <a href="tel:16822003353"><Phone size={15} /> (682) 200-3353</a>
            <a href="mailto:info@selfstorage214.com"><Mail size={15} /> info@selfstorage214.com</a>
            <span><MapPin size={15} /> 1520 Bean Dr, Crowley, TX 76036</span>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><Globe size={18} /></a>
            <a href="#" aria-label="Instagram"><AtSign size={18} /></a>
            <a href="#" aria-label="Twitter"><MessageCircle size={18} /></a>
            <a href="#" aria-label="LinkedIn"><Share2 size={18} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Storage</h4>
          <ul>
            <li><Link to="/locations">Find Storage</Link></li>
            <li><Link to="/climate-controlled">Climate Controlled</Link></li>
            <li><Link to="/vehicle-storage">Vehicle & RV Storage</Link></li>
            <li><Link to="/business-storage">Business Storage</Link></li>
            <li><Link to="/size-guide">Size Guide</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/security">Security Features</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/account">My Account</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><Link to="/contact">Customer Service</Link></li>
            <li><Link to="/faq">Help Center</Link></li>
            <li><Link to="/contact">Find a Facility</Link></li>
            <li><Link to="/contact">Careers</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Self Storage 214 LLC. All rights reserved.</p>
        <div className="footer-legal">
          <Link to="/contact">Privacy Policy</Link>
          <Link to="/contact">Terms of Service</Link>
          <Link to="/contact">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
