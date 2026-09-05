import React from 'react';
import { technicalWriting, achievements } from '../data/portfolioData';
import { BookOpen, ExternalLink, ArrowUpRight, Award, Cpu, CheckCircle2 } from 'lucide-react';
import { Linkedin } from './Icons';

export default function Writing() {
  return (
    <section id="writing" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#3ECF8E] tracking-wider">&gt; TECHNICAL_WRITING // JVM_DEEP_DIVES</span>
        <div className="h-[1px] flex-1 bg-[#2A3441]" />
        <span className="font-mono text-[11px] text-[#8B96A5]">SYS_ID: 05_WRITING</span>
      </div>

      <div className="space-y-2 mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E6EDF3] tracking-tight">
          Java Internals & Systems Writing
        </h2>
        <p className="text-[#8B96A5] text-base max-w-2xl">
          Deep technical breakdowns and visual carousel essays published on LinkedIn covering the JVM architecture, thread synchronization, and Spring Boot internal lifecycles.
        </p>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {technicalWriting.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#2A3441] bg-[#121821] p-6 flex flex-col justify-between group hover:border-[#3ECF8E] transition-all duration-300 shadow-lg hover:-translate-y-1"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#3ECF8E] flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5" />
                  {item.publication}
                </span>
                <span className="text-[#8B96A5]">{item.readTime}</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-[#E6EDF3] group-hover:text-[#3ECF8E] transition-colors leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-[#8B96A5] leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#2A3441] space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-[#0B0F14] border border-[#2A3441] text-[10px] font-mono text-[#8B96A5]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#3ECF8E] pt-1">
                <span>Read Full Article on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Achievements and Certifications Banner */}
      <div className="rounded-2xl border border-[#2A3441] bg-[#121821] p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#2A3441]">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#F5A623]" />
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#E6EDF3]">
              Verified Certifications & Accolades
            </h3>
          </div>
          <span className="font-mono text-xs text-[#3ECF8E]">ACADEMIC & INDUSTRY</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((ach, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-[#2A3441] bg-[#0B0F14] flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-[#F5A623] font-bold">{ach.org}</span>
                  <span className="text-[#8B96A5]">{ach.year}</span>
                </div>
                <div className="font-mono text-xs font-bold text-[#E6EDF3]">
                  {ach.title}
                </div>
                <div className="text-[11px] text-[#8B96A5] leading-relaxed">
                  {ach.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
