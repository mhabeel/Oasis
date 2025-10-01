"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = "block px-4 py-2 rounded-lg hover:bg-zinc-100";

  return (
    <header className={`sticky top-0 z-50 border-b-4 border-majestic-gold bg-majestic-gold/30 backdrop-blur ${scrolled ? "shadow-sm" : ""}`}>
      <div className="flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center h-full">
        <Image
            src="/images/logo.svg"     // path inside /public
            alt="Oasis Logo"
            width={200}         // adjust size
            height={80}
            priority            // ensures it's loaded early
             className="max-h-full w-auto object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <a href="#about" className={`${navLink} list`}>About</a>
          <a href="#menu" className={`${navLink} list`}>Menu</a>
          <a href="#contact" className={`${navLink} list`}>Contact</a>
          <a href="#shop" className={`${navLink} list`}>Shop</a>
        </nav>
      </div>
    </header>
  );
}
