import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiPostgresql } from "react-icons/si";
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
  },
  {
    name: "Food Ordering App",
    techStack: ["Next.js", "TypeScript", "Redux Toolkit", "Prisma", "PostgreSQL"],
    description: [
      "Developed a full-stack food ordering system with menu browsing, cart flow, and order management.",
      "Built a scalable backend with Prisma + PostgreSQL and used Redux Toolkit for robust global state management.",
    ],
  },
  {
    name: "LMS Platform",
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind", "shadcn/ui", "Redux Toolkit"],
    description: [
      "Created a modern LMS with role-based authentication, lesson/content management, and a production-ready exam module.",
      "Engineered reusable UI components, optimized form handling with Formik/Yup, and added animations plus toast feedback for UX.",
    ],
  },
  {
    name: "AI LMS with Conversational Tutor",
    techStack: ["Next.js", "TypeScript", "Clerk Auth", "shadcn/ui"],
    description: [
      "Built an LMS that allows users to create lessons and interact with an AI tutor through real-time chat.",
      "Implemented Clerk for authentication, designed reusable UI, and integrated AI conversation logic for personalized learning.",
    ],
  },
];


export const Skills: Skill[] = [
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" size={40} /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={40} /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={40} /> },
  { name: "React.js", icon: <FaReact color="#61DAFB" size={40} /> },
  { name: "Redux", icon: <SiRedux color="#764ABC" size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs color="#000000" size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" size={40} /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" size={40} /> },
  { name: "GitHub", icon: <FaGithub color="#181717" size={40} /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" size={40} /> },
  { name: "SQL", icon: <TbSql color="#4479A1" size={40} /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={40} /> },
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
