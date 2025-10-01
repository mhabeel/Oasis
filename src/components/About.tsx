import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-dark-gold-2 to-white shadow-lg mb-1"
    >
      <div className="container py-16 flex flex-col md:flex-row items-center gap-6">
        {/* Left side: text content */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold font-heading tracking-tight text-brand-b">
            OASIS & DÉLICES
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Experience authentic Mediterranean flavors: fresh salads,
            slow-cooked tajin, and crafted drinks.
          </p>
          <a
            href="#menu"
            className="inline-block mt-6 rounded-xl bg-majestic-gold px-6 py-3 text-brand-b font-medium shadow hover:bg-dark-gold-2 hover:text-majestic-gold"
          >
            View Menu
          </a>
        </div>

        {/* Right side: logo */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/logo.svg"   // put your logo inside /public/images
            alt="Oasis Logo"
            width={300}
            height={300}
            className="max-h-70 w-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
