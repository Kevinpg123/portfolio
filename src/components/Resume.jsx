import { useTheme } from "./ThemeContext";
import style from "./Resume.module.css";

export default function Resume() {
  const { theme } = useTheme();

  return (
    <section id="resume" className="resume-section">
      <h2 className={`page-header page-header-${theme}`}>Resume</h2>
      <div className={style.downloadRow}>
        <a
          href="https://drive.google.com/file/d/1v4bu-HUtc1tPJc4sRGZs8x0YaEoQYZT1/view?usp=sharing"
          className={style.downloadBtn}
          rel="noreferrer"
          target="_blank"
        >
          <img src="https://flagcdn.com/24x18/gb.png" alt="English" style={{ borderRadius: "2px" }} /> CV English
        </a>
        <a
          href="https://drive.google.com/file/d/1EYe98EI5vbKEAgFsPal2EVoz5xzeeYC_/view?usp=sharing"
          className={style.downloadBtn}
          rel="noreferrer"
          target="_blank"
        >
          <img src="https://flagcdn.com/24x18/es.png" alt="Español" style={{ borderRadius: "2px" }} /> CV Español
        </a>
      </div>
    </section>
  );
}
