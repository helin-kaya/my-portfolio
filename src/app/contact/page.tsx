"use client";

import { useState } from "react";
import { resume } from "@/src/data/resume";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(resume.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <main className="space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>

      <div className="rounded-2xl border border-zinc-200 p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-zinc-300 w-24">Email</span>
          <a className="underline underline-offset-4" href={`mailto:${resume.email}`}>
            {resume.email}
          </a>

          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email"
            title={copied ? "Copied" : "Copy"}
            className="ml-1 p-2 -m-2 inline-flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition"
          >
            {/* copy icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
        </div>

        <div>
          <span className="text-zinc-300 w-24 inline-block">LinkedIn</span>
          <a className="underline underline-offset-4" href={resume.linkedin} target="_blank" rel="noreferrer">
            {resume.linkedin.replace("https://", "")}
          </a>
        </div>

        <div>
          <span className="text-zinc-300 w-24 inline-block">GitHub</span>
          <a className="underline underline-offset-4" href={resume.github} target="_blank" rel="noreferrer">
            {resume.github.replace("https://", "")}
          </a>
        </div>
      </div>
    </main>
  );
}
