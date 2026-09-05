import React, { useState } from 'react';
import { certificationSections } from '../data/portfolioData';
import { Award, ExternalLink, Sparkles, CheckCircle2, Trophy, BookOpen, Users, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState(0);

  const getTabIcon = (id) => {
    switch (id) {
      case 'achievements': return Trophy;
      case 'training': return GraduationCap;
      case 'courses': return BookOpen;
      case 'hackathons': return Users;
      default: return Award;
    }
  };

  const currentSection = certificationSections[activeTab];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#F5A623]/30 bg-[#121821] text-xs font-semibold text-[#F5A623]">
          <Award className="w-3.5 h-3.5" />
          <span>Verified Credentials</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E6EDF3] tracking-tight">
          Certifications & Competitive Achievements
        </h2>
        <p className="text-[#8B96A5] text-base max-w-2xl mx-auto">
          Explore all verified national competitive achievements, enterprise trainings, course credentials, and hackathon participations with direct document links.
        </p>
      </div>

      {/* Categorized Certification Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {certificationSections.map((sec, idx) => {
          const Icon = getTabIcon(sec.id);
          const isActive = activeTab === idx;

          return (
            <button
              key={sec.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-[#F5A623] text-[#0B0F14] shadow-glow-amber scale-105 font-bold'
                  : 'bg-[#121821] text-[#8B96A5] hover:text-[#E6EDF3] border border-[#2A3441] hover:border-[#F5A623]/40 hover:-translate-y-0.5'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{sec.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Display Banner */}
      <div className="p-4 sm:p-5 rounded-2xl border border-[#2A3441] bg-[#121821]/80 backdrop-blur flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
        <div className="space-y-0.5">
          <span className="text-xs font-bold text-[#F5A623] uppercase tracking-wider">
            {currentSection.title}
          </span>
          <p className="text-xs sm:text-sm text-[#8B96A5]">
            Verified documentation, credential IDs, and official achievement certificates.
          </p>
        </div>
        <span className="text-xs font-semibold text-[#8B96A5] px-3 py-1.5 rounded-xl bg-[#0B0F14] border border-[#2A3441] self-start sm:self-auto shrink-0">
          {currentSection.items.length} Credentials
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentSection.items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-[#2A3441] bg-[#121821]/90 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-[#F5A623]/70 hover:shadow-[0_0_35px_rgba(245,166,35,0.2)] hover:-translate-y-2 hover:scale-[1.015] transition-all duration-300 group relative overflow-hidden"
          >
            {/* Ambient backlight shine */}
            <div className="absolute top-0 right-0 w-48 h-24 bg-gradient-to-bl from-[#F5A623]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="space-y-4">
              
              {/* Header: Issuer & Year */}
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#2A3441]">
                <span className="text-xs font-bold text-[#F5A623] truncate">
                  {item.issuer}
                </span>
                <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-[#0B0F14] border border-[#2A3441] text-[#8B96A5] shrink-0">
                  {item.year}
                </span>
              </div>

              {/* Title & Score Pill */}
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-lg text-[#E6EDF3] group-hover:text-[#F5A623] transition-colors leading-snug">
                  {item.title}
                </h3>
                {item.score && (
                  <div className="inline-block px-3 py-1 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/30 text-xs font-bold text-[#F5A623]">
                    {item.score}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#8B96A5] leading-relaxed">
                {item.description}
              </p>

            </div>

            {/* Clickable Verification Link */}
            <div className="pt-6 mt-6 border-t border-[#2A3441]">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0B0F14] border border-[#2A3441] text-xs font-bold text-[#E6EDF3] hover:border-[#F5A623] hover:text-[#F5A623] hover:bg-[#17202C] transition-all duration-200"
                >
                  <span>{item.linkText || 'Verify Credential'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F5A623]" />
                </a>
              ) : (
                <div className="text-center py-2 text-xs font-medium text-[#8B96A5] bg-[#0B0F14] rounded-xl border border-[#2A3441]/60">
                  {item.linkText}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
