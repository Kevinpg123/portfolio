import { useTheme } from "./ThemeContext";
import PropTypes from "prop-types";
import {
  SiJavascript,
  SiReact,
  SiJest,
  SiBootstrap,
  SiDotenv,
  SiWebpack,
  SiGooglemaps,
  SiPython,
  SiDjango,
  SiMercadopago,
  SiVite,
  SiStyledcomponents,
  SiExpress,
  SiMongodb,
  SiSlack,
  SiFirebase,
  SiSequelize,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiNginx,
  SiRedux,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const iconMap = {
  SiJavascript:      <SiJavascript />,
  SiReact:           <SiReact />,
  FaReact:           <SiReact />,
  SiJest:            <SiJest />,
  SiBootstrap:       <SiBootstrap />,
  SiDotenv:          <SiDotenv />,
  SiWebpack:         <SiWebpack />,
  SiGooglemaps:      <SiGooglemaps />,
  SiPython:          <SiPython />,
  SiDjango:          <SiDjango />,
  SiMercadopago:     <SiMercadopago />,
  SiVite:            <SiVite />,
  SiStyledcomponents:<SiStyledcomponents />,
  SiExpress:         <SiExpress />,
  SiMongodb:         <SiMongodb />,
  SiSlack:           <SiSlack />,
  SiFirebase:        <SiFirebase />,
  SiSequelize:       <SiSequelize />,
  SiNodedotjs:       <SiNodedotjs />,
  SiPostgresql:      <SiPostgresql />,
  SiDocker:          <SiDocker />,
  SiNginx:           <SiNginx />,
  SiRedux:           <SiRedux />,
};

function TerminalVisual({ highlights }) {
  return (
    <div className="project-card__terminal">
      <div className="terminal__titlebar">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__filename">~/jnr-registry</span>
      </div>
      <span className="terminal__line terminal__line--cmd">docker compose up -d</span>
      <span className="terminal__line terminal__line--success">postgres        running</span>
      <span className="terminal__line terminal__line--success">backend         running</span>
      <span className="terminal__line terminal__line--success">frontend        running</span>
      <span className="terminal__line terminal__line--success">nginx           running</span>
      <span className="terminal__line">&nbsp;</span>
      <span className="terminal__line terminal__line--cmd">curl /api/stats</span>
      {highlights &&
        highlights.slice(0, 3).map((h, i) => (
          <span key={i} className="terminal__line terminal__line--success">
            {h}
          </span>
        ))}
    </div>
  );
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  live,
  github,
  builtWith,
  featured,
  noImage,
  highlights,
}) {
  const { theme } = useTheme();

  const handleClick = (url) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <div className={`project-card${featured ? " project-card--featured" : ""}`}>
      {/* Visual: terminal for featured, image for others */}
      {featured && noImage ? (
        <TerminalVisual highlights={highlights} />
      ) : !noImage && image ? (
        <img src={image} className="project-card__img" alt={title} />
      ) : null}

      <div className="project-card__details-container">
        <div>
          <div className="project-card__header-container">
            <div>
              <h3 className="title">{title}</h3>
              {subtitle && <p className="project-card__subtitle">{subtitle}</p>}
            </div>
            <div className="built-with-icons">
              {builtWith &&
                builtWith.map((icon, index) => (
                  <span
                    key={index}
                    title={icon.replace("Si", "").replace("Fa", "")}
                  >
                    {iconMap[icon]}
                  </span>
                ))}
            </div>
          </div>
          <p className="description">{description}</p>
        </div>

        <div className="btn-container">
          {live ? (
            <button
              className={`btn live${theme === "light" ? " light" : ""}`}
              title="Live site"
              onClick={() => handleClick(live)}
            >
              <CgWebsite style={{ height: "1.1em", width: "1.1em" }} />
              Live
            </button>
          ) : null}
          {github ? (
            <button
              className={`btn github${theme === "light" ? " light" : ""}`}
              title="GitHub repo"
              onClick={() => handleClick(github)}
            >
              <BsGithub style={{ height: "1.1em", width: "1.1em" }} />
              GitHub
            </button>
          ) : null}
          {!live && !github && (
            <span className="private-label">🔒 Private / Internal system</span>
          )}
        </div>
      </div>
    </div>
  );
}

TerminalVisual.propTypes = {
  highlights: PropTypes.array,
};

ProjectCard.propTypes = {
  title:       PropTypes.string.isRequired,
  subtitle:    PropTypes.string,
  description: PropTypes.string.isRequired,
  image:       PropTypes.string,
  live:        PropTypes.string,
  github:      PropTypes.string,
  builtWith:   PropTypes.array,
  featured:    PropTypes.bool,
  noImage:     PropTypes.bool,
  highlights:  PropTypes.array,
};
