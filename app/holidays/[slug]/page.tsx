import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { TravelpayoutsWidget } from "@/components/widgets/travelpayouts-widget";
import { WhatsAppFloat } from "@/components/sections/whatsapp-float";
import { packages } from "@/lib/data/site";

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pack = packages.find((p) => p.slug === slug);
  if (!pack) return notFound();

  return (
    <div className="section-container space-y-8">
      <section className="rounded-2xl border bg-white p-6 shadow-soft">
        <h1 className="text-3xl font-bold text-brand.blue">{pack.title}</h1>
        <p className="mt-2">Starting from ₹{pack.price.toLocaleString()} • {pack.duration}</p>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <TravelpayoutsWidget title="Hotels for this package" src={process.env.NEXT_PUBLIC_TRAVELPAYOUTS_HOTELS_WIDGET_URL || "https://www.travelpayouts.com/widgets/hotels"} />
        <TravelpayoutsWidget title="Activities" src={process.env.NEXT_PUBLIC_TRAVELPAYOUTS_ACTIVITIES_WIDGET_URL || "https://www.travelpayouts.com/widgets/activities"} />
      </section>
      <InquiryForm subject={pack.title} />
      <WhatsAppFloat message={`Hello Swift Fly Trips, I am interested in the ${pack.title} package. Please share more details.`} />
    </div>
  );
}
