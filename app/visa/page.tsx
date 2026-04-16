import { InquiryForm } from "@/components/forms/inquiry-form";

export default function VisaPage() {
  return (
    <div className="section-container space-y-6">
      <h1 className="text-3xl font-bold text-brand.blue">Visa Services</h1>
      <InquiryForm subject="Visa Inquiry" />
    </div>
  );
}
