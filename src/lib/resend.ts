"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailResponse {
    success?: boolean;
    error?: string;
}

export const sendEmail = async (name: string, email: string, subject: string, message: string): Promise<EmailResponse> => {
    try {
        const { error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['oabdo6063@gmail.com'],
            replyTo: email,
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <div>
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                </div>
            `,
        });

        if (error) {
            console.error('Error sending email:', error);
            return { error: 'Failed to send email' };
        }

        return { success: true };
    } catch (error) {
        console.error('Error in sendEmail:', error);
        return { error: 'An unexpected error occurred' };
    }
};

