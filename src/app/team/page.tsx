import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import TeamSection from "@/components/Team/TeamSection";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the multidisciplinary collective of architects, engineers, legal heads, and surveyors driving excellence at North11 Architects.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Our Team | North11 Architects",
    description:
      "Meet the multidisciplinary collective of architects, engineers, legal heads, and surveyors driving excellence at North11 Architects.",
    url: "/team",
  },
  twitter: {
    title: "Our Team | North11 Architects",
    description:
      "Meet the architects, engineers, and specialists behind North11 Architects.",
  },
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", minHeight: "100vh", backgroundColor: "var(--color-bg, #FAFAF9)" }}>
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
