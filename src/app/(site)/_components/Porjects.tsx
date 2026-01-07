import SectionTitle from "@/components/common/SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  
  return (
    <section className="py-16 px-4 md:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionTitle title="Featured Projects" />
          <p className="mt-3 text-base text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of projects showcasing full-stack development, UI design,
            and performance-focused implementations.
          </p>
        </div>
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
