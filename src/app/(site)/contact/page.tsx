import ContactSection from '@/components/landing/ContactSection';
import { MapPin, Phone, Mail as MailIcon, FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me for any questions or opportunities',
};

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Cairo, Egypt</p>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Phone</h3>
              <p className="text-muted-foreground">+20 1098433597</p>
              <p className="text-sm text-muted-foreground/80 mt-1">All times</p>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MailIcon className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Email</h3>
              <a href="mailto:oabdo6063@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                oabdo6063@gmail.com
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">I&apos;ll reply within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

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

      <ContactSection />
    </div>
  );
};

export default ContactPage;