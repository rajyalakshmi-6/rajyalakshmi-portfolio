import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink, Video, FileText, ArrowUpRight, CheckCircle2, Layers, Sparkles, Database, ShieldCheck, Cpu } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full-Stack & Graph DB', 'Backend & Enterprise APIs', 'IoT & Machine Learning'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3ECF8E]/30 bg-[#121821] text-xs font-semibold text-[#3ECF8E]">
          <Layers className="w-3.5 h-3.5" />
          <span>Featured Work</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E6EDF3] tracking-tight">
          Featured Projects & Engineering Work
        </h2>
        <p className="text-[#8B96A5] text-base max-w-2xl mx-auto">
          Production full-stack applications, enterprise REST services, and our capstone IoT & Machine Learning railway safety system.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              filter === cat
                ? 'bg-[#3ECF8E] text-[#0B0F14] shadow-glow-green scale-105'
                : 'bg-[#121821] text-[#8B96A5] hover:text-[#E6EDF3] border border-[#2A3441] hover:border-[#3ECF8E]/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-3xl border border-[#2A3441] bg-[#121821]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-[#3ECF8E]/60 hover:shadow-[0_0_35px_rgba(62,207,142,0.18)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 group relative overflow-hidden"
          >
            {/* Ambient backlight shine inside card */}
            <div className="absolute top-0 right-0 w-64 h-32 bg-gradient-to-bl from-[#3ECF8E]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="space-y-5">
              
              {/* Card Header: Category & Badge */}
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#2A3441]">
                <span className="text-xs font-bold text-[#3ECF8E] uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 text-[#3ECF8E]">
                  {project.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1.5">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#E6EDF3] group-hover:text-[#3ECF8E] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8B96A5] font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#8B96A5] leading-relaxed">
                {project.description}
              </p>

              {/* Publication details if applicable */}
              {project.publication && (
                <div className="p-4 rounded-2xl border border-[#58A6FF]/40 bg-[#0B0F14] text-xs text-[#8B96A5] space-y-1.5">
                  <div className="font-bold text-[#58A6FF] flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    <span>Published Paper: {project.publication.journal}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-[11px]">
                    <span>Conference: <strong className="text-[#E6EDF3]">{project.publication.conference}</strong></span>
                    <span>•</span>
                    <span>DOI: <strong className="text-[#3ECF8E]">{project.publication.doi}</strong></span>
                    <span>•</span>
                    <span>ISSN: {project.publication.issn}</span>
                  </div>
                </div>
              )}

              {/* Key Implementation Highlights */}
              <div className="space-y-2 pt-1">
                {project.highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#8B96A5] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#3ECF8E] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Stack & All Clickable Links */}
            <div className="pt-6 mt-6 border-t border-[#2A3441] space-y-4">
              
              {/* Comprehensive Tech Stack Tags */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-semibold text-[#8B96A5] uppercase tracking-wider">
                  Technologies & Hardware:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-[#0B0F14] border border-[#2A3441] text-[11px] font-medium text-[#E6EDF3] hover:border-[#3ECF8E]/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                
                {/* GitHub Source Code */}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#2A3441] bg-[#0B0F14] text-[#E6EDF3] hover:border-[#3ECF8E] hover:text-[#3ECF8E] text-xs font-semibold hover:scale-105 transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                )}

                {/* Live Demo on Render */}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#3ECF8E] text-[#0B0F14] hover:bg-[#32b57a] text-xs font-bold shadow-glow-green hover:scale-105 transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo (Render)</span>
                  </a>
                )}

                {/* Walkthrough Video */}
                {project.links.video && (
                  <a
                    href={project.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#58A6FF]/50 bg-[#58A6FF]/10 text-[#58A6FF] hover:bg-[#58A6FF] hover:text-[#0B0F14] text-xs font-semibold hover:scale-105 transition-all duration-200"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Watch Demo Video</span>
                  </a>
                )}

                {/* System Documentation */}
                {project.links.docs && (
                  <a
                    href={project.links.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#F5A623]/50 bg-[#F5A623]/10 text-[#F5A623] hover:bg-[#F5A623] hover:text-[#0B0F14] text-xs font-semibold hover:scale-105 transition-all duration-200"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>System Documentation (Drive)</span>
                  </a>
                )}

                {/* ISJEM Research Paper Download */}
                {project.links.paper && (
                  <a
                    href={project.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#58A6FF] text-[#0B0F14] hover:bg-[#4791e6] text-xs font-bold hover:scale-105 transition-all duration-200 shadow-md"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Download Research Paper (ISJEM)</span>
                  </a>
                )}

              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
