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
  JPMC,
  Sigma,
  Doble,
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
    title: "Software Engineer",
    company_name: "JPMorgan Chase",
    icon: JPMC, // or local icon if available
    iconBg: "#E6DEDD",
    date: "Sep 2024 – Present",
    points: [
      "Scaled a loan origination platform handling $500M+ annually using Java, Spring Boot, Angular.",
      "Built REST APIs for credit scoring, document verification, and credit bureau integrations.",
      "Boosted fraud detection efficiency with rule-based filters and Spring Cache/Redis.",
      "Integrated OAuth 2.0 & JWT auth for all microservices; passed audits with zero exceptions.",
      "Built ETL pipelines with Apache NiFi + custom Java to ingest millions of records/day.",
      "Optimized MySQL performance with indexing/schema changes; improved API response by 40%.",
      "Achieved 90%+ unit/integration test coverage using JUnit and Mockito.",
      "Collaborated cross-functionally to deliver 10+ compliance features, reducing rework by 20%.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Doble Engineering",
    icon: Doble, // Replace with actual logo or local image
    iconBg: "#383E56",
    date: "Jan 2024 – July 2024",
    points: [
      "Built real-time alerting for power systems using Apache Kafka & .NET Core.",
      "Migrated legacy time-series data from OSIsoft PI to PostgreSQL via C++ modules.",
      "Developed Kafka simulator and REST APIs for event testing and processing.",
      "Implemented Redis caching for Kafka offsets, reducing latency by 40%.",
      "Containerized Kafka infra using gRPC microservices, Docker, and Kubernetes.",
      "Deployed CI/CD with Jenkins, reducing release cycle time by 40%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Sigma InfoTech",
    icon: Sigma, // Replace with actual logo or local image
    iconBg: "#E6DEDD",
    date: "Jun 2020 – July 2022",
    points: [
      "Built a scalable e-commerce app with React.js, Node.js, Express.js, and WebSockets.",
      "Created reusable and accessible UI components with Redux, HTML5, CSS3, and Bootstrap.",
      "Integrated REST APIs in Node.js and Go for seamless backend workflows.",
      "Secured payment flows with JWT auth and Stripe API integration.",
      "Improved backend with async Node.js workflows for better concurrency.",
      "Deployed apps via GitHub Actions to AWS EC2 & S3; automated builds using Python.",
      "Wrote Selenium E2E tests and collaborated in Agile teams with JIRA & Git.",
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
    source_code_link: "https://github.com/AshishShethia/Tree-Trips",
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
    source_code_link: "https://github.com/AshishShethia/AED_Final_Project",
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
