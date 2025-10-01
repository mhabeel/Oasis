"use client";
import { PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";

type Props = {
  bg?: string;
  stroke?: string;
  strokeWidth?: number;
  padding?: number;
  className?: string;
  strokeLinecap?: "butt" | "round" | "square";
  /** Use "logo" to mimic the door in your logo; "soft" keeps your previous curve */
  variant?: "logo" | "soft";
  /** Draw a second, wider stroke under the main one (nice “door frame” effect) */
  doubleBorder?: boolean;
  doubleBorderColor?: string;
  doubleBorderWidth?: number;
};

export default function ArchSection({
  children,
  bg = "black",
  stroke = "rgba(0,0,0,.14)",
  strokeWidth = 2,
  padding = 24,
  className = "",
  strokeLinecap = "square",
  variant = "logo",
  doubleBorder = false,
  doubleBorderColor = "rgba(0,0,0,.06)",
  doubleBorderWidth = 10,
}: PropsWithChildren<Props>) {
  const vbW = 1200;
  const topArch = 240; // crown height (a bit taller for the logo look)
  const margin = 24;

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

  const vbH = useMemo(() => {
    return topArch + padding + contentPxHeight + padding + margin + 8;
  }, [contentPxHeight, padding]);

  const archPath = useMemo(() => {
    const w = vbW;
    const h = vbH;
    const m = margin;

    const xL = m;
    const xR = w - m;
    const mid = w / 2;

    if (variant === "logo") {
      // ── “Keyhole / logo” profile ─────────────────────────────────────────────
      // Proportions tuned to look like the door in your logo:
      // - A slight inward "waist" before the crown
      // - A round horseshoe crown (not a sharp point)
      // You can tweak waistDepth/neckY/crownRise to match your logo even closer.
      const springY = topArch;         // where straight wall meets upper profile
      const neckY = springY - 40;      // the “waist” height
      const crownRise = 190;           // how high the top apex is above springY
      const waistDepth = w * 0.09;     // how much the walls pull inward at the neck

      // Side walls up to the spring line
      const leftWallTopX = xL;
      const rightWallTopX = xR;

      // Waist (inward)
      const leftNeckX = xL + waistDepth;
      const rightNeckX = xR - waistDepth;

      // Control points for a rounded horseshoe crown
      const c1x = leftNeckX + w * 0.12, c1y = neckY - 80;
      const c2x = mid - w * 0.12,       c2y = springY - (crownRise - 20);
      const apexX = mid,                apexY = springY - crownRise;
      const c3x = mid + w * 0.12,       c3y = springY - (crownRise - 20);
      const c4x = rightNeckX - w * 0.12,c4y = neckY - 80;

      return [
        // bottom-left to spring line
        `M ${xL} ${h - m}`,
        `L ${leftWallTopX} ${springY}`,
        // slight waist inward
        `Q ${xL + waistDepth * 0.25} ${springY - 10}, ${leftNeckX} ${neckY}`,
        // left → apex
        `C ${c1x} ${c1y}, ${c2x} ${c2y}, ${apexX} ${apexY}`,
        // apex → right
        `C ${c3x} ${c3y}, ${c4x} ${c4y}, ${rightNeckX} ${neckY}`,
        // waist back out to spring line
        `Q ${xR - waistDepth * 0.25} ${springY - 10}, ${rightWallTopX} ${springY}`,
        // down right wall to base
        `L ${xR} ${h - m}`,
        `Z`,
      ].join(" ");
    }

    // ── “Soft” (your previous gentle ogee) ─────────────────────────────────────
    const yTop = topArch;
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
  }, [vbH, variant]);

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

        {/* Fill clipped to the door */}
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

        {/* Optional wider under-stroke for a “frame” effect */}
        {doubleBorder && (
          <path
            d={archPath}
            fill="none"
            stroke={doubleBorderColor}
            strokeWidth={doubleBorderWidth}
            vectorEffect="non-scaling-stroke"
            strokeLinecap={strokeLinecap}
          />
        )}

        {/* Main outline */}
        <path
          d={archPath}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          strokeLinecap={strokeLinecap}
        />
      </svg>
    </div>
  );
}
