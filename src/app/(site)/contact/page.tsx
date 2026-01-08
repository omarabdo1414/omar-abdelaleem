import ContactSection from '@/components/landing/ContactSection';
import { MapPin, Clock, Phone, Mail as MailIcon } from 'lucide-react';

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Card 1 */}
            <div className="bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Cairo, Egypt</p>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+20 100 000 0000</p>
              <p className="text-sm text-muted-foreground/80 mt-1">Mon-Fri, 9am-5pm</p>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MailIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:hello@developer.com" className="text-primary hover:underline">
                hello@developer.com
              </a>
              <p className="text-sm text-muted-foreground/80 mt-1">I&apos;ll reply within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Me On The Map</h2>
          <div className="rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60389540844!2d31.1884234!3d30.0596183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="450" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Location Map"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">What&apos;s the best way to contact you?</h3>
              <p className="text-muted-foreground">
                The quickest way to reach me is through the contact form above or by emailing me directly at hello@developer.com. 
                I typically respond within 24 hours on weekdays.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Do you work with clients internationally?</h3>
              <p className="text-muted-foreground">
                Absolutely! I&apos;ve worked with clients from all over the world. I&apos;m comfortable working across different time zones 
                and can schedule meetings at times that work for both of us.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">What information should I include in my project inquiry?</h3>
              <p className="text-muted-foreground">
                Please include as much detail as possible about your project, including:
              </p>
              <ul className="list-disc pl-5 mt-2 text-muted-foreground">
                <li>Project overview and goals</li>
                <li>Your timeline and budget</li>
                <li>Specific requirements or features</li>
                <li>Any design preferences or examples</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;