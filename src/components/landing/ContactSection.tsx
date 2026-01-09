"use client";

import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sendEmail } from '@/lib/resend';
import { useRef, useState } from 'react';

type FormState = {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
};

const ContactSection = () => {
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    setFormState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      const result = await sendEmail(name, email, subject, message);
      
      if (result.error) {
        throw new Error(result.error);
      }
      
      setFormState({ isSubmitting: false, isSuccess: true, error: null });
      formRef.current?.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, isSuccess: false }));
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: 'Failed to send message. Please try again later.'
      });
    }
  };
  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you. 
            Fill out the form below or reach out through my socials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-lg p-6 shadow-lg">
            {formState.isSuccess && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            {formState.error && (
              <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-md">
                {formState.error}
              </div>
            )}
            <form className="space-y-6" action={handleSubmit} ref={formRef}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white"
                disabled={formState.isSubmitting}
              >
                {formState.isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">Other Ways to Reach Me</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a href="mailto:oabdo6063@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    oabdo6063@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/omar-abd-el-aleem/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Omar Abd El-Aleem Ahmed
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">GitHub</h4>
                  <a 
                    href="https://github.com/omarabdo1414" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Omar Abdo
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
