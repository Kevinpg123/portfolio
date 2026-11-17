import img from "../assets/images/profilePhoto.webp";
import { useLanguage } from "./LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <h2 className="section__title">{t.about.title}</h2>
      <div className="about">
        <img
          className="about__photo"
          src={img}
          alt={t.about.photoAlt}
          width="200"
          height="200"
          loading="lazy"
        />
        <div className="about__text">
          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
