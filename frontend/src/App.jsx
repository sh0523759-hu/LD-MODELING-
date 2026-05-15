import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import Disciplines from './sections/Disciplines';
import ProjectGallery from './sections/ProjectGallery';
import VideoTestimonial from './sections/VideoTestimonial';
import Testimonials from './sections/Testimonials';
import Neighborhoods from './sections/Neighborhoods';
import Commercial from './sections/Commercial';
import Transformation from './sections/Transformation';
import Contact from './sections/Contact';
import Footer from './layout/Footer';
import './styles/AppStyles.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Disciplines />
        <ProjectGallery />
        <VideoTestimonial />
        <Testimonials />
        <Neighborhoods />
        <Commercial />
        <div id="transformation-section">
          <Transformation />
        </div>
        <div id="contact-section">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
