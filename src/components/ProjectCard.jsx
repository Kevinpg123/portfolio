import { useState } from "react";
import PropTypes from "prop-types";
import { FiExternalLink, FiLock } from "react-icons/fi";
import { useLanguage } from "./LanguageContext";

export default function ProjectCard({ project }) {
  const { t } = useLanguage();
  const [imgFailed, setImgFailed] = useState(false);
  const text = t.projects.items[project.id];

  return (
    <article className={`project card${project.featured ? " project--featured" : ""}`}>
      <div className="project__media">
        {project.image && !imgFailed ? (
          <img
            src={project.image}
            alt={`${t.projects.imageAlt} ${text.title}`}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          // Placeholder hasta que se agregue la captura real
          <div className="project__placeholder" aria-hidden="true">
            <span>{text.title}</span>
          </div>
        )}
        <span className={`project__status project__status--${project.status}`}>
          {t.projects[project.status]}
        </span>
      </div>

      <div className="project__body">
        <h3 className="project__title">{text.title}</h3>
        <p className="project__subtitle">{text.subtitle}</p>
        <p className="project__desc">{text.description}</p>

        {text.highlights.length > 0 && (
          <ul className="project__highlights">
            {text.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        <ul className="tag-list" aria-label={t.projects.stack}>
          {project.stack.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project__footer">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer" className="btn btn--small btn--primary">
              {t.projects.visit} <FiExternalLink aria-hidden="true" />
            </a>
          ) : (
            <span className="project__private">
              <FiLock aria-hidden="true" /> {t.projects.noLink}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    featured: PropTypes.bool,
    link: PropTypes.string,
    image: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
