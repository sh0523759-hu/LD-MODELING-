import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import ServiceDeck from './sections/ServiceDeck';
import HorizontalProjects from './sections/HorizontalProjects';
import Contact from './sections/Contact';
import Footer from './layout/Footer';
import './styles/AppStyles.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServiceDeck />
        <HorizontalProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
