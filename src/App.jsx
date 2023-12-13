import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
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
      <footer className="p-10 text-center" style={{backgroundColor : "#003566"}}>
        <h6 className="mb-3 text-white">Wahdan Najmil Fata</h6>
        <p className="text-white">Frontend Web Developer</p>
      </footer>
    </div>
  );
};

export default App;
