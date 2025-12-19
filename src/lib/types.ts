
export type Skill = {
  name: string;
  icon: React.ReactNode; // Allows you to pass a react-icon component
  color?: string; // Optional: for icon color if needed
};

export type Project = {
  name: string;
  techStack: string[]; // List of technologies used
  description: string[]; // Multiple points describing the project
};

export type Job = {
  title: string;        // Job title
  company: string;      // Company name
  date: string;         // Period (e.g., "2020 - Present")
  description: string;  // Job description (can be multiple lines, optionally use string[])
};

