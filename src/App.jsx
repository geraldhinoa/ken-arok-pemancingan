import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import Tickets from './components/Tickets';
import PrizesAndRules from './components/PrizesAndRules';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-cubic',
      offset: 50, // sedikit diturunkan agar lebih cepat muncul
    });
    
    // Refresh AOS setelah render pertama untuk memastikan semua elemen terdeteksi
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <GallerySection />
      <Testimonials />
      <Tickets />
      <PrizesAndRules />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
