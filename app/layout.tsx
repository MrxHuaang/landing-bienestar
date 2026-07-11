import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import LenisProvider from "@/providers/LenisProvider";
import MotionProvider from "@/providers/MotionProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { site, contact, social } from "@/lib/config";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: "Ángela Sophia | Psicóloga en Pereira, Risaralda",
  description:
    "Psicóloga en Pereira, Risaralda | Ángela Sophia. Terapia individual y online para ansiedad, depresión, autoestima. Especializada en acompañamiento emocional para adultos y adolescentes. ¡Agenda tu cita!",
  keywords: [
    "psicóloga en Pereira",
    "psicología Pereira",
    "terapia psicológica Risaralda",
    "salud mental Pereira",
    "psicoterapia",
    "ansiedad",
    "depresión",
    "autoestima",
    "terapia online",
    "acompañamiento emocional",
    "bienestar mental",
  ],
  authors: [{ name: "Ángela Sophia" }],
  alternates: { canonical: "/" },
  icons: { icon: "/assets/favicon.png", apple: "/assets/favicon.png" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: "Ángela Sophia Psicología",
    title: "Ángela Sophia | Psicóloga en Pereira, Risaralda",
    description:
      "Terapia psicológica profesional en Pereira. Especializada en acompañamiento emocional para adultos y adolescentes. Agenda tu cita.",
    images: [{ url: "/assets/profile-image.png", width: 1200, height: 1200, alt: "Ángela Sophia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ángela Sophia | Psicóloga en Pereira, Risaralda",
    description:
      "Terapia psicológica profesional en Pereira. Especializada en acompañamiento emocional para adultos y adolescentes.",
    images: ["/assets/profile-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#eae7e0",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ángela Sophia",
  jobTitle: "Psicóloga",
  description:
    "Psicóloga profesional en Pereira, Risaralda. Especializada en acompañamiento emocional para adultos y adolescentes.",
  url: site.domain,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pereira",
    addressRegion: "Risaralda",
    addressCountry: "CO",
  },
  telephone: contact.phone,
  email: contact.email,
  sameAs: [social.instagram, social.tiktok, social.whatsapp],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${instrument.variable}`}
    >
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain pointer-events-none fixed inset-0 z-[1050]" aria-hidden />
        <ScrollProgress />
        <LenisProvider />
        <MotionProvider>{children}</MotionProvider>
        <GoogleAnalytics gaId={site.gaId} />
      </body>
    </html>
  );
}
