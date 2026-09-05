import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'HERO' },
  { id: 'about', label: 'ABOUT' },
  { id: 'featured', label: 'ARCH' },
  { id: 'projects', label: 'SYS' },
  { id: 'skills', label: 'FLOW' },
  { id: 'writing', label: 'DOCS' },
  { id: 'contact', label: 'EXIT' },
];

export default function ScrollConnector({ activeSection }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(Math.min(100, Math.max(0, scrolled)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIdx = SECTIONS.findIndex((s) => s.id === activeSection);
  const currentIdx = activeIdx >= 0 ? activeIdx : 0;

  return (
    <aside 
      className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center z-40 pointer-events-auto"
      aria-label="Section navigation bus"
    >
      <div className="relative flex flex-col items-center py-4">
        
        {/* Continuous Background Track Line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-[#2A3441]" />

        {/* Active Illuminated Green Line based on scroll progress */}
        <div 
          className="absolute top-0 w-[2px] bg-[#3ECF8E] shadow-[0_0_12px_#3ECF8E] transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />

        {/* Section Step Indicators */}
        <div className="flex flex-col gap-9 z-10">
          {SECTIONS.map((sec, idx) => {
            const isActive = idx <= currentIdx;
            const isCurrent = sec.id === activeSection;

            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="group flex items-center gap-3 cursor-pointer"
                title={`Navigate to ${sec.label}`}
              >
                {/* Node indicator */}
                <div 
                  className={`w-3 h-3 rounded-full border transition-all duration-300 flex items-center justify-center ${
                    isCurrent 
                      ? 'bg-[#3ECF8E] border-[#3ECF8E] shadow-[0_0_10px_#3ECF8E] scale-125' 
                      : isActive 
                        ? 'bg-[#121821] border-[#3ECF8E]' 
                        : 'bg-[#0B0F14] border-[#2A3441] group-hover:border-[#8B96A5]'
                  }`}
                >
                  {isCurrent && <span className="w-1 h-1 rounded-full bg-[#0B0F14]" />}
                </div>

                {/* Technical Label (appears on hover or when current) */}
                <span 
                  className={`font-mono text-[10px] tracking-widest transition-all duration-200 ${
                    isCurrent 
                      ? 'text-[#3ECF8E] font-bold opacity-100 translate-x-0' 
                      : 'text-[#8B96A5] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0'
                  }`}
                >
                  {sec.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
