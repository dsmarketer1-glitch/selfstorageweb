import { Link } from 'react-router-dom';
import { Boxes, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="page" style={{ padding: '6rem 0', textAlign: 'center' }}>
      <div className="container">
        <Boxes size={72} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
        <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>404</h1>
        <h2 style={{ marginBottom: '1rem' }}>This unit appears to be empty.</h2>
        <p className="text-muted" style={{ maxWidth: 460, margin: '0 auto 2rem' }}>
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary"><Home size={16} /> Back Home</Link>
          <Link to="/locations" className="btn-secondary"><Search size={16} /> Find Storage</Link>
        </div>
      </div>
    </div>
  );
}
