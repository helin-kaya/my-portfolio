import { projects } from "@/src/data/project";


export default function ProjectsPage() {
  return (
    <main className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Projeler</h1>
        <p className="text-zinc-700">
          Seçili çalışmalarım. Her projede rolüm, katkılarım ve kullanılan teknolojiler yer alıyor.
        </p>
      </div>

      <div className="grid gap-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-zinc-200 p-6 hover:shadow-sm transition-shadow"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">{p.title}</h2>
                {p.subtitle && (
                  <p className="mt-1 text-sm text-zinc-500">{p.subtitle}</p>
                )}
              </div>

              <span className="w-fit rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700">
                {p.role}
              </span>
            </div>

            <p className="mt-4 text-zinc-700">{p.description}</p>

            <div className="mt-4">
              <div className="text-sm font-semibold text-zinc-900">
                Highlights
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-zinc-700">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {!!p.links?.length && (
              <div className="mt-5 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-50"
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
