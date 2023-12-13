import React, { useState } from "react";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Swal from "sweetalert2";

const Projects = () => {
  const { Projects } = content;
  const [selectedProject, setSelectedProject] = useState(null);

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

  return (
    <section className="bg-bg_light_primary pb-10" id="projects">
      <div className="md:container min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>

        {selectedProject && (
          <div className="selected-project">
            <button
              className="close-button"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
            <iframe src={selectedProject} title="Selected Project" />
          </div>
        )}

        <div className="flex items-center lg:flex-row flex-col-reverse">
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-4xl drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <p>{content.description}</p> 
                  <button
                    className="font-bold text-gray self-end"
                    onClick={() => handleReadMore(content)}
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
