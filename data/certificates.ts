export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  duration?: string;
  url: string;
  imagePath?: string;
  pdfPath?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Universidad Python — Cero a Experto",
    issuer: "Udemy",
    date: "Marzo 2026",
    duration: "114 horas",
    url: "https://ude.my/UC-8e6aaf12-634e-479c-bffb-bb17e11118bd",
    imagePath: "/images/cert-python.jpg",
    pdfPath: "/certificates/cert-python.pdf",
  },
  {
    title: "Universidad Java — Cero a Experto",
    issuer: "Udemy",
    date: "Marzo 2026",
    duration: "155 horas",
    url: "https://ude.my/UC-65a67796-1210-4c6c-8bb2-ffb782ad9598",
    imagePath: "/images/cert-java.jpg",
    pdfPath: "/certificates/cert-java.pdf",
  },
  {
    title: "Conversa B1 — Inglés Intermedio",
    issuer: "Tecsup",
    date: "Septiembre 2025",
    duration: "6 meses",
    url: "https://academico-cloud.tecsup.edu.pe/pcc/#/home/certificado?c=16606&n=CONVERSA%2FI%2F3993&t=I",
    imagePath: "/images/cert-conversa-english.jpg",
    pdfPath: "/certificates/cert-english.pdf",
  },
  {
    title: "React: de cero a experto",
    issuer: "DevTalles",
    date: "Mayo 2026",
    duration: "46 horas",
    url: "https://cursos.devtalles.com/certificates/crpux6wsmk",
    imagePath: "/images/cert-react-devtalles.jpg",
    pdfPath: "/certificates/cert-react-devtalles.pdf",
  },
];
