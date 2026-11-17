import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <a href="#home" className="to-top" aria-label={t.footer.top} title={t.footer.top}>
      <FaAngleUp aria-hidden="true" />
    </a>
  );
}
