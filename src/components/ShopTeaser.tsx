export default function ShopTeaser() {
  return (
    <section id="shop" className="border-t bg-brand-bg/50">
      <div className="container py-16 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Oasis E-shop</h2>
          <p className="mt-3 text-zinc-700">
            Bring Oasis flavors home: premium olive oil, harissa, and tea packs. Order by email or WhatsApp.
          </p>
          <a
            href="/shop"
            className="mt-6 inline-block rounded-xl bg-brand px-6 py-3 text-majestic-gold font-medium hover:bg-brand-dark"
          >
            Order now
          </a>
        </div>
        <div className="rounded-2xl border p-6 bg-white shadow-sm">
          <p className="text-sm text-zinc-600">
            Questions? Use the form on the shop page or message us on WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
