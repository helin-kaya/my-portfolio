import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";

export const metadata: Metadata = {
  title: "Helin Kaya | Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {/* Background blobs */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-3xl" />
          <div className="absolute top-40 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-400/25 blur-3xl" />
          <div className="absolute bottom-[-220px] right-[-220px] h-[560px] w-[560px] rounded-full bg-emerald-400/20 blur-3xl" />
        </div>

        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1">
  <div className="mx-auto max-w-5xl px-6 py-10">
    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      {/* readability overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-black/45" />
      <div className="relative text-zinc-100">{children}</div>
    </div>
  </div>
</main>


          <footer className="border-t border-white/10">
            <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-zinc-400">
              © {new Date().getFullYear()} Helin Kaya
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
