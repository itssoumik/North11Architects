const SERVICES = [
  "Architectural Drawings",
  "Working Drawings & Space Planning",
  "Structural Design & Analysis",
  "Foundation & Framing Layouts",
  "Interior Design",
  "Building Plan Sanction",
  "3D Elevation & Visualisation",
  "360° VR Walkthrough Experience",
  "Estimation & Valuation",
  "Detailed Project Reports (DPR)",
  "Landscape Design",
  "Site Supervision",
  "Land Surveying",
  "Topographical Mapping",
  "Legal Documentation",
  "BL&LRO Land Mutation",
  "Land Classification & Conversion",
  "Municipal Corporation Mutation",
];


export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "var(--color-bg, #FAFAF9)",
        color: "var(--color-text-primary, #1C1917)",
        paddingTop: "96px",
        paddingBottom: "120px",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>

        {/* ── Heading ── */}
        <h1
          style={{
            fontFamily: "var(--font-serif, 'Libre Baskerville', Georgia, serif)",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--color-tertiary, #1C1917)",
            margin: "0 0 32px 0",
          }}
        >
          Our Services
        </h1>

        {/* ── Full-Width Divider Line ── */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "var(--color-border-subtle, #E7E5E4)",
            marginBottom: "48px"
          }}
        />

        {/* ── Two-Column Content Grid (Text & List ONLY) ── */}
        <div
          className="services-content-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "4fr 6fr",
            gap: "clamp(48px, 8vw, 120px)",
            alignItems: "start",
            marginBottom: "80px",
          }}
        >
          {/* ── Left column: Paragraph ONLY ── */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: 1.8,
                color: "var(--color-text-secondary, #57534E)",
                margin: 0,
                maxWidth: "480px",
              }}
            >
              <b>North11 Architects and Planners</b> offers integrated solutions in architecture,
              engineering, interior design, and project management. From conceptualisation
              and statutory approvals to construction supervision and property documentation,
              we bring every essential service under one roof.
            </p>
          </div>

          {/* ── Right column: Two Column List Grid with Numbers ── */}
          <ol
            className="services-list-grid"
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: `repeat(${Math.ceil(SERVICES.length / 2)}, auto)`,
              gridAutoFlow: "column",
              columnGap: "48px",
              rowGap: "22px",
            }}
          >
            {SERVICES.map((service, index) => (
              <li
                key={service}
                className="service-item"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono, 'Source Code Pro', monospace)",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color: "var(--color-text-secondary, #57534E)",
                    minWidth: "24px",
                    userSelect: "none",
                    flexShrink: 0,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  style={{
                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                    fontSize: "17px",
                    fontWeight: 400,
                    color: "var(--color-text-primary, #1C1917)",
                    transition: "color 0.2s ease",
                  }}
                >
                  {service}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style>{`
        .service-item:hover span:last-child {
          color: var(--color-primary, #78716C) !important;
        }

        /* Tablet/Mobile Breakpoint */
        @media (max-width: 992px) {
          .services-content-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            margin-bottom: 40px !important;
          }
          .services-content-grid p {
            max-width: 100% !important;
          }
          
          /* Stack the list grid back to a single column on smaller screens */
          .services-list-grid {
            grid-template-rows: auto !important;
            grid-auto-flow: row !important;
            grid-template-columns: 1fr !important;
          }

          /* Optional: Hide or scale down the bottom image on very small screens if it gets too small */
          .bottom-image-container img {
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}