"use client";
import { useRef } from "react";
import { CATEGORIES } from "@/lib/menuData";
import SectionHeading from "./SectionHeading";
import ArchSection from "./ArchSection";

export default function Menu() {
  // Type the ref correctly
  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollTo = (id: string) => {
    const el = sectionsRef.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="menu" className="border-t bg-white">
      <ArchSection
      className="shadow-lg"
        bg="hsl(var(--brand))"                    // or `hsl(var(--background))`
        stroke="rgba(0,0,0,.15)"     // border color
        strokeWidth={2}              // border thickness
        padding={24}                 // inner breathing room
      >
      <div className="container py-16">
        <SectionHeading>Menu</SectionHeading>

        <div className="mt-6 overflow-x-auto">
          <div className="inline-flex gap-2 whitespace-nowrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-zinc-50 active:scale-95"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-14">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              // IMPORTANT: use a block body so the callback returns void
              ref={(el) => {
                sectionsRef.current[cat.id] = el;
              }}
            >
              <SectionHeading id={cat.id}>{cat.label}</SectionHeading>
              <ul className="mt-4 divide-y rounded-2xl border overflow-hidden">
                {cat.items.map((item) => (
                  <li key={item.id} className="grid grid-cols-[1fr_auto] gap-2 p-4 hover:bg-zinc-50">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      {item.description && <p className="text-sm text-zinc-600">{item.description}</p>}
                    </div>
                    <div className="justify-self-end font-semibold">€{item.price.toFixed(2)}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      </ArchSection>
    </section>
  );
}
