import { TravelpayoutsWidget } from "@/components/widgets/travelpayouts-widget";

export default function FlightsPage() {
  return (
    <div className="section-container space-y-8">
      <h1 className="text-3xl font-bold text-brand.blue">Flights</h1>
      <TravelpayoutsWidget title="Flight Search" src={process.env.NEXT_PUBLIC_TRAVELPAYOUTS_FLIGHTS_WIDGET_URL || "https://www.travelpayouts.com/widgets/flight"} />
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-4">Popular Routes</div><div className="rounded-xl border p-4">Airline Offers</div><div className="rounded-xl border p-4">Fare Deals</div>
      </section>
    </div>
  );
}
