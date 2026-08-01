import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
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
  title: "Josep Rivera — Full Stack Developer",
  description:
    "Desarrollador Full Stack. Construyo sistemas completos, del modelo de datos al despliegue: NestJS, FastAPI, React y Flutter. Abierto a proyectos y prácticas.",
  verification: {
    google: "Ls50ORBgEyXDdxgKbW0msmqIeKzZPPaOUwnhPt4NGZc",
  },
  keywords: [
    "full stack developer",
    "desarrollador full stack",
    "backend developer",
    "desarrollador backend",
    "NestJS",
    "FastAPI",
    "Python",
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "Flutter",
    "Kotlin",
    "Docker",
    "APIs REST",
    "Peru",
    "Lima",
    "Tecsup",
    "PostgreSQL",
    "Prisma",
    "inteligencia artificial",
    "Josep Rivera",
  ],
  authors: [{ name: "Josep Danton Rivera Munarez" }],
  metadataBase: new URL("https://rivera-dev.vercel.app"),
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
  openGraph: {
    title: "Josep Rivera — Full Stack Developer",
    description:
      "Desarrollador Full Stack. Construyo sistemas completos, del modelo de datos al despliegue: NestJS, FastAPI, React y Flutter. Lima, Perú.",
    type: "website",
    locale: "es_PE",
    siteName: "Josep Rivera Portfolio",
    url: "https://rivera-dev.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josep Rivera — Full Stack Developer",
    description:
      "Desarrollador Full Stack. Del modelo de datos al despliegue: NestJS, FastAPI, React y Flutter. Lima, Perú.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Josep Rivera",
  givenName: "Josep",
  familyName: "Rivera",
  jobTitle: "Full Stack Developer",
  url: "https://rivera-dev.vercel.app",
  image: "https://rivera-dev.vercel.app/images/profile.jpg",
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
        <link rel="canonical" href="https://rivera-dev.vercel.app" />
        <meta name="theme-color" content="#0e1018" />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data is static, no user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
