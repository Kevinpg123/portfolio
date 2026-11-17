import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiDownload } from "react-icons/fi";
import { useLanguage } from "./LanguageContext";
import { profile } from "../data/profile";

// Contacto por enlaces directos. El formulario con EmailJS (Contact.jsx)
// queda desactivado a propósito.
export default function ContactLinks() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section contact">
      <h2 className="section__title">{t.contact.title}</h2>
      <p className="contact__text">{t.contact.text}</p>
      <a href={`mailto:${profile.email}`} className="contact__email">
        {profile.email}
      </a>
      <div className="contact__actions">
        <a href={`mailto:${profile.email}`} className="btn btn--primary">
          <FiMail aria-hidden="true" /> {t.contact.email}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--outline">
          <FaLinkedin aria-hidden="true" /> LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn--outline">
          <FaGithub aria-hidden="true" /> GitHub
        </a>
        <a href={profile.cv} className="btn btn--outline" download>
          <FiDownload aria-hidden="true" /> {t.hero.ctaCv}
        </a>
      </div>
    </section>
  );
}
