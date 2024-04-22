import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import About from "./components/About";
import Reach from "./components/Reach";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <Router>
      <div className="flex flex-col lg:flex-row h-screen">
        <div className="lg:w-1/6 z-30">
          <Sidebar />
        </div>
        <div className="w-full lg:w-5/5 overflow-y-auto">
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/reach" element={<Reach />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

