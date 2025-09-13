import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInputs = {
    name: string;
    email: string;
    message: string;
};

const Contact: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        setIsSubmitting(true);
        // Placeholder for form submission (e.g., to Netlify Forms, EmailJS)
        console.log("Form data:", data);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            reset();
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1000);
    };

    const socialLinks = [
        { name: 'LinkedIn', url: 'https://linkedin.com/in/ranganathas9696', icon: <LinkedInIcon /> },
        { name: 'GitHub', url: 'https://github.com/Ranganatha-codingaddict', icon: <GitHubIcon /> },
        { name: 'Portfolio', url: 'https://ranganathas-portfolio.netlify.app/', icon: <PortfolioIcon /> },
        { name: 'Email', url: 'mailto:ranganathas9696@gmail.com', icon: <EmailIcon /> },
        { name: 'Phone', url: 'tel:+919019368681', icon: <PhoneIcon /> }
    ];

    return (
        <section id="contact" className="py-20 bg-light-secondary dark:bg-dark-secondary scroll-mt-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-4 text-primary">Get In Touch</h2>
                    <p className="text-center text-gray-600 dark:text-light-secondary mb-12 max-w-xl mx-auto">
                        I'm currently open to new opportunities. Feel free to reach out via the form below or through my social channels.
                    </p>
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 bg-light dark:bg-dark p-8 rounded-lg shadow-xl">
                        <div className="md:w-2/3">
                             {isSubmitted ? (
                                <div className="flex items-center justify-center h-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 p-4 rounded-lg">
                                    <p>Thank you! Your message has been sent successfully.</p>
                                </div>
                            ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                    <input {...register("name", { 
                                        required: "Name is required",
                                        minLength: { value: 2, message: "Name must be at least 2 characters" } 
                                    })} id="name" className="mt-1 block w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 text-dark dark:text-white focus:outline-none focus:ring-primary focus:border-primary" />
                                    {errors.name && <span className="text-red-400 text-sm mt-1">{errors.name.message}</span>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                    <input {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email address" } })} id="email" className="mt-1 block w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 text-dark dark:text-white focus:outline-none focus:ring-primary focus:border-primary" />
                                    {errors.email && <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                    <textarea {...register("message", { 
                                        required: "Message is required",
                                        minLength: { value: 10, message: "Message must be at least 10 characters" }
                                     })} id="message" rows={4} className="mt-1 block w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 text-dark dark:text-white focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                                    {errors.message && <span className="text-red-400 text-sm mt-1">{errors.message.message}</span>}
                                </div>
                                <motion.button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors duration-300 disabled:bg-gray-400" whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(59, 130, 246, 0.4)" }} whileTap={{ scale: 0.95 }}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </form>
                            )}
                        </div>
                        <div className="md:w-1/3">
                            <h3 className="text-xl font-semibold text-dark dark:text-white mb-4">Contact Info</h3>
                            <div className="space-y-4">
                                {socialLinks.map(link => (
                                    <motion.a 
                                      key={link.name} 
                                      href={link.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="flex items-center space-x-3 text-gray-600 dark:text-light-secondary hover:text-primary transition-colors duration-300"
                                      whileHover={{ scale: 1.1, x: 5 }}
                                    >
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </motion.a>
                                ))}
                                 <div className="flex items-center space-x-3 text-gray-600 dark:text-light-secondary pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <LocationIcon />
                                    <span>Bengaluru, India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// SVG Icons
const PhoneIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const EmailIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const LinkedInIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const GitHubIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const PortfolioIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>;
const LocationIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;


export default Contact;