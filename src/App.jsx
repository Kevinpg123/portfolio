import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="main">
        <Landing />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <ScrollToTop />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
