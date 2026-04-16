const blogPosts = [
  { title: "Best Time to Visit Bali", excerpt: "Seasonal planning guide for honeymooners." },
  { title: "Dubai Budget vs Luxury", excerpt: "Pick the package style that matches your travel goals." },
  { title: "Thailand Travel Tips", excerpt: "How to save money while maximizing your experience." }
];

export default function BlogPage() {
  return (
    <div className="section-container">
      <h1 className="mb-6 text-3xl font-bold text-brand.blue">Travel Blogs & Guides</h1>
      <div className="grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.title} className="rounded-2xl border bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
