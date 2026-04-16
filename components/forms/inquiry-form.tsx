"use client";

import { useForm } from "react-hook-form";

type InquiryFormValues = {
  name: string;
  email: string;
  destination: string;
  message: string;
};

export function InquiryForm({ subject = "General Inquiry" }: { subject?: string }) {
  const { register, handleSubmit, reset } = useForm<InquiryFormValues>();

  const onSubmit = async (values: InquiryFormValues) => {
    await fetch("/api/inquiries", {
      method: "POST",
      body: JSON.stringify({ ...values, subject })
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 rounded-2xl border bg-white p-5 shadow-soft">
      <input {...register("name", { required: true })} placeholder="Name" className="w-full rounded-lg border p-3" />
      <input {...register("email", { required: true })} placeholder="Email" type="email" className="w-full rounded-lg border p-3" />
      <input {...register("destination")} placeholder="Destination" className="w-full rounded-lg border p-3" />
      <textarea {...register("message")} placeholder="Message" className="w-full rounded-lg border p-3" rows={4} />
      <button className="w-full rounded-lg bg-brand.accent py-3 font-semibold text-white">Submit Inquiry</button>
    </form>
  );
}
