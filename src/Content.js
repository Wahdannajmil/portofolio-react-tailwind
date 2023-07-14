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
        logo: figma,  
      },
      {
        name: "html",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "js",
        logo: js,
      },
      {
        name: "Bootstrap",
        logo: Bootstrap,
      },
      {
        name: "Tailwind",
        logo: Tailwind,
      },
      {
        name: "React js",
        logo: reactjs,
      },

    ],
    icon: MdArrowForward,
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
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "najmilwahdan@gmail.com",
        icon: GrMail,
        link: "mailto:najmilwahdan@gmail.com",
      },
      {
        text: "+62 823 3184 4648",
        icon: MdCall,
        link: "https://wa.me/6282331844648",
      },
      {
        text: "codingwithenjoy",
        icon: BsInstagram,
        link: "https://www.instagram.com/najmilwahdan_/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
