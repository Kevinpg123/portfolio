import { useTheme } from "./ThemeContext";
import ProjectCard from "./ProjectCard";
import projects from "../data/projectsList";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="projects">
      <h2 className={`page-header page-header-${theme}`}>Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.key} {...project} />
        ))}
      </div>
    </section>
  );
}
