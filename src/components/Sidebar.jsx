import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/images/mylogo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="bg-[#2d3246] text-[#4c8bf5] pl-8 pt-12 pb-12 h-screen flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-8">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img src={Logo} alt="Logo" className="h-12" />
          </NavLink>
        </div>
        <nav className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="text-left space-y-8">
            <li>
              <NavLink
                to="/about"
                exact // Tambahkan properti exact di sini
                className="text-md font-bold transition duration-300 transform hover:scale-110"
                activeClassName="bg-blue-800"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                exact // Tambahkan properti exact di sini
                className="text-md font-bold transition duration-300 transform hover: scale-100"
                onClick={() => setIsOpen(false)}
              >
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reach"
                exact // Tambahkan properti exact di sini
                className="text-md font-bold transition duration-300 transform hover:scale-110"
                onClick={() => setIsOpen(false)}
              >
                REACH
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
      <div className="p-auto">
        <div className="flex justify-center p-3 items-center rounded-full bg-slate-800">
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden ml-4">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
