export default function ContactPage() {
  return (
    <main className="space-y-4">
      <h1 className="text-3xl font-bold">İletişim</h1>
      <p className="text-zinc-700">
        Bana aşağıdaki kanallardan ulaşabilirsin:
      </p>

      <div className="space-y-2">
        <div>
          <span className="text-zinc-500">Email:</span>{" "}
          <a href="mailto:helin@example.com">helin@example.com</a>
        </div>
        <div>
          <span className="text-zinc-500">GitHub:</span>{" "}
          <a href="https://github.com/USERNAME" target="_blank" rel="noreferrer">
            github.com/USERNAME
          </a>
        </div>
        <div>
          <span className="text-zinc-500">LinkedIn:</span>{" "}
          <a href="https://linkedin.com/in/USERNAME" target="_blank" rel="noreferrer">
            linkedin.com/in/USERNAME
          </a>
        </div>
      </div>

      <p className="text-sm text-zinc-500">
        (Email ve kullanıcı adlarını kendi bilgilerinle değiştir.)
      </p>
    </main>
  );
}
