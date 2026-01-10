import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Merhaba, ben Helin 👋
        </h1>
        <p className="text-lg text-zinc-700">
          Finans sektöründe yazılım geliştiriyorum. .NET, SQL ve React/TypeScript
          ile backend & frontend projeleri geliştiriyorum.
        </p>
        <div className="flex flex-wrap gap-2">
  {["Antalya", "Software Developer", ".NET", "React/TypeScript"].map((t) => (
    <span key={t} className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700">
      {t}
    </span>
  ))}
</div>


        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="no-underline rounded-xl border border-zinc-300 px-4 py-2 hover:bg-zinc-50"
          >
            Projelerimi Gör
          </Link>
          <Link
            href="/contact"
            className="no-underline rounded-xl bg-zinc-900 px-4 py-2 text-white hover:opacity-90"
          >
            İletişime Geç
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 p-5 hover:shadow-sm transition-shadow">
          <div className="text-sm text-zinc-500">Odak</div>
          <div className="mt-1 font-semibold">Microservice & API</div>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-5 hover:shadow-sm transition-shadow">
          <div className="text-sm text-zinc-500">Tech</div>
          <div className="mt-1 font-semibold">.NET • SQL • React</div>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-5 hover:shadow-sm transition-shadow">
          <div className="text-sm text-zinc-500">İlgi</div>
          <div className="mt-1 font-semibold">Performans • Clean Code</div>
        </div>
      </section>
      <section className="space-y-4">
  <h2 className="text-2xl font-bold">Skills</h2>

  <div className="grid gap-4 sm:grid-cols-2">
    <div className="rounded-2xl border border-zinc-200 p-5 hover:shadow-sm transition-shadow">
      <div className="text-sm text-zinc-500">Backend</div>
      <div className="mt-2 font-semibold">C# • .NET • REST • SQL</div>
      <p className="mt-2 text-zinc-700">
        API geliştirme, performans iyileştirme, loglama ve hata ayıklama.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-200 p-5 hover:shadow-sm transition-shadow">
      <div className="text-sm text-zinc-500">Frontend</div>
      <div className="mt-2 font-semibold">React • TypeScript</div>
      <p className="mt-2 text-zinc-700">
        Formlar, state yönetimi, component tasarımı ve kullanıcı deneyimi.
      </p>
    </div>
  </div>
</section>

    </main>
  );
}
