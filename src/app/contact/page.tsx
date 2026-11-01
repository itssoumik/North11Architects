import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Get in touch with North11 Architects & Planners for design consultations, project quotes, sanctions, and career opportunities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Get in Touch | North11 Architects",
    description:
      "Get in touch with North11 Architects & Planners for design consultations, project quotes, sanctions, and career opportunities.",
    url: "/contact",
  },
  twitter: {
    title: "Get in Touch | North11 Architects",
    description:
      "Reach out to North11 Architects for consultations, project quotes, and career opportunities.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          paddingTop: "80px",
          minHeight: "100vh",
          backgroundColor: "var(--color-bg, #FAFAF9)",
        }}
      >
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
