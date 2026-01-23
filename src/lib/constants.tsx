import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiPostgresql, SiSvelte } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { Skill, Project, Job } from "./types";


export const Projects: Project[] = [
  {
    name: "Basket E-Commerce",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase"],
    description: [
      "Built a full e-commerce platform with authentication, product catalogs, and secure checkout.",
      "Reduced loading time using optimized image handling and server-side rendering.",
    ],
    imgURL: "",
    src: "https://github.com/omarabdo1414/Basket",
    liveDemo: "",
  },
  {
    name: "Food Ordering App",
    techStack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Prisma", "PostgreSQL"],
    description: [
      "Developed a full-stack food ordering system with menu browsing, cart flow, and order management.",
      "Built a scalable backend with Prisma + PostgreSQL and used Redux Toolkit for robust global state management.",
    ],
    imgURL: "",
    src: "https://github.com/omarabdo1414/food-ordering",
    liveDemo: "",
  },
  {
    name: "LMS Platform",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui", "Redux Toolkit"],
    description: [
      "Created a modern LMS with role-based authentication, lesson/content management, and a production-ready exam module.",
      "Engineered reusable UI components, optimized form handling with Formik/Yup, and added animations plus toast feedback for UX.",
    ],
    imgURL: "",
    src: "https://github.com/omarabdo1414/LMS",
    liveDemo: "https://lms-lilac-nu.vercel.app/",
  },
  {
    name: "Chat Application",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Socket.io"],
    description: [
      "Developed a full-stack food ordering system with menu browsing, cart flow, and order management.",
      "Built a scalable backend with Prisma + PostgreSQL and used Redux Toolkit for robust global state management.",
    ],
    imgURL: "",
    src: "",
    liveDemo: "",
  },
  {
    name: "HTML & CSS Template Design One",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    description: [
      "Designed and developed responsive HTML & CSS templates for various industries.",
      "Ensured cross-browser compatibility and optimized performance for fast loading times.",
    ],
    imgURL: "",
    src: "https://github.com/omarabdo1414/HTML_CSS_Template_One",
    liveDemo: "https://omarabdo1414.github.io/HTML_CSS_Template_One/",
  },
  {
    name: "HTML & CSS Template Design Two",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    description: [
      "Designed and developed responsive HTML & CSS templates for various industries.",
      "Ensured cross-browser compatibility and optimized performance for fast loading times.",
    ],
    imgURL: "",
    src: "https://github.com/omarabdo1414/HTML_CSS_Template_Two",
    liveDemo: "https://omarabdo1414.github.io/HTML_CSS_Template_Two/",
  },
  {
    name: "HTML & CSS Template Design Three",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    description: [
      "Designed and developed responsive HTML & CSS templates for various industries.",
      "Ensured cross-browser compatibility and optimized performance for fast loading times.",
    ],
    imgURL: "",
    src: "https://github.com/omarabdo1414/HTML_CSS_Template_Three",
    liveDemo: "https://omarabdo1414.github.io/HTML_CSS_Template_Three/",
  },
  {
    name: "JavaScript Template",
    techStack: ["JavaScript", "ES6+", "DOM Manipulation", "HTML5", "CSS3"],
    description: [
      "Created interactive JavaScript templates showcasing dynamic content and user interactions.",
      "Implemented modern JavaScript features for improved code readability and maintainability.",
    ],
    imgURL: "",
    src: "https://github.com/omarabdo1414/JavaScript_Template",
    liveDemo: "https://omarabdo1414.github.io/JavaScript_Template/",
  },
  {
    name: "Bondi BootStrap",
    techStack: ["Bootstrap", "HTML5", "CSS3", "JavaScript"],
    description: [
      "Developed a custom Bootstrap-based template for rapid web development.",
      "Customized Bootstrap components to align with modern design principles and enhance user experience.",
    ],
    imgURL: "",
    src: "https://github.com/omarabdo1414/Bondi_Bootsrap",
    liveDemo: "https://omarabdo1414.github.io/Bondi_Bootsrap/",
  }
];  


export const FeaturedProjects: Project[] = [
  {
    name: "Food Ordering App",
    techStack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Prisma", "PostgreSQL"],
    description: [
      "Developed a full-stack food ordering system with menu browsing, cart flow, and order management.",
      "Built a scalable backend with Prisma + PostgreSQL and used Redux Toolkit for robust global state management.",
    ],
    imgURL: "",
    src: "https://github.com/omarabdo1414/food-ordering",
    liveDemo: "",
  },
  {
    name: "LMS Platform",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui", "Redux Toolkit"],
    description: [
      "Created a modern LMS with role-based authentication, lesson/content management, and a production-ready exam module.",
      "Engineered reusable UI components, optimized form handling with Formik/Yup, and added animations plus toast feedback for UX.",
    ],
    imgURL: "",
    src: "https://github.com/omarabdo1414/LMS",
    liveDemo: "https://lms-lilac-nu.vercel.app/",
  },
  {
    name: "Basket E-Commerce",
    techStack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Prisma", "PostgreSQL"],
    description: [
      "Developed a full-stack food ordering system with menu browsing, cart flow, and order management.",
      "Built a scalable backend with Prisma + PostgreSQL and used Redux Toolkit for robust global state management.",
    ],
    imgURL: "",
    src: "https://github.com/omarabdo1414/Basket",
    liveDemo: "",
  },
  {
    name: "Chat Application",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Socket.io"],
    description: [
      "Developed a full-stack food ordering system with menu browsing, cart flow, and order management.",
      "Built a scalable backend with Prisma + PostgreSQL and used Redux Toolkit for robust global state management.",
    ],
    imgURL: "",
    src: "",
    liveDemo: "",
  }
]


export const Skills: Skill[] = [
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" size={90} /> },
  { name: "CSS3", icon: <FaCss3Alt color="#0065f4" size={90} /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={90} /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={90} /> },
  { name: "React.js", icon: <FaReact color="#61DAFB" size={90} /> },
  { name: "Redux", icon: <SiRedux color="#764ABC" size={90} /> },
  { name: "Next.js", icon: <SiNextdotjs size={90} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" size={90} /> },
  { name: "Responsive", icon: <DiResponsive color="#38BDF8" size={90} /> },
  { name: "Svelte", icon: <SiSvelte color="#fd480a" size={90} /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" size={90} /> },
  { name: "GitHub", icon: <FaGithub size={90} /> },
  { name: "Python", icon: <FaPython color="#4B8BBE" size={90} /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" size={90} /> },
  { name: "SQL", icon: <TbSql color="#4479A1" size={90} /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={90} /> },
];


export const Experinces : Job[] = [
  {
    title: "English Conding Instructor",
    company: "iSchool",
    date: "Nov 2024 - present",
    description: "Developed interactive educational web applications using React and TypeScript to enhance student learning. Mentored 100+ students in Python, C++, and JavaScript, improving engagement through project-based teaching. ",
  },
  {
    title: "Embedded Software Engineer",
    company: "Innovate Inc.",
    date: "Nov 2023 - Oct 2024",
    description: "Built optimized embedded C++ systems, achieving a 20% performance improvement. Collaborated on robotics interfaces and system optimization.",
  },
  
];
