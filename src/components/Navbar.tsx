"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/projects", label: "Projeler" },
  { href: "/about", label: "Hakkımda" },
  { href: "/contact", label: "İletişim" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="no-underline">
          <span className="text-lg font-semibold">Helin Kaya</span>
        </Link>

        <nav className="flex gap-5 text-sm">
          {nav.map((i) => {
            const isActive =
              pathname === i.href || (i.href !== "/" && pathname?.startsWith(i.href));

            return (
              <Link
                key={i.href}
                href={i.href}
                className={[
  "px-1 py-1 transition-colors",
  "text-zinc-700 hover:text-zinc-900",
  isActive ? "text-zinc-900 font-semibold border-b-2 border-zinc-900" : "border-b-2 border-transparent",
].join(" ")}
              >
                {i.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
