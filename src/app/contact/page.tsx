"use client";

import { useState } from "react";

export default function ContactPage() {
  const email = "helin@example.com";
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <main className="space-y-4">
      <h1 className="text-3xl font-bold">İletişim</h1>
      <p className="text-zinc-700">Bana aşağıdaki kanallardan ulaşabilirsin:</p>

      <div className="rounded-2xl border border-zinc-200 p-6 space-y-4">
        {/* Email satırı */}
        <div className="flex items-center gap-3">
          <span className="text-zinc-500 w-20">Email</span>

          <a
            className="underline underline-offset-4"
            href={`mailto:${email}`}
          >
            {email}
          </a>

          <button
  type="button"
  onClick={copyEmail}
  aria-label="E-postayı kopyala"
  title={copied ? "Kopyalandı" : "Kopyala"}
  className="ml-2 inline-flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition"
>
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={copied ? "opacity-60" : ""}
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
</button>


          {/* İstersen kopyalandı feedback'i küçük nokta ile */}
          {copied && (
            <span className="text-sm text-zinc-500">Kopyalandı</span>
          )}
        </div>

        <div>
          <span className="text-zinc-500 w-20 inline-block">GitHub</span>{" "}
          <a
            className="underline underline-offset-4"
            href="https://github.com/USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            github.com/USERNAME
          </a>
        </div>

        <div>
          <span className="text-zinc-500 w-20 inline-block">LinkedIn</span>{" "}
          <a
            className="underline underline-offset-4"
            href="https://linkedin.com/in/USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/USERNAME
          </a>
        </div>
      </div>
    </main>
  );
}
