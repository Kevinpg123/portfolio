import img from "../assets/images/profilePhoto.png";
import { useTheme } from "./ThemeContext";
import style from "./About.module.css";

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="about">
      <h2 className={`page-header page-header-${theme}`}>About Me</h2>
      <div className="about__content">
        <div className="bio-img">
          <img className={style.img} src={img} alt="Kevin Pauluk" />
        </div>
        <div className="bio-desc">
          <p>
            Fullstack developer with 1+ year of real production experience, based in Posadas,
            Argentina. I designed, built and deployed — solo — a complete government web system
            for the Ministerio de Ecología de Misiones: REST API with 70+ endpoints, Docker
            Compose architecture with 4 services, JWT authentication, and server-side PDF
            generation with concurrency control.
          </p>
          <p>
            Passionate about clean, efficient code and solutions that actually work in production.
            Strong hands-on experience with React, Node.js, PostgreSQL and Docker.
            Looking for remote opportunities where I can keep building impactful things.
          </p>
          <div className="about__badges">
            <span className="badge">🌍 English C2 Proficient</span>
            <span className="badge">📍 Posadas, Argentina</span>
            <span className="badge">🌐 Open to Remote</span>
            <span className="badge">🇩🇪 German A1</span>
          </div>
        </div>
      </div>
    </section>
  );
}
