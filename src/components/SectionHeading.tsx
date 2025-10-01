export default function SectionHeading({ id, children, color }: { id?: string; children: React.ReactNode; color?: string }) {
  return <h2 id={id} style={{color}} className="text-3xl tracking-tight scroll-mt-24 text-brand">{children}</h2>;
}
