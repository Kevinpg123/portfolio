import resume from "../assets/images/cvnuevo1.png";
import resume2 from "../assets/images/cvnuevo2.png"
import { useTheme } from "./ThemeContext";
import style from './Resume.module.css'

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section id="resume" className="resume-section">
      <h2 className={`page-header page-header-${theme}`}>Resume</h2>
      <div style={{ marginLeft: '1em' }} className="resume__container">

        <img

          className={`resume__img${theme === "light" ? " light" : ""}`}
          src={resume}
          title="Click to view PDF"
        />



        <p>Read More: </p>
        <a
          href="https://drive.google.com/file/d/1pJLPM-mY_tj-0ypwroIWz_kZ0dith0mK/view?usp=sharing"
          className="resume__link"
          rel="noreferrer"
          target="_blank"
        ><img className={style.flagImg} src="https://firebasestorage.googleapis.com/v0/b/portfolio-aeb2a.appspot.com/o/bandera%20inglesa.png?alt=media&token=cfee7fff-dfff-4c81-b42d-a54860ae2144"></img>
        </a>
        <a
          href="https://drive.google.com/file/d/1R8PMVDJEtnvXbx88-nGk0YSuwzlVv8zW/view?usp=sharing"
          className="resume__link"
          rel="noreferrer"
          target="_blank"
        >
          <img className={style.flagImg} src="https://firebasestorage.googleapis.com/v0/b/portfolio-aeb2a.appspot.com/o/Bandera_de_Espa%C3%B1a_(sin_escudo).svg.png?alt=media&token=12ea8528-5f95-4890-9142-e39509639395"></img>
        </a>
      </div>


    </section>
  );
}
