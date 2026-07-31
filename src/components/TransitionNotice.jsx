import { useEffect } from 'react';
import { Phone, Clock } from 'lucide-react';
import './TransitionNotice.css';

/**
 * TEMPORARY ownership-transition notice.
 *
 * Renders a full-screen overlay (with the real site blurred behind it) on top
 * of every page. Nothing else in the site is modified.
 *
 * To REMOVE this notice later, delete the <TransitionNotice /> line and its
 * import in src/App.jsx — that's all. This file can then be deleted too.
 */
export default function TransitionNotice() {
  // Lock background scroll while the notice is shown.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div className="notice-overlay" role="dialog" aria-modal="true" aria-labelledby="notice-title">
      <div className="notice-card">
        <img src="/logo.png" alt="Self Storage 214" className="notice-logo" />

        <span className="notice-eyebrow">
          <Clock size={15} /> Temporary Notice
        </span>

        <h1 id="notice-title">Exciting Changes Are Underway!</h1>

        <p className="notice-lead">
          We&rsquo;re transitioning to new management. Although our storage units are available,
          new rentals are <strong>temporarily paused</strong> during the ownership transition.
        </p>

        <p className="notice-body">
          We&rsquo;ll begin accepting new rentals by <strong>August&nbsp;5, 2026</strong>.
          Current tenants and anyone with questions are welcome to call us&mdash;we&rsquo;re happy to help!
        </p>

        <a href="tel:16822003353" className="notice-call">
          <Phone size={20} /> (682) 200-3353
        </a>

        <p className="notice-footer">
          Thank you for your patience.<br />
          <span>&mdash; Self Storage 214 &middot; Crowley, TX</span>
        </p>
      </div>
    </div>
  );
}
