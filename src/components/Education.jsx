import { FiAward, FiBookOpen, FiExternalLink } from "react-icons/fi";
import { useLanguage } from "./LanguageContext";
import { profile } from "../data/profile";

export default function Education() {
  const { t } = useLanguage();
  const e = t.education;

  return (
    <section id="education" className="section">
      <h2 className="section__title">{e.title}</h2>
      <div className="education">
        <div className="card">
          <h3 className="education__heading">
            <FiBookOpen aria-hidden="true" /> {e.studies}
          </h3>
          <ul className="education__list">
            {e.items.map((item) => (
              <li key={item.title}>
                <p className="education__title">{item.title}</p>
                <p className="education__meta">
                  {[item.place, item.period].filter(Boolean).join(" · ")}
                </p>
                {item.detail && <p className="education__detail">{item.detail}</p>}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="education__heading">
            <FiAward aria-hidden="true" /> {e.languagesTitle}
          </h3>
          <ul className="education__list">
            {e.languages.map((l) => (
              <li key={l.name} className="language">
                <p className="education__title">{l.name}</p>
                <p className="education__meta">{l.level}</p>
                {l.cert && (
                  <a href={profile.efset} target="_blank" rel="noreferrer" className="text-link">
                    {l.cert} <FiExternalLink aria-hidden="true" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
