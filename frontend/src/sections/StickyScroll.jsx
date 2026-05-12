import React from 'react';

const StickyScroll = () => {
  return (
    <section style={{ position: 'relative', width: '100%' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom, #bbf7d0, #bfdbfe)' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937' }}>The First slide</h2>
        <p style={{ marginTop: '0.5rem', color: '#374151' }}>Scroll Down for next slide</p>
      </div>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom, #3730a3, #6b21a8)', color: 'white' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold' }}>The Second slide</h2>
        <p style={{ marginTop: '0.5rem', color: '#e5e7eb' }}>Scroll Down for next slide</p>
      </div>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom, #6b21a8, #9d174d)', color: 'white' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold' }}>The Third slide</h2>
        <p style={{ marginTop: '0.5rem', color: '#e5e7eb' }}>Scroll Down</p>
      </div>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom, #bfdbfe, #e0e7ff)', color: 'black' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold' }}>The Fourth slide</h2>
      </div>
    </section>
  );
};

export default StickyScroll;
