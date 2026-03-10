import { useState } from "react";
import internshipImg from "./image/Screenshot 2026-03-06 213518.png"; 
import footerImg from "./image/291899231_490273779567291_1388030499081494942_n.png";


const googlePlayIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
    <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-11.43L13.1 8.86 3.18 23.76zm17.6-11.37c.29-.22.47-.56.47-.93s-.18-.71-.47-.93L18.1 9.3l-3.13 2.84 3.13 2.84 2.68-1.59zM3.48.24a1.1 1.1 0 0 0-.3.8v21.92c0 .3.1.58.3.8L13.1 12 3.48.24zm9.62 11.33L4.17.44l12.6 11.43-3.67 3.33v-3.63z" />
  </svg>
);

const appleIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const microsoftIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
    <path d="M0 0h11.5v11.5H0zm12.5 0H24v11.5H12.5zM0 12.5h11.5V24H0zm12.5 0H24V24H12.5z" />
  </svg>
);

export default function KruInternship() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", margin: 0, padding: 0, color: "#222" }}>
      {/* HERO SECTION */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px 60px",
          borderBottom: "1px solid #e5e7eb",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        {/* Left: Text */}
        <div style={{ maxWidth: 420 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, margin: 0 }}>
            Empower Yourself
            <br />
            <span style={{ color: "#2563eb" }}>to Succeed</span>
          </h1>
          <p style={{ marginTop: 16, fontSize: 15, color: "#555", lineHeight: 1.6 }}>
            The IT internship prepares students for careers in the technology industry.
          </p>
          <button
            style={{
              marginTop: 20,
              backgroundColor: "#f97316",
              color: "white",
              border: "none",
              borderRadius: 6,
              padding: "10px 22px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Internship Position
          </button>
        </div>

        {/* Right: Logo + Title */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              justifyContent: "center",
            }}
          >
            {/* KRU Logo */}
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 22,
              fontWeight: 700,
              color: "#2563eb",
              letterSpacing: 1,
            }}
          >
            Internship Program
          </div>
        </div>
          <img src={internshipImg} alt="Internship Program" />
      </section>

      {/* FEATURES ROW */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 1,
          backgroundColor: "#e5e7eb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {[
          {
            title: "Internship Certificate",
            desc: "You will receive a certificate of completion. It proves that you worked as a Frontend/Backend Developer Intern.",
            color: "#2563eb",
          },
          {
            title: "Real Work Experience",
            desc: "Real work experience means you worked on actual projects in a real company environment — not just school exercises.",
            color: "#2563eb",
          },
          {
            title: "Real Projects",
            desc: "During a Frontend & Backend Development internship, you work on real systems used by real users, not just practice exercises. These projects become strong evidence of your skills.",
            color: "#2563eb",
          },
          {
            title: "Soft Skills",
            desc: "Soft skills are personal and professional abilities that help you work well with others and perform effectively in a company — not just technical coding.",
            color: "#2563eb",
          },
        ].map((card) => (
          <div
            key={card.title}
            style={{
              backgroundColor: "white",
              padding: "32px 24px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: card.color, fontSize: 15, fontWeight: 700, marginBottom: 12 }}>
              {card.title}
            </h3>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
          </div>
        ))}
      </section>

   
    </div>
  );
}