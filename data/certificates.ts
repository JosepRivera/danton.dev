export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  duration?: string;
  url: string;
  imagePath?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Universidad Python — Cero a Experto (+114 hrs)",
    issuer: "Udemy",
    date: "Marzo 2026",
    duration: "114 horas",
    url: "https://ude.my/UC-8e6aaf12-634e-479c-bffb-bb17e11118bd",
    imagePath: "/images/cert-python.jpg",
  },
  {
    title: "Universidad Java — Cero a Experto (+155 hrs)",
    issuer: "Udemy",
    date: "Marzo 2026",
    duration: "155 horas",
    url: "https://ude.my/UC-65a67796-1210-4c6c-8bb2-ffb782ad9598",
    imagePath: "/images/cert-java.jpg",
  },
  {
    title: "Conversa A2 — Inglés Básico",
    issuer: "Tecsup",
    date: "Sep. 2025",
    duration: "6 meses",
    url: "https://academico-cloud.tecsup.edu.pe/pcc/#/home/certificado?c=14807&n=CONVERSA%2FB%2F4617&t=I",
    imagePath: "/images/cert-english.jpg",
  },
];
