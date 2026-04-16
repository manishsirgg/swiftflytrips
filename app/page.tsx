import { HeroBookingWidget } from "@/components/sections/hero-booking-widget";
import { NewsletterSection } from "@/components/sections/newsletter";
import { PackageCard } from "@/components/sections/package-card";
import { WhatsAppFloat } from "@/components/sections/whatsapp-float";
import { packages } from "@/lib/data/site";
import { ShieldCheck, BadgePercent, Headset } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-brand.light to-white">
      <section className="section-container pt-10">
        <h1 className="mb-4 text-4xl font-extrabold text-brand.blue">Book Flights, Hotels & Holidays in Minutes</h1>
        <p className="mb-6 max-w-3xl text-slate-600">Conversion-focused OTA UX inspired by MakeMyTrip and Booking.com with trust-first experience.</p>
        <HeroBookingWidget />
      </section>

      <section className="section-container">
        <h2 className="mb-6 text-2xl font-bold">Best-Selling Holiday Packages</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pack) => <PackageCard key={pack.slug} pack={pack} />)}
        </div>
      </section>

      <section className="section-container grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-5 shadow-soft"><ShieldCheck className="mb-2 text-brand.blue" />Why Book With Us</div>
        <div className="rounded-2xl border bg-white p-5 shadow-soft"><BadgePercent className="mb-2 text-brand.blue" />Trusted by 10k+ travelers</div>
        <div className="rounded-2xl border bg-white p-5 shadow-soft"><Headset className="mb-2 text-brand.blue" />24/7 Support & WhatsApp Assistance</div>
      </section>

      <section className="section-container">
        <NewsletterSection />
      </section>
      <WhatsAppFloat message="Hello Swift Fly Trips, I am interested in your travel deals. Please share details." />
    </div>
  );
}
