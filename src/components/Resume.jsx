import resume from "../assets/images/currifculum.png";
import { useTheme } from "./ThemeContext";

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section id="resume" className="resume-section">
      <h2 className={`page-header page-header-${theme}`}>Resume</h2>
      <div className="resume__container">

        <img
          className={`resume__img${theme === "light" ? " light" : ""}`}
          src={resume}
          title="Click to view PDF"
        />

      </div>
    </section>
  );
}
