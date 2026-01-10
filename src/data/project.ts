export type Project = {
  title: string;
  subtitle?: string;      // kısa açıklama (1 satır)
  description: string;    // 2-3 cümle
  role: string;           // Backend / Fullstack vs
  highlights: string[];   // 3 madde “ne yaptın”
  tech: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "ScoreCard / Risk Modülü",
    subtitle: "Skorlama & iş kuralları servisleri",
    description:
      "Finans alanında skor hesaplama süreçleri için servis geliştirmeleri ve iyileştirmeleri yaptım.",
    role: "Backend",
    highlights: [
      "Performans iyileştirmeleri ve query optimizasyonları",
      "Loglama/izlenebilirlik iyileştirmeleri",
      "Bakımı kolaylaştıran refactor ve temiz kod düzenlemeleri",
    ],
    tech: ["C#", ".NET", "SQL", "Microservice"],
    links: [
      // { label: "Demo", href: "https://..." },
    ],
  },
  {
    title: "EnvironmentalRiskApi",
    subtitle: "Entegrasyon odaklı REST API",
    description:
      "Entegrasyon süreçleri için API geliştirmeleri ve production sorunlarına yönelik iyileştirmeler yaptım.",
    role: "Backend",
    highlights: [
      "Hata ayıklama ve log analiziyle sorun giderme",
      "Cache/performans iyileştirmeleri",
      "API contract ve validasyon düzenlemeleri",
    ],
    tech: ["C#", ".NET", "REST", "Observability"],
  },
  {
    title: "Bu Portföy Sitesi",
    subtitle: "Kişisel portföy (Next.js + TS)",
    description:
      "Next.js + TypeScript + Tailwind ile hızlı, sade ve responsive bir portföy sitesi geliştirdim.",
    role: "Frontend",
    highlights: [
      "App Router ile sayfa yapısı",
      "Tek yerden yönetilen proje verisi",
      "Temiz UI + responsive tasarım",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind"],
    links: [
      // { label: "GitHub", href: "https://github.com/..." },
    ],
  },
];
