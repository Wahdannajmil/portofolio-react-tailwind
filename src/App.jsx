import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Wahdan Najmil Fata</h6>
        <p>Frontend Web Developer</p>
      </footer>
    </div>
  );
};

export default App;
