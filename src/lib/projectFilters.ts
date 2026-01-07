import { Project } from "./types";

export type FilterType = "All" | "Next.js" | "React" | "Full Stack" |"JavaScript" | "HTML/CSS";

export interface FilterOption {
  id: FilterType;
  label: string;
}

export const filterOptions: FilterOption[] = [
  { id: "All", label: "All" },
  { id: "Next.js", label: "Next.js" },
  { id: "React", label: "React" },
  { id: "Full Stack", label: "Full Stack" },
  { id: "JavaScript", label: "JavaScript" },
  { id: "HTML/CSS", label: "HTML/CSS" },
];

export function filterProjects(projects: Project[], filter: FilterType): Project[] {
  if (filter === "All") {
    return projects;
  }

  return projects.filter((project) => {
    const name = project.name.toLowerCase();
    const description = project.description.join(" ").toLowerCase();
    const techStack = project.techStack.map((tech) => tech.toLowerCase());

    switch (filter) {
      case "Next.js":
        return techStack.includes("next.js") || techStack.includes("nextjs");

      case "React":
        return techStack.some((tech) => tech.includes("react"));

      case "HTML/CSS":
        return techStack.includes("HTML5") || techStack.includes("CSS3");

      case "Full Stack":
        return (
          techStack.some((tech) =>
            ["postgresql", "prisma", "node.js", "express", "supabase"].includes(tech)
          )
        );

      case "JavaScript":
        return techStack.includes("javascript");

      default:
        return true;
    }
  });
}

