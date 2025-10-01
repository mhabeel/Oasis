import * as React from "react";

type MoroccanCardProps = {
  children: React.ReactNode;
  className?: string;          // e.g. "shadow-lg"
  bg?: string;                 // fill color inside the shape
  padding?: number | string;   // inner space (px or CSS size)
  minW?: number | string;      // ensure it's visible even with short text
  minH?: number | string;
};

export default function MoroccanCard({
  children,
  className = "",
  bg = "var(--brand-b)",
  borderColor = "var(--majestic-gold)",     // gold default
  borderWidth = 6,             // border thickness
  padding = 20,
  minW = 220,
  minH = 140,
}: MoroccanCardProps & { borderColor?: string; borderWidth?: number }) {
  const svgRaw = `
    <svg viewBox='0 0 400 560' xmlns='http://www.w3.org/2000/svg'>
      <path d='M20 540 L20 250 C20 170 95 145 160 120 C188 110 212 110 240 120 C305 145 380 170 380 250 L380 540 Z' fill='black'/>
    </svg>
  `;
  const maskUrl = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgRaw)}")`;

  const norm = (v: number | string) => (typeof v === "number" ? `${v}px` : v);

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ minWidth: norm(minW), minHeight: norm(minH) }}
    >
      {/* Border layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: borderColor,
          WebkitMaskImage: maskUrl,
          maskImage: maskUrl,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />

      {/* Inner fill layer (inset for border thickness) */}
      <div
        className="inline-flex items-center justify-center relative"
        style={{
          background: bg,
          padding,
          minWidth: norm(minW),
          minHeight: norm(minH),
          WebkitMaskImage: maskUrl,
          maskImage: maskUrl,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",

          // shrink to create border
          transform: `scale(${1 - borderWidth / 200})`,
          transformOrigin: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

