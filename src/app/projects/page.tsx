import { projects } from "@/src/data/project";


export default function ProjectsPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Projeler</h1>
      <p className="text-zinc-700">
        Kısa özet + kullandığım teknolojiler. İstersen burada case study formatına da çevirebiliriz.
      </p>

      <div className="grid gap-4">
        {projects.map((p) => (
          <article key={p.title} className="rounded-2xl border border-zinc-200 p-6">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-zinc-700">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.link && (
              <div className="mt-4">
                <a href={p.link} target="_blank" rel="noreferrer">
                  Projeyi Aç →
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
