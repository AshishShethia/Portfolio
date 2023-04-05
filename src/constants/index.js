import { a } from "maath/dist/objectSpread2-284232a6.esm";
import {
  mobile,
  backend,
  creator,
  web,

  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  neu,
  jobit,
  tripguide,
  threejs,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: " Java Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },

  
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  
];

const experiences = [
  {
    title: "Software Research Intern",
    company_name: "Blue Eye Soft",
    icon: starbucks,
    iconBg: "#383E56",
    date: "FEB 2021 - Sept 2021",
    points: [
      "Collaborated with team of 4 and ideated a software for Asteroid detection model with an accuracy of 89% by training the model on a custom dataset with over 1000 images and predicted threat an asteroid can poses towards satellite",
      "Demonstrated use of different Python libraries such as NumPy for calculating astrometric parameters of asteroid",
      "Implemented fastest neural network YOLO (You Only Look Once) for object detection and reduced the lead time of the overallproject by 20% as Yolo processed the image at 45 frames per second",
      "Authored and published 2 research paper at Amos International Conference in September 2021",
    ],
  },
  { 
    title: "Web Developer Intern",
    company_name: "Creative Finserve",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "SEPT 2020 - SEPT 2021",
    points: [
      "Coordinated a team of 6 for developing robust CRM incorporating features like, user specific statutory forms and selfassessing loan eligibility for clients seeking loan and also for company to manage its financial loan disbursement functions",
      "Designed a dynamic UI leveraging Bootstrap which is easily customizable and provides responsive classes using Django",
      "Employed database with MySQL on PythonAnywhere server for handling live database and enabled data synchronization where details of registered customers are stored and handled securely improving scalability up to 30%",
      "Build algorithm for Comparing loan criteria assuring users to get deals at minimum 5% less compared to global market",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tree Tips",
    description:
      "A MERN Stack website focused on helping users to get best deals on hotel accommodations where users can book and pay for their desired staycation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Sanjaytholani/INFO-6150-Final_Project",
  },
  {
    name: "University  Management",
    description:
    "A multi-level enterprise-based application, consisted of 4 enterprises, 8 organization and 8 roles in Java u, A Structured Portal focused on response and request of users",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Swing",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
    ],
    image: neu,
    source_code_link: "https://github.com/AshishShethia/Assignment-2-shethia_ashish_002776691",
  },
  {
    name: "Car Pooling",
    description:
      " A database system managming Car pooling where users can be a driver and schedule a trip to any location, while the passengers can book it as a share ride ",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "Tableau",
        color: "green-text-gradient",
      },
      {
        name: "Database",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AshishShethia/DMDD_Project",
  },
];

export { services, technologies, experiences, testimonials, projects };
