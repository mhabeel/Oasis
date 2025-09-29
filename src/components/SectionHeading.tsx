export default function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-3xl font-semibold tracking-tight scroll-mt-24 text-brand">{children}</h2>;
}
