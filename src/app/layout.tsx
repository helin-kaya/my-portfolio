import Navbar from "../components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helin Kaya | Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col">
        <Navbar />

        {/* Sayfanın gövdesi büyüyebilsin diye flex-1 */}
        <main className="flex-1">
          <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>
        </main>

        <footer className="border-t border-zinc-200">
          <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-zinc-500">
            © {new Date().getFullYear()} Helin Kaya
          </div>
        </footer>
      </body>
    </html>
  );
}
