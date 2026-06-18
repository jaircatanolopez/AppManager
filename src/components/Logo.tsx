import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  iconOnly = false,
  size = "md",
}) => {
  // Dimensions based on size
  const dimensions = {
    sm: { box: "h-8 w-8", textClass: "text-base", px: 32 },
    md: { box: "h-11 w-11", textClass: "text-xl", px: 44 },
    lg: { box: "h-14 w-14", textClass: "text-2xl", px: 56 },
    xl: { box: "h-24 w-24", textClass: "text-4xl", px: 96 },
  };

  const currentSize = dimensions[size];

  // SVG representation of the Manager APP Logo
  const LogoSVG = () => (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: `${currentSize.px}px`, height: `${currentSize.px}px` }}
      className="shrink-0"
    >
      <defs>
        {/* Mirror the stunning real gradient of the uploaded logo */}
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3e62" />
          <stop offset="50%" stopColor="#112946" />
          <stop offset="100%" stopColor="#0a1a2e" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="18" fill="url(#logo-gradient)" />
      {/* Upper-left outer pillar */}
      <path
        d="M 21,78 L 21,22 L 45,39 L 45,78 Z"
        fill="white"
      />
      {/* Center inner pillar */}
      <path
        d="M 48,78 L 48,42 L 52,42 L 52,78 Z"
        fill="white"
      />
      {/* Upper-right outer pillar */}
      <path
        d="M 79,78 L 79,22 L 55,39 L 55,78 Z"
        fill="white"
      />
    </svg>
  );

  if (iconOnly) {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
        <LogoSVG />
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 group select-none ${className}`}>
      <div className="inline-flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
        <LogoSVG />
      </div>
      <div className="flex flex-col">
        <span className={`font-bold tracking-tight leading-none text-white ${currentSize.textClass}`}>
          Manager <span className="text-[#00b67a]">APP</span>
        </span>
        <span className="text-[9px] tracking-widest text-slate-400 font-mono mt-1 font-semibold">
          INNOVACIÓN Y TECNOLOGÍA
        </span>
      </div>
    </div>
  );
};
