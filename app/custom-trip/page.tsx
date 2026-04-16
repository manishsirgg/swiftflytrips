import { InquiryForm } from "@/components/forms/inquiry-form";

export default function CustomTripPage() {
  return (
    <div className="section-container space-y-6">
      <h1 className="text-3xl font-bold text-brand.blue">Custom Trip Planner</h1>
      <InquiryForm subject="Custom Trip Request" />
    </div>
  );
}
