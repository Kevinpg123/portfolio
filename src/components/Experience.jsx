import { useLanguage } from "./LanguageContext";
import { experienceStacks } from "../data/profile";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section">
      <h2 className="section__title">{t.experience.title}</h2>
      <ol className="timeline">
        {t.experience.items.map((exp, i) => (
          <li key={exp.company} className="timeline__item card">
            <div className="timeline__header">
              <div>
                <h3 className="timeline__role">{exp.role}</h3>
                <p className="timeline__company">{exp.company}</p>
              </div>
              <div className="timeline__meta">
                <span className="timeline__period">{exp.period}</span>
                <span className="tag tag--accent">{exp.type}</span>
              </div>
            </div>
            <p className="timeline__desc">{exp.description}</p>
            <ul className="tag-list" aria-label="Stack">
              {experienceStacks[i].map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
