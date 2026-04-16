import { InquiryForm } from "@/components/forms/inquiry-form";

export default function ContactPage() {
  return (
    <div className="section-container space-y-6">
      <h1 className="text-3xl font-bold text-brand.blue">Contact Us</h1>
      <InquiryForm subject="Contact Request" />
      <div className="rounded-2xl border p-5">Google Maps Placeholder</div>
    </div>
  );
}
