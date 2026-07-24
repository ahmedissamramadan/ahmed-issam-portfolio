import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Credentials } from './components/Credentials';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AutomationSimulator } from './components/AutomationSimulator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Credentials />
        <Skills />
        <Projects />
        <AutomationSimulator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
