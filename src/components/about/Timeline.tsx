
import { Experinces } from "@/lib/constants";
import JobCard from "./jobCard";

import SectionTitle from "../common/SectionTitle";

const Timeline = () => {
  return (
    <div className='my-10'>
      <SectionTitle title="Experince" />
      {Experinces.map((job, index) => (
        <JobCard
          key={index}
          title={job.title}
          company={job.company}
          date={job.date}
          description={job.description}
        />
      ))}
    </div>
  )
}

export default Timeline;