import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        backgroundColor: "#0c0d0e",
        padding: "24px clamp(24px, 6vw, 96px)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-sans, 'Inter', sans-serif)",
          fontSize: "13px",
          fontWeight: 400,
          color: "rgba(255, 255, 255, 0.45)",
          margin: 0,
          letterSpacing: "0.01em",
        }}
      >
        © 2026 North11 Architects &amp; Planners. All rights reserved.
      </p>
    </footer>
  );
}
