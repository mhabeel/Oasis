"use client";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ShopTeaser from "@/components/ShopTeaser";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Oasis",
  description: "Authentic Mediterranean cuisine in Luxembourg.",
  telephone: "+352 123 456 789",
  address: { "@type": "PostalAddress", streetAddress: "12 Rue Example", addressLocality: "Luxembourg City", addressCountry: "LU" },
  servesCuisine: ["Mediterranean"],
  acceptsReservations: true,
  sameAs: ["https://instagram.com/your-oasis", "https://tiktok.com/@your-oasis"],
  menu: "https://www.example.com/#menu" // TODO change domain
};

export default function Page() {
  return (
    <>
      {/* Structured data for rich results */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <About />
      <ShopTeaser />
      <Menu />

      <Contact />

      <Footer />
    </>
  );
}
