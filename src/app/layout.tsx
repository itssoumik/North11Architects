import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Cinzel, Source_Code_Pro } from "next/font/google";
import "./globals.css";

/* ── Self-hosted Google Fonts via next/font ── */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

/* ── Metadata ── */
const siteUrl = "https://north11architects.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "North11 Architects — Architecture & Engineering Firm in Howrah",
    template: "%s | North11 Architects",
  },

  description:
    "North11 Architects & Planners is a leading architecture and engineering firm in Howrah, West Bengal — crafting spaces where form meets eternal function. Architectural drawings, structural engineering, interior design, building plan sanctions & more.",

  keywords: [
    "architect",
    "architecture firm",
    "Howrah architect",
    "West Bengal architecture",
    "building plan sanction",
    "structural engineering",
    "interior design",
    "North11 Architects",
    "3D elevation",
    "DPR",
    "landscape design",
    "site supervision",
  ],

  authors: [{ name: "North11 Architects & Planners" }],
  creator: "North11 Architects & Planners",
  publisher: "North11 Architects & Planners",

  applicationName: "North11 Architects",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "North11 Architects & Planners",
    title: "North11 Architects — Architecture & Engineering Firm",
    description:
      "Leading architecture and engineering firm crafting spaces where form meets eternal function. Architectural drawings, structural engineering, interior design & more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "North11 Architects & Planners",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "North11 Architects — Architecture & Engineering Firm",
    description:
      "Leading architecture and engineering firm crafting spaces where form meets eternal function.",
    images: ["/og-image.png"],
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "North11 Architects & Planners",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/Logo/logo transparent.png`,
        width: 240,
        height: 60,
      },
      description:
        "Leading architecture and engineering firm crafting spaces where form meets eternal function.",
      email: ["chiefachitect@duck.com", "executivedirector@duck.com"],
      telephone: "+918697208818",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Howrah",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "North11 Architects & Planners",
      url: siteUrl,
      image: `${siteUrl}/Logo/logo transparent.png`,
      description:
        "Architecture and engineering firm offering architectural drawings, structural engineering, interior design, building plan sanctions, 3D visualisation, and legal documentation.",
      email: ["chiefachitect@duck.com", "executivedirector@duck.com"],
      telephone: "+918697208818",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Howrah",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      priceRange: "$$",
      openingHours: "Mo-Sa 09:00-18:00",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "North11 Architects & Planners",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreBaskerville.variable} ${cinzel.variable} ${sourceCodePro.variable}`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
