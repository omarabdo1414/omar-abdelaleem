import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiPostgresql } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { TbSql } from "react-icons/tb";

const Skills = () => {

  return (
    <div className='my-15'>
      <div className="grid grid-cols-1 gap-5">
        <div className='flex items-center justify-center py-3 min-h-[30px]'>
          <h2 className='text-5xl font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white'>Skills</h2>
        </div>
        <div className='flex items-center justify-center gap-8 flex-wrap py-7 min-h-[180px]'>
          {/* HTML */}
          <div className="skill-card">
            <FaHtml5 color="#E34F26" size={90} />
            <h3>HTML5</h3>
          </div>

          {/* CSS */}
          <div className="skill-card">
            <FaCss3Alt color="#1572B6" size={90} />
            <h3>CSS3</h3>
          </div>

          {/* Responsive Design */}
          <div className="skill-card">
            <DiResponsive color="#38BDF8" size={90} />
            <h3>Responsive Design</h3>
          </div>

          {/* JavaScript */}
          <div className="skill-card">
            <FaJs color="#F7DF1E" size={90} />
            <h3>JavaScript</h3>
          </div>

          {/* TypeScript */}
          <div className="skill-card">
            <SiTypescript color="#3178C6" size={90} />
            <h3>TypeScript</h3>
          </div>

          {/* React */}
          <div className="skill-card">
            <FaReact color="#61DAFB" size={90} />
            <h3>React.js</h3>
          </div>

          {/* Redux */}
          <div className="skill-card">
            <SiRedux color="#764ABC" size={90} />
            <h3>Redux</h3>
          </div>

          {/* Next.js */}
          <div className="skill-card">
            <SiNextdotjs size={90} />
            <h3>Next.js</h3>
          </div>

          {/* Tailwind CSS */}
          <div className="skill-card">
            <SiTailwindcss color="#38BDF8" size={90} />
            <h3>Tailwind CSS</h3>
          </div>

          {/* Git */}
          <div className="skill-card">
            <FaGitAlt color="#F05032" size={90} />
            <h3>Git</h3>
          </div>

          {/* GitHub */}
          <div className="skill-card">
            <FaGithub size={90} />
            <h3>GitHub</h3>
          </div>

          {/* Node.js */}
          <div className="skill-card">
            <FaNodeJs color="#339933" size={90} />
            <h3>Node.js</h3>
          </div>

          {/* SQL */}
          <div className="skill-card">
            <TbSql color="#4479A1" size={90} />
            <h3>SQL</h3>
          </div>

          {/* PostgreSQL */}
          <div className="skill-card">
            <SiPostgresql color="#336791" size={90} />
            <h3>PostgreSQL</h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills;