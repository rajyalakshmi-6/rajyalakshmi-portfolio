import React, { useRef, useState } from 'react';

export default function MagneticButton({ children, className = '', onClick, href, download, target, rel }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Small magnetic pull max 6px
    const distanceX = (clientX - centerX) * 0.18;
    const distanceY = (clientY - centerY) * 0.18;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 && position.y === 0 ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s ease-out'
  };

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className={`inline-flex items-center justify-center font-mono text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`inline-flex items-center justify-center font-mono text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
