"use client";

import Image from "next/image";
import { Project } from "@/lib/types";

// Images 
import project1 from "@/public/images/projects/Food Ordering Test.webp";
import project2 from "@/public/images/projects/LMS.png";
import project3 from "@/public/images/projects/E-Commerce.png";
import project4 from "@/public/images/projects/LMS.png";
import project5 from "@/public/images/projects/Chat.webp";

const images = [project1, project2, project3, project4, project5];

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  // Map projects to images based on project name
  // Basket E-Commerce -> E-Commerce.png
  // Food Ordering App -> Food Ordering Test.webp
  // LMS Platform -> LMS.png
  // AI LMS with Conversational Tutor -> Chat.webp
  const getProjectImage = () => {
    const name = project.name.toLowerCase();
    if (name.includes("basket") || name.includes("e-commerce")) {
      return project3; // E-Commerce.png
    } else if (name.includes("food ordering")) {
      return project1; // Food Ordering Test.webp
    } else if (name.includes("lms platform") && !name.includes("ai")) {
      return project2; // LMS.png
    } else if (name.includes("ai lms") || name.includes("conversational")) {
      return project4; // Conversational Tutor.webp
    } else if (name.includes("chat")) {
      return project5; // Chat.webp
    }
    // Fallback to index-based or project.imgURL
    return images[index] || project.imgURL;
  };

  const projectImage = getProjectImage();

  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden shrink-0">
        {projectImage ? (
          <Image
            src={projectImage}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-gray-400 dark:text-gray-600 mb-2">
                {project.name.charAt(0)}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                {project.name}
              </div>
            </div>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 sm:mb-3 dark:text-white line-clamp-1">
          {project.name}
        </h3>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-muted text-muted-foreground dark:bg-gray-800 dark:text-gray-300 border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Live Demo Button */}
        <button className="w-full px-3 sm:px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-xs sm:text-sm mt-auto">
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
