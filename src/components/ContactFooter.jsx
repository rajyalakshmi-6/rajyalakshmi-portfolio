import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, ExternalLink, Download, Terminal, Cpu, ArrowUp, Code2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import MagneticButton from './MagneticButton';

export default function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#3ECF8E] tracking-wider">&gt; CONVERGENCE_TERMINAL // END_OF_TRANSMISSION</span>
        <div className="h-[1px] flex-1 bg-[#2A3441]" />
        <span className="font-mono text-[11px] text-[#8B96A5]">SYS_ID: 06_TERMINAL</span>
      </div>

      {/* Converging Connection Line Motif (Visual Bookend) */}
      <div className="relative py-8 flex flex-col items-center justify-center">
        <svg 
          viewBox="0 0 400 120" 
          className="w-full max-w-md h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Converging Lines from 3 source points to 1 central terminal node */}
          <path d="M 50 10 C 150 10, 160 90, 200 90" stroke="#2A3441" strokeWidth="2" fill="none" />
          <path d="M 200 10 L 200 90" stroke="#3ECF8E" strokeWidth="2.5" fill="none" className="draw-path" />
          <path d="M 350 10 C 250 10, 240 90, 200 90" stroke="#2A3441" strokeWidth="2" fill="none" />

          {/* Converged Central Terminal Node */}
          <circle cx="200" cy="90" r="22" fill="#0B0F14" stroke="#3ECF8E" strokeWidth="2.5" />
          <circle cx="200" cy="90" r="10" fill="#3ECF8E" className="animate-pulse" />
          <circle cx="200" cy="90" r="4" fill="#0B0F14" />

          {/* Labels */}
          <text x="50" y="24" textAnchor="middle" fill="#8B96A5" className="font-mono text-[9px]">JAVA_CORE</text>
          <text x="200" y="24" textAnchor="middle" fill="#3ECF8E" className="font-mono text-[9px] font-bold">SPRING_BOOT</text>
          <text x="350" y="24" textAnchor="middle" fill="#8B96A5" className="font-mono text-[9px]">DATA_LAYER</text>
          <text x="200" y="118" textAnchor="middle" fill="#3ECF8E" className="font-mono text-[9px] font-bold">TERMINAL_NODE // 200 OK</text>
        </svg>
      </div>

      {/* Main Contact Container */}
      <div className="rounded-2xl border border-[#2A3441] bg-[#121821] p-8 sm:p-12 shadow-2xl text-center space-y-8 mt-4">
        
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E6EDF3]">
            Let’s Build High-Throughput <br />
            <span className="text-[#3ECF8E]">Backend Architectures Together</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8B96A5] font-mono leading-relaxed">
            Targeting Java Backend and Full-Stack roles at tech-forward teams (Standard Chartered, Accenture, Goldman Sachs, product startups). Actively available for technical interviews and architecture discussions.
          </p>
        </div>

        {/* Primary Contact CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <MagneticButton
            href={`mailto:${personalInfo.email}`}
            className="px-6 py-3.5 rounded bg-[#3ECF8E] text-[#0B0F14] hover:bg-[#32b57a] font-mono text-xs font-bold tracking-wider shadow-glow-green flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email: {personalInfo.email}</span>
          </MagneticButton>

          <MagneticButton
            href="/resume.pdf"
            download="Rajyalakshmi_Devarala_Resume.pdf"
            className="px-5 py-3.5 rounded border border-[#2A3441] bg-[#0B0F14] text-[#E6EDF3] hover:border-[#3ECF8E] hover:text-[#3ECF8E] font-mono text-xs font-semibold flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </MagneticButton>
        </div>

        {/* Network & Profile Channels */}
        <div className="pt-8 border-t border-[#2A3441] grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-[#2A3441] bg-[#0B0F14] hover:border-[#3ECF8E] transition-colors group flex flex-col items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4 text-[#8B96A5] group-hover:text-[#3ECF8E]" />
            <span className="text-xs font-mono font-semibold text-[#E6EDF3] group-hover:text-[#3ECF8E]">LinkedIn</span>
            <span className="text-[10px] text-[#8B96A5] font-mono">/in/rajyalakshmi-devarala</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-[#2A3441] bg-[#0B0F14] hover:border-[#3ECF8E] transition-colors group flex flex-col items-center gap-1.5"
          >
            <Github className="w-4 h-4 text-[#8B96A5] group-hover:text-[#3ECF8E]" />
            <span className="text-xs font-mono font-semibold text-[#E6EDF3] group-hover:text-[#3ECF8E]">GitHub</span>
            <span className="text-[10px] text-[#8B96A5] font-mono">/rajyalakshmi-6</span>
          </a>

          <a
            href={personalInfo.hackerrank}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-[#2A3441] bg-[#0B0F14] hover:border-[#3ECF8E] transition-colors group flex flex-col items-center gap-1.5"
          >
            <Code2 className="w-4 h-4 text-[#8B96A5] group-hover:text-[#3ECF8E]" />
            <span className="text-xs font-mono font-semibold text-[#E6EDF3] group-hover:text-[#3ECF8E]">HackerRank</span>
            <span className="text-[10px] text-[#8B96A5] font-mono">@devaralarajyala1</span>
          </a>

          <a
            href={personalInfo.resumeDrive}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-[#2A3441] bg-[#0B0F14] hover:border-[#3ECF8E] transition-colors group flex flex-col items-center gap-1.5"
          >
            <ExternalLink className="w-4 h-4 text-[#8B96A5] group-hover:text-[#3ECF8E]" />
            <span className="text-xs font-mono font-semibold text-[#E6EDF3] group-hover:text-[#3ECF8E]">Google Drive</span>
            <span className="text-[10px] text-[#8B96A5] font-mono">Cloud PDF Backup</span>
          </a>

        </div>

      </div>

      {/* Bottom Telemetry & Copyright */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8B96A5] border-t border-[#2A3441]/60 pt-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3ECF8E]" />
          <span>PORTFOLIO_SYSTEM // RAJYALAKSHMI DEVARALA</span>
          <span className="text-[#2A3441]">|</span>
          <span>HOSTING: VERCEL READY</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 hover:text-[#3ECF8E] transition-colors cursor-pointer"
        >
          <span>RETURN_TO_TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

    </footer>
  );
}
