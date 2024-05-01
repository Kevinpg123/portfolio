import resume from "../assets/images/cvnuevo1.png";
import resume2 from "../assets/images/cvnuevo2.png"
import { useTheme } from "./ThemeContext";

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section id="resume" className="resume-section">
      <h2 className={`page-header page-header-${theme}`}>Resume</h2>
      <div style={{ marginLeft: '1em' }} className="resume__container">
        <a
          href="https://drive.google.com/file/d/1qbicQ0pmbzwyaL4vs3H4rxS8MlNvqs7E/view?usp=sharing"
          className="resume__link"
          rel="noreferrer"
          target="_blank"
        >
          <img

            className={`resume__img${theme === "light" ? " light" : ""}`}
            src={resume}
            title="Click to view PDF"
          />

        </a>
      </div>
    </section>
  );
}
