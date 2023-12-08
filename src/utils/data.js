import { nanoid } from "nanoid";

const projectsData = [
  {
    id: nanoid(),
    title: "Warmi Muyu",
    imageUrl: "./assets/warmi-muyu.jpg",
    description:
      "Web application designed to simplify the management of inventory by a group of female artisans",
    skills: ["css", "javascript", "react", "firebase"],
    gitHubUrl: "https://github.com/franciscovenes/warmi-muyu",
    netlifyUrl: "https://warmi-muyu-test.netlify.app/",
  },
  {
    id: nanoid(),
    title: "Twimba",
    imageUrl: "./assets/twimba.jpg",
    description:
      "Simulation of twitter's interface (Solo Project from Scrimba's Frontend Developer career path)",
    skills: ["html", "css", "javascript"],
    gitHubUrl: "https://github.com/franciscovenes/twimba",
    netlifyUrl: "https://twimba-by-chukirawa.netlify.app/",
  },
  {
    id: nanoid(),
    title: "Quizzical",
    imageUrl: "./assets/quizzical.jpg",
    description:
      "Quiz app that uses the Open Trivia database API (Solo Project from Scrimba's Frontend Developer career path)",
    skills: ["css", "javascript", "react"],
    gitHubUrl: "https://github.com/franciscovenes/quizzical",
    netlifyUrl: "https://fantastic-toffee-63860d.netlify.app/",
  },
  {
    id: nanoid(),
    title: "Rincón del Pancho",
    imageUrl: "./assets/rincon-del-pancho.jpg",
    description:
      "Simulation of a restaurant ordering app (Solo Project from Scrimba's Frontend Developer career path)",
    skills: ["css", "javascript", "react"],
    gitHubUrl: "https://github.com/franciscovenes/restaurant-order-app",
    netlifyUrl: "https://rincon-del-pancho.netlify.app/",
  },
];

export { projectsData };
