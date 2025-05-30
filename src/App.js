import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Button from './components/ui/Button';
import EventsPage from './pages/EventsPage';
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
        </Routes>
      <Hero />
      <Features />
      <CTA />
      <Footer />
      <Button>Get Started</Button>
    </Router>
  );
}

export default App;