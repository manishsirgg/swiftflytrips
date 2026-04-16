import { PackageCard } from "@/components/sections/package-card";
import { packages } from "@/lib/data/site";

export default function HolidaysPage() {
  return (
    <div className="section-container space-y-6">
      <h1 className="text-3xl font-bold text-brand.blue">Holiday Packages</h1>
      <div className="grid gap-2 rounded-xl border bg-brand.light p-3 text-sm md:grid-cols-4">
        <span>Destination</span><span>Budget</span><span>Duration</span><span>Type</span>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {packages.map((pack) => <PackageCard key={pack.slug} pack={pack} />)}
      </div>
    </div>
  );
}
