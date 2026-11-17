import ProjectCard from "./ProjectCard";
import { useLanguage } from "./LanguageContext";
import { projects } from "../data/profile";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section">
      <h2 className="section__title">{t.projects.title}</h2>
      <p className="section__intro">{t.projects.intro}</p>
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
