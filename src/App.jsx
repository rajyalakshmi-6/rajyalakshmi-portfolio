import React from 'react';
import Navbar from './components/Navbar';
import BackgroundGrid from './components/BackgroundGrid';
import Hero from './components/Hero';
import ProfileHub from './components/ProfileHub';
import Roadmap from './components/Roadmap';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0F14] text-[#E6EDF3] selection:bg-[#3ECF8E]/20 selection:text-[#3ECF8E]">
      
      {/* Background Ambient Circuit Grid with Subtle Parallax */}
      <BackgroundGrid />

      {/* Modern Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <ProfileHub />
        <Roadmap />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

    </div>
  );
}
