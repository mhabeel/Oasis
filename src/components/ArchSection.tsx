"use client";
import { PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";

type Props = {
  bg?: string;
  stroke?: string;
  strokeWidth?: number;
  padding?: number;   // inner padding for the whole section (px)
  className?: string; // width, shadows, margins, etc.
};

/**
 * ArchSection
 * - Full-width Moroccan/Moorish arch frame that auto-sizes to children.
 * - Draws a visible border (SVG stroke) and clips the content to the same path.
 */
export default function ArchSection({
  children,
  bg = "white",
  stroke = "rgba(0,0,0,.14)",
  strokeWidth = 2,
  padding = 24,
  className = "",
}: PropsWithChildren<Props>) {
  const vbW = 1200;    // logical width (SVG viewBox). Stretches responsively.
  const topArch = 220; // height of the arched “dome” area in logical units
  const margin = 24;   // frame inset

  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentPxHeight, setContentPxHeight] = useState(400);

  useEffect(() => {
    const n = contentRef.current;
    if (!n) return;
    const ro = new ResizeObserver(([entry]) => {
      setContentPxHeight(Math.ceil(entry.contentRect.height));
    });
    ro.observe(n);
    return () => ro.disconnect();
  }, []);

  // ViewBox height matches content + paddings so nothing is cropped.
  const vbH = useMemo(() => {
    return topArch + padding + contentPxHeight + padding + margin + 8;
  }, [contentPxHeight, padding]);

  const archPath = useMemo(() => {
    const w = vbW;
    const h = vbH;
    const m = margin;
    const yTop = topArch;
    const xL = m;
    const xR = w - m;
    const mid = w / 2;

    // Tuned control points for a Moroccan ogee/horseshoe vibe.
    const c1x = xL + w * 0.18, c1y = yTop - 120;
    const c2x = mid - w * 0.16, c2y = yTop - 170;
    const c3x = mid + w * 0.16, c3y = yTop - 170;
    const c4x = xR - w * 0.18, c4y = yTop - 120;

    return [
      `M ${xL} ${h - m}`,
      `L ${xL} ${yTop}`,
      `C ${c1x} ${c1y}, ${c2x} ${c2y}, ${mid} ${yTop - 190}`,
      `C ${c3x} ${c3y}, ${c4x} ${c4y}, ${xR} ${yTop}`,
      `L ${xR} ${h - m}`,
      `Z`,
    ].join(" ");
  }, [vbH]);

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        preserveAspectRatio="none"
        className="block w-full h-auto"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="arch-clip" clipPathUnits="userSpaceOnUse">
            <path d={archPath} />
          </clipPath>
        </defs>

        {/* Background clipped to the door shape */}
        <g clipPath="url(#arch-clip)">
          <rect x="0" y="0" width={vbW} height={vbH} fill={bg} />
          <foreignObject x="0" y="0" width={vbW} height={vbH}>
            <div
              style={{
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                padding: `${padding}px`,
                display: "block",
              }}
            >
              <div ref={contentRef} style={{ display: "block" }}>
                {children}
              </div>
            </div>
          </foreignObject>
        </g>

        {/* Visible border */}
        <path
          d={archPath}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
