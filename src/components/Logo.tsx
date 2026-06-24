import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

// 1. Just the circular emblem with the stylized NE monogram inside
export function LogoIcon({ className = '', size = 48 }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Nexcore Logo"
      style={{ width: size, height: size }}
      className={`inline-block object-contain ${className}`}
    />
  );
}

// 2. Full corporate badge with emblem, NEXCORE, and Engineering Solutions (kept for reference/compatibility)
export function LogoFull({ className = '', size = 200 }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Nexcore Logo"
      style={{ width: size, height: size }}
      className={`inline-block object-contain ${className}`}
    />
  );
}

// 3. Horizontal navbar combination
export function LogoHeader({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="Nexcore Logo"
        className="h-10 sm:h-12 object-contain"
      />
      <div className="hidden sm:flex flex-col">
        <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0B3D91] leading-none">
          NEXCORE
        </span>
        <span className="text-[9px] font-bold tracking-[0.2em] text-[#64748b] uppercase leading-none mt-1">
          ENGINEERING SOLUTIONS
        </span>
      </div>
    </div>
  );
}
