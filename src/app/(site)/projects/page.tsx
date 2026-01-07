"use client";

import { useState } from "react";
import { Projects } from "@/lib/constants";
import { FilterType, filterProjects } from "@/lib/projectFilters";
import SideNav from "@/components/projects/SideNav";
import ProjectGrid from "@/components/projects/ProjectGrid";

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const filteredProjects = filterProjects(Projects, selectedFilter);

  return (
    <div className="min-h-screen w-full">
      <div className="w-full flex flex-col lg:flex-row">
        <SideNav
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Main Content - Adjusts for fixed sidebar on desktop */}
        <div className="flex-1 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-12 pb-24 lg:pb-12">
          {/* Header Section */}
          <div className="mb-8 sm:mb-10 lg:mb-12 max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 dark:text-white">
              My Projects
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-gray-400 max-w-3xl">
              A selection of my best projects, showcasing my skills in web development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="max-w-7xl mx-auto">
            <ProjectGrid projects={filteredProjects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
