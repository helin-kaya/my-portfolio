import { resume } from "@/src/data/resume";


export default function AboutPage() {
  return (
    <main className="space-y-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="max-w-2xl text-lg text-zinc-200 leading-relaxed">{resume.objective}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <SkillCard title="Languages" items={resume.skills.languages} />
          <SkillCard title="Frameworks" items={resume.skills.frameworks} />
          <SkillCard title="Web" items={resume.skills.web} />
          <SkillCard title="Databases" items={resume.skills.databases} />
          <SkillCard title="Tools" items={resume.skills.tools} />
          <SkillCard title="Methodologies" items={resume.skills.methodologies} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="space-y-4">
          {resume.experience.map((e) => (
            <article key={`${e.company}-${e.period}`} className="rounded-2xl border border-white/10 bg-black/20 p-6 hover:bg-black/30 transition">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="font-semibold">{e.company} — {e.location}</div>
                <div className="text-sm text-zinc-300">{e.period}</div>
              </div>
              <ul className="mt-4 list-disc space-y-1 pl-6 text-zinc-200">
                {e.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="rounded-2xl border border-zinc-200 p-6 space-y-2">
            {resume.education.map((ed) => (
              <div key={ed.school}>
                <div className="font-semibold">{ed.school}</div>
                {ed.detail && <div className="text-sm text-zinc-300">{ed.detail}</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Certifications</h2>
          <div className="rounded-2xl border border-zinc-200 p-6">
            <ul className="mt-4 list-disc space-y-1 pl-6 text-zinc-200">
              {resume.certifications.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-6">
      <div className="text-sm text-zinc-300">{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
