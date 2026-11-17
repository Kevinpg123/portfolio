import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useLanguage } from "./LanguageContext";
import { profile } from "../data/profile";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer__links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin aria-hidden="true" />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub aria-hidden="true" />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <FiMail aria-hidden="true" />
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} {profile.name} · {t.footer.rights}
      </p>
    </footer>
  );
}
