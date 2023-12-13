// import Hero_person from "./assets/images/Hero/person.png";
import figma from "./assets/images/Skills/figma.png";
import html from "./assets/images/Skills/html.png";
import Bootstrap from "./assets/images/Skills/bootstrap.png";
import reactjs from "./assets/images/Skills/react.png";
import css from "./assets/images/Skills/css.png";
import js from "./assets/images/Skills/js.png";
import Tailwind from "./assets/images/Skills/tailwind.png";
import gitbash from "./assets/images/Skills/gitbash.png"
import project1 from "./assets/images/Projects/project1.png";
import project2 from "./assets/images/Projects/project2.png";
import project3 from "./assets/images/Projects/project3.png";
import project4 from "./assets/images/Projects/project4.png";
import project5 from "./assets/images/Projects/project5.png";
import project7 from "./assets/images/Projects/project7.png";
import project8 from "./assets/images/Projects/netflix-clone.png"
import project9 from "./assets/images/Projects/google-search.png"
import project10 from "./assets/images/Projects/simple-ecom.png"
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiProjectorLine } from "react-icons/ri";
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
    // image: Hero_person,
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
      {
        name: "GIT / GITBASH",
        logo: gitbash,
      },
    ],
    icon: MdArrowForward,
  },
  
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "Optima Balita",
        image: project1,
        link: "https://optima-balita.netlify.app/",
        description: "Website ini merupakan project akhir dari program MSIB di SKILVUL, project ini dibuat dengan React js, menggunakan React context sebagai state management, dan memanfaatkan data dari API "
      },
      {
        title: "Todo list App",
        image: project2,
        link: "https://todolist-wahdan-skilvul.netlify.app/",
        description : "Ini merupakan sebuah fitur todolist yaitu dibuat dengan menggunakan React js"
      },
      {
        title: "My Portofolio Website",
        image: project3,
        link: "https://github.com/Wahdannajmil/portofolio-react-tailwind",
        description : "Website ini merupakan personal webstite yang saya buat berisi koleksi proyek, hasil karya, atau pengalaman kerja yang dimiliki"
      },
      {
        title: "BMI kalkulator",
        image: project4,
        link: "https://bmikalkulator-wahdan.netlify.app/",
        description : "Fitur yang saya buat untuk memenuhi tugas dari Program MSIB dari skilvul"
      },
      {
        title: "Jogja Food Hunter",
        image: project5,
        link: "https://github.com/Wahdannajmil/Jogja-food-hunter",
        description : "Website ini saya buat secara berkelompok yaitu untuk memenuhi tugas mata kuliah RPLL(Rekayasa perangkat lunak lanjut), di buat menggunakan php native"
      },
      {
        title: "Netflix Clone",
        image: project8,
        link: "https://netflix-clone-wahdan.netlify.app/",
        description : "Project Ini saya buat untuk meningkatkan kemampuan koding saya"
      },
      {
        title: "Google Search Clone",
        image: project9,
        link: "https://google-clone-wahdan.netlify.app/",
        description : "Project Ini saya buat untuk meningkatkan kemampuan koding saya"
      },
      {
        title: "Simple E Commerce",
        image: project10,
        link: "https://simple-commerce-wahdan.netlify.app/",
        description : "Project Ini saya buat untuk meningkatkan kemampuan koding saya"
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
        text: "najmilwahdan_",
        icon: BsInstagram,
        link: "https://www.instagram.com/najmilwahdan_/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
