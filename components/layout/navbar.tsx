import Link from "next/link";
import { navItems } from "@/lib/data/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-brand.blue">Swift Fly Trips</Link>
        <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
          ))}
          <li><Link href="/my-trips">My Trips</Link></li>
          <li><Link href="/dashboard">B2B Partner Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}
