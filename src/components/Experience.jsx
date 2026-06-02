import { useTheme } from "./ThemeContext";

const experiences = [
  {
    key: 1,
    role: "Fullstack Developer · Sole Developer",
    company: "Ministerio de Ecología, Provincia de Misiones",
    period: "Aug 2024 – Present",
    type: "Full-time",
    description:
      "Designed, built and deployed a complete government web system for the JNR program (Jurisdictional and Nested REDD+) — managing environmental service payment expedients based on native forest conservation under international carbon credit standards.",
    highlights: [
      "REST API with 70+ endpoints on Docker Compose (React/Nginx, Node/Express, PostgreSQL) deployed on Ubuntu 24.04 VM",
      "Complete JWT authentication: access + refresh tokens, bcrypt, email verification, password recovery and role-based access control",
      "Multi-area approval workflow with server-side PDF generation using Puppeteer with concurrency control",
      "Mass upload of forest technical data via CSV from Google Earth Engine — with validation, versioning and full traceability",
      "Admin-user messaging system with file attachments, read states and history; real-time and email notifications via Nodemailer/SMTP",
      "Security: path traversal protection, CORS, file type & size validation, role-based middleware on all sensitive routes",
    ],
    stack: [
      "React 18", "Redux", "Node.js", "Express", "PostgreSQL 15",
      "Docker", "Nginx", "JWT", "Puppeteer", "Nodemailer", "Sequelize",
    ],
  },
  {
    key: 2,
    role: "Frontend Developer",
    company: "Taller Boscarol",
    period: "Mar 2024 – May 2024",
    type: "Freelance",
    description:
      "SPA in React/Redux for vehicle maintenance history management with admin panel and persistent authentication.",
    highlights: [
      "Full CRUD for vehicle maintenance history records",
      "Admin panel with role-based access control and protected routes",
      "Persistent authentication with session management",
    ],
    stack: ["React", "Redux", "JavaScript", "Bootstrap", "CSS"],
  },
];

export default function Experience() {
  const { theme } = useTheme();

  return (
    <section id="experience" className="experience-section">
      <h2 className={`page-header page-header-${theme}`}>Experience</h2>
      <div className="experience__list">
        {experiences.map((exp) => (
          <div key={exp.key} className="exp-card">
            <div className="exp-card__header">
              <div>
                <h3 className="exp-card__role">{exp.role}</h3>
                <p className="exp-card__company">{exp.company}</p>
              </div>
              <div className="exp-card__meta">
                <span className="exp-card__period">{exp.period}</span>
                <span className="exp-badge">{exp.type}</span>
              </div>
            </div>
            <p className="exp-card__desc">{exp.description}</p>
            <ul className="exp-card__highlights">
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="exp-card__stack">
              {exp.stack.map((tech) => (
                <span key={tech} className="stack-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
