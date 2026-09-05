import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin, LeetCode } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0F14]/90 backdrop-blur-md border-b border-[#2A3441]/80 py-3.5 shadow-xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3ECF8E] to-[#121821] p-[1.5px] shadow-glow-green group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-[#0B0F14] rounded-[10px] flex items-center justify-center font-heading font-bold text-base text-[#3ECF8E]">
              RD
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm sm:text-base text-[#E6EDF3] group-hover:text-[#3ECF8E] transition-colors">
              Rajyalakshmi Devarala
            </span>
            <span className="text-[11px] text-[#8B96A5] font-sans">
              Java Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#8B96A5] hover:text-[#3ECF8E] font-medium transition-colors duration-150 relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3ECF8E] transition-all duration-200 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={personalInfo.profiles.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="p-2.5 rounded-xl border border-[#2A3441] bg-[#121821] text-[#8B96A5] hover:text-[#FFA116] hover:border-[#FFA116]/60 transition-all duration-200 shadow-sm"
          >
            <LeetCode className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.profiles.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl border border-[#2A3441] bg-[#121821] text-[#8B96A5] hover:text-[#E6EDF3] hover:border-[#3ECF8E] transition-all duration-200 shadow-sm"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.profiles.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl border border-[#2A3441] bg-[#121821] text-[#8B96A5] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all duration-200 shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.resumePdf}
            download="Rajyalakshmi_Devarala_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#3ECF8E] to-[#2fb377] text-[#0B0F14] font-semibold text-xs tracking-wide hover:opacity-95 transition-all duration-200 shadow-glow-green"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl border border-[#2A3441] bg-[#121821] text-[#8B96A5] hover:text-[#3ECF8E]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F14]/98 border-b border-[#2A3441] px-6 pt-4 pb-8 space-y-4 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#8B96A5] hover:text-[#3ECF8E] py-2.5 border-b border-[#121821] font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2.5 pt-4">
            <a
              href={personalInfo.resumePdf}
              download="Rajyalakshmi_Devarala_Resume.pdf"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#3ECF8E] text-[#0B0F14] font-bold text-xs"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href={personalInfo.profiles.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-[#2A3441] bg-[#121821] text-[#FFA116]"
            >
              <LeetCode className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.profiles.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-[#2A3441] bg-[#121821] text-[#8B96A5]"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.profiles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-[#2A3441] bg-[#121821] text-[#8B96A5]"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
