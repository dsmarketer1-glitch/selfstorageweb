import { Link } from 'react-router-dom';
import Faq from '../components/Faq';
import CTA from '../components/CTA';

export default function FaqPage() {
  return (
    <div className="page">
      <section className="subhero hero-dark">
        <div className="container">
          <span className="badge badge-primary">Help Center</span>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about renting, access, billing, and security. Can't find your answer? Our team is one call away.</p>
        </div>
      </section>

      <Faq
        title="Renting & Move-In"
        subtitle="Getting started with your storage unit."
        items={[
          { q: 'How do I rent a storage unit?', a: 'Search for a facility near you, pick your unit size, e-sign your lease, and pay — all online in under 10 minutes. You\'ll receive your gate code instantly and can move in the same day.' },
          { q: 'Do I need to sign a long-term contract?', a: 'No. All rentals are month-to-month with no long-term commitment and no deposit. Cancel anytime with proper notice.' },
          { q: 'When can I move in?', a: 'Right away. Once your rental is complete you get an instant gate code and can begin moving in during access hours that same day.' },
          { q: 'What do I need to rent?', a: 'A valid government-issued photo ID and a payment method. For vehicle storage, you\'ll also need proof of registration and insurance.' },
        ]}
      />

      <div className="bg-light">
        <Faq
          title="Access & Hours"
          subtitle="Getting to your belongings when you need them."
          items={[
            { q: 'What are the access hours?', a: 'Most facilities offer access from 6 AM to 10 PM daily, with several offering 24/7 app-based gate access. Exact hours are listed on each facility page.' },
            { q: 'How does gate access work?', a: 'You\'ll get a personalized access code, and at most locations you can open the gate directly from the SecureSpace mobile app.' },
            { q: 'Can I share access with family or employees?', a: 'Yes. You can add authorized users to your account so others can access the unit on your behalf.' },
          ]}
        />
      </div>

      <Faq
        title="Billing & Payments"
        subtitle="Simple, transparent pricing."
        items={[
          { q: 'How does billing work?', a: 'Rent is billed monthly. You can enroll in auto-pay for hands-free payments and go fully paperless through your online account.' },
          { q: 'Are there any hidden fees?', a: 'No. We believe in transparent pricing. A one-time admin fee may apply at some locations and is always shown clearly before you check out.' },
          { q: 'What payment methods do you accept?', a: 'All major credit and debit cards, plus ACH bank transfers through your online account.' },
          { q: 'Can I get a refund if I move out early?', a: 'Refund policies vary by location and are detailed in your rental agreement. Many facilities prorate or offer credits — ask your on-site manager.' },
        ]}
      />

      <div className="bg-light">
        <Faq
          title="Security & Protection"
          subtitle="Keeping your items safe."
          items={[
            { q: 'How secure are the facilities?', a: '24/7 HD surveillance, gated access with personal codes, individually alarmed units, bright LED lighting, and on-site professional staff.' },
            { q: 'Is my property insured?', a: 'We offer affordable protection plans at checkout. You may also be covered by your homeowner\'s or renter\'s policy if it includes off-site storage.' },
            { q: 'What if there\'s a security event?', a: 'Our monitoring system alerts staff immediately, footage is reviewed, and you receive a real-time notification through the app.' },
          ]}
        />
      </div>

      <section className="section text-center">
        <div className="container">
          <h2>Still have questions?</h2>
          <p className="text-muted" style={{ margin: '0.75rem 0 1.75rem' }}>Our friendly support team is happy to help.</p>
          <Link to="/contact" className="btn-primary btn-lg">Contact Support</Link>
        </div>
      </section>

      <CTA />
    </div>
  );
}
