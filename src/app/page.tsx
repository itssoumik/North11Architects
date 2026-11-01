import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";

export const metadata: Metadata = {
  title: "North11 Architects & Planners",
  description:
    "Looking for the best architectural firm in Howrah? Founded by Chief Architect Sahnik Parui, North11 Architects delivers world-class architecture, building sanctions, structural engineering & interior design.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "North11 Architects & Planners | Founder & Chief Architect Sahnik Parui",
    description:
      "Looking for the best architectural firm in Howrah? Led by Chief Architect Sahnik Parui, North11 Architects delivers comprehensive architectural design, sanction plans & engineering.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Visually hidden but accessible h1 for SEO — visible text is in the HeroCarousel */}
        <h1
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: 0,
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: 0,
          }}
        >
          North11 Architects &amp; Planners — Premier Architectural Firm in Howrah founded by Sahnik Parui (Chief Architect)
        </h1>
        <HeroCarousel />
      </main>
    </>
  );
}
