import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Download, ExternalLink, ArrowUp, Send, Code2, Sparkles } from 'lucide-react';
import { Github, Linkedin, LeetCode } from './Icons';

export default function Contact() {
  const { profiles } = personalInfo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3ECF8E]/30 bg-[#121821] text-xs font-semibold text-[#3ECF8E]">
          <Mail className="w-3.5 h-3.5" />
          <span>Let's Connect</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E6EDF3] tracking-tight">
          Ready to Contribute to Your Engineering Team
        </h2>
        <p className="text-[#8B96A5] text-base max-w-2xl mx-auto">
          Currently open to Full-Stack Developer, Associate Software Developer, and Java Backend opportunities. Reach out via email or connect through my developer profiles.
        </p>
      </div>

      {/* Main Container */}
      <div className="rounded-3xl border border-[#2A3441] bg-gradient-to-b from-[#121821] to-[#0d131a] p-8 sm:p-12 shadow-2xl space-y-10">
        
        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-6 rounded-2xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#3ECF8E] hover:shadow-[0_0_30px_rgba(62,207,142,0.2)] hover:-translate-y-1.5 transition-all duration-300 group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 flex items-center justify-center text-[#3ECF8E] shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-1 min-w-0">
              <div className="text-xs text-[#8B96A5] font-medium">Direct Email</div>
              <div className="text-sm font-bold text-[#E6EDF3] truncate group-hover:text-[#3ECF8E] transition-colors">
                {personalInfo.email}
              </div>
              <div className="text-[11px] text-[#3ECF8E] font-medium">Click to send an email</div>
            </div>
          </a>

          {/* Location / Remote Readiness */}
          <div className="p-6 rounded-2xl border border-[#2A3441] bg-[#0B0F14] flex items-start gap-4 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#58A6FF]/10 border border-[#58A6FF]/30 flex items-center justify-center text-[#58A6FF] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs text-[#8B96A5] font-medium">Location & Relocation</div>
              <div className="text-sm font-bold text-[#E6EDF3]">
                {personalInfo.location}
              </div>
              <div className="text-[11px] text-[#58A6FF] font-medium">Open to relocate / hybrid / remote</div>
            </div>
          </div>

          {/* Direct Resume Download */}
          <a
            href={personalInfo.resumePdf}
            download="Rajyalakshmi_Devarala_Resume.pdf"
            className="p-6 rounded-2xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#3ECF8E] hover:shadow-[0_0_30px_rgba(62,207,142,0.2)] hover:-translate-y-1.5 transition-all duration-300 group flex items-start gap-4 sm:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 rounded-xl bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 flex items-center justify-center text-[#3ECF8E] shrink-0 group-hover:scale-110 transition-transform">
              <Download className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs text-[#8B96A5] font-medium">Resume / CV</div>
              <div className="text-sm font-bold text-[#E6EDF3] group-hover:text-[#3ECF8E] transition-colors">
                Download Resume (PDF)
              </div>
              <div className="text-[11px] text-[#3ECF8E] font-medium">Instant offline copy</div>
            </div>
          </a>

        </div>

        {/* All Profiles Grid */}
        <div className="pt-6 border-t border-[#2A3441] space-y-4">
          <div className="text-center text-xs font-bold text-[#8B96A5] uppercase tracking-wider">
            Connect Across Platforms:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={profiles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#0A66C2] text-xs font-semibold text-[#E6EDF3] hover:text-[#0A66C2] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profiles.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#3ECF8E] text-xs font-semibold text-[#E6EDF3] hover:text-[#3ECF8E] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={profiles.salesforce}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#00A1E0] text-xs font-semibold text-[#E6EDF3] hover:text-[#00A1E0] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A1E0]" />
              <span>Salesforce Trailhead</span>
            </a>

            <a
              href={profiles.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#F5A623] text-xs font-semibold text-[#E6EDF3] hover:text-[#F5A623] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623]" />
              <span>Credly Profile</span>
            </a>

            <a
              href={profiles.googleDev}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#4285F4] text-xs font-semibold text-[#E6EDF3] hover:text-[#4285F4] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
              <span>Google Developer</span>
            </a>

            <a
              href={profiles.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#FFA116] text-xs font-semibold text-[#E6EDF3] hover:text-[#FFA116] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <LeetCode className="w-4 h-4 text-[#FFA116]" />
              <span>LeetCode</span>
            </a>

            <a
              href={profiles.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#3ECF8E] text-xs font-semibold text-[#E6EDF3] hover:text-[#3ECF8E] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Code2 className="w-4 h-4" />
              <span>HackerRank</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B96A5] border-t border-[#2A3441]/60 pt-6">
        <div>
          © 2026 Rajyalakshmi Devarala • Built with React, Vite & Tailwind CSS.
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-[#3ECF8E] transition-colors cursor-pointer font-medium"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

    </footer>
  );
}
