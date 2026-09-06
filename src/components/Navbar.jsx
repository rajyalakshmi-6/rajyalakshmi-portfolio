import React, { useState, useEffect, useRef } from 'react';
import { Download, Menu, X, ArrowUpRight, FileText, ChevronDown, ExternalLink } from 'lucide-react';
import { Github, Linkedin, LeetCode } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setResumeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

          {/* View Resume Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setResumeMenuOpen(!resumeMenuOpen)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#3ECF8E] to-[#2fb377] text-[#0B0F14] font-semibold text-xs tracking-wide hover:opacity-95 transition-all duration-200 shadow-glow-green cursor-pointer select-none"
              aria-expanded={resumeMenuOpen}
              aria-haspopup="true"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resumeMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {resumeMenuOpen && (
              <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-[#0F141C]/98 border border-[#2A3441] shadow-2xl backdrop-blur-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#8B96A5]">
                  Resume Options
                </div>
                
                {/* Option 1: Open in new tab */}
                <a
                  href={personalInfo.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setResumeMenuOpen(false)}
                  className="flex items-center gap-3 w-full px-3 py-2.5 text-xs text-[#E6EDF3] hover:text-[#3ECF8E] hover:bg-[#182230] rounded-xl transition-all group"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#182230] group-hover:bg-[#3ECF8E]/20 flex items-center justify-center text-[#8B96A5] group-hover:text-[#3ECF8E] transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-xs text-[#E6EDF3] group-hover:text-[#3ECF8E]">Open in New Tab</span>
                    <span className="text-[10px] text-[#8B96A5]">View directly in browser</span>
                  </div>
                </a>

                {/* Option 2: Download PDF */}
                <a
                  href={personalInfo.resumePdf}
                  download="Rajyalakshmi_Devarala_Resume.pdf"
                  onClick={() => setResumeMenuOpen(false)}
                  className="flex items-center gap-3 w-full px-3 py-2.5 text-xs text-[#E6EDF3] hover:text-[#3ECF8E] hover:bg-[#182230] rounded-xl transition-all group mt-1"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#182230] group-hover:bg-[#3ECF8E]/20 flex items-center justify-center text-[#8B96A5] group-hover:text-[#3ECF8E] transition-colors">
                    <Download className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-xs text-[#E6EDF3] group-hover:text-[#3ECF8E]">Download PDF</span>
                    <span className="text-[10px] text-[#8B96A5]">Save copy to device</span>
                  </div>
                </a>

                {/* Option 3: Google Drive View */}
                {personalInfo.resumeDrive && (
                  <a
                    href={personalInfo.resumeDrive}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setResumeMenuOpen(false)}
                    className="flex items-center gap-3 w-full px-3 py-2 text-xs text-[#8B96A5] hover:text-[#E6EDF3] hover:bg-[#182230] rounded-xl transition-all group mt-1 border-t border-[#1C2533] pt-2"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#182230] group-hover:bg-[#1E2C3D] flex items-center justify-center text-[#8B96A5] group-hover:text-[#E6EDF3] transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-medium text-[11px] text-[#8B96A5] group-hover:text-[#E6EDF3]">Google Drive</span>
                      <span className="text-[9px] text-[#556375]">Cloud view</span>
                    </div>
                  </a>
                )}
              </div>
            )}
          </div>
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

          {/* Mobile Resume Options */}
          <div className="pt-4 space-y-2 border-t border-[#182230]">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8B96A5] px-1">
              Resume Options
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#121821] border border-[#2A3441] text-[#3ECF8E] font-semibold text-xs hover:border-[#3ECF8E] transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Tab</span>
              </a>
              <a
                href={personalInfo.resumePdf}
                download="Rajyalakshmi_Devarala_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#3ECF8E] to-[#2fb377] text-[#0B0F14] font-bold text-xs hover:opacity-95 transition-all shadow-glow-green"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href={personalInfo.profiles.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="p-3 rounded-xl border border-[#2A3441] bg-[#121821] text-[#FFA116]"
            >
              <LeetCode className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.profiles.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl border border-[#2A3441] bg-[#121821] text-[#8B96A5]"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.profiles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
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
