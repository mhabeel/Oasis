"use client";
import { useRef } from "react";
import { CATEGORIES } from "@/lib/menuData";
import SectionHeading from "./SectionHeading";
import ArchSection from "./ArchSection";
import MoroccanCard from "./MorrocanCard";
import { Divide } from "lucide-react";

export default function Menu() {
  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollTo = (id: string) => {
    const el = sectionsRef.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="menu"
      className="
        relative border-t
        bg-[url('/images/moroccan-art3.png')] bg-cover bg-center border-white
      "
    >
      {/* background fade */}
      <div className="absolute inset-0 bg-white/70" />

      {/* content above overlay */}
      <div className="relative z-10">
        <ArchSection
          className="shadow-lg"
          bg="var(--dark-gold-2)"
          stroke="#D4AF37"
          strokeWidth={5}
          padding={24}
        >
          <div className="container py-16">
              {/* main section heading centered */}
            <div className="text-center">
              <MoroccanCard className="">
               <SectionHeading color="hsl(var(--gold))">Menu</SectionHeading>
              </MoroccanCard>
              
            </div>
            

            {/* category pills centered */}
            <div className="mt-6">
              <div className="flex flex-wrap justify-center gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollTo(cat.id)}
                    className="rounded-full text-majestic-gold border-2 border-majestic-gold bg-brand-b px-4 py-2 hover:bg-dark-gold-2 hover:text-brand-b active:scale-95"
                  >
                    <span className="font-heading font-semibold"> {cat.label}</span>
                 {/* className="rounded-full text-brand-b border-2 border-majestic-gold px-4 py-2 hover:bg-brand-b hover:text-majestic-gold active:scale-95"    */}
                  </button>
                ))}
              </div>
            </div>

            {/* category sections */}
            <div className="mt-10 space-y-14">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  ref={(el) => {
                    sectionsRef.current[cat.id] = el;
                  }}
                >
                  {/* category heading centered */}
                  <div className="text-center">
                    <SectionHeading color="var(--brand-b)" id={cat.id}>{cat.label}</SectionHeading>
                  </div>

                  {/* category list centered */}
                  <ul className="mt-4 divide-y rounded-2xl border overflow-hidden max-w-2xl mx-auto">
                    {cat.items.map((item) => (
                      <li
                        key={item.id}
                        className="grid grid-cols-[1fr_auto] gap-2 p-4 hover:bg-zinc-50"
                      >
                        <div className="text-left">
                          <p className="font-medium">{item.name}</p>
                          {item.description && (
                            <p className="text-sm text-zinc-600">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <div className="justify-self-end font-semibold">
                          €{item.price.toFixed(2)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </ArchSection>
      </div>
    </section>
  );
}
