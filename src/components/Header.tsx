"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = "block px-4 py-2 rounded-lg hover:bg-zinc-100";

  return (
    <header className={`sticky top-0 z-50 border-b bg-white/80 backdrop-blur ${scrolled ? "shadow-sm" : ""}`}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-xl">Oasis</Link>
        <nav className="hidden md:flex items-center gap-2">
          <a href="#about" className={`${navLink} list`}>About</a>
          <a href="#menu" className={`${navLink} list`}>Menu</a>
          <a href="#contact" className={`${navLink} list`}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
