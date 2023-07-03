import Hero_person from "./assets/images/Hero/person.png";
import figma from "./assets/images/Skills/figma.png";
import html from "./assets/images/Skills/html.png";
import Bootstrap from "./assets/images/Skills/bootstrap.png";
import reactjs from "./assets/images/Skills/react.png";
import css from "./assets/images/Skills/css.png";
import js from "./assets/images/Skills/js.png";
import Tailwind from "./assets/images/Skills/tailwind.png";
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";
import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Frontend Web Developer",
    firstName: "Wahdan Najmil",
    LastName: "Fata",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "I'm",
        text: "Informatics engineering Student in Dian Nuswantoro University",
      },
      {
        text: "Welcome to my personal website",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,  
      },
      {
        name: "html",
        para: "Lorem ipsum text  dummy",
        logo: html,
      },
      {
        name: "CSS",
        para: "Lorem ipsum text  dummy",
        logo: css,
      },
      {
        name: "js",
        para: "Lorem ipsum text  dummy",
        logo: js,
      },
      {
        name: "Bootstrap",
        para: "Lorem ipsum text  dummy",
        logo: Bootstrap,
      },
      {
        name: "Tailwind",
        para: "Lorem ipsum text  dummy",
        logo: Tailwind,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },

    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codingwithenjoy@gmail.com",
        icon: GrMail,
        link: "mailto:codingwithenjoy@gmail.com",
      },
      {
        text: "+98 930 311 5211",
        icon: MdCall,
        link: "https://wa.me/9917877456",
      },
      {
        text: "codingwithenjoy",
        icon: BsInstagram,
        link: "https://www.instagram.com/codingwithenjoy/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
