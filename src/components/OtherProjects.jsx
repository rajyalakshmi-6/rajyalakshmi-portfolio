import React from 'react';
import { ExternalLink, ShieldCheck, Database, FileText, ArrowUpRight, Cpu } from 'lucide-react';
import { Github } from './Icons';

export default function OtherProjects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#3ECF8E] tracking-wider">&gt; SPECIALIZED_SYSTEMS // SUB-MODULES</span>
        <div className="h-[1px] flex-1 bg-[#2A3441]" />
        <span className="font-mono text-[11px] text-[#8B96A5]">SYS_ID: 03_SPECIALIZED</span>
      </div>

      <div className="space-y-2 mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E6EDF3] tracking-tight">
          Specialized Engines & Research
        </h2>
        <p className="text-[#8B96A5] text-base max-w-2xl">
          Targeted implementations focusing on graph queries, ACID transaction boundary guarantees, and IoT telemetry pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* =========================================================================
            1. UPI Fund Transfer Engine
           ========================================================================= */}
        <div className="rounded-xl border border-[#2A3441] bg-[#121821] p-6 flex flex-col justify-between group hover:border-[#3ECF8E] transition-all duration-300 shadow-lg">
          <div className="space-y-4">
            
            {/* Miniature Node/Line Motif */}
            <div className="flex items-center justify-between pb-3 border-b border-[#2A3441]">
              <div className="flex items-center gap-2">
                {/* Mini SVG circuit motif */}
                <svg width="48" height="18" viewBox="0 0 48 18" fill="none">
                  <line x1="4" y1="9" x2="44" y2="9" stroke="#2A3441" strokeWidth="2" strokeDasharray="2 2" />
                  <circle cx="6" cy="9" r="3" fill="#3ECF8E" />
                  <circle cx="24" cy="9" r="3" fill="#2A3441" />
                  <circle cx="42" cy="9" r="3" fill="#3ECF8E" />
                </svg>
                <span className="font-mono text-[10px] text-[#8B96A5]">SYS_03.1</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#3ECF8E]/10 border border-[#3ECF8E]/20 text-[10px] font-mono text-[#3ECF8E] font-bold">
                ACID GUARANTEED
              </span>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs text-[#8B96A5] uppercase tracking-wider">
                Financial Backend Simulation
              </span>
              <h3 className="font-heading text-xl font-bold text-[#E6EDF3] group-hover:text-[#3ECF8E] transition-colors">
                UPI Fund Transfer Engine
              </h3>
            </div>

            <p className="text-xs text-[#8B96A5] leading-relaxed">
              Console-based peer-to-peer financial transaction engine built with strict ACID transactional boundaries. Uses commit, rollback, and savepoint controls to prevent partial deductions during connection failures.
            </p>

            {/* Architectural Highlights */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-mono text-[#3ECF8E] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />
                Commit, Rollback & Savepoint Isolation
              </div>
              <div className="text-[11px] font-mono text-[#8B96A5] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A3441]" />
                Sender/Receiver Balance Verification Checks
              </div>
              <div className="text-[11px] font-mono text-[#8B96A5] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A3441]" />
                Parameterized JDBC PreparedStatements
              </div>
            </div>

          </div>

          <div className="pt-6 mt-6 border-t border-[#2A3441] space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {["Java", "JDBC", "MySQL", "ACID", "Transactions"].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-[#0B0F14] border border-[#2A3441] text-[10px] font-mono text-[#8B96A5]">
                  {t}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/rajyalakshmi-6/RealTimeBankingSystem_consoleBased"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2 rounded border border-[#2A3441] bg-[#0B0F14] text-[#E6EDF3] hover:border-[#3ECF8E] hover:text-[#3ECF8E] font-mono text-xs transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Source Code</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>


        {/* =========================================================================
            2. GlowGraph Skincare Compatibility Platform
           ========================================================================= */}
        <div className="rounded-xl border border-[#2A3441] bg-[#121821] p-6 flex flex-col justify-between group hover:border-[#9D4EDD] transition-all duration-300 shadow-lg">
          <div className="space-y-4">
            
            {/* Miniature Node/Line Motif */}
            <div className="flex items-center justify-between pb-3 border-b border-[#2A3441]">
              <div className="flex items-center gap-2">
                <svg width="48" height="18" viewBox="0 0 48 18" fill="none">
                  <path d="M 6 12 L 24 6 L 42 12" stroke="#2A3441" strokeWidth="2" strokeDasharray="2 2" />
                  <circle cx="6" cy="12" r="3" fill="#9D4EDD" />
                  <circle cx="24" cy="6" r="3" fill="#9D4EDD" />
                  <circle cx="42" cy="12" r="3" fill="#9D4EDD" />
                </svg>
                <span className="font-mono text-[10px] text-[#8B96A5]">SYS_03.2</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#9D4EDD]/10 border border-[#9D4EDD]/20 text-[10px] font-mono text-[#9D4EDD] font-bold">
                GRAPH DATABASE
              </span>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs text-[#8B96A5] uppercase tracking-wider">
                Technical Take-Home • AI Company
              </span>
              <h3 className="font-heading text-xl font-bold text-[#E6EDF3] group-hover:text-[#9D4EDD] transition-colors">
                GlowGraph — Graph DB Engine
              </h3>
            </div>

            <p className="text-xs text-[#8B96A5] leading-relaxed">
              Graph-database-driven recommendation and ingredient conflict platform. Built as a technical assignment for an AI company to analyze chemical synergies, multi-hop ingredient sensitivities, and conflicting routines.
            </p>

            {/* Architectural Highlights */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-mono text-[#9D4EDD] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9D4EDD]" />
                Neo4jClient with Explicit Cypher Queries
              </div>
              <div className="text-[11px] font-mono text-[#8B96A5] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A3441]" />
                Pivoted from SDN Auto-save for Cloud Compatibility
              </div>
              <div className="text-[11px] font-mono text-[#8B96A5] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A3441]" />
                Multi-Hop Graph Traversal for Conflict Paths
              </div>
            </div>

          </div>

          <div className="pt-6 mt-6 border-t border-[#2A3441] space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {["Spring Boot", "Neo4j", "Cypher", "CognoDB Cloud", "REST APIs"].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-[#0B0F14] border border-[#2A3441] text-[10px] font-mono text-[#8B96A5]">
                  {t}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/rajyalakshmi-6/glow-graph"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2 rounded border border-[#2A3441] bg-[#0B0F14] text-[#E6EDF3] hover:border-[#9D4EDD] hover:text-[#9D4EDD] font-mono text-xs transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Graph Model Repo</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>


        {/* =========================================================================
            3. Published Research Paper: IoT & ML Railway Safety System
           ========================================================================= */}
        <div className="rounded-xl border border-[#2A3441] bg-[#121821] p-6 flex flex-col justify-between group hover:border-[#F5A623] transition-all duration-300 shadow-lg">
          <div className="space-y-4">
            
            {/* Miniature Node/Line Motif */}
            <div className="flex items-center justify-between pb-3 border-b border-[#2A3441]">
              <div className="flex items-center gap-2">
                <svg width="48" height="18" viewBox="0 0 48 18" fill="none">
                  <rect x="4" y="4" width="8" height="10" stroke="#F5A623" strokeWidth="1.5" />
                  <line x1="12" y1="9" x2="36" y2="9" stroke="#2A3441" strokeWidth="2" strokeDasharray="2 2" />
                  <circle cx="40" cy="9" r="3" fill="#F5A623" />
                </svg>
                <span className="font-mono text-[10px] text-[#8B96A5]">SYS_03.3</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#F5A623]/10 border border-[#F5A623]/20 text-[10px] font-mono text-[#F5A623] font-bold">
                ISJEM ACME–2026
              </span>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs text-[#8B96A5] uppercase tracking-wider">
                Published Research Paper • DOI: 10.55041/ISJEM.ACME145
              </span>
              <h3 className="font-heading text-xl font-bold text-[#E6EDF3] group-hover:text-[#F5A623] transition-colors">
                IoT & ML Railway Safety System
              </h3>
            </div>

            <p className="text-xs text-[#8B96A5] leading-relaxed">
              Published peer-reviewed research in ISJEM. Highlighting my engineering contribution to hardware sensor configuration, micro-controller firmware, and real-time streaming telemetry to cloud endpoints and mobile alerts.
            </p>

            {/* Architectural Highlights */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-mono text-[#F5A623] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                Hardware Setup: NodeMCU ESP8266 + Arduino Uno
              </div>
              <div className="text-[11px] font-mono text-[#8B96A5] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A3441]" />
                Multi-Sensor Bus: IR, Fire, and MEMS Telemetry
              </div>
              <div className="text-[11px] font-mono text-[#8B96A5] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A3441]" />
                ThingSpeak Data Pipeline + Telegram Alert Webhooks
              </div>
            </div>

          </div>

          <div className="pt-6 mt-6 border-t border-[#2A3441] space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {["IoT", "ESP8266", "Arduino", "ThingSpeak", "Telegram API"].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-[#0B0F14] border border-[#2A3441] text-[10px] font-mono text-[#8B96A5]">
                  {t}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://isjem.com/download/predictive-and-real-time-railway-safety-solutions-using-iot-ml/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded border border-[#F5A623]/40 bg-[#F5A623]/10 text-[#F5A623] hover:bg-[#F5A623] hover:text-[#0B0F14] font-mono text-[11px] font-semibold transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Read Paper</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href="https://github.com/rajyalakshmi-6/Advanced_IoT_ML_Railway_safety"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded border border-[#2A3441] bg-[#0B0F14] text-[#E6EDF3] hover:border-[#F5A623] font-mono text-[11px] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repo</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
