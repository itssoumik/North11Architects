import Image from "next/image";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Sahnik Parui",
    role: "Founder & Chief Architect",
    image: "/Team/1 Sahnik Parui- Founder & Chief Architect.jpg",
  },
  {
    id: 2,
    name: "Srinath Sarkar",
    role: "Architect",
    image: "/Team/2 Srinath Sarkar- Architect.jpg",
  },
  {
    id: 3,
    name: "Animesh Bera",
    role: "Structural Engineer",
    image: "/Team/3 Animesh Bera- Structural Engineer.jpg",
  },
  {
    id: 4,
    name: "Srimanta Maiti",
    role: "Site Engineer",
    image: "/Team/4 Srimanta Maiti- Site Engineer.jpg",
  },
  {
    id: 5,
    name: "Tanmay Bhattacharyya",
    role: "Surveyor",
    image: "/Team/Tanmoy.png",
  },
  {
    id: 6,
    name: "Dipayan Saha",
    role: "Legal Head",
    image: "/Team/Dipayan.png",
  },
  {
    id: 7,
    name: "Soumik Parui",
    role: "Technical Head",
    image: "/Team/7 Soumik Parui- Technical Head.jpg",
  },
  {
    id: 8,
    name: "Subham Manna",
    role: "Marketing Head",
    image: "/Team/8 Subham Manna- Marketing Head.jpg",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      style={{
        backgroundColor: "var(--color-bg, #FAFAF9)",
        color: "var(--color-text-primary, #1C1917)",
        paddingTop: "96px",
        paddingBottom: "120px",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
        borderTop: "1px solid var(--color-border-subtle, #E7E5E4)",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Section Header */}
        <header
          style={{
            marginBottom: "72px",
            borderBottom: "1px solid var(--color-border-subtle, #E7E5E4)",
            paddingBottom: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-serif, 'Libre Baskerville', Georgia, serif)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--color-tertiary, #1C1917)",
                margin: 0,
              }}
            >
              Our Team
            </h1>
          </div>
        </header>

        {/* Team Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.id}
              className="team-card group"
              style={{
                backgroundColor: "var(--color-bg, #FAFAF9)",
                border: "1px solid var(--color-border-subtle, #E7E5E4)",
                borderRadius: "0px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.25s ease, background-color 0.25s ease",
              }}
            >
              {/* Portrait Image Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3 / 4",
                  overflow: "hidden",
                  backgroundColor: "var(--color-surface, #F5F5F4)",
                  borderBottom: "1px solid var(--color-border-subtle, #E7E5E4)",
                }}
              >
                <Image
                  src={member.image}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="contrast-[1.05] brightness-[0.98] transition-all duration-500 ease-out group-hover:grayscale group-hover:scale-[1.02]"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                  alt={`${member.name} - ${member.role} at North11 Architects, Howrah`}
                />
              </div>

              {/* Card Details */}
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  justifyContent: "center",
                }}
              >
                <div>
                  {/* Name */}
                  <h3
                    style={{
                      fontFamily: "var(--font-serif, 'Libre Baskerville', Georgia, serif)",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      letterSpacing: "-0.015em",
                      color: "var(--color-tertiary, #1C1917)",
                      marginBottom: "6px",
                    }}
                  >
                    {member.name}
                  </h3>

                  {/* Role / Designation */}
                  <p
                    style={{
                      fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: 1.5,
                      color: "var(--color-text-secondary, #57534E)",
                      margin: 0,
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
