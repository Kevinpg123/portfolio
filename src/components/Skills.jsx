import { useTheme } from "./ThemeContext";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiVite,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiNginx,
  SiGit,
} from "react-icons/si";

const iconMap = {
  SiReact:      <SiReact />,
  SiRedux:      <SiRedux />,
  SiJavascript: <SiJavascript />,
  SiVite:       <SiVite />,
  SiHtml5:      <SiHtml5 />,
  SiCss3:       <SiCss3 />,
  SiBootstrap:  <SiBootstrap />,
  SiNodedotjs:  <SiNodedotjs />,
  SiExpress:    <SiExpress />,
  SiSequelize:  <SiSequelize />,
  SiPostgresql: <SiPostgresql />,
  SiMongodb:    <SiMongodb />,
  SiFirebase:   <SiFirebase />,
  SiDocker:     <SiDocker />,
  SiNginx:      <SiNginx />,
  SiGit:        <SiGit />,
};

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React 18",    icon: "SiReact" },
      { name: "Redux",       icon: "SiRedux" },
      { name: "JavaScript",  icon: "SiJavascript" },
      { name: "Vite",        icon: "SiVite" },
      { name: "HTML5",       icon: "SiHtml5" },
      { name: "CSS3",        icon: "SiCss3" },
      { name: "Bootstrap 5", icon: "SiBootstrap" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js",   icon: "SiNodedotjs" },
      { name: "Express",   icon: "SiExpress" },
      { name: "Sequelize", icon: "SiSequelize" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB",    icon: "SiMongodb" },
      { name: "Firebase",   icon: "SiFirebase" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "SiDocker" },
      { name: "Nginx",  icon: "SiNginx" },
      { name: "Git",    icon: "SiGit" },
    ],
  },
];

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className="skills-section">
      <h2 className={`page-header page-header-${theme}`}>Tech Stack</h2>
      <div className="skills__grid">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="skills__category">
            <h3 className="skills__category-title">{cat.category}</h3>
            <div className="skills__items">
              {cat.skills.map((skill) => (
                <span key={skill.name} className="skill-chip">
                  {iconMap[skill.icon]}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
