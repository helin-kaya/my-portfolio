export default function AboutPage() {
  return (
    <main className="space-y-4">
      <h1 className="text-3xl font-bold">Hakkımda</h1>
      <p className="text-zinc-700">
        Bilgisayar mühendisiyim ve finans sektöründe yazılım geliştiriyorum.
        Backend tarafında ağırlıklı olarak .NET ve SQL, frontend tarafında React/TypeScript ile çalışıyorum.
      </p>

      <ul className="list-disc pl-6 text-zinc-700 space-y-2">
        <li>API tasarımı, performans ve loglama</li>
        <li>Clean code ve sürdürülebilir mimari</li>
        <li>Üretim ortamı sorun çözümü (debug/observability)</li>
      </ul>
    </main>
  );
}
