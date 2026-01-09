import Bio from "@/components/about/Bio";
import Skills from "@/components/about/Skills";
import Timeline from "@/components/about/Timeline";
import { FileText } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <section className="flex flex-col section-container">
      <Bio />
      <Skills />
      <Timeline />
      {/* CV Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">My Resume</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              View my professional resume or download it for your reference.
            </p>
            <Link 
              href="/cv"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <FileText className="h-5 w-5 mr-2" />
              View Full Resume
            </Link>
          </div>
        </div>
      </section>
    </section>
  )
}

export default AboutPage;