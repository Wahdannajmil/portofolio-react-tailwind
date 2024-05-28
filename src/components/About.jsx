import React from 'react';
import "../App.css"

const Reach = () => {
  return (
    <section className="bg-[#2d3246] py-8 sm:pb-20 w-full h-full flex justify-center" id="projects">
      <div className="container mx-auto">
        <div className="mx-auto">
          <div className="mb-8">
            <h2 className="pt-10 text-4xl font-bold text-[#4c8bf5] mb-4">
              About Me
            </h2>
            <p className="text-xl font-normal text-white">
              Hello, my name is Wahdan Najmil Fata. I'm a recent graduate from Dian Nuswantoro University with expertise in Web Development.
            </p>
            <h2 className="pt-10 text-4xl font-bold text-[#4c8bf5] mb-4">
              Experiences
            </h2>
            <div className="text-xl font-normal text-white">
              <ul>
                <li>Frontend Web Development at Skilvul, Jakarta, Indonesia, remote (2023)</li>
              </ul>
            </div>
            <h2 className="pt-10 text-4xl font-bold text-[#4c8bf5] mb-4">
              Technicalities
            </h2> 
            <div className="text-xl text-white">
              <ul>
                <li>Languages: Javascript, PHP, Python, Java Typescript(soon)</li>
                <li>Framework: Reactjs, Bootstrap, Tailwind, Codeigniter, Laravel, NextJS(soon)</li>
                <li>Extension skills: Communication, Problem solving, Functional Programming, Collaboration</li>
              </ul>
            </div>
            <h2 className="pt-10 text-4xl font-bold text-[#4c8bf5] mb-4">
              Passion & Drives
            </h2>
            <p className="text-xl font-normal text-white">
              Beyond my technical abilities, I am driven by my hobbies of gaming, photography, and playing the guitar. This interest shows my creativity and desire for excellence, which I bring to every project I work on.
            </p>
            <h2 className="pt-10 text-4xl font-bold text-[#4c8bf5] mb-4">
              Education
            </h2>
            <p className="pb-24 text-xl font-normal text-white">
              I hold a Bachelor's degree in Information Engineering with cum laude honors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reach;
