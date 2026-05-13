import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import ServiceDeck from './sections/ServiceDeck';
import HorizontalProjects from './sections/HorizontalProjects';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './layout/Footer';
import './styles/AppStyles.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main style={{ overflowX: 'clip' }}>
        <Hero />
        <About />
        <div id="services">
          <ServiceDeck />
        </div>
        <div id="portfolio">
          <HorizontalProjects />
        </div>
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
