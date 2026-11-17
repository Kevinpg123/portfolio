import { useLanguage } from "./LanguageContext";
import { skills } from "../data/profile";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section">
      <h2 className="section__title">{t.skills.title}</h2>
      <div className="skills">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className={`skills__group card${group === "learning" ? " skills__group--learning" : ""}`}>
            <h3 className="skills__title">{t.skills.groups[group]}</h3>
            <ul className="tag-list">
              {items.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
