export default function MoroccanCard({ children }: { children: React.ReactNode }) {
  // inline SVG path (same shape), packed into a data URL for mask-image
  const svg = encodeURIComponent(`
    <svg viewBox='0 0 400 560' xmlns='http://www.w3.org/2000/svg'>
      <path d='M20 540 L20 250 C20 170 95 145 160 120 C188 110 212 110 240 120 C305 145 380 170 380 250 L380 540 Z' fill='black'/>
    </svg>
  `);

  const maskUrl = `url("data:image/svg+xml,${svg}")`;

  return (
    <div
      className="bg-black border shadow-sm"
      style={{
        WebkitMaskImage: maskUrl,
        maskImage: maskUrl,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
    >
      <div className="p-6">{children}</div>
    </div>
  );
}
