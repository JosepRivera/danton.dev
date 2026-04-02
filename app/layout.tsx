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
  title: "Josep Rivera — Backend Developer | NestJS | TypeScript | Lima",
  description:
    "Backend developer especializado en NestJS, FastAPI, Python y Docker. Construyo APIs escalables e integro IA en proyectos reales. Estudiante de Diseño y Desarrollo de Software en Tecsup.",
  keywords: [
    "backend developer",
    "NestJS",
    "FastAPI",
    "Python",
    "Node.js",
    "Docker",
    "TypeScript",
    "APIs REST",
    "desarrollador backend",
    "Peru",
    "Tecsup",
    "microservicios",
    "IA",
  ],
  authors: [{ name: "Josep Danton Rivera Munarez" }],
  metadataBase: new URL("https://rivera.dev"),
  openGraph: {
    title: "Josep Rivera — Backend Developer",
    description:
      "Backend developer especializado en NestJS, FastAPI, Python y Docker. Construyo APIs escalables e integro IA en proyectos reales.",
    type: "website",
    locale: "es_PE",
    siteName: "Josep Rivera Portfolio",
    url: "https://rivera.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josep Rivera — Backend Developer",
    description:
      "Backend developer especializado en NestJS, FastAPI, Python y Docker. Construyo APIs escalables.",
    creator: "@JosepRivera",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${syne.variable} h-full antialiased`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://rivera.dev" />
        <meta name="theme-color" content="#0e1018" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
