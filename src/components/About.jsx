import img from "../assets/images/profilePhoto.png";
import { useTheme } from "./ThemeContext";
import style from './About.module.css'

export default function About() {
  const { theme } = useTheme();

  return (
    <section className="about">
      <h2 className={`page-header page-header-${theme}`}>About Me</h2>
      <div>
        <div className="bio-img">
          <img className={style.img} src={img} />
        </div>
        <div className="bio-desc">
          <p>
            Hello, I'm an enthusiastic full stack developer originally from Argentina, driven by a deep commitment to creating innovative solutions that leave a lasting impact. With a strong foundation in both front-end and back-end technologies, I bring a versatile skill set to the table.
          </p>

          <p>
            My development journey is fueled by a passion for clean, efficient code and a keen eye for detail. I take pride in turning intricate concepts into seamless user experiences, ensuring that every line of code contributes to a polished end product. My approach is not just about writing code; it's about architecting robust and scalable solutions that stand the test of time.
          </p>

          <p>
            Collaboration is at the heart of my work philosophy. I thrive in dynamic environments where creativity and teamwork converge. Let's embark on a journey to build something extraordinary together. Whether it's tackling complex challenges or bringing innovative ideas to life, I'm ready to contribute my skills and expertise to make a meaningful impact. Let's create a digital experience that goes beyond expectations and resonates with users. Welcome to my portfolio, where passion meets proficiency, and every project is an opportunity for excellence."
          </p>
        </div>
      </div>
    </section>
  );
}
