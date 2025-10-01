"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { PRODUCTS } from "@/lib/products";

const WHATSAPP_NUMBER = "+352123456789"; // TODO: set your full international number, no spaces

export default function ShopPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const defaultMsg = useMemo(
    () => `Hello Oasis, I would like to order:\n- ${PRODUCTS.map(p => p.name).join("\n- ")}\nThank you!`,
    []
  );

  const waHref = useMemo(() => {
    const text = message?.trim() ? message : defaultMsg;
    return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}?text=${encodeURIComponent(text)}`;
  }, [message, defaultMsg]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message: message || defaultMsg }),
    });
    if (res.ok) {
      alert("Thanks! We received your order request. We'll reply by email soon.");
      setName(""); setEmail(""); setMessage("");
    } else {
      alert("Sorry, something went wrong. Please try WhatsApp or email directly.");
    }
  }

  return (
    <main className="container py-12">
      <h1 className="text-4xl font-semibold tracking-tight">Shop</h1>
      <p className="mt-2 text-zinc-600">Choose your items and order via email or WhatsApp.</p>

      {/* Products grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <article key={p.id} className="rounded-2xl border overflow-hidden bg-white">
            <div className="relative aspect-[4/3]">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium">{p.name}</h2>
              {p.description && <p className="mt-1 text-sm text-zinc-600">{p.description}</p>}
              <div className="mt-3 font-semibold">€{p.price.toFixed(2)}</div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
                  `Hello Oasis, I'm interested in ${p.name} (ID: ${p.id}).`
                )}`}
                target="_blank" rel="noreferrer"
                className="mt-3 inline-block rounded-lg border px-3 py-2 text-sm hover:bg-zinc-50"
              >
                Order on WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Order form */}
      <section className="mt-12 rounded-2xl border bg-white p-6">
        <h2 className="text-2xl font-semibold">Order by Email</h2>
        <p className="mt-1 text-sm text-zinc-600">
          Send us your details; we reply with confirmation & pickup/delivery options.
        </p>

        <form onSubmit={onSubmit} className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              className="mt-1 w-full rounded-lg border px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows={5}
              className="mt-1 w-full rounded-lg border px-3 py-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={defaultMsg}
            />
          </div>
          <div className="sm:col-span-2 flex items-center gap-3">
            <button type="submit" className="rounded-xl bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark">
              Send order by email
            </button>
            <a href={waHref} target="_blank" rel="noreferrer" className="rounded-xl border px-6 py-3 font-medium hover:bg-zinc-50">
              Order via WhatsApp
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}
