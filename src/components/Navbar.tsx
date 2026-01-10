"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-white/10">
  <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
    <Link href="/" className="no-underline">
      <span className="text-lg font-semibold text-white">Helin Kaya</span>
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
              "px-1 py-1 transition-colors no-underline",
              "text-zinc-300 hover:text-white",
              isActive
                ? "text-white font-semibold border-b-2 border-white"
                : "border-b-2 border-transparent",
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
