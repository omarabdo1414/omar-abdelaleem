import { Skills } from "@/lib/constants";
import SectionTitle from "../common/SectionTitle";

const SkillsSection = () => {
  return (
    <div className='my-15'>
      <div className="grid grid-cols-1 gap-5">
        <SectionTitle title="Skills" />
        <div className='flex items-center justify-center gap-8 flex-wrap py-7 min-h-[180px]'>
          { Skills.map((skill, index) => {
            return (
              <div className="skill-card" key={index}>
                {skill.icon}
                <h3>{skill.name}</h3>
              </div>
            );
          }) }
        </div>
      </div>
    </div>
  )
}

export default SkillsSection;

