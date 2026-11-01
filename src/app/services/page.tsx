import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import ServicesSection from "@/components/Services/ServicesSection";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Integrated architectural solutions spanning architectural drawings, structural engineering, interior design, building plan sanctions, 3D visualisation, and legal documentation.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | North11 Architects",
    description:
      "Integrated architectural solutions spanning architectural drawings, structural engineering, interior design, building plan sanctions, 3D visualisation, and legal documentation.",
    url: "/services",
  },
  twitter: {
    title: "Our Services | North11 Architects",
    description:
      "Integrated architectural solutions — drawings, engineering, interiors, sanctions & more.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", minHeight: "100vh", backgroundColor: "var(--color-bg, #FAFAF9)" }}>
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
