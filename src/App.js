import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import EventsPage from './pages/EventsPage';
import OrganizePage from './pages/OrganizePage';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/organize" element={<OrganizePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
