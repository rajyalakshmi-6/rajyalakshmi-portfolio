import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ExternalLink, Award, CheckCircle2, ShieldCheck, Sparkles, Globe, Code2 } from 'lucide-react';
import { Github, Linkedin, LeetCode, HackerRank } from './Icons';
import { SkillLogos } from './SkillLogos';

export default function ProfileHub() {
  const { profiles, salesforceStats } = personalInfo;

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl border border-[#2A3441] bg-[#121821]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-[#3ECF8E]/40 transition-all duration-300">
        
        {/* Subtle background ambient beam */}
        <div className="absolute top-0 right-1/4 w-96 h-32 bg-gradient-to-r from-[#3ECF8E]/10 via-[#58A6FF]/10 to-transparent blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#2A3441]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3ECF8E] animate-pulse" />
              <span className="text-xs font-bold text-[#3ECF8E] tracking-wider uppercase">
                Verified Credentials & Developer Ecosystem
              </span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#E6EDF3]">
              Official Profiles & Digital Badges
            </h3>
            <p className="text-xs sm:text-sm text-[#8B96A5]">
              Directly verify all my competitive profiles, cloud credentials, and active community contributions.
            </p>
          </div>

          {/* Salesforce Champion Pill */}
          <a
            href={profiles.salesforce}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-2xl border border-[#00A1E0]/40 bg-[#00A1E0]/10 hover:bg-[#00A1E0]/20 hover:scale-[1.02] transition-all group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00A1E0] flex items-center justify-center text-white shrink-0 shadow-md">
              <SkillLogos.Salesforce />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#00A1E0]">
                <span>{salesforceStats.title}</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="text-[11px] text-[#8B96A5]">
                {salesforceStats.rank} • {salesforceStats.badges} Badges • {salesforceStats.points} Pts
              </div>
            </div>
          </a>
        </div>

        {/* Profile Link Cards Grid (6 Columns) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 pt-6">
          
          {/* LeetCode */}
          <a
            href={profiles.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#FFA116] hover:shadow-[0_0_20px_rgba(255,161,22,0.2)] hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFA116]/10 border border-[#FFA116]/30 flex items-center justify-center text-[#FFA116]">
                <LeetCode className="w-4 h-4" />
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#8B96A5] group-hover:text-[#FFA116] transition-colors" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#E6EDF3] group-hover:text-[#FFA116] transition-colors">
                LeetCode
              </div>
              <div className="text-[11px] text-[#8B96A5] mt-0.5">Algorithms & DSA</div>
            </div>
          </a>

          {/* HackerRank (Beside LeetCode) */}
          <a
            href={profiles.hackerrank}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#00EA64] hover:shadow-[0_0_20px_rgba(0,234,100,0.2)] hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#00EA64]/10 border border-[#00EA64]/30 flex items-center justify-center text-[#00EA64]">
                <HackerRank className="w-4 h-4" />
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#8B96A5] group-hover:text-[#00EA64] transition-colors" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#E6EDF3] group-hover:text-[#00EA64] transition-colors">
                HackerRank
              </div>
              <div className="text-[11px] text-[#8B96A5] mt-0.5">Problem Solving & Logic</div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={profiles.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#3ECF8E] hover:shadow-[0_0_20px_rgba(62,207,142,0.2)] hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#121821] border border-[#2A3441] flex items-center justify-center text-[#E6EDF3]">
                <Github className="w-4 h-4" />
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#8B96A5] group-hover:text-[#3ECF8E] transition-colors" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#E6EDF3] group-hover:text-[#3ECF8E] transition-colors">
                GitHub Repos
              </div>
              <div className="text-[11px] text-[#8B96A5] mt-0.5">Open Source Code</div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={profiles.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.2)] hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#0A66C2]/10 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2]">
                <Linkedin className="w-4 h-4" />
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#8B96A5] group-hover:text-[#0A66C2] transition-colors" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#E6EDF3] group-hover:text-[#0A66C2] transition-colors">
                LinkedIn Profile
              </div>
              <div className="text-[11px] text-[#8B96A5] mt-0.5">Professional Network</div>
            </div>
          </a>

          {/* Credly */}
          <a
            href={profiles.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#F5A623] hover:shadow-[0_0_20px_rgba(245,166,35,0.2)] hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623] font-bold text-xs">
                C
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#8B96A5] group-hover:text-[#F5A623] transition-colors" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#E6EDF3] group-hover:text-[#F5A623] transition-colors">
                Credly Badges
              </div>
              <div className="text-[11px] text-[#8B96A5] mt-0.5">Verified Badges</div>
            </div>
          </a>

          {/* Google Developer Program */}
          <a
            href={profiles.googleDev}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-[#2A3441] bg-[#0B0F14] hover:border-[#4285F4] hover:shadow-[0_0_20px_rgba(66,133,244,0.2)] hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#4285F4]/10 border border-[#4285F4]/30 flex items-center justify-center text-[#4285F4] font-bold text-xs">
                G
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#8B96A5] group-hover:text-[#4285F4] transition-colors" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#E6EDF3] group-hover:text-[#4285F4] transition-colors">
                Google Devs
              </div>
              <div className="text-[11px] text-[#8B96A5] mt-0.5">Official Member</div>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
