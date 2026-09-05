import React, { useState } from 'react';
import { careerRoadmap } from '../data/portfolioData';
import { 
  GraduationCap, 
  Briefcase, 
  FileText, 
  Layers, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  ExternalLink, 
  Award, 
  Calendar, 
  MapPin, 
  Code2, 
  ShieldCheck, 
  Compass,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export default function Roadmap() {
  const [activeStep, setActiveStep] = useState(1);
  const [viewMode, setViewMode] = useState('interactive'); // 'interactive' | 'timeline'

  const currentStage = careerRoadmap.find((item) => item.step === activeStep) || careerRoadmap[0];

  const getStageIcon = (name) => {
    switch (name) {
      case 'GraduationCap': return GraduationCap;
      case 'Briefcase': return Briefcase;
      case 'FileText': return FileText;
      case 'Layers': return Layers;
      case 'Sparkles': return Sparkles;
      default: return Code2;
    }
  };

  const CurrentIcon = getStageIcon(currentStage.iconName);

  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#3ECF8E]/10 via-[#58A6FF]/10 to-[#9D4EDD]/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center space-y-3 mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3ECF8E]/30 bg-[#121821] text-xs font-semibold text-[#3ECF8E] shadow-sm">
          <Compass className="w-3.5 h-3.5 animate-spin-slow" />
          <span>Interactive Career & Engineering Roadmap</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E6EDF3] tracking-tight">
          Evolutionary Milestone Track
        </h2>
        <p className="text-[#8B96A5] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Explore my structured transition from foundational ECE logic to enterprise full-stack development, peer-reviewed research, and production-grade architectures.
        </p>

        {/* View Mode Toggle Pill */}
        <div className="pt-2 flex items-center justify-center gap-2">
          <div className="inline-flex p-1 rounded-xl bg-[#0B0F14] border border-[#2A3441]">
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'interactive'
                  ? 'bg-[#3ECF8E] text-[#0B0F14] shadow-glow-green font-bold'
                  : 'text-[#8B96A5] hover:text-[#E6EDF3]'
              }`}
            >
              Interactive Station Flow
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'timeline'
                  ? 'bg-[#3ECF8E] text-[#0B0F14] shadow-glow-green font-bold'
                  : 'text-[#8B96A5] hover:text-[#E6EDF3]'
              }`}
            >
              Complete Timeline View
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'interactive' ? (
        /* INTERACTIVE STATION STEPPER VIEW */
        <div className="space-y-8 relative z-10">
          
          {/* Progress Tracker Rail */}
          <div className="rounded-3xl border border-[#2A3441] bg-[#121821]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
            
            {/* Percentage Bar & Stepper Controls Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2A3441]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 flex items-center justify-center text-[#3ECF8E]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#3ECF8E] uppercase tracking-wider">
                    Engineering Progress
                  </div>
                  <div className="text-sm font-bold text-[#E6EDF3]">
                    Milestone {currentStage.step} of {careerRoadmap.length}: {currentStage.title}
                  </div>
                </div>
              </div>

              {/* Prev / Next Navigation Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  disabled={activeStep === 1}
                  className="p-2.5 rounded-xl border border-[#2A3441] bg-[#0B0F14] text-[#E6EDF3] hover:border-[#3ECF8E] hover:text-[#3ECF8E] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                  aria-label="Previous Milestone"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="px-3 py-1.5 rounded-xl bg-[#0B0F14] border border-[#2A3441] text-xs font-bold text-[#3ECF8E]">
                  {Math.round((activeStep / careerRoadmap.length) * 100)}% Complete
                </div>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(careerRoadmap.length, prev + 1))}
                  disabled={activeStep === careerRoadmap.length}
                  className="p-2.5 rounded-xl border border-[#2A3441] bg-[#0B0F14] text-[#E6EDF3] hover:border-[#3ECF8E] hover:text-[#3ECF8E] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                  aria-label="Next Milestone"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Glowing Animated Milestone Stations Pipeline */}
            <div className="pt-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative">
                {careerRoadmap.map((stage) => {
                  const Icon = getStageIcon(stage.iconName);
                  const isSelected = activeStep === stage.step;
                  const isPast = stage.step < activeStep;

                  return (
                    <button
                      key={stage.step}
                      onClick={() => setActiveStep(stage.step)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 relative group cursor-pointer ${
                        isSelected
                          ? 'border-[#3ECF8E] bg-[#0B0F14] shadow-[0_0_25px_rgba(62,207,142,0.25)] scale-[1.03]'
                          : isPast
                          ? 'border-[#2A3441] bg-[#0B0F14]/70 hover:border-[#3ECF8E]/60'
                          : 'border-[#2A3441]/70 bg-[#0B0F14]/40 hover:border-[#2A3441]'
                      }`}
                    >
                      {/* Top Node Indicator */}
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                            isSelected
                              ? 'bg-[#3ECF8E] text-[#0B0F14] shadow-glow-green font-bold'
                              : isPast
                              ? 'bg-[#3ECF8E]/15 text-[#3ECF8E] border border-[#3ECF8E]/40'
                              : 'bg-[#121821] text-[#8B96A5] border border-[#2A3441]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                            isSelected
                              ? 'bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/40'
                              : 'text-[#8B96A5] bg-[#121821]'
                          }`}
                        >
                          {stage.phase}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div
                          className={`text-xs font-bold line-clamp-1 transition-colors ${
                            isSelected ? 'text-[#3ECF8E]' : 'text-[#E6EDF3] group-hover:text-[#3ECF8E]'
                          }`}
                        >
                          {stage.title}
                        </div>
                        <div className="text-[11px] text-[#8B96A5] truncate">
                          {stage.entity}
                        </div>
                        <div className="text-[10px] text-[#58A6FF] font-medium pt-1">
                          {stage.period}
                        </div>
                      </div>

                      {/* Active glowing underline indicator */}
                      {isSelected && (
                        <div className="absolute bottom-0 left-4 right-4 h-1 bg-[#3ECF8E] rounded-t-full shadow-glow-green" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Active Milestone Telemetry Detail Panel */}
          <div className="rounded-3xl border border-[#2A3441] bg-[#121821]/95 backdrop-blur-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-[#3ECF8E]/50 transition-all duration-300">
            
            {/* Ambient backlight shine */}
            <div className="absolute top-0 right-0 w-96 h-48 bg-gradient-to-bl from-[#3ECF8E]/15 via-transparent to-transparent opacity-80 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Core Telemetry & Narrative */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Status Badges Header */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-lg bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 text-xs font-bold text-[#3ECF8E] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {currentStage.status}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#58A6FF]/10 border border-[#58A6FF]/30 text-xs font-bold text-[#58A6FF]">
                    {currentStage.type}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#0B0F14] border border-[#2A3441] text-xs font-semibold text-[#8B96A5] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#3ECF8E]" />
                    {currentStage.period}
                  </span>
                </div>

                {/* Title & Organization */}
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#E6EDF3] leading-snug">
                    {currentStage.title}
                  </h3>
                  <div className="text-sm font-semibold text-[#3ECF8E] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{currentStage.entity}</span>
                    <span className="text-[#2A3441]">•</span>
                    <span className="text-[#E6EDF3]">{currentStage.badge}</span>
                  </div>
                </div>

                {/* Summary narrative */}
                <p className="text-sm sm:text-base text-[#8B96A5] leading-relaxed">
                  {currentStage.summary}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold text-[#E6EDF3] block uppercase tracking-wider">
                    Key Deliverables & Architectural Milestones:
                  </span>
                  <div className="space-y-2">
                    {currentStage.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#8B96A5]">
                        <CheckCircle2 className="w-4 h-4 text-[#3ECF8E] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Architectural Stack & Verifiable Credentials */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Tech Stack Matrix */}
                <div className="p-5 rounded-2xl border border-[#2A3441] bg-[#0B0F14]/90 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E6EDF3] uppercase tracking-wider">
                    <Code2 className="w-4 h-4 text-[#3ECF8E]" />
                    <span>Core Competencies Applied:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentStage.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-[#121821] border border-[#2A3441] text-xs font-medium text-[#E6EDF3] hover:border-[#3ECF8E] hover:text-[#3ECF8E] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verifiable Deliverables Links */}
                <div className="p-5 rounded-2xl border border-[#3ECF8E]/30 bg-[#0B0F14]/90 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#3ECF8E] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Documents & Evidence:</span>
                  </div>
                  <div className="space-y-2">
                    {currentStage.deliverables.map((del, i) => (
                      <a
                        key={i}
                        href={del.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-between p-3 rounded-xl bg-[#121821] border border-[#2A3441] hover:border-[#3ECF8E] text-xs font-semibold text-[#E6EDF3] hover:text-[#3ECF8E] hover:bg-[#16202c] transition-all group"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <Award className="w-3.5 h-3.5 text-[#3ECF8E] shrink-0" />
                          <span className="truncate">{del.name}</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[#8B96A5] group-hover:text-[#3ECF8E] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Step through action */}
                <div className="flex items-center justify-between text-xs text-[#8B96A5] pt-1">
                  <span>Step {currentStage.step} of 5</span>
                  {currentStage.step < careerRoadmap.length ? (
                    <button
                      onClick={() => setActiveStep(currentStage.step + 1)}
                      className="inline-flex items-center gap-1.5 text-[#3ECF8E] font-bold hover:underline cursor-pointer"
                    >
                      <span>Proceed to Next Stage</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-[#3ECF8E] font-bold hover:underline"
                    >
                      <span>Ready to Connect</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>

            </div>

          </div>

        </div>
      ) : (
        /* COMPLETE TIMELINE ROADMAP VIEW */
        <div className="relative border-l-2 border-[#2A3441] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 z-10">
          {careerRoadmap.map((stage) => {
            const Icon = getStageIcon(stage.iconName);

            return (
              <div key={stage.step} className="relative group">
                
                {/* Node Bullet on Timeline Track */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-[#0B0F14] border-2 border-[#3ECF8E] flex items-center justify-center text-[#3ECF8E] shadow-glow-green group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-[#2A3441] bg-[#121821]/90 backdrop-blur-xl p-6 sm:p-8 space-y-5 hover:border-[#3ECF8E]/60 transition-all shadow-xl">
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#2A3441]">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#3ECF8E] uppercase tracking-wider">
                          {stage.phase} • {stage.type}
                        </span>
                        <span className="text-[#2A3441]">|</span>
                        <span className="text-xs font-semibold text-[#58A6FF]">
                          {stage.badge}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#E6EDF3]">
                        {stage.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#8B96A5]">
                        {stage.entity}
                      </div>
                    </div>

                    <div className="px-3 py-1 rounded-xl bg-[#0B0F14] border border-[#2A3441] text-xs font-medium text-[#8B96A5] self-start sm:self-auto">
                      {stage.period}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#8B96A5] leading-relaxed">
                    {stage.summary}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {stage.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-[#0B0F14] border border-[#2A3441] text-[11px] font-medium text-[#E6EDF3]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-1">
                    {stage.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#8B96A5]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3ECF8E] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables */}
                  <div className="pt-3 border-t border-[#2A3441] flex flex-wrap gap-3">
                    {stage.deliverables.map((del, i) => (
                      <a
                        key={i}
                        href={del.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B0F14] border border-[#2A3441] hover:border-[#3ECF8E] text-xs font-semibold text-[#E6EDF3] hover:text-[#3ECF8E] transition-all"
                      >
                        <Award className="w-3 h-3 text-[#3ECF8E]" />
                        <span>{del.name}</span>
                        <ExternalLink className="w-3 h-3 text-[#8B96A5]" />
                      </a>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      )}

    </section>
  );
}
