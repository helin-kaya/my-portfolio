import Link from "next/link";
import { resume } from "@/src/data/resume";

export default function HomePage() {
  const featuredExperience = resume.experience.slice(0, 2);

  return (
    <main className="space-y-10">
      <section className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for opportunities
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          {resume.name} <span className="text-zinc-300">— {resume.title}</span>
        </h1>

        <p className="text-sm text-zinc-300">{resume.location}</p>

        <p className="max-w-2xl text-lg text-zinc-200 leading-relaxed">
          {resume.objective}
        </p>

        {/* <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:opacity-90"
          >
            Contact
          </Link>

          <Link
            href="/projects"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            View Projects
          </Link>
        </div> */}

        <div className="flex flex-wrap gap-2 pt-1">
          {[".NET", "Microservices", "REST APIs", "EF Core", "React"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-white">Experience</h2>
          <Link href="/about" className="text-sm text-zinc-200 hover:text-white">
            More about me →
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

              <div className="mt-5 text-sm text-zinc-200 hover:text-white transition">
                Read more in About →
              </div>
            </article>
          ))}
        </div>

        <div className="pt-2">
          <Link href="/projects" className="text-sm text-zinc-200 hover:text-white">
            View Projects →
          </Link>
        </div>
      </section>
    </main>
  );
}
