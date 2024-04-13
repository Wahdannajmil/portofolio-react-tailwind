import React, { useState } from "react";
import { content } from "../Content";
import Swal from "sweetalert2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const { Projects } = content;
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectContent = Projects.project_content;

  const handleReadMore = (content) => {
    if (content.title === "Jogja Food Hunter") {
      Swal.fire({
        title: "Mohon maaf",
        text: "Project ini masih dijalankan di localhost, belum dilakukan deployment",
        icon: "info",
        confirmButtonText: "Lihat kode di github",
      }).then(() => {
        window.open("https://github.com/Wahdannajmil/Jogja-food-hunter", "_blank");
      });
    } else {
      window.open(content.link, "_blank");
    }
  };

  const handleViewSource = (content) => {
    window.open(content.source, "_blank");
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goNext = () => {
    const nextSlide = currentSlide === projectContent.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  const goPrev = () => {
    const prevSlide = currentSlide === 0 ? projectContent.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  return (
    <section className="bg-[#2d3246] py-8 w-full flex justify-center" id="projects">
      <div className="container mx-auto">
        <div className=" mx-auto">
          <h2 className="pt-10 text-4xl font-Montserrat font-bold text-blue-500 mb-8">{Projects.subtitle}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectContent.map((content, i) => (
              <div key={i} className={`rounded-lg overflow-hidden bg-white shadow-lg transition duration-300 transform hover:scale-105 justify-self-start`}>
                <img src={content.image} alt="Project" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
                  <p className="text-gray-700 mb-4">{content.description}</p>
                  <button
                    className="text-blue-500 font-semibold hover:text-blue-700 text-underlined mr-2"
                    onClick={() => handleReadMore(content)}
                  >
                    Visit
                  </button>
                  <button
                    className="text-green-500 font-semibold hover:text-blue-700 pr-4"
                    onClick={() => handleViewSource(content)}
                  >
                    Source
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-blue-500 font-semibold hover:text-blue-700 text-2xl text-underlined text-center mt-8">Exciting Projects Revealed Soon......</p>
          <div className="flex justify-center mt-8">
            <button onClick={goPrev} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l mr-2">
              <FaArrowLeft className="inline-block mr-1" /> Prev
            </button>
            <button onClick={goNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
              Next <FaArrowRight className="inline-block ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
