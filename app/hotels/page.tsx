import { TravelpayoutsWidget } from "@/components/widgets/travelpayouts-widget";

export default function HotelsPage() {
  return (
    <div className="section-container space-y-8">
      <h1 className="text-3xl font-bold text-brand.blue">Hotels</h1>
      <TravelpayoutsWidget title="Hotel Search" src={process.env.NEXT_PUBLIC_TRAVELPAYOUTS_HOTELS_WIDGET_URL || "https://www.travelpayouts.com/widgets/hotels"} />
      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border p-4">Luxury</div><div className="rounded-xl border p-4">Honeymoon</div><div className="rounded-xl border p-4">Family</div><div className="rounded-xl border p-4">Budget</div>
      </section>
    </div>
  );
}
