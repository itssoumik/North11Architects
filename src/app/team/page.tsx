import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import TeamSection from "@/components/Team/TeamSection";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet Founder & Chief Architect Sahnik Parui and the collective of architects, structural engineers, surveyors, and specialists at North11 Architects in Howrah.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Our Team | Led by Sahnik Parui | North11 Architects",
    description:
      "Meet Founder & Chief Architect Sahnik Parui and the collective of architects, structural engineers, surveyors, and specialists at North11 Architects in Howrah.",
    url: "/team",
  },
  twitter: {
    title: "Our Team | Led by Sahnik Parui | North11 Architects",
    description:
      "Meet Founder & Chief Architect Sahnik Parui and the team at North11 Architects.",
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
