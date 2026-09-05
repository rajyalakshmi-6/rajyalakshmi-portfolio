import React, { useEffect, useState } from 'react';

export default function BackgroundGrid() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Subtle parallax shift max 12px
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-transform duration-700 ease-out"
      style={{
        transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`
      }}
      aria-hidden="true"
    >
      {/* Background dot matrix */}
      <div className="absolute inset-0 circuit-grid opacity-35" />

      {/* Subtle radial ambient glows - low opacity, strictly functional */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#3ECF8E]/5 rounded-full blur-3xl" />
      <div className="absolute top-3/4 -right-48 w-96 h-96 bg-[#58A6FF]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#121821]/40 rounded-full blur-2xl" />

      {/* Subtle circuit traces in background */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#2A3441" strokeWidth="0.75" strokeDasharray="3 6" />
            <circle cx="0" cy="0" r="1.5" fill="#3ECF8E" opacity="0.6" />
            <circle cx="120" cy="120" r="1.5" fill="#3ECF8E" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
}
