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
  },
  {
    name: "Food Ordering App",
    techStack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Prisma", "PostgreSQL"],
    description: [
      "Developed a full-stack food ordering system with menu browsing, cart flow, and order management.",
      "Built a scalable backend with Prisma + PostgreSQL and used Redux Toolkit for robust global state management.",
    ],
    imgURL: "",
  },
  {
    name: "LMS Platform",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui", "Redux Toolkit"],
    description: [
      "Created a modern LMS with role-based authentication, lesson/content management, and a production-ready exam module.",
      "Engineered reusable UI components, optimized form handling with Formik/Yup, and added animations plus toast feedback for UX.",
    ],
    imgURL: "",
  },
  {
    name: "AI LMS with Conversational Tutor",
    techStack: ["Next.js", "React", "TypeScript", "Clerk Auth", "shadcn/ui"],
    description: [
      "Built an LMS that allows users to create lessons and interact with an AI tutor through real-time chat.",
      "Implemented Clerk for authentication, designed reusable UI, and integrated AI conversation logic for personalized learning.",
    ],
    imgURL: "",
  },
  {
    name: "Chat Application",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Socket.io"],
    description: [
      "Developed a full-stack food ordering system with menu browsing, cart flow, and order management.",
      "Built a scalable backend with Prisma + PostgreSQL and used Redux Toolkit for robust global state management.",
    ],
    imgURL: "",
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
  },
  {
    name: "LMS Platform",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui", "Redux Toolkit"],
    description: [
      "Created a modern LMS with role-based authentication, lesson/content management, and a production-ready exam module.",
      "Engineered reusable UI components, optimized form handling with Formik/Yup, and added animations plus toast feedback for UX.",
    ],
    imgURL: "",
  },
  {
    name: "E-Commerce Websites",
    techStack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Prisma", "PostgreSQL"],
    description: [
      "Developed a full-stack food ordering system with menu browsing, cart flow, and order management.",
      "Built a scalable backend with Prisma + PostgreSQL and used Redux Toolkit for robust global state management.",
    ],
    imgURL: "",
  },
  {
    name: "Chat Application",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Socket.io"],
    description: [
      "Developed a full-stack food ordering system with menu browsing, cart flow, and order management.",
      "Built a scalable backend with Prisma + PostgreSQL and used Redux Toolkit for robust global state management.",
    ],
    imgURL: "",
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
