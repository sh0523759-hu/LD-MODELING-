import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import About from './sections/About';
import Philosophy from './sections/Philosophy';
import Process from './sections/Process';
import Portfolio from './sections/Portfolio';
import Stats from './sections/Stats';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './layout/Footer';
import FAQ from './sections/FAQ';
import './styles/AppStyles.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <About />
        <Philosophy />
        <Stats />
        <Process />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
