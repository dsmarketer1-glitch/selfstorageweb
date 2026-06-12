import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User, Lock, CreditCard, Box, Bell, KeyRound, LogOut, CheckCircle, Mail,
} from 'lucide-react';
import './Account.css';

export default function Account() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [mode, setMode] = useState('login'); // login | signup
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  if (loggedIn) {
    return (
      <div className="page bg-light account-dashboard">
        <div className="container">
          <div className="dash-head">
            <div>
              <h1>Welcome back{email ? `, ${email.split('@')[0]}` : ''} 👋</h1>
              <p className="text-muted">Manage your units, billing, and gate access all in one place.</p>
            </div>
            <button className="btn-secondary" onClick={() => setLoggedIn(false)}><LogOut size={16} /> Sign Out</button>
          </div>

          <div className="dash-grid">
            {/* Active unit */}
            <div className="dash-card dash-unit">
              <div className="dash-card-head"><h3><Box size={20} /> Your Active Unit</h3><span className="badge badge-success">Active</span></div>
              <div className="dash-unit-body">
                <div><span className="text-muted">Facility</span><strong>SecureSpace Dallas North</strong></div>
                <div><span className="text-muted">Unit</span><strong>#B-214 · 10×10 Climate</strong></div>
                <div><span className="text-muted">Monthly Rate</span><strong>$145.00</strong></div>
                <div><span className="text-muted">Next Payment</span><strong>Jul 1, 2026</strong></div>
              </div>
              <button className="btn-primary"><KeyRound size={16} /> Open Gate</button>
            </div>

            {/* Billing */}
            <div className="dash-card">
              <h3><CreditCard size={20} /> Billing</h3>
              <p className="dash-balance">$0.00 <span className="text-muted">balance due</span></p>
              <p className="text-muted" style={{ marginBottom: '1rem' }}>Auto-pay is enabled. Next charge $145.00 on Jul 1.</p>
              <button className="btn-secondary">Manage Payment</button>
            </div>

            {/* Quick actions */}
            <div className="dash-card">
              <h3><Bell size={20} /> Quick Actions</h3>
              <ul className="dash-actions">
                <li><Link to="/locations">Add another unit</Link></li>
                <li><Link to="/size-guide">Transfer / resize unit</Link></li>
                <li><Link to="/contact">Request move-out</Link></li>
                <li><Link to="/contact">Contact support</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page bg-light account-auth">
      <div className="container">
        <div className="auth-card">
          <div className="auth-icon"><User size={28} /></div>
          <h1>{mode === 'login' ? 'Sign In to Your Account' : 'Create Your Account'}</h1>
          <p className="text-muted">{mode === 'login' ? 'Access your units, billing, and gate codes.' : 'Join SecureSpace to rent and manage storage online.'}</p>

          <form onSubmit={handleSubmit} className="auth-form">
            {mode === 'signup' && (
              <div>
                <label className="form-label" htmlFor="fullname">Full Name</label>
                <div className="input-icon"><User size={18} /><input id="fullname" className="field" placeholder="Jane Doe" required /></div>
              </div>
            )}
            <div>
              <label className="form-label" htmlFor="email">Email</label>
              <div className="input-icon"><Mail size={18} /><input id="email" type="email" className="field" placeholder="you@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} /></div>
            </div>
            <div>
              <label className="form-label" htmlFor="password">Password</label>
              <div className="input-icon"><Lock size={18} /><input id="password" type="password" className="field" placeholder="••••••••" required /></div>
            </div>
            {mode === 'login' && <a href="#" className="auth-forgot">Forgot password?</a>}
            <button type="submit" className="btn-primary btn-block btn-lg">
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <ul className="auth-perks">
            <li><CheckCircle size={15} /> Manage units 24/7</li>
            <li><CheckCircle size={15} /> Keyless gate access</li>
            <li><CheckCircle size={15} /> Paperless billing</li>
          </ul>

          <p className="auth-switch">
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
              {mode === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
