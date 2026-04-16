import Image from "next/image";
import Link from "next/link";

export type PackageCardData = {
  slug: string;
  title: string;
  duration: string;
  price: number;
  rating: number;
  ribbon: string;
  image: string;
};

export function PackageCard({ pack }: { pack: PackageCardData }) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-white shadow-soft">
      <div className="relative h-48 w-full">
        <Image src={pack.image} alt={pack.title} fill className="object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-brand.accent px-3 py-1 text-xs font-semibold text-white">{pack.ribbon}</span>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="text-lg font-semibold">{pack.title}</h3>
        <p className="text-sm text-slate-600">{pack.duration} • ⭐ {pack.rating}</p>
        <p className="text-sm text-slate-600">Starting From <span className="text-xl font-bold text-brand.blue">₹{pack.price.toLocaleString()}</span></p>
        <Link href={`/holidays/${pack.slug}`} className="inline-block rounded-lg bg-brand.accent px-4 py-2 text-sm font-semibold text-white">View Package</Link>
      </div>
    </article>
  );
}
