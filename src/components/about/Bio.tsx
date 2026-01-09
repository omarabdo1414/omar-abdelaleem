import Image from "next/image";

import ProfileImage from "@/public/images/tech/DSC_0629.png"
import SectionTitle from "../common/SectionTitle";

const Bio = () => {
  return (
        <div className='my-15 ml-10'>
            <SectionTitle title="About Me" />
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] ">
                <div className='flex items-center justify-center py-5 min-h-[180px]'>
                  <Image src={ProfileImage} alt="Profile" className="object-cover rounded-full w-[200px] h-[200px]" />
                </div>
                <div className='flex py-8 px-10 min-h-[180px]'>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <div className="max-lg:text-center w-full">
                      <p className="text-[25px] font-bold  leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">Hello, I&apos;m Omar Abd El-Aleem</p>
                    </div>
                    <p className="text-[18px] mt-2 text-base font-normal leading-normal text-slate-600 dark:text-[#92a4c9]">I am a passionate front-end developer with a love for creating beautiful and intuitive user interfaces. My journey into tech started with a fascination for how things work, and it has evolved into a career dedicated to building seamless digital experiences.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Bio;