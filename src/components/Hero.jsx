import React from 'react';
import { motion } from 'framer-motion';
import "../App.css"

const HeroBanner = () => {

  const handleDownloadCV = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/src/assets/images/Hero/WAHDAN NAJMIL FATA_CV.pdf"
    downloadLink.download = "Wahdan_Najmil_CV.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <motion.section
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#2d3246] h-screen flex justify-center items-center"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-white"
      >
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl lg:text-6xl text-[#4c8bf5] font-bold mb-8"
        >
          WAHDAN NAJMIL FATA
        </motion.h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleDownloadCV} 
        >
          <span className="flex items-center justify-center">
            <span>Download CV</span>
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default HeroBanner;
