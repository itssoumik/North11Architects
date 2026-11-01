import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
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
          North11 Architects — Architecture &amp; Engineering Firm in Howrah,
          West Bengal
        </h1>
        <HeroCarousel />
      </main>
    </>
  );
}
