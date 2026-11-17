import { useEffect, useState } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";

const SECTIONS = ["home", "about", "experience", "projects", "skills", "education", "contact"];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Resalta la sección visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú con Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <a href="#main" className="skip-link">
        {t.nav.skip}
      </a>
      <nav className="navbar__inner" aria-label={lang === "es" ? "Navegación principal" : "Main navigation"}>
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          KP<span aria-hidden="true">.</span>
        </a>

        <ul id="nav-menu" className={`navbar__links${open ? " is-open" : ""}`}>
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`navbar__link${active === id ? " is-active" : ""}`}
                aria-current={active === id ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <div className="lang-switch" role="group" aria-label={t.nav.langLabel}>
            {["es", "en"].map((code) => (
              <button
                key={code}
                type="button"
                className={lang === code ? "is-active" : ""}
                aria-pressed={lang === code}
                lang={code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.nav.toLight : t.nav.toDark}
            title={theme === "dark" ? t.nav.toLight : t.nav.toDark}
          >
            {theme === "dark" ? <BsSun aria-hidden="true" /> : <BsMoonStars aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="icon-btn navbar__toggle"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <HiX aria-hidden="true" /> : <HiOutlineMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
