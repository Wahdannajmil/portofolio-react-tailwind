import project1 from "./assets/images/Projects/project1.png";
import project2 from "./assets/images/Projects/project2.png";
import project3 from "./assets/images/Projects/myporto.png";
import project4 from "./assets/images/Projects/project4.png";
import project5 from "./assets/images/Projects/project5.png";
import project8 from "./assets/images/Projects/netflix-clone.png"
import project9 from "./assets/images/Projects/google-search.png"
import project10 from "./assets/images/Projects/simple-ecom.png"
import mycare from "./assets/images/Projects/mycare.png"
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
      link: "#aboutme",
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
  
  Projects: {
    title: "Projects",
    subtitle: "My Creation",
    project_content: [
      {
        title: "Optima Balita",
        image: project1,
        link: "https://www.givxl33t.site/",
        description: "This website was developed to serve the health of children under five in the Dukuhseti Health Center UPT working area, to facilitate consultations between medical personel and patients.",
        dev: "Developed with : Reactjs, Context, Tailwindcss, Nodejs, PostgreSQL",
        source: "https://github.com/Wahdannajmil/Optima-Balita"
      },
      {
        title: "My Care App",
        image: mycare,
        link: "https://github.com/Wahdannajmil/MyCare-App",
        description: "I created this website as a requirement for the professional web developer certification exam",
        dev: "Developed with : Php, MySQL ",
        source: "https://github.com/Wahdannajmil/MyCare-App"
      },
      {
        title: "My Portofolio Website",
        image: project3,
        link: "https://github.com/Wahdannajmil/portofolio-react-tailwind",
        description: "This website is a personal website that I created containing a collection of projects, work results, or work experience that I have",
        dev: "Developed with : Reactjs, Tailwindcss",
        source: "https://github.com/Wahdannajmil/portofolio-react-tailwind"
      },
      {
        title: "BMI kalkulator",
        image: project4,
        link: "https://bmikalkulator-wahdan.netlify.app/",
        description: "A feature that I created to fulfill the tasks of the MSIB Program from skilvul",
        dev: "Developed with : HTML, CSS, JS",
        source: "https://github.com/Wahdannajmil/BMI-wahdan-skilvul"
      },

            {
        title: "Todo list App",
        image: project2,
        link: "https://todolist-wahdan-skilvul.netlify.app/",
        description: "This is a to do list feature which is created as a task from skills in the MSIB program",
        dev: "Developed with : Reactjs, Tailwindcss, Redux",
        source: "https://github.com/Wahdannajmil/todolist-react-redux"
      },
      {
        title: "Jogja Food Hunter",
        image: project5,
        link: "https://github.com/Wahdannajmil/Jogja-food-hunter",
        description: "I created this website to fulfill an assignment for the RPLL (advanced software engineering) course",
        dev: "Developed with : Php Native, MySQL",
        source: "https://github.com/Wahdannajmil/Jogja-food-hunter"
      },
      {
        title: "Netflix Clone",
        image: project8,
        link: "https://netflix-clone-wahdan.netlify.app/",
        description: "I created this project to improve my coding skills",
        dev: "Developed with : Reactjs, Tailwindcss",
        source: "https://github.com/Wahdannajmil/netflix-clone"
      },
      {
        title: "Google Search Clone",
        image: project9,
        link: "https://google-clone-wahdan.netlify.app/",
        description: "I created this project to improve my coding skills",
        dev: "Developed with : Reactjs, Tailwindcss",
        source: "https://github.com/Wahdannajmil/google-search-clone"
      },
      {
        title: "Simple E Commerce",
        image: project10,
        link: "https://simple-commerce-wahdan.netlify.app/",
        description: "I created this project to improve my coding skills",
        dev: "Developed with : Reactjs, Tailwindcss",
        source: "https://github.com/Wahdannajmil/simple-ecommerce"
      },
    ],
  },
};
