export default function Footer() {
  return (
    <footer className="border-4 border-majestic-gold bg-dark-gold">
      <div className="container py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">Oasis</h3>
          <p className="mt-2 text-sm text-zinc-600">Mediterranean kitchen. Fresh, slow, and vibrant.</p>
        </div>
        <div>
          <h4 className="font-medium">Follow us</h4>
          <ul className="mt-2 space-y-1 text-zinc-700">
            <li><a className="hover:underline" href="https://instagram.com/your-oasis" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a className="hover:underline" href="https://tiktok.com/@your-oasis" target="_blank" rel="noreferrer">TikTok</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Find us</h4>
          <p className="mt-2 text-sm text-zinc-700">12 Rue Example, Luxembourg City</p>
          <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border">
            <iframe
              title="Oasis Location"
              className="h-full w-full"
              src="https://www.google.com/maps?q=Luxembourg%20City&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-majestic-gold">
        <div className="container py-4 text-sm text-zinc-600">© {new Date().getFullYear()} Oasis. All rights reserved.</div>
      </div>
    </footer>
  );
}
