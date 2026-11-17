import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiMapPin, FiArrowDown } from "react-icons/fi";
import { useLanguage } from "./LanguageContext";
import { profile } from "../data/profile";

// Curvas de nivel decorativas (guiño geoespacial)
function Contours() {
  const rings = [
    "M300 60 C390 55 470 120 480 200 C490 290 420 360 320 365 C220 370 130 320 120 230 C110 140 200 65 300 60Z",
    "M300 95 C370 92 440 145 445 205 C450 275 395 330 318 333 C240 336 165 295 158 228 C150 160 225 98 300 95Z",
    "M302 130 C355 128 405 168 408 210 C412 260 372 298 318 300 C262 302 205 272 200 225 C195 178 250 132 302 130Z",
    "M305 165 C340 164 372 188 374 214 C377 245 350 268 318 268 C284 269 245 250 243 222 C240 193 272 166 305 165Z",
    "M308 198 C326 198 342 210 342 222 C343 238 330 246 316 246 C300 246 282 238 281 224 C280 210 292 198 308 198Z",
  ];
  return (
    <svg className="hero__contours" viewBox="0 0 600 420" aria-hidden="true" focusable="false">
      {rings.map((d, i) => (
        <path key={i} d={d} />
      ))}
      <circle cx="312" cy="222" r="5" className="hero__contours-dot" />
    </svg>
  );
}

export default function Landing() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="hero__greeting">{t.hero.greeting}</p>
        <h1 className="hero__name">{profile.shortName}</h1>
        <p className="hero__role">{t.hero.role}</p>
        <p className="hero__tagline">{t.hero.tagline}</p>
        <ul className="hero__meta">
          <li>
            <FiMapPin aria-hidden="true" /> {t.hero.location}
          </li>
          <li>
            <span className="status-dot" aria-hidden="true" /> {t.hero.remote}
          </li>
        </ul>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">
            {t.hero.ctaProjects} <FiArrowDown aria-hidden="true" />
          </a>
          <a href={profile.cv} className="btn btn--outline" download>
            <FiDownload aria-hidden="true" /> {t.hero.ctaCv}
          </a>
        </div>
        <div className="hero__socials">
          <a href={profile.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
            <FaGithub aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
            <FaLinkedin aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero__visual">
        <Contours />
      </div>
    </section>
  );
}
