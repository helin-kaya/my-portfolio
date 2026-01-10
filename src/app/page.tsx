import Link from "next/link";
import { resume } from "@/src/data/resume";

export default function HomePage() {
  const featuredExperience = resume.experience.slice(0, 2); // Intertech + Bootcamp

  return (
    <main className="space-y-10">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          {resume.name} <span className="text-zinc-500">/ {resume.title}</span>
        </h1>

        <p className="text-sm text-zinc-300">{resume.location}</p>

        <p className="max-w-2xl text-lg text-zinc-200 leading-relaxed">
          {resume.objective}
        </p>

        {/* <div className="flex flex-wrap gap-3">
          <Link
            href="/about"
            className="no-underline rounded-xl bg-zinc-900 px-4 py-2 text-white hover:opacity-90"
          >
            View Resume
          </Link>

          <Link
            href="/contact"
            className="no-underline rounded-xl border border-zinc-300 px-4 py-2 hover:bg-zinc-50"
          >
            Contact
          </Link>
        </div> */}

        <div className="flex flex-wrap gap-2 pt-1">
          {["Backend", ".NET", "Microservices", "REST APIs", "React"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Experience (instead of Projects) */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-white">Experience</h2>
          <Link
            href="/about"
            className="text-sm text-zinc-200 hover:text-white"
          >
            See full resume →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredExperience.map((e) => (
            <article
              key={`${e.company}-${e.period}`}
              className="rounded-2xl border border-white/10 bg-black/20 p-6 hover:bg-black/30 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold text-white">{e.company}</div>
                  <div className="text-sm text-zinc-300">{e.location}</div>
                </div>
                <div className="text-sm text-zinc-300">{e.period}</div>
              </div>

              <ul className="mt-4 list-disc space-y-1 pl-6 text-zinc-200">
                {e.bullets.slice(0, 3).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Optional: keep projects link but not featured here */}
      <section className="pt-2">
        <Link
          href="/projects"
          className="text-sm text-zinc-200 hover:text-white"
        >
          View Projects →
        </Link>
      </section>
    </main>
  );
}
