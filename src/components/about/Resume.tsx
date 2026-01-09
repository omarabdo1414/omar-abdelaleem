'use client';

import Image from 'next/image';

import FirstPage from "@/public/cv/Omar Abdelaleem_1.png"
import SecondPage from "@/public/cv/Omar Abdelaleem_2.png"

const Resume = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">My Resume</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <Image
            src={FirstPage}
            alt="Resume Page 1"
            width={800}
            height={1131}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <Image
            src={SecondPage}
            alt="Resume Page 2"
            width={800}
            height={1131}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
