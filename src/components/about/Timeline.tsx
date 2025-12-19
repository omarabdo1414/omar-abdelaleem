
import { Experinces } from "@/lib/constants";
import JobCard from "./jobCard";

const Timeline = () => {
  return (
    <div className='my-10'>
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