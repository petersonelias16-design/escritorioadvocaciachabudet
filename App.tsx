import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-brand-grey text-brand-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;