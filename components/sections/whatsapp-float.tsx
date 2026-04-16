import Link from "next/link";

export function WhatsAppFloat({ message }: { message: string }) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  return <Link href={href} className="fixed bottom-6 right-6 rounded-full bg-green-500 px-4 py-3 font-semibold text-white shadow-lg">WhatsApp</Link>;
}
