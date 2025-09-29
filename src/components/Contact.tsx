export default function () {
  return (
    <section id="contact" className="container py-16">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p className="mt-2 text-zinc-600">
        For reservations or takeaway orders, call us or message on
        Instagram/TikTok.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-medium">Phone</h3>
          <p className="text-zinc-700">+352 123 456 789</p>
        </div>
        <div>
          <h3 className="font-medium">Email</h3>
          <p className="text-zinc-700">hello@oasis.rest</p>
        </div>
        <div>
          <h3 className="font-medium">Address</h3>
          <p className="text-zinc-700">12 Rue Example, Luxembourg City</p>
        </div>
      </div>
    </section>
  );
}
