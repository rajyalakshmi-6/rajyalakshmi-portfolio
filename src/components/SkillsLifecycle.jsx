import React, { useState } from 'react';
import { skillsLifecycle } from '../data/portfolioData';
import { Check, ShieldCheck, Cpu, Database, Send, Terminal, ArrowRight, Layers } from 'lucide-react';

export default function SkillsLifecycle() {
  const [activeStageId, setActiveStageId] = useState('logic');

  const activeStage = skillsLifecycle.find(s => s.id === activeStageId) || skillsLifecycle[2];

  const getStageIcon = (id) => {
    switch (id) {
      case 'request': return Terminal;
      case 'auth': return ShieldCheck;
      case 'logic': return Cpu;
      case 'persistence': return Database;
      case 'response': return Send;
      default: return Layers;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#3ECF8E] tracking-wider">&gt; SYSTEM_CAPABILITIES // REQUEST_LIFECYCLE</span>
        <div className="h-[1px] flex-1 bg-[#2A3441]" />
        <span className="font-mono text-[11px] text-[#8B96A5]">SYS_ID: 04_LIFECYCLE</span>
      </div>

      <div className="space-y-2 mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E6EDF3] tracking-tight">
          Request-Lifecycle Skills Architecture
        </h2>
        <p className="text-[#8B96A5] text-base max-w-2xl">
          Instead of an unorganized list of icons, every technology is mapped directly to the layer it commands in a production backend request pipeline.
        </p>
      </div>

      {/* Horizontal Lifecycle Diagram Container */}
      <div className="rounded-2xl border border-[#2A3441] bg-[#121821] p-6 sm:p-10 shadow-2xl space-y-8">
        
        {/* Top Sequence Bar */}
        <div className="relative py-6">
          
          {/* Connecting Track Line */}
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-[2px] bg-[#2A3441] -translate-y-1/2 z-0" />
          
          {/* Animated Green Beam */}
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-[2px] bg-[#3ECF8E]/30 -translate-y-1/2 z-0 animate-pulse" />

          {/* 5 Stage Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
            {skillsLifecycle.map((stage, idx) => {
              const isActive = stage.id === activeStageId;
              const Icon = getStageIcon(stage.id);

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  onMouseEnter={() => setActiveStageId(stage.id)}
                  className={`flex flex-col items-center text-center p-4 rounded-xl border transition-all duration-300 group cursor-pointer ${
                    isActive
                      ? 'bg-[#0B0F14] border-[#3ECF8E] shadow-[0_0_20px_rgba(62,207,142,0.2)] scale-105'
                      : 'bg-[#121821]/80 border-[#2A3441] hover:border-[#8B96A5] hover:bg-[#17202C]'
                  }`}
                >
                  {/* Icon Circle */}
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#3ECF8E] text-[#0B0F14] shadow-[0_0_15px_#3ECF8E]' 
                        : 'bg-[#0B0F14] text-[#8B96A5] border border-[#2A3441] group-hover:text-[#E6EDF3]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Stage Label */}
                  <span className={`font-mono text-xs font-bold transition-colors ${
                    isActive ? 'text-[#3ECF8E]' : 'text-[#E6EDF3]'
                  }`}>
                    {stage.stage}
                  </span>

                  {/* Stage Subtitle */}
                  <span className="text-[10px] text-[#8B96A5] font-mono mt-1 line-clamp-2">
                    {stage.summary}
                  </span>

                  {/* Active Indicator dot */}
                  <div className="mt-2 h-1.5 flex items-center">
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#3ECF8E] animate-ping" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Floating Detail Panel for Active Layer */}
        <div className="p-6 sm:p-8 rounded-xl border border-[#3ECF8E]/40 bg-[#0B0F14] shadow-inner space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#2A3441]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 text-[11px] font-mono text-[#3ECF8E] font-bold">
                  ACTIVE LAYER INSPECTOR
                </span>
                <span className="font-mono text-xs text-[#8B96A5]">
                  STAGE: {activeStage.stage}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#E6EDF3]">
                {activeStage.summary}
              </h3>
            </div>

            <div className="text-right shrink-0">
              <span className="text-[10px] font-mono text-[#8B96A5] block">ARCHITECTURAL ROLE</span>
              <span className="text-xs font-mono text-[#3ECF8E] font-semibold">VERIFIED PROFICIENCY</span>
            </div>
          </div>

          <p className="text-sm text-[#8B96A5] font-mono leading-relaxed">
            &gt; {activeStage.role}
          </p>

          {/* Associated Skills Cloud for This Specific Layer */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#E6EDF3] uppercase tracking-wider block">
              Core Competencies at This Layer:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {activeStage.skills.map((skill) => (
                <div 
                  key={skill}
                  className="px-3 py-1.5 rounded-lg border border-[#2A3441] bg-[#121821] text-xs font-mono text-[#E6EDF3] flex items-center gap-2 hover:border-[#3ECF8E] hover:text-[#3ECF8E] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
