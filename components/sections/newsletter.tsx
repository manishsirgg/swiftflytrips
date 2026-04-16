export function NewsletterSection() {
  return (
    <section className="rounded-2xl bg-brand.blue p-8 text-white">
      <h3 className="text-2xl font-bold">Get weekly fare drops & holiday deals</h3>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input className="w-full rounded-lg p-3 text-slate-900" placeholder="Enter email" />
        <button className="rounded-lg bg-brand.accent px-6 py-3 font-semibold">Subscribe</button>
      </div>
    </section>
  );
}
