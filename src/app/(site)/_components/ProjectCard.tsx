import Image from "next/image";

import { FeaturedProjects } from "@/lib/constants";

// Images 
import project1 from "@/public/images/projects/Food Ordering Test.webp";
import project2 from "@/public/images/projects/LMS.png";
import project3 from "@/public/images/projects/Chat.webp";
import project4 from "@/public/images/projects/E-Commerce.png";

const images = [project1, project2, project3, project4];

const ProjectCard = () => {
    const projects = FeaturedProjects;
    return (
        <div className="flex flex-col gap-10">
            {projects.map((project) => {
                return (
                    <div key={project.name}>
                        <div className="flex flex-col lg:flex-row gap-8 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8">
                            <div className="w-full lg:w-2/5">
                                <Image
                                    src={images[projects.indexOf(project)]}
                                    alt="Food Ordering App"
                                    className="rounded-xl object-cover w-full h-full"
                                    priority
                                />
                            </div>

                            <div className="w-full lg:w-3/5 flex flex-col justify-center gap-4">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {project.name}
                                </h3>

                                <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                                    {project.description.join(" ")}
                                </p>

                                <div>
                                    <p className="text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                                        Technologies
                                    </p>
                                    <ul className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <li
                                                key={tech}
                                                className="px-3 py-1 text-sm rounded-full
                        bg-gray-100 text-gray-700
                        dark:bg-slate-800 dark:text-slate-300"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-4 mt-4">
                                    <button className="px-5 py-2 rounded-lg text-sm font-medium
                    bg-black text-white dark:bg-primary
                    transition hover:opacity-90">
                                        Live Demo
                                    </button>

                                    <button className="px-5 py-2 rounded-lg text-sm font-medium
                    border border-gray-300 dark:border-slate-700
                    text-gray-700 dark:text-slate-300
                    transition hover:bg-gray-100 dark:hover:bg-slate-800">
                                        View Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ProjectCard