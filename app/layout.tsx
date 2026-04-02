import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Josep Rivera — Backend Developer",
  description:
    "Estudiante de Desarrollo de Software en Tecsup, Lima. Backend developer especializado en NestJS, Node.js y Docker. Construyo software que resuelve problemas reales.",
  keywords: ["backend developer", "NestJS", "Node.js", "Docker", "TypeScript", "Peru", "Tecsup"],
  authors: [{ name: "Josep Danton Rivera Munarez" }],
  openGraph: {
    title: "Josep Rivera — Backend Developer",
    description:
      "Backend developer especializado en NestJS, Node.js y Docker. Construyo software que resuelve problemas reales.",
    type: "website",
    locale: "es_PE",
    siteName: "Josep Rivera Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josep Rivera — Backend Developer",
    description:
      "Backend developer especializado en NestJS, Node.js y Docker. Construyo software que resuelve problemas reales.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${syne.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
