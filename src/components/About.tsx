export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-amber-50 to-white border-b"
    >
      <div className="container py-16 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Oasis
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Experience authentic Mediterranean flavors: fresh salads,
            slow-cooked tajin, and crafted drinks.
          </p>
          <a
            href="#menu"
            className="inline-block mt-6 rounded-xl bg-amber-600 px-6 py-3 text-white font-medium shadow hover:bg-amber-700"
          >
            View Menu
          </a>
        </div>
        <div className="justify-self-center">
          <div className="size-48 md:size-56 rounded-full bg-amber-200/50 grid place-items-center">
            <span className="text-2xl">🥗 🍲 🥤</span>
          </div>
        </div>
      </div>
    </section>
  );
}
