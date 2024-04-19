import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/images/logo.png";
import "../App.css"
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <aside className={`bg-[#2d3246] text-[#4c8bf5] pl-8 pt-12 pb-12 h-screen flex flex-col justify-between ${isOpen ? 'shadow-lg' : ''}`}>
      <div>
        <div className="flex justify-between items-center mb-16">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img src={Logo} alt="Logo" className="h-16" />
          </NavLink>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="text-left space-y-5">
            <li>
              <NavLink
                to="/"
                exact
                className={`text-md font-bold transition duration-300 transform hover:scale-110 ${activePage === '/' ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                CV
                {activePage === '/' && <span className="block w-1/2 h-1 bg-white"></span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                exact
                className={`text-md font-bold transition duration-300 transform hover:scale-110 ${activePage === '/about' ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                ABOUT
                {activePage === '/about' && <span className="block w-1/2 h-1 bg-white"></span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                exact
                className={`text-md font-bold transition duration-300 transform hover: scale-100 ${activePage === '/projects' ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                PROJECTS
                {activePage === '/projects' && <span className="block w-1/2 h-1 bg-white"></span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reach"
                exact
                className={`text-md font-bold transition duration-300 transform hover:scale-110 ${activePage === '/reach' ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                REACH
                {activePage === '/reach' && <span className="block w-1/2 h-1 bg-white"></span>}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-center">
        <div className="flex flex-col text-center space-y-8">
          <a href="https://www.linkedin.com/in/wahdan-najmil-fata-949aa825a" target="_blank" rel="noopener noreferrer" className="text-[#4c8bf5]">
            <FaLinkedin size={32} className="transition duration-300 transform hover:scale-110" />
          </a>
          <a href="https://github.com/Wahdannajmil" target="_blank" rel="noopener noreferrer" className="text-[#4c8bf5] mt-2">
            <FaGithub size={32} className="transition duration-300 transform hover:scale-110" />
          </a>
          <a href="https://www.instagram.com/your_username/" target="_blank" rel="noopener noreferrer" className="text-[#4c8bf5] mt-2">
            <FaInstagram size={32} className="transition duration-300 transform hover:scale-110" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
