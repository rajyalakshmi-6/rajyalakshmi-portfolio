import React, { useState } from 'react';
import { skillsCategories } from '../data/portfolioData';
import { SkillLogos } from './SkillLogos';
import { Cpu, Sparkles, CheckCircle2, Bot, Layers } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const getLogoComponent = (logoKey) => {
    const Component = SkillLogos[logoKey] || SkillLogos.Java;
    return <Component />;
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3ECF8E]/30 bg-[#121821] text-xs font-semibold text-[#3ECF8E]">
          <Cpu className="w-3.5 h-3.5" />
          <span>Professional Skills & Modern AI Tools</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E6EDF3] tracking-tight">
          Technical Expertise & Tooling Ecosystem
        </h2>
        <p className="text-[#8B96A5] text-base max-w-2xl mx-auto">
          Comprehensive competencies across enterprise Java full-stack development, database architectures, and next-generation AI productivity suites.
        </p>
      </div>

      {/* Category Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {skillsCategories.map((cat, idx) => (
          <button
            key={cat.category}
            onClick={() => setActiveTab(idx)}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
              activeTab === idx
                ? 'bg-[#3ECF8E] text-[#0B0F14] shadow-glow-green scale-105 font-bold'
                : 'bg-[#121821] text-[#8B96A5] hover:text-[#E6EDF3] border border-[#2A3441] hover:border-[#3ECF8E]/40 hover:-translate-y-0.5'
            }`}
          >
            {cat.category.includes('AI Tools') && <Bot className="w-4 h-4" />}
            <span>{cat.category}</span>
          </button>
        ))}
      </div>

      {/* Skills Showcase Container */}
      <div className="space-y-6">
        
        {/* Active Category Meta Header */}
        <div className="p-4 sm:p-5 rounded-2xl border border-[#2A3441] bg-[#121821]/80 backdrop-blur flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#3ECF8E] uppercase tracking-wider">
              {skillsCategories[activeTab].category}
            </span>
            <p className="text-xs sm:text-sm text-[#8B96A5]">
              {skillsCategories[activeTab].description}
            </p>
          </div>
          <span className="text-xs font-semibold text-[#8B96A5] px-3 py-1.5 rounded-xl bg-[#0B0F14] border border-[#2A3441] self-start sm:self-auto shrink-0">
            {skillsCategories[activeTab].skills.length} Technologies
          </span>
        </div>

        {/* Skill Cards Grid with Interactive Jump & Backlight Shine */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillsCategories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="relative p-5 rounded-2xl border border-[#2A3441] bg-[#121821]/90 backdrop-blur-xl flex items-center gap-4 hover:border-[#3ECF8E] hover:shadow-[0_0_30px_rgba(62,207,142,0.25)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              {/* Backlight shine beam */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3ECF8E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Official Colored Logo */}
              <div className="w-12 h-12 rounded-xl bg-[#0B0F14] border border-[#2A3441] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#3ECF8E]/60 transition-all duration-300 shadow-sm">
                {getLogoComponent(skill.logo)}
              </div>

              {/* Skill Label & Tag */}
              <div className="space-y-1 min-w-0">
                <div className="font-heading font-bold text-sm sm:text-base text-[#E6EDF3] truncate group-hover:text-[#3ECF8E] transition-colors">
                  {skill.name}
                </div>
                <div className="text-[11px] text-[#8B96A5] truncate font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] opacity-70" />
                  {skill.level}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Complete Skills Pill Cloud */}
      <div className="mt-16 p-6 sm:p-8 rounded-3xl border border-[#2A3441] bg-[#121821]/50 backdrop-blur-xl space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E6EDF3] uppercase tracking-wider">
          <CheckCircle2 className="w-4 h-4 text-[#3ECF8E]" />
          <span>Full Stack & Modern Tooling Index:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {skillsCategories.flatMap(c => c.skills).map((s) => (
            <span
              key={s.name}
              className="px-3 py-1.5 rounded-xl bg-[#0B0F14] border border-[#2A3441] text-xs font-medium text-[#8B96A5] hover:text-[#3ECF8E] hover:border-[#3ECF8E]/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
