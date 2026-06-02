import { FaLinkedin, FaGithub, FaReact } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { useTheme } from "./ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className={`footer${theme === "light" ? " light" : ""}`}>
      <a
        href="https://www.linkedin.com/in/kevin-osmar-pauluk-373676261/"
        className={`footer__link${theme === "light" ? " light" : ""}`}
        rel="noreferrer"
        target="_blank"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Kevinpg123"
        className={`footer__link${theme === "light" ? " light" : ""}`}
        rel="noreferrer"
        target="_blank"
        title="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:osmarkevinp@gmail.com"
        className={`footer__link${theme === "light" ? " light" : ""}`}
        title="Email"
      >
        <GoMail />
      </a>
      <FaReact
        className={`react-logo${theme === "light" ? " light" : ""}`}
        title="Built with React"
      />
    </footer>
  );
}
