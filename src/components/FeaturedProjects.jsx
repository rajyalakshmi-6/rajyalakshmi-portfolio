import React from 'react';
import { featuredProjects } from '../data/portfolioData';
import ProjectArchitectureSvg from './ProjectArchitectureSvg';
import LiveApiWidget from './LiveApiWidget';
import { ExternalLink, ShieldCheck, Database, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';

export default function FeaturedProjects() {
  return (
    <section id="featured" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#3ECF8E] tracking-wider">&gt; ARCHITECTURE_DEPLOYMENTS // CORE_SYSTEMS</span>
        <div className="h-[1px] flex-1 bg-[#2A3441]" />
        <span className="font-mono text-[11px] text-[#8B96A5]">SYS_ID: 02_FEATURED</span>
      </div>

      <div className="space-y-2 mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E6EDF3] tracking-tight">
          Featured Architectural Systems
        </h2>
        <p className="text-[#8B96A5] text-base max-w-2xl">
          Deep dives into full-scale Java enterprise architectures with verified class metrics, relational schemas, and interactive data-flow inspection.
        </p>
      </div>

      <div className="space-y-24">
        
        {/* =========================================================================
            PROJECT 1: SHELFBOUND (Full-width treatment)
           ========================================================================= */}
        <div className="rounded-2xl border border-[#2A3441] bg-[#121821] p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden group">
          
          {/* Subtle accent corner glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3ECF8E]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar: Title, Tagline, Repo Link */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#2A3441]">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 text-[#3ECF8E] font-mono text-xs font-bold">
                  PROJECT 01 // INDEPENDENT ARCHITECTURE
                </span>
                <span className="font-mono text-xs text-[#8B96A5]">9-TABLE RELATIONAL MODEL</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#E6EDF3]">
                ShelfBound — Full-Stack Bookstore Platform
              </h3>
              <p className="text-sm text-[#8B96A5] font-mono">
                Layered MVC + DAO Pattern • Parameterized JDBC Query Hardening • AJAX State Sync
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={featuredProjects[0].repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2A3441] bg-[#0B0F14] text-[#E6EDF3] hover:border-[#3ECF8E] hover:text-[#3ECF8E] font-mono text-xs font-semibold transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Description & Narrative */}
          <p className="text-base text-[#E6EDF3]/90 leading-relaxed max-w-4xl">
            {featuredProjects[0].description}
          </p>

          {/* Verified Metrics Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {featuredProjects[0].metrics.map((m) => (
              <div key={m.label} className="p-3.5 rounded-lg border border-[#2A3441] bg-[#0B0F14]">
                <div className="font-heading text-xl font-bold text-[#3ECF8E]">{m.value}</div>
                <div className="text-[11px] font-mono text-[#8B96A5] mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Interactive Project Architecture SVG */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#8B96A5]">SYSTEM INTERACTIVE TOPOLOGY:</div>
            <ProjectArchitectureSvg type="shelfbound" />
          </div>

          {/* Key Engineering Features Grid */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-[#3ECF8E] uppercase tracking-wider">
              &gt; Key Architectural Implementations & Verified Features:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {featuredProjects[0].features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg border border-[#2A3441]/60 bg-[#0B0F14]/60 text-xs text-[#8B96A5]">
                  <CheckCircle2 className="w-4 h-4 text-[#3ECF8E] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="pt-4 border-t border-[#2A3441] flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-[#8B96A5] mr-2">TECH_STACK:</span>
            {featuredProjects[0].stack.map((tech) => (
              <span 
                key={tech}
                className="px-2.5 py-1 rounded bg-[#0B0F14] border border-[#2A3441] text-[#E6EDF3] font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>


        {/* =========================================================================
            PROJECT 2: EMPLOYEE LEAVE MANAGEMENT SYSTEM (Full-width treatment + Live API Widget)
           ========================================================================= */}
        <div className="rounded-2xl border border-[#2A3441] bg-[#121821] p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden group">
          
          {/* Subtle accent corner glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#58A6FF]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#2A3441]">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded bg-[#58A6FF]/10 border border-[#58A6FF]/30 text-[#58A6FF] font-mono text-xs font-bold">
                  PROJECT 02 // ENTERPRISE REST API
                </span>
                <span className="font-mono text-xs text-[#8B96A5]">STATELESS JWT SECURITY</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#E6EDF3]">
                Employee Leave Management System
              </h3>
              <p className="text-sm text-[#8B96A5] font-mono">
                Spring Boot REST API • Spring Security 6 • RBAC (Employee/Manager/Admin) • Postman Suite
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={featuredProjects[1].repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2A3441] bg-[#0B0F14] text-[#E6EDF3] hover:border-[#3ECF8E] hover:text-[#3ECF8E] font-mono text-xs font-semibold transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-base text-[#E6EDF3]/90 leading-relaxed max-w-4xl">
            {featuredProjects[1].description}
          </p>

          {/* Verified Metrics Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {featuredProjects[1].metrics.map((m) => (
              <div key={m.label} className="p-3.5 rounded-lg border border-[#2A3441] bg-[#0B0F14]">
                <div className="font-heading text-lg font-bold text-[#58A6FF]">{m.value}</div>
                <div className="text-[11px] font-mono text-[#8B96A5] mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Interactive Project Architecture SVG */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#8B96A5]">SPRING BOOT SECURITY & REST TOPOLOGY:</div>
            <ProjectArchitectureSvg type="leave-system" />
          </div>

          {/* Interactive Live API Widget (Section 5 Spec) */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="font-mono text-xs text-[#3ECF8E] uppercase tracking-wider flex items-center gap-2">
                <span>&gt; Try It Live: Interactive API Client Widget</span>
                <span className="px-2 py-0.5 rounded bg-[#3ECF8E]/10 border border-[#3ECF8E]/20 text-[10px] text-[#3ECF8E]">
                  TERMINAL SIMULATOR
                </span>
              </h4>
              <span className="text-[11px] font-mono text-[#8B96A5] hidden sm:inline">
                Real schema responses • Packet path animation
              </span>
            </div>
            
            <LiveApiWidget />
          </div>

          {/* Key Features List */}
          <div className="space-y-3 pt-2">
            <h4 className="font-mono text-xs text-[#58A6FF] uppercase tracking-wider">
              &gt; Security & Workflow Implementation Details:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {featuredProjects[1].features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg border border-[#2A3441]/60 bg-[#0B0F14]/60 text-xs text-[#8B96A5]">
                  <CheckCircle2 className="w-4 h-4 text-[#58A6FF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="pt-4 border-t border-[#2A3441] flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-[#8B96A5] mr-2">TECH_STACK:</span>
            {featuredProjects[1].stack.map((tech) => (
              <span 
                key={tech}
                className="px-2.5 py-1 rounded bg-[#0B0F14] border border-[#2A3441] text-[#E6EDF3] font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
