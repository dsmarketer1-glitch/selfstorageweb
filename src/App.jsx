import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './pages/pages.css';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ClimateControlled from './pages/ClimateControlled';
import VehicleStorage from './pages/VehicleStorage';
import BusinessStorage from './pages/BusinessStorage';
import Locations from './pages/Locations';
import LocationDetail from './pages/LocationDetail';
import Security from './pages/Security';
import SizeGuide from './pages/SizeGuide';
import FaqPage from './pages/FaqPage';
import Contact from './pages/Contact';
import Account from './pages/Account';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="flex-col" style={{ minHeight: '100vh', display: 'flex' }}>
      <ScrollToTop />
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/climate-controlled" element={<ClimateControlled />} />
          <Route path="/vehicle-storage" element={<VehicleStorage />} />
          <Route path="/business-storage" element={<BusinessStorage />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:id" element={<LocationDetail />} />
          <Route path="/security" element={<Security />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
