import { StaticImageData } from "next/image";

export type Skill = {
  name: string;
  icon: React.ReactNode; // Allows you to pass a react-icon component
  color?: string; // Optional: for icon color if needed
};

export type Project = {
  name: string;
  techStack: string[]; // List of technologies used
  description: string[]; // Multiple points describing the project
  imgURL: string | StaticImageData; // Image URL for the project
  src: string; // Source code URL
  liveDemo: string; // Live demo URL
};

export type Job = {
  title: string;        // Job title
  company: string;      // Company name
  date: string;         // Period (e.g., "2020 - Present")
  description: string;  // Job description (can be multiple lines, optionally use string[])
};

