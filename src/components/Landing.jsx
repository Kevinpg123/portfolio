import img from "../assets/images/dev.svg";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="landing__content">
        <p className="landing__greeting">Hello, I&apos;m</p>
        <h1 className="landing__name">Kevin Pauluk</h1>
        <h2 className="landing__role">Full Stack Developer</h2>
        <p className="landing__tagline">
          Building scalable web systems with React, Node.js &amp; Docker.
          <br />Available for remote work · English C2
        </p>
        <div className="landing__cta">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-60}
            className="cta-btn cta-btn-primary"
          >
            View Projects
          </Link>
        </div>
        <div className="landing__socials">
          <a
            href="https://github.com/Kevinpg123"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-osmar-pauluk-373676261/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="landing__image-wrapper">
        <img src={img} className="landing__img" alt="Developer illustration" />
      </div>
    </section>
  );
}
