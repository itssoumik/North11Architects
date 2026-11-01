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
    default: "North11 Architects & Planners",
    template: "%s | North11 Architects",
  },

  description:
    "North11 Architects & Planners, founded by Chief Architect Sahnik Parui, is a premier architecture and engineering firm in Howrah & Kolkata, West Bengal. We specialize in architectural design, building plan sanctions, structural engineering, 3D visualization, and interior design.",

  keywords: [
    "Sahnik Parui",
    "Sahnik Parui architect",
    "Sahnik Parui North11",
    "North11 Architects",
    "North11 Architects & Planners",
    "architectural firm in Howrah",
    "best architectural firm in Howrah",
    "architect in Howrah",
    "top architects in Howrah",
    "architects near me Howrah",
    "building plan sanction Howrah",
    "architecture firm Kolkata Howrah",
    "structural engineer Howrah",
    "interior designer Howrah",
    "Howrah municipal corporation building plan",
    "BL&LRO mutation Howrah",
    "3D elevation Howrah",
  ],

  authors: [
    { name: "Sahnik Parui", url: `${siteUrl}/team` },
    { name: "North11 Architects & Planners", url: siteUrl },
  ],
  creator: "Sahnik Parui",
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
    title: "North11 Architects & Planners | Founder & Chief Architect Sahnik Parui",
    description:
      "Premier architectural and engineering firm in Howrah, West Bengal led by Chief Architect Sahnik Parui. Architectural drawings, building sanctions, structural engineering, and interior design.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "North11 Architects & Planners - Led by Sahnik Parui",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "North11 Architects & Planners | Sahnik Parui",
    description:
      "Premier architectural and engineering firm in Howrah, West Bengal led by Chief Architect Sahnik Parui.",
    images: ["/og-image.png"],
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#sahnikparui`,
      name: "Sahnik Parui",
      jobTitle: "Founder & Chief Architect",
      worksFor: {
        "@id": `${siteUrl}/#organization`,
      },
      image: `${siteUrl}/Team/1%20Sahnik%20Parui-%20Founder%20%26%20Chief%20Architect.jpg`,
      email: "chiefachitect@duck.com",
      telephone: "+918697208818",
      url: `${siteUrl}/team`,
      description:
        "Sahnik Parui is an architect and the Founder & Chief Architect of North11 Architects & Planners in Howrah, West Bengal.",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "North11 Architects & Planners",
      alternateName: ["North11 Architects", "North 11 Architects", "North11"],
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/Logo/logo transparent.png`,
        width: 240,
        height: 60,
      },
      founder: {
        "@id": `${siteUrl}/#sahnikparui`,
      },
      description:
        "Leading architecture and engineering firm in Howrah, West Bengal founded by Sahnik Parui. Delivering comprehensive architectural design, structural engineering, building plan sanctions, and project management.",
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
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#localbusiness`,
      name: "North11 Architects & Planners",
      alternateName: "Sahnik Parui - North11 Architects",
      url: siteUrl,
      image: `${siteUrl}/Logo/logo transparent.png`,
      description:
        "Top architectural and engineering firm in Howrah, West Bengal offering architectural drawings, building plan sanctions, structural design, interior design, 3D elevation, and surveying.",
      email: ["chiefachitect@duck.com", "executivedirector@duck.com"],
      telephone: "+918697208818",
      founder: {
        "@id": `${siteUrl}/#sahnikparui`,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Howrah",
        },
        {
          "@type": "City",
          name: "Kolkata",
        },
        {
          "@type": "AdministrativeArea",
          name: "West Bengal",
        },
      ],
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
