import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from 'react-icons/fa';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Tambahkan logika untuk mengubah tema situs di sini
  };

  return (
    <footer className="pt-12 pr-8 pb-12 text-center bg-[#2d3246] fixed bottom-0 right-0 h-screen flex flex-col justify-between">
      <div className="flex justify-end items-center">
        {darkMode ? (
          <FaSun onClick={toggleDarkMode} className="text-yellow-500 text-xs md:text-3xl lg:text-4xl mr-2 cursor-pointer transition duration-300 hover:text-white transform hover:scale-110" />
        ) : (
          <FaMoon onClick={toggleDarkMode} className="text-white text-xs md:text-3xl lg:text-4xl mr-2 cursor-pointer transition duration-300 hover:text-white transform hover:scale-110" />
        )}
      </div>
      <h6 className="text-white font-bold text-xl md:text-xl lg:text-2xl" style={{ color: "#4c8bf5" }}>2024</h6>
    </footer>
  );
};

export default Footer;
