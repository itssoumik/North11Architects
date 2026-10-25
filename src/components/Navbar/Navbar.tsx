"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all"
      style={{
        paddingTop: "clamp(1.25rem, 2.5vw, 2rem)",
        paddingLeft: "clamp(2rem, 6vw, 6rem)",
        paddingRight: "clamp(2rem, 6vw, 6rem)",
        paddingBottom: "clamp(1.25rem, 2.5vw, 2rem)",
        backgroundColor: isHome ? "transparent" : "#0c0d0e",
        borderBottom: isHome ? undefined : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="w-full flex items-center justify-between">
        {/* Left: Ribbon logo only */}
        <Link
          href="/"
          className="flex items-center group z-50 transition-transform duration-200 hover:scale-[1.01]"
          onClick={closeMenu}
          aria-label="North11 Architects Home"
        >
          <Image
            src="/Logo/ribbon transparent.png"
            alt="North11 Architects"
            width={240}
            height={60}
            priority
            className="h-10 md:h-12 lg:h-[50px] w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
          />
        </Link>

        {/* Right: Nav links */}
        <nav
          className="hidden md:flex items-center gap-10 lg:gap-14"
          aria-label="Main Navigation"
        >
          {[
            { href: "/services", label: "Services" },
            { href: "/team", label: "Our Team" },
            { href: "/contact", label: "Get in Touch" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "'Inter', -apple-system, 'Segoe UI', Helvetica, sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.90)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                textShadow: "0 2px 8px rgba(0,0,0,0.8)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.90)")}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="md:hidden flex flex-col justify-between w-7 h-5 z-50 cursor-pointer focus:outline-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`w-full h-[2px] bg-white transition-all duration-300 origin-left ${mobileMenuOpen ? "rotate-45" : ""
              }`}
          />
          <span
            className={`w-full h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`w-full h-[2px] bg-white transition-all duration-300 origin-left ${mobileMenuOpen ? "-rotate-45" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 bg-[#0c0d0e]/60 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 ${mobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col items-center gap-8 text-center">
          {[
            { href: "/services", label: "Services" },
            { href: "/team", label: "Our Team" },
            { href: "/contact", label: "Get in Touch" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "'Inter', -apple-system, 'Segoe UI', Helvetica, sans-serif",
                fontSize: "20px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#ffffff",
                textDecoration: "none",
              }}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
