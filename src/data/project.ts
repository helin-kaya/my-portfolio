export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "ScoreCard / Risk Modülü",
    description:
      "Finans alanında skor hesaplama ve iş kuralları için servis geliştirmeleri. Performans ve loglama iyileştirmeleri.",
    tech: ["C#", ".NET", "SQL", "Microservice"],
  },
  {
    title: "EnvironmentalRiskApi",
    description:
      "İş akışı ve entegrasyon odaklı API geliştirmeleri, cache ve izlenebilirlik (logging) iyileştirmeleri.",
    tech: ["C#", ".NET", "REST", "Observability"],
  },
  {
    title: "Kişisel Projeler",
    description:
      "React/TypeScript ile UI geliştirmeleri ve küçük araçlar. Bu portföy site de bunlardan biri 🙂",
    tech: ["React", "TypeScript", "Next.js"],
  },
];
