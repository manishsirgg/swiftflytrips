import Link from "next/link";

export function TopStrip() {
  return (
    <div className="bg-brand.blue px-4 py-2 text-xs text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <p>Limited Time Deals • Support: +91 99999 99999</p>
        <div className="flex gap-4">
          <Link href="https://wa.me/919999999999">WhatsApp</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
}
