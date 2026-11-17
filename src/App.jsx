import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ContactLinks from "./components/ContactLinks";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";
import { LanguageProvider } from "./components/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <main id="main" className="main">
          <Landing />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <ContactLinks />
        </main>
        <ScrollToTop />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
