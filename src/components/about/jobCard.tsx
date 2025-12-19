import { FaBriefcase } from "react-icons/fa";
import { Job } from "@/lib/types";

const JobCard = ({ title, company, date, description }: Job) => {
    return (
        // hover:translate-y-[-5px] => Possible
        <div className="grid grid-cols-[1fr_7fr] gap-5 hover:dark:bg-gray-800 hover:bg-gray-200 rounded-4xl transition-all duration-300">
            <div className='flex items-center justify-center py-10 min-h-[180px] relative'>
                {/* Icon */}
                <div className='flex justify-center items-center absolute right-5 top-8 w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full'>
                    <FaBriefcase color="white" size={17} />
                </div>
            </div>
            <div className='exp relative flex items-start flex-col justify-center min-h-[180px]'>
                <div className='w-full flex items-start justify-start pt-1 pb-5'>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{company} | {date}</p>
                    </div>
                </div>
                <div className='w-[80%] flex items-start justify-start'>
                    <p className="text-base text-slate-500 dark:text-slate-400">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default JobCard;