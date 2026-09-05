import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2, Award, Sparkles, Code2, ExternalLink, ShieldCheck } from 'lucide-react';

export default function About() {
  const exp = personalInfo.experience[0];
  const edu = personalInfo.education[0];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3ECF8E]/30 bg-[#121821] text-xs font-semibold text-[#3ECF8E]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E6EDF3] tracking-tight">
          Background, Education & Professional Experience
        </h2>
        <p className="text-[#8B96A5] text-base max-w-2xl mx-auto">
          Combining analytical systems engineering from an ECE background with intensive onsite full-stack Java development at Tap Academy.
        </p>
      </div>

      <div className="space-y-10">
        
        {/* Row 1: Personal Transition Narrative */}
        <div className="rounded-3xl border border-[#2A3441] bg-[#121821]/90 backdrop-blur-xl p-6 sm:p-10 space-y-5 shadow-xl hover:border-[#3ECF8E]/40 transition-all duration-300">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#E6EDF3] flex items-center gap-2.5">
            <Code2 className="w-6 h-6 text-[#3ECF8E]" />
            From Hardware Signals to Scalable Software Architectures
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#8B96A5] text-sm sm:text-base leading-relaxed">
            <p>
              I am pursuing my <strong className="text-[#E6EDF3]">B.Tech in Electronics & Communication Engineering</strong> at Annamacharya Institute of Technology and Sciences, Tirupati, graduating in <strong className="text-[#E6EDF3]">April 2026</strong> with an outstanding <strong className="text-[#3ECF8E]">9.47 CGPA</strong>, consistently ranking among the <strong className="text-[#E6EDF3]">Top 4 students</strong> in my department.
            </p>
            <p>
              My background with microcontrollers, circuit logic, and hardware timing gave me a distinctive systems-level understanding that accelerated my transition into software engineering. I have focused relentlessly on mastering <strong className="text-[#E6EDF3]">Java, Spring Boot, Spring Security, Hibernate ORM, and MySQL</strong> to build reliable, high-performance web systems.
            </p>
          </div>
        </div>

        {/* Row 2: Comprehensive Experience & Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="experience">
          
          {/* Onsite Internship Card at Tap Academy (Detailed) */}
          <div className="lg:col-span-7 rounded-3xl border border-[#2A3441] bg-[#121821]/90 backdrop-blur-xl p-6 sm:p-8 space-y-6 shadow-xl hover:border-[#3ECF8E]/50 hover:shadow-[0_0_30px_rgba(62,207,142,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#2A3441]">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 text-xs font-bold text-[#3ECF8E]">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Onsite Professional Internship</span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-[#E6EDF3] pt-1">
                    {exp.role}
                  </h4>
                  <div className="text-sm font-semibold text-[#3ECF8E]">
                    {exp.company} • {exp.location}
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="px-3 py-1 rounded-lg bg-[#0B0F14] border border-[#2A3441] text-xs font-semibold text-[#E6EDF3] block">
                    {exp.completionDate}
                  </span>
                  <span className="text-[11px] text-[#8B96A5] mt-1 block">
                    Duration: Dec 2024 – Aug 2025
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-[#8B96A5] leading-relaxed">
                {exp.summary}
              </p>

              {/* Skills Learned */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold text-[#E6EDF3] block uppercase tracking-wider">
                  Key Skills & Technologies Mastered:
                </span>
                <div className="space-y-2">
                  {exp.skillsLearned.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#8B96A5] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#3ECF8E] shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Onsite Impact & Confidence */}
              <div className="p-4 rounded-2xl border border-[#3ECF8E]/30 bg-[#0B0F14] text-xs text-[#8B96A5] space-y-1.5 leading-relaxed">
                <div className="font-bold text-[#3ECF8E] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Onsite Collaboration & Professional Confidence:</span>
                </div>
                <p>
                  {exp.onsiteImpact}
                </p>
              </div>

            </div>

            {/* Certificate Action Link */}
            <div className="pt-4 border-t border-[#2A3441]">
              <a
                href={exp.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#3ECF8E] text-[#0B0F14] hover:bg-[#32b57a] text-xs font-bold transition-all shadow-glow-green"
              >
                <Award className="w-4 h-4" />
                <span>View Internship Certificate (Drive)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Education Card */}
          <div className="lg:col-span-5 rounded-3xl border border-[#2A3441] bg-[#121821]/90 backdrop-blur-xl p-6 sm:p-8 space-y-6 shadow-xl hover:border-[#58A6FF]/50 hover:shadow-[0_0_30px_rgba(88,166,255,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              
              <div className="pb-4 border-b border-[#2A3441] space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#58A6FF]/10 border border-[#58A6FF]/30 text-xs font-bold text-[#58A6FF]">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Formal Education</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 text-xs font-bold text-[#3ECF8E]">
                    <Award className="w-3.5 h-3.5" />
                    <span>IETE Alumni Member</span>
                  </div>
                </div>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-[#E6EDF3] pt-1">
                  {edu.degree}
                </h4>
                <div className="text-sm font-semibold text-[#58A6FF]">
                  {edu.institution}
                </div>
                <div className="text-xs text-[#8B96A5]">
                  {edu.location} • {edu.period}
                </div>
              </div>

              {/* Score Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="p-3.5 rounded-xl bg-[#0B0F14] border border-[#3ECF8E]/40 flex-1">
                  <div className="text-[11px] text-[#8B96A5] font-medium">Cumulative Score</div>
                  <div className="font-heading text-lg sm:text-xl font-extrabold text-[#3ECF8E] mt-0.5">
                    {edu.score}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0B0F14] border border-[#2A3441] flex-1">
                  <div className="text-[11px] text-[#8B96A5] font-medium">Department Rank</div>
                  <div className="font-heading text-sm sm:text-base font-bold text-[#E6EDF3] mt-0.5">
                    {edu.rank}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#8B96A5] leading-relaxed">
                {edu.details}
              </p>

              <div className="p-4 rounded-2xl bg-[#0B0F14] border border-[#2A3441] text-xs text-[#8B96A5] space-y-1">
                <div className="font-semibold text-[#E6EDF3]">Key Engineering Areas:</div>
                <div>Microprocessors, Embedded Systems, IoT Architectures, Signal Processing, Computer Networks, and Object-Oriented Software Design.</div>
              </div>

            </div>

            <div className="pt-4 border-t border-[#2A3441] flex items-center justify-between text-xs text-[#8B96A5]">
              <span>IETE Student Forum • AITS</span>
              <span className="text-[#3ECF8E] font-medium">Distinction Class</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
