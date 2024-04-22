import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Logo from "../assets/images/logo.png";
import "../App.css";

const Sidebar = () => {
  const [activePage, setActivePage] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <aside className="lg:pt-12 lg:pl-8 lg:pb-12 p-1 fixed bottom-0 left-0 w-full lg:w-1/6 lg:h-screen bg-[#2d3246] text-[#4c8bf5]">
      <div>
        <div className="mb-16">
          <NavLink to="/" className={`block ${window.innerWidth < 640 ? 'hidden' : ''}`} onClick={() => setActivePage('/')}>
            <img src={Logo} alt="Logo" className="h-16" />
          </NavLink>
        </div>
        <nav>
          <ul className={`lg:space-y-5 ${window.innerWidth < 640 ? 'flex flex-row justify-between pl-7' : 'flex-col'}`}>
            <li>
              <NavLink
                to="/"
                exact
                className={`text-md font-bold transition duration-300 transform hover:scale-110 ${activePage === '/' ? 'active' : ''}`}
                onClick={() => setActivePage('/')}
              >
                CV
                {activePage === '/' && <span className="block lg:w-1/2 sm:w-1 h-1 bg-[#4c8bf5]"></span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                exact
                className={`text-md font-bold transition duration-300 transform hover:scale-110 ${activePage === '/about' ? 'active' : ''}`}
                onClick={() => setActivePage('/about')}
              >
                ABOUT
                {activePage === '/about' && <span className="block lg:w-1/2 sm:w-1 h-1 bg-[#4c8bf5]"></span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                exact
                className={`text-md font-bold transition duration-300 transform hover: scale-100 ${activePage === '/projects' ? 'active' : ''}`}
                onClick={() => setActivePage('/projects')}
              >
                PROJECTS
                {activePage === '/projects' && <span className="block lg:w-1/2 sm:w-1 h-1 bg-[#4c8bf5]"></span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reach"
                exact
                className={`text-md font-bold transition duration-300 transform hover:scale-110 ${activePage === '/reach' ? 'active' : ''}`}
                onClick={() => setActivePage('/reach')}
              >
                REACH
                {activePage === '/reach' && <span className="block lg:w-1/2 sm:w-1 h-1 bg-[#4c8bf5]"></span>}
              </NavLink>
            </li>
            <li>
            <div className="space-x-4 pt-20">
              <a href="https://www.linkedin.com/in/wahdan-najmil-fata-949aa825a" target="_blank" rel="noopener noreferrer" className={`text-[#4c8bf5] ${window.innerWidth < 640 ? 'hidden' : ''}`}>
                <FaLinkedin size={32} className="transition duration-300 transform hover:scale-110" />
              </a>
              <a href="https://github.com/Wahdannajmil" target="_blank" rel="noopener noreferrer" className={`text-[#4c8bf5] ${window.innerWidth < 640 ? 'hidden' : ''}`}>
                <FaGithub size={32} className="transition duration-300 transform hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/your_username/" target="_blank" rel="noopener noreferrer" className={`text-[#4c8bf5] ${window.innerWidth < 640 ? 'hidden' : ''}`}>
                <FaInstagram size={32} className="transition duration-300 transform hover:scale-110" />
              </a>
            </div>
            </li>
          </ul>
        </nav>
      </div>
      {/* Border atas untuk tampilan mobile */}
      <div className="lg:hidden border-t-2 border-[#4c8bf5]"></div>
    </aside>
  );
};

export default Sidebar;
