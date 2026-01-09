'use client';

import Resume from '@/components/about/Resume';
import { Download } from 'lucide-react';

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">My Resume</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Here&apos;s my professional resume. Feel free to download it for your reference.
          </p>
          <a 
            href="/cv/Omar Abdelaleem.pdf" 
            download 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <Download className="h-5 w-5 mr-2" />
            Download CV
          </a>
        </div>
        <Resume />
      </div>
    </div>
  );
}
