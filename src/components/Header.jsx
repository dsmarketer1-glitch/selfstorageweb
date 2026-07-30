import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, User, Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const storageMenu = [
  { to: '/climate-controlled', label: 'Climate Controlled' },
  { to: '/vehicle-storage', label: 'Vehicle & RV Storage' },
  { to: '/business-storage', label: 'Business Storage' },
  { to: '/security', label: 'Security Features' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const close = () => setMobileOpen(false);

  return (
    <header className="header">
      {/* Promo strip */}
      <div className="promo-strip">
        <div className="container">
          🎉 Limited Time: <strong>1st Month Free</strong> + Up to 40% Off Select Units —{' '}
          <Link to="/locations">Claim Offer</Link>
        </div>
      </div>

      <div className="container header-container">
        <Link to="/" className="brand" onClick={close}>
          <img src="/logo.png" alt="Self Storage 214" className="brand-logo" />
        </Link>

        <nav className="nav-links">
          <NavLink to="/locations" className="nav-link">Find Storage</NavLink>
          <div className="nav-dropdown">
            <button className="nav-link nav-trigger">
              Storage Types <ChevronDown size={15} />
            </button>
            <div className="dropdown-menu">
              {storageMenu.map((m) => (
                <Link key={m.to} to={m.to}>{m.label}</Link>
              ))}
            </div>
          </div>
          <NavLink to="/size-guide" className="nav-link">Size Guide</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>

        <div className="header-actions">
          <a href="tel:16822003353" className="phone-link">
            <Phone size={16} /> (682) 200-3353
          </a>
          <Link to="/account" className="btn-secondary header-account">
            <User size={16} /> My Account
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <NavLink to="/locations" onClick={close}>Find Storage</NavLink>
          {storageMenu.map((m) => (
            <NavLink key={m.to} to={m.to} onClick={close}>{m.label}</NavLink>
          ))}
          <NavLink to="/size-guide" onClick={close}>Size Guide</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
          <NavLink to="/account" onClick={close} className="mobile-account">My Account</NavLink>
          <a href="tel:16822003353" className="mobile-phone"><Phone size={16} /> (682) 200-3353</a>
        </div>
      )}
    </header>
  );
}
