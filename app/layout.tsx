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
  title: "Josep Rivera — Backend Developer · NestJS · FastAPI · Lima",
  description:
    "Backend developer con experiencia en NestJS, FastAPI, Python y Docker. Construyo APIs escalables, integro IA generativa en flujos reales y entrego sistemas que otros pueden mantener. Disponible para proyectos y prácticas.",
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
    "Lima",
    "Tecsup",
    "PostgreSQL",
    "inteligencia artificial",
    "Flutter",
    "Josep Rivera",
  ],
  authors: [{ name: "Josep Danton Rivera Munarez" }],
  metadataBase: new URL("https://rivera.dev"),
  openGraph: {
    title: "Josep Rivera — Backend Developer",
    description:
      "Backend developer con experiencia en NestJS, FastAPI y Docker. Construyo APIs escalables e integro IA en proyectos reales. Lima, Perú.",
    type: "website",
    locale: "es_PE",
    siteName: "Josep Rivera Portfolio",
    url: "https://rivera.dev",
    images: [
      {
        url: "/images/profile.jpg",
        width: 400,
        height: 400,
        alt: "Josep Rivera — Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josep Rivera — Backend Developer",
    description:
      "Backend developer en NestJS, FastAPI y Docker. APIs escalables + IA en flujos reales. Lima, Perú.",
    creator: "@JosepRivera",
    images: ["/images/profile.jpg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Josep Rivera",
  givenName: "Josep",
  familyName: "Rivera",
  jobTitle: "Backend Developer",
  url: "https://rivera.dev",
  image: "https://rivera.dev/images/profile.jpg",
  email: "josepdanton1518@gmail.com",
  sameAs: ["https://github.com/JosepRivera", "https://www.linkedin.com/in/rivera-josep"],
  knowsAbout: [
    "NestJS",
    "FastAPI",
    "Python",
    "TypeScript",
    "Docker",
    "PostgreSQL",
    "APIs REST",
    "Inteligencia Artificial",
    "Flutter",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Tecsup",
    url: "https://www.tecsup.edu.pe",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
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
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data is static, no user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
