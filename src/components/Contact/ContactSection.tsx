"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "var(--color-bg, #FAFAF9)",
        color: "var(--color-text-primary, #1C1917)",
        paddingTop: "96px",
        paddingBottom: "120px",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
        minHeight: "calc(100vh - 80px)",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
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
          Get in Touch
        </h1>

        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "var(--color-border-subtle, #E7E5E4)",
            marginBottom: "60px",
          }}
        />

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(48px, 6vw, 84px)",
            alignItems: "start",
          }}
        >
          {/* Left Column: Direct Inquiries & Contact Details */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "var(--color-text-secondary, #57534E)",
                margin: "0 0 40px 0",
                maxWidth: "460px",
              }}
            >
              We welcome inquiries regarding upcoming architectural commissions, planning
              approvals, master planning, and technical consultations. Reach out directly or send us
              a message.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {/* Email 1 */}
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono, 'Source Code Pro', monospace)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-text-tertiary, #A8A29E)",
                    marginBottom: "6px",
                  }}
                >
                  Chief Architect
                </span>
                <a
                  href="mailto:chiefarchitect@duck.com"
                  style={{
                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                    fontSize: "17px",
                    fontWeight: 500,
                    color: "var(--color-text-primary, #1C1917)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--color-border-subtle, #E7E5E4)",
                    paddingBottom: "2px",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-primary, #78716C)";
                    e.currentTarget.style.color = "var(--color-primary, #78716C)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border-subtle, #E7E5E4)";
                    e.currentTarget.style.color = "var(--color-text-primary, #1C1917)";
                  }}
                >
                  chiefarchitect@duck.com
                </a>
              </div>

              {/* Email 2 */}
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono, 'Source Code Pro', monospace)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-text-tertiary, #A8A29E)",
                    marginBottom: "6px",
                  }}
                >
                  Executive Director
                </span>
                <a
                  href="mailto:executivedirector@duck.com"
                  style={{
                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                    fontSize: "17px",
                    fontWeight: 500,
                    color: "var(--color-text-primary, #1C1917)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--color-border-subtle, #E7E5E4)",
                    paddingBottom: "2px",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-primary, #78716C)";
                    e.currentTarget.style.color = "var(--color-primary, #78716C)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border-subtle, #E7E5E4)";
                    e.currentTarget.style.color = "var(--color-text-primary, #1C1917)";
                  }}
                >
                  executivedirector@duck.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono, 'Source Code Pro', monospace)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-text-tertiary, #A8A29E)",
                    marginBottom: "6px",
                  }}
                >
                  Direct Telephone
                </span>
                <a
                  href="tel:+918697208818"
                  style={{
                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                    fontSize: "17px",
                    fontWeight: 500,
                    color: "var(--color-text-primary, #1C1917)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--color-border-subtle, #E7E5E4)",
                    paddingBottom: "2px",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-primary, #78716C)";
                    e.currentTarget.style.color = "var(--color-primary, #78716C)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border-subtle, #E7E5E4)";
                    e.currentTarget.style.color = "var(--color-text-primary, #1C1917)";
                  }}
                >
                  +91 86972 08818
                </a>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div
                style={{
                  backgroundColor: "var(--color-surface, #F5F5F4)",
                  border: "1px solid var(--color-border-medium, #D6D3D1)",
                  padding: "36px",
                  marginBottom: "48px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif, 'Libre Baskerville', Georgia, serif)",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "var(--color-tertiary, #1C1917)",
                    margin: "0 0 12px 0",
                  }}
                >
                  Thank you for reaching out.
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "var(--color-text-secondary, #57534E)",
                    margin: 0,
                  }}
                >
                  Your message has been received. A member of our team will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  style={{
                    marginTop: "24px",
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--color-primary, #78716C)",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ marginBottom: "48px" }}>
                {/* Field: Name */}
                <div style={{ marginBottom: "24px" }}>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--color-text-secondary, #57534E)",
                      marginBottom: "8px",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    style={{
                      width: "100%",
                      height: "48px",
                      backgroundColor: "var(--color-bg, #FAFAF9)",
                      border: "1px solid var(--color-border-medium, #D6D3D1)",
                      borderRadius: 0,
                      padding: "12px 16px",
                      fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                      fontSize: "15px",
                      color: "var(--color-text-primary, #1C1917)",
                      outline: "none",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-primary, #78716C)";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 2px #FAFAF9, 0 0 0 4px var(--color-primary, #78716C)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-border-medium, #D6D3D1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Field: Email */}
                <div style={{ marginBottom: "24px" }}>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--color-text-secondary, #57534E)",
                      marginBottom: "8px",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    style={{
                      width: "100%",
                      height: "48px",
                      backgroundColor: "var(--color-bg, #FAFAF9)",
                      border: "1px solid var(--color-border-medium, #D6D3D1)",
                      borderRadius: 0,
                      padding: "12px 16px",
                      fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                      fontSize: "15px",
                      color: "var(--color-text-primary, #1C1917)",
                      outline: "none",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-primary, #78716C)";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 2px #FAFAF9, 0 0 0 4px var(--color-primary, #78716C)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-border-medium, #D6D3D1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Field: Message */}
                <div style={{ marginBottom: "28px" }}>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--color-text-secondary, #57534E)",
                      marginBottom: "8px",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, project scope, or requirements..."
                    style={{
                      width: "100%",
                      backgroundColor: "var(--color-bg, #FAFAF9)",
                      border: "1px solid var(--color-border-medium, #D6D3D1)",
                      borderRadius: 0,
                      padding: "12px 16px",
                      fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                      fontSize: "15px",
                      color: "var(--color-text-primary, #1C1917)",
                      outline: "none",
                      boxSizing: "border-box",
                      resize: "vertical",
                      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-primary, #78716C)";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 2px #FAFAF9, 0 0 0 4px var(--color-primary, #78716C)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-border-medium, #D6D3D1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    backgroundColor: "var(--color-primary, #78716C)",
                    color: "var(--color-bg, #FAFAF9)",
                    border: "none",
                    borderRadius: 0,
                    padding: "14px 32px",
                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                    letterSpacing: "0.01em",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-tertiary, #1C1917)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-primary, #78716C)";
                  }}
                >
                  Send Message
                </button>
              </form>
            )}

            <div
              style={{
                borderTop: "1px solid var(--color-border-subtle, #E7E5E4)",
                paddingTop: "28px",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono, 'Source Code Pro', monospace)",
                  fontSize: "16px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-text-tertiary, #A8A29E)",
                  marginBottom: "8px",
                }}
              >
                Careers &amp; Opportunities
              </span>
              <p
                style={{
                  fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "var(--color-text-secondary, #57534E)",
                  margin: 0,
                }}
              >
                We are always eager to meet motivated architects, draftspersons, structural
                engineers, and surveyors. You can mail your CV and portfolio to{" "}
                <a
                  href="mailto:chiefarchitect@duck.com"
                  style={{
                    color: "var(--color-text-primary, #1C1917)",
                    fontWeight: 600,
                    textDecoration: "underline",
                  }}
                >
                  chiefarchitect@duck.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
