"use client";
import { PropsWithChildren } from "react";

/**
 * ArchPanel
 * - Clips children to a Moroccan/Moorish arch
 * - Responsive: scales to container width/height
 * - Props:
 *    bg     — CSS color (defaults to white)
 *    stroke — CSS color for outline (set null/undefined for none)
 *    strokeWidth — outline width in px (default 2)
 *    className — extra classes (padding, shadows, etc.)
 */
export default function ArchPanel({
  children,
  bg = "white",
  stroke = "rgba(0,0,0,.12)",
  strokeWidth = 2,
  className = "",
}: PropsWithChildren<{
  bg?: string;
  stroke?: string | null;
  strokeWidth?: number;
  className?: string;
}>) {
  // ViewBox is a tall card; the path is a reusable Moroccan arch.
  // Feel free to tweak the path for a different vibe (pointier/rounder).
  const vbW = 400;
  const vbH = 560;

  // A smooth “Moorish” arch path:
  // - vertical sides
  // - ogee/horseshoe curve at the top
  const archPath = `
    M 20 ${vbH - 20}
    L 20 250
    C 20 170 95 145 160 120
    C 188 110 212 110 240 120
    C 305 145 380 170 380 250
    L 380 ${vbH - 20}
    Z
  `;

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        preserveAspectRatio="none"
        className="block w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="arch-clip" clipPathUnits="userSpaceOnUse">
            <path d={archPath} />
          </clipPath>
        </defs>

        {/* Background fill inside the arch */}
        <g clipPath="url(#arch-clip)">
          <rect x="0" y="0" width={vbW} height={vbH} fill={bg} />
          {/* Put HTML content into the clipped region */}
          <foreignObject x="0" y="0" width={vbW} height={vbH}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {children}
            </div>
          </foreignObject>
        </g>

        {/* Optional outline */}
        {stroke && (
          <path
            d={archPath}
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>
    </div>
  );
}
