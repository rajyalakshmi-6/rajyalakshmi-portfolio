import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Mail, ExternalLink, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const currentRole = personalInfo.roles[roleIndex];
  const article = /^[AEIOUaeiou]/.test(currentRole) ? 'an' : 'a';

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        {/* Left Column: Headline & Bio */}
        <div className="lg:col-span-7 space-y-7">
          
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#3ECF8E]/30 bg-[#121821]/90 shadow-sm backdrop-blur">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3ECF8E] animate-pulse" />
            <span className="text-xs font-semibold text-[#3ECF8E] tracking-wide">
              Available for Full-Time Roles
            </span>
            <span className="text-[#2A3441]">|</span>
            <span className="text-xs text-[#8B96A5] flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#3ECF8E]" /> Open to Relocate Anywhere across India
            </span>
          </div>

          {/* Main Headings */}
          <div className="space-y-3">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#E6EDF3] tracking-tight leading-[1.15]">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3ECF8E] via-[#58A6FF] to-[#3ECF8E]">
                Rajyalakshmi Devarala
              </span>
            </h1>
            
            {/* Dynamic Rotating Role Headline */}
            <div className="flex items-center gap-2 min-h-[42px]">
              <span className="text-lg sm:text-xl font-medium text-[#8B96A5]">I am {article}</span>
              <span className="font-heading text-xl sm:text-3xl font-bold text-[#E6EDF3] border-b-2 border-[#3ECF8E] pb-0.5 transition-all duration-300">
                {currentRole}
              </span>
            </div>
          </div>

          {/* Recruiter-Friendly Narrative */}
          <p className="text-base sm:text-lg text-[#8B96A5] leading-relaxed max-w-2xl font-normal">
            {personalInfo.bio}
          </p>

          {/* Quick Academic & Project Stat Cards */}
          <div className="grid grid-cols-3 gap-3.5 max-w-lg pt-1">
            <div className="p-3.5 rounded-2xl border border-[#2A3441] bg-[#121821]/80 backdrop-blur hover:border-[#3ECF8E]/50 hover:-translate-y-1 transition-all duration-200">
              <div className="text-xs text-[#8B96A5] font-medium">Academics</div>
              <div className="font-heading text-lg sm:text-xl font-bold text-[#3ECF8E]">9.47 CGPA</div>
              <div className="text-[11px] text-[#8B96A5]">B.Tech ECE (AITS)</div>
            </div>
            <div className="p-3.5 rounded-2xl border border-[#2A3441] bg-[#121821]/80 backdrop-blur hover:border-[#3ECF8E]/50 hover:-translate-y-1 transition-all duration-200">
              <div className="text-xs text-[#8B96A5] font-medium">Internship</div>
              <div className="font-heading text-lg sm:text-xl font-bold text-[#E6EDF3]">Tap Academy</div>
              <div className="text-[11px] text-[#8B96A5]">Onsite Bengaluru</div>
            </div>
            <div className="p-3.5 rounded-2xl border border-[#2A3441] bg-[#121821]/80 backdrop-blur hover:border-[#3ECF8E]/50 hover:-translate-y-1 transition-all duration-200">
              <div className="text-xs text-[#8B96A5] font-medium">Research</div>
              <div className="font-heading text-lg sm:text-xl font-bold text-[#58A6FF]">ISJEM 2026</div>
              <div className="text-[11px] text-[#8B96A5]">Published Paper</div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={personalInfo.resumePdf}
              download="Rajyalakshmi_Devarala_Resume.pdf"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#3ECF8E] to-[#2fb377] text-[#0B0F14] font-bold text-sm shadow-glow-green hover:shadow-[0_0_35px_rgba(62,207,142,0.5)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href="#roadmap"
              className="px-6 py-3.5 rounded-xl border border-[#2A3441] bg-[#121821] text-[#E6EDF3] hover:border-[#3ECF8E] hover:text-[#3ECF8E] font-semibold text-sm hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
            >
              <span>Explore Journey</span>
              <ArrowRight className="w-4 h-4 text-[#3ECF8E]" />
            </a>

            <a
              href="#projects"
              className="px-5 py-3.5 rounded-xl border border-[#2A3441]/60 bg-transparent text-[#8B96A5] hover:text-[#E6EDF3] hover:border-[#3ECF8E]/50 font-medium text-sm transition-all"
            >
              Projects
            </a>
          </div>

          {/* Profile Links Shortcut */}
          <div className="flex items-center gap-5 pt-2 text-xs text-[#8B96A5]">
            <a
              href={personalInfo.profiles.salesforce}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3ECF8E] flex items-center gap-1.5 font-medium transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#00A1E0]" />
              Salesforce 2025 & 2026 Champion
            </a>
            <span>•</span>
            <a
              href={personalInfo.profiles.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA116] flex items-center gap-1 font-medium transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFA116]" />
              LeetCode
            </a>
            <span>•</span>
            <a
              href={personalInfo.resumeDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3ECF8E] flex items-center gap-1 font-medium transition-colors underline underline-offset-4"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Drive Resume
            </a>
          </div>

        </div>

        {/* Right Column: Classy Profile Photo Frame with Clean Ambient Glow */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[310px] sm:max-w-[330px]">
            
            {/* Ambient Backlight Glow Beam */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#3ECF8E]/25 via-[#58A6FF]/20 to-[#9D4EDD]/20 rounded-3xl blur-2xl opacity-70 animate-pulse-slow pointer-events-none" />

            {/* Profile Frame with Clean Razor-Sharp Image */}
            <div className="relative rounded-3xl border border-[#2A3441] bg-[#121821] p-3 sm:p-3.5 shadow-2xl overflow-hidden hover:border-[#3ECF8E]/60 transition-all duration-300 group">
              
              {/* Image Container with 1:1.6 Portrait Ratio to Focus Up to Shoulders & Chest */}
              <div className="relative aspect-[1/1.6] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#182330] via-[#101720] to-[#0B0F14] border border-[#2A3441]/70 flex items-center justify-center">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-[center_22%] scale-100 group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Subtle smoky gradient softly at the very bottom of the photo */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#121821] via-[#121821]/70 to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3.5 right-3.5 text-left z-10">
                  <div className="font-heading font-bold text-lg text-[#E6EDF3] drop-shadow-md">
                    {personalInfo.name}
                  </div>
                  <div className="text-xs text-[#3ECF8E] font-semibold flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#3ECF8E] animate-pulse" />
                    <span>Java Full-Stack Developer</span>
                  </div>
                </div>
              </div>

              {/* Minimal Clean Card Footer with IETE & Tap Academy */}
              <div className="mt-2.5 pt-2 px-2 flex items-center justify-between border-t border-[#2A3441]/80 text-xs text-[#8B96A5]">
                <span>Tap Academy Alum</span>
                <span className="text-[#58A6FF] font-medium">IETE Alumni Member</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
